import { simpleGit, SimpleGit, CleanOptions } from 'simple-git';
import * as fs from 'fs';
import * as path from 'path';

const git: SimpleGit = simpleGit().clean(CleanOptions.FORCE);
const remoteUrl = 'https://github.com/Amsterdam/development-standards';
const localDir = 'docs';
const cloneDir = path.join(localDir, 'latest');

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
  const dirs = ['backend', 'cloud', 'frontend', 'standards'];
  const renameDirs: { [key: string]: string } = { standards: 'general' };

  // For each directory remove the README and move the directory up a level
  dirs.forEach((dir) => {
    const readmePath = path.join(cloneDir, `${dir}/README.md`);

    // We don't want any README.md files
    if (fs.existsSync(readmePath)) {
      fs.rmSync(path.join(cloneDir, `${dir}/README.md`));
    }

    // TODO test markdown compilation for each file
    const targetDir = renameDirs[dir] ?? dir;
    fs.renameSync(path.join(cloneDir, dir), path.join(localDir, targetDir));
  });

  // Erase repo directory
  fs.rmSync(cloneDir, { recursive: true });
};

if (fs.existsSync(localDir)) {
  cleanupOldFiles();
}

// Clone the latest development-standards repo
git
  .clone(remoteUrl, cloneDir)
  .then(() => cleanupRepoFiles())
  .catch((err) => console.error('failed: ', err));
