"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var simple_git_1 = require("simple-git");
var fs = require("fs");
var path = require("path");
var git = (0, simple_git_1.simpleGit)().clean(simple_git_1.CleanOptions.FORCE);
var remoteUrl = 'https://github.com/Amsterdam/development-standards';
var localDir = 'docs';
var cloneDir = path.join(localDir, 'latest');
// Cleanup previously cloned files from development-standards repo
var cleanupOldFiles = function () {
    var excludeFiles = ['intro.md'];
    fs.readdirSync(localDir).forEach(function (file) {
        if (!excludeFiles.includes(file)) {
            var filePath = path.join(localDir, file);
            fs.rmSync(filePath, { recursive: true });
        }
    });
};
// Sort and cleanup the cloned repository files
var cleanupRepoFiles = function () {
    var dirs = ['backend', 'cloud', 'frontend', 'standards'];
    var renameDirs = { standards: 'general' };
    // For each directory remove the README and move the directory up a level
    dirs.forEach(function (dir) {
        var _a;
        var readmePath = path.join(cloneDir, "".concat(dir, "/README.md"));
        // We don't want any README.md files
        if (fs.existsSync(readmePath)) {
            fs.rmSync(path.join(cloneDir, "".concat(dir, "/README.md")));
        }
        // TODO test markdown compilation for each file
        var targetDir = (_a = renameDirs[dir]) !== null && _a !== void 0 ? _a : dir;
        fs.renameSync(path.join(cloneDir, dir), path.join(localDir, targetDir));
    });
    // Erase repo directory
    fs.rmSync(cloneDir, { recursive: true });
};
if (fs.existsSync(localDir)) {
    cleanupOldFiles();
}
// Clone the latest development-standards repo
git.clone(remoteUrl, cloneDir)
    .then(function () { return cleanupRepoFiles(); })
    .catch(function (err) { return console.error('failed: ', err); });
