import { simpleGit, CleanOptions, SimpleGit } from 'simple-git';
import * as fs from 'fs';
import * as fsPromises from 'fs/promises';
import * as path from 'path';
import { compile } from '@mdx-js/mdx';
import { remark } from 'remark';
import remarkMdx from 'remark-mdx';
import { VFile } from 'vfile';
import { reporter } from 'vfile-reporter';
import { VFileMessage } from 'vfile-message';

// TODO cleanup function naming
// TODO replace fs with fs promises where possible/logical
// TODO comment
// TODO tests
const remoteUrl = 'git@github.com:Amsterdam/development-standards.git';
const localDir = 'docs';
const cloneDir = path.join(localDir, 'latest');

const invalidFiles: { [key: string]: string } = {};

async function cloneAndCheckout(repoUrl: string, branchName = 'main'): Promise<void> {
  const git: SimpleGit = simpleGit().clean(CleanOptions.DRY_RUN);

  try {
    // Clone the repository and change the current directory otherwise simple-git
    // commands will run on this application's git config
    await git.clone(repoUrl, cloneDir).cwd({ path: cloneDir });

    if (branchName !== 'main') {
      // Change to the desired branch
      await git.checkout(branchName);
    }
  } catch (error) {
    console.error('Error occurred:', error);
  }
}

interface FileValidationReport {
  valid: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error?: string | null | undefined;
}

const validateFile = async (filePath: string): Promise<FileValidationReport> => {
  const fileContent = await fsPromises.readFile(filePath, 'utf-8');
  const vfile = new VFile({ path: filePath, contents: fileContent });

  try {
    const processor = remark().use(remarkMdx);

    await processor.process(vfile);
    await compile(fileContent);

    return { valid: true };
  } catch (error) {
    const vfileError = error as VFileMessage;
    vfile.message(vfileError.message, vfileError.place);

    return { valid: false, error: reporter([vfile]) };
  }
};

// https://mdxjs.com/playground/
// Returns an array of the valid markdown filenames
const validateFiles = async (dir: string): Promise<string[]> => {
  const processed: string[] = [];
  const srcDir = path.join(cloneDir, dir);

  if (fs.existsSync(srcDir)) {
    // Get files from directory and loop through them
    const fileNames = await fsPromises.readdir(srcDir);

    for (const fileName of fileNames) {
      const srcFilePath = path.join(srcDir, fileName);
      const { valid, error } = await validateFile(srcFilePath);

      if (valid) {
        processed.push(fileName);
      } else if (error) {
        invalidFiles[fileName] = error;
      }
    }
  }

  return processed;
};

const saveImportedDocs = async () => {
  // The directories in the `development-standards` repo that we are interested in
  const dirs = ['backend', 'cloud', 'frontend', 'general'];

  // This is currently empty but present in case a directory name requires changing on import
  // For example {general: 'common'} will rename the `general` dir to `common`
  const renameDirs: { [key: string]: string } = {};

  for (const dir of dirs) {
    const validFiles = await validateFiles(dir);

    // Copy each valid file
    for (const file of validFiles) {
      const targetDir = renameDirs[dir]
        ? path.join(localDir, renameDirs[dir])
        : path.join(localDir, dir);

      // Create dir if it doesn't exist
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir);
      }

      await fsPromises.rename(path.join(cloneDir, dir, file), path.join(targetDir, file));
    }
  }

  // Erase repo directory
  fs.rmSync(cloneDir, { recursive: true });
};

const outputResults = () => {
  if (invalidFiles) {
    console.error('⛔ The following documents were skipped due to invalid markup:\n');

    for (const value of Object.values(invalidFiles)) {
      console.error(value);
    }
  }

  console.log('\x1b[36m', '✅ Docs imported!', '\x1b[0m');
};

// Clone the latest development-standards repo
cloneAndCheckout(remoteUrl, 'feature/md-validation')
  .then(async () => {
    await saveImportedDocs();
  })
  .then(outputResults);
