"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var simple_git_1 = require("simple-git");
var fs = require("fs");
var path = require("path");
var remoteUrl = 'git@github.com:Amsterdam/development-standards.git';
var localDir = 'docs';
var cloneDir = path.join(localDir, 'latest');
function cloneAndCheckout(repoUrl_1) {
    return __awaiter(this, arguments, void 0, function (repoUrl, branchName) {
        var git, error_1;
        if (branchName === void 0) { branchName = 'main'; }
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    git = (0, simple_git_1.simpleGit)().clean(simple_git_1.CleanOptions.FORCE);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    // Clone the repository and change the current directory otherwise simple-git
                    // commands will run on this application's git config
                    return [4 /*yield*/, git.clone(repoUrl, cloneDir).cwd({ path: cloneDir })];
                case 2:
                    // Clone the repository and change the current directory otherwise simple-git
                    // commands will run on this application's git config
                    _a.sent();
                    // Change to the desired branch
                    return [4 /*yield*/, git.checkout(branchName)];
                case 3:
                    // Change to the desired branch
                    _a.sent();
                    cleanupRepoFiles();
                    console.log('\x1b[36m', 'Docs imported!');
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    console.error('Error occurred:', error_1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
// Cleanup previously cloned files from development-standards repo
var cleanupOldFiles = function () {
    var excludeFiles = ['intro.md', 'projects'];
    fs.readdirSync(localDir).forEach(function (file) {
        if (!excludeFiles.includes(file)) {
            var filePath = path.join(localDir, file);
            fs.rmSync(filePath, { recursive: true });
        }
    });
};
// Sort and cleanup the cloned repository files
var cleanupRepoFiles = function () {
    var dirs = ['backend', 'cloud', 'frontend', 'general'];
    // Below is empty but left in case a directory name requires changing on import
    var renameDirs = {};
    // For each directory remove the README and move the directory up a level
    dirs.forEach(function (dir) {
        var _a;
        if (fs.existsSync(path.join(cloneDir, dir))) {
            var readmePath = path.join(cloneDir, "".concat(dir, "/README.md"));
            // We don't want any README.md files
            if (fs.existsSync(readmePath)) {
                fs.rmSync(path.join(cloneDir, "".concat(dir, "/README.md")));
            }
            // TODO test markdown compilation for each file
            var targetDir = (_a = renameDirs[dir]) !== null && _a !== void 0 ? _a : dir;
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
