import { simpleGit, CleanOptions, SimpleGit } from 'simple-git';
import * as fs from 'fs';
import * as path from 'path';
import { compile } from '@mdx-js/mdx';
import { remark } from 'remark';
import remarkMdx from 'remark-mdx';
import { VFile } from 'vfile';
import { reporter } from 'vfile-reporter';
import { VFileMessage } from 'vfile-message';

const remoteUrl = 'git@github.com:Amsterdam/development-standards.git';
const localDir = 'docs';
const cloneDir = path.join(localDir, 'latest');

// Any files that fail validation will be logged here
const invalidFiles: { [key: string]: string } = {};

// export async function cloneAndCheckout(repoUrl: string, branchName = 'main'): Promise<void> {
export const cloneAndCheckout = async (repoUrl: string, branchName = 'main'): Promise<void> => {
  const git: SimpleGit = simpleGit().clean(CleanOptions.DRY_RUN);

  try {
    // Clone the repository and change the current directory otherwise simple-git
    // commands will run based on this application's git config
    await git.clone(repoUrl, cloneDir).cwd({ path: cloneDir });

    if (branchName !== 'main') {
      // Change to the desired branch
      await git.checkout(branchName);
    }
  } catch (error) {
    console.error('Error occurred:', error);
  }
};

interface FileValidationReport {
  valid: boolean;
  error?: string | null | undefined;
}

/**
 * Check that a file passes the markdown + mdx validation
 * @see https://mdxjs.com/playground/ for an in-browser validation alternative
 *
 * @param filePath string
 * @returns FileValidationReport
 */
const validateFile = async (filePath: string): Promise<FileValidationReport> => {
  const fileContent = await fs.promises.readFile(filePath, 'utf-8');
  const vfile = new VFile({ path: filePath, contents: fileContent });

  try {
    const processor = remark().use(remarkMdx);

    await processor.process(vfile);
    await compile(fileContent);

    return { valid: true };
  } catch (error) {
    // Use vfile to create a human readable error report
    const vfileError = error as VFileMessage;
    vfile.message(vfileError.message, vfileError.place);

    return { valid: false, error: reporter([vfile]) };
  }
};

/**
 * Get the valid markdown filenames and distinguish any invalid files
 *
 * @param dir string
 * @returns string[] of valid markdown filenames
 */
const validateFiles = async (dir: string): Promise<string[]> => {
  const processed: string[] = [];
  const srcDir = path.join(cloneDir, dir);

  if (fs.existsSync(srcDir)) {
    // Get files from directory and loop through them
    const fileNames = await fs.promises.readdir(srcDir);

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

/**
 * Process the imported repository markdown files and save accordingly
 */
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

      await fs.promises.rename(path.join(cloneDir, dir, file), path.join(targetDir, file));
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

export async function app() {
  // Clone the latest development-standards repo
  await cloneAndCheckout(remoteUrl, 'feature/md-validation')
    .then(async () => {
      await saveImportedDocs();
    })
    .then(outputResults);
}

app().catch(console.error);
