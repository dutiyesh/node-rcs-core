const fs = require('fs');
const rcs = require('rcs-core');

// fill the libraries
// do not care about attribute selectors, as it is just for '.no-gutter'
rcs.fillLibraries(fs.readFileSync('./before/bootstrap.css', 'utf8'), { ignoreAttributeSelectors: true });

// replace the data
const cssData = rcs.replace.css(fs.readFileSync('./before/bootstrap.css', 'utf8'));
const jsData = rcs.replace.js(fs.readFileSync('./before/bootstrap.js', 'utf8'));
const htmlData = rcs.replace.any(fs.readFileSync('./before/index.html', 'utf8'));

// write new files
fs.writeFileSync('./after/bootstrap.replaced.css', cssData);
fs.writeFileSync('./after/bootstrap.replaced.js', jsData);
fs.writeFileSync('./after/index.replaced.html', htmlData);
