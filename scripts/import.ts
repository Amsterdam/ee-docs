import { simpleGit, SimpleGit, CleanOptions } from 'simple-git';
import * as fs from 'fs';
import * as path from 'path';

const remoteUrl = 'https://github.com/Amsterdam/development-standards';
const localDir = 'docs';
const cloneDir = path.join(localDir, 'latest');

async function cloneAndCheckout(repoUrl: string, branchName = 'main'): Promise<void> {
  const git: SimpleGit = simpleGit().clean(CleanOptions.FORCE);

  try {
    // Clone the repository and change the current directory otherwise simple-git
    // commands will run on this application's git config
    await git.clone(repoUrl, cloneDir).cwd({ path: cloneDir });

    // Change to the desired branch
    await git.checkout(branchName);

    cleanupRepoFiles();

    console.log('\x1b[36m', 'Docs imported!');
  } catch (error) {
    console.error('Error occurred:', error);
  }
}

// Cleanup previously cloned files from development-standards repo
const cleanupOldFiles = () => {
  const excludeFiles = ['intro.md'];

  fs.readdirSync(localDir).forEach((file) => {
    if (!excludeFiles.includes(file)) {
      const filePath = path.join(localDir, file);
      fs.rmSync(filePath, { recursive: true });
    }
  });
};

// Sort and cleanup the cloned repository files
const cleanupRepoFiles = () => {
  const dirs = ['backend', 'cloud', 'frontend', 'general'];
  // Below is empty but left in case a directory name requires changing on import
  const renameDirs: { [key: string]: string } = {};

  // For each directory remove the README and move the directory up a level
  dirs.forEach((dir) => {
    if (fs.existsSync(path.join(cloneDir, dir))) {
      const readmePath = path.join(cloneDir, `${dir}/README.md`);

      // We don't want any README.md files
      if (fs.existsSync(readmePath)) {
        fs.rmSync(path.join(cloneDir, `${dir}/README.md`));
      }

      // TODO test markdown compilation for each file
      const targetDir = renameDirs[dir] ?? dir;
      fs.renameSync(path.join(cloneDir, dir), path.join(localDir, targetDir));
    }
  });

  // Erase repo directory
  fs.rmSync(cloneDir, { recursive: true });
};

if (fs.existsSync(localDir)) {
  cleanupOldFiles();
}

// Clone the latest development-standards repo
cloneAndCheckout(remoteUrl, 'develop');
