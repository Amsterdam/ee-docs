import { simpleGit, CleanOptions } from 'simple-git';
import * as fs from 'fs';
import * as fsPromises from 'fs/promises';
import * as path from 'path';
import { compile } from '@mdx-js/mdx';
import { remark } from 'remark';
import remarkMdx from 'remark-mdx';
// TODO cleanup function naming
// TODO replace fs with fs promises where possible/logical
// TODO output invalid files with reason
// TODO tests
const remoteUrl = 'git@github.com:Amsterdam/development-standards.git';
const localDir = 'docs';
const cloneDir = path.join(localDir, 'latest');
async function cloneAndCheckout(repoUrl, branchName = 'main') {
    const git = simpleGit().clean(CleanOptions.DRY_RUN);
    try {
        // Clone the repository and change the current directory otherwise simple-git
        // commands will run on this application's git config
        await git.clone(repoUrl, cloneDir).cwd({ path: cloneDir });
        if (branchName !== 'main') {
            // Change to the desired branch
            await git.checkout(branchName);
        }
        await cleanupImportedFiles();
        console.log('\x1b[36m', 'Docs imported!');
    }
    catch (error) {
        console.error('Error occurred:', error);
    }
}
// Cleanup previously cloned files from development-standards repo
// const cleanupOldFiles = () => {
//   const excludeFiles = ['intro.md', 'projects'];
//   fs.readdirSync(localDir).forEach((file) => {
//     if (!excludeFiles.includes(file)) {
//       const filePath = path.join(localDir, file);
//       fs.rmSync(filePath, { recursive: true });
//     }
//   });
// };
const validateFile = async (filePath) => {
    try {
        const fileContent = await fsPromises.readFile(filePath, 'utf-8');
        const processor = remark().use(remarkMdx);
        await processor.process(fileContent);
        await compile(fileContent);
        return true;
    }
    catch (error) {
        // TODO return error msg
        return false;
        console.log(`Error validating Markdown/MDX file ${filePath}:`, error.message);
        console.log(error);
    }
};
// https://mdxjs.com/playground/
const validateFiles = async (dir) => {
    const processed = {
        valid: [],
        invalid: [],
    };
    const srcDir = path.join(cloneDir, dir);
    if (fs.existsSync(srcDir)) {
        // Get files from directory and loop through them
        const fileNames = await fsPromises.readdir(srcDir);
        for (const fileName of fileNames) {
            const srcFilePath = path.join(srcDir, fileName);
            const isFileValid = await validateFile(srcFilePath);
            if (isFileValid) {
                // console.log('valid', srcFile);
                processed.valid.push(fileName);
            }
            else {
                processed.invalid.push(fileName);
            }
        }
    }
    return processed;
};
// Sort and cleanup the cloned repository files
const cleanupImportedFiles = async () => {
    const dirs = ['backend', 'cloud', 'frontend', 'general'];
    // This is currently empty but present in case a directory name requires changing on import
    // For example {general: 'common'} will rename the `general` dir to `common`
    const renameDirs = {};
    // Collect any invalid files to output at the end
    let skippedFiles = [];
    for (const dir of dirs) {
        const files = await validateFiles(dir);
        // Copy each valid file
        for (const file of files.valid) {
            // Create dir if it doesn't exist
            const targetDir = renameDirs[dir]
                ? path.join(localDir, renameDirs[dir])
                : path.join(localDir, dir);
            if (!fs.existsSync(targetDir)) {
                fs.mkdirSync(targetDir);
            }
            await fsPromises.rename(path.join(cloneDir, dir, file), path.join(targetDir, file));
        }
        // TODO log invalid file(s)
        skippedFiles = [...skippedFiles, ...files.invalid];
    }
    if (skippedFiles) {
        console.log('The following files were skipped due to invalid content', skippedFiles);
    }
    // Erase repo directory
    fs.rmSync(cloneDir, { recursive: true });
};
// if (fs.existsSync(localDir)) {
//   cleanupOldFiles();
// }
// Clone the latest development-standards repo
cloneAndCheckout(remoteUrl, 'feature/md-validation');
