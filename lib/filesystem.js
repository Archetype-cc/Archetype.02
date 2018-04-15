const fs = require('fs');
const path = require('path');
var argv = require('minimist')(process.argv.slice(2));
var userHome = require('user-home');
const { ipcMain } = require('electron');

let date = Date.now();

let json = {
  "Archetype": [{
    "name": "Archetype",
    "dat": "dat://archetype.cc",
    "version": null,
    "timestamp": null
  }]
}



// Argv
argv.loc = argv.loc || path.join(userHome, '/Archetype');
// argv.input = argv.input || path.join(userHome, '/Archetype/' + dir + "/" + initFile);
// argv.lockfile = argv.lockfile || path.join(userHome, '/Archetype/' + dir + "/" +  lockFile);


const mkArchetypeDir = () => {
  return new Promise(function(resolve, reject){
    fs.open(argv.loc,'r',function(err,fd){
      if (err && err.code=='ENOENT') {
        console.log('crating');
        fs.mkdir(argv.loc, function(err){console.log(err);});
        err ? reject(err) : resolve(data);
        // fs.writeFile(`${argv.loc}/feed.json`, JSON.stringify(data), function(err){console.log(err);});
      }
    });
  });
}

const writeJson = () => {
  console.log('writing');
  setTimeout(function(){
    fs.writeFile(`${argv.loc}/feed.json`, JSON.stringify(json), function(err){console.log(err);});
   }, 3000);
}






module.exports = { mkArchetypeDir, writeJson  }
