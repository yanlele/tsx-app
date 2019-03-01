const path = require('path');

const currentPath = process.cwd();

const app = path.resolve(currentPath, 'app');
const entry = path.resolve(app, 'index');
const dist = path.resolve(currentPath, 'build');
const assets = path.join(dist, 'assets');
const html = path.resolve(currentPath, 'public/index.html');

module.exports = {
    app,
    entry,
    dist,
    assets,
    html
};
