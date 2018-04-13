const fs = require('fs');
const path = require('path');
var argv = require('minimist')(process.argv.slice(2));
var userHome = require('user-home');
const { ipcMain } = require('electron');

let date = Date.now();

let data = {
  "Archetypes": [{
    "name": "Archetype",
    "dat": "dat://archetype.cc",
    "category": "Archetype",
    "version": null,
    "timestamp": null
  }]
}



// Argv
argv.loc = argv.loc || path.join(userHome, '/Archetype02');
// argv.input = argv.input || path.join(userHome, '/Archetype/' + dir + "/" + initFile);
// argv.lockfile = argv.lockfile || path.join(userHome, '/Archetype/' + dir + "/" +  lockFile);


const mkArchetypeDir = () => {
  fs.open(argv.loc,'r',function(err,fd){
    if (err && err.code=='ENOENT') {
      fs.mkdir(argv.loc, function(err){console.log(err);});
      fs.writeFile(`${argv.loc}/feed.json`, JSON.stringify(data), function(err){console.log(err);});
    }
  });
}





module.exports = { mkArchetypeDir  }
