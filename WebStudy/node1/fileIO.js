// var path = '/foo/bar/baz/asdf/quux.html';
// dirname(path) = > foo/bar/baz/asdf
// basename(path) => quux
// extname(path) => .html

// ***************** Using parse *************************
// var info = path.parse('/home/user/dir/file.txt')
// will return obj of root: dir: base: ext: name:
// info.dir, info.base, info.name

// **************** Create path ********************
// {root: dir: base: ext: name } obj 
var pathUtil = require('path');
var parsed = pathUtil.parse('/home/jhpp114/Desktop/WebStudy/node1/fileIO.js');
console.log(parsed);
console.log(parsed.base);
console.log(parsed.ext);

// ***************** File System ********************
var fs = require('fs');
// ********Core function: create/read/write/delete file & dir
// async
fs.readFile('./stderr.log', 'utf-8', function(err, data) {
    if (err) {
        console.error("File Read Error: ", err);
        return;
    }
    console.log('File: ', data);
});
// sync
try {
    var data = fs.readFileSync('./stder.log', 'utf-8');
    console.log(data);
} catch(error) {
    console.error('Error on reading file', error);
}
