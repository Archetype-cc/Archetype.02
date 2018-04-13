var fs = require('fs');
const { exec } = require('child_process');
const path = require('path');
var argv = require('minimist')(process.argv.slice(2));
var userHome = require('user-home');
var ram = require('random-access-memory')
var Dat = require('dat-node');


argv.loc = argv.loc || path.join(userHome, '/Archetype02/feed.json');


let feed = require(argv.loc)


const loop = () => {
 return new Promise(function(resolve, reject) {

   Object.keys(feed).map(cat => {
     feed[cat].map(l => {
       let date = Date.now();
       if(l.timestamp < date){
         l.timestamp = date;
       } else if (l.timestamp === null) {
         l.timestamp = date;
       }

       // console.log(l.version);

       Dat(ram, {key: l.dat}, function (e, dat) {
         if (e) throw e

         var network = dat.joinNetwork()
         network.once('connection', function () {
           console.log('connected');

           const archive = dat.archive
           const stats = dat.trackStats()

           dat.trackStats()

           setTimeout(function () {
             console.log(l.version, dat.stats.get().version );
             // console.log(l.version);
             // let currentVersion = dat.stats.get().version;
             // let lastVersion = l.version;
             // let didChange = l.updated;

             if(l.version < dat.stats.get().version ) {
               l.version = dat.stats.get().version;
               // console.log("updated: ", l.version);
               l.updated = true;
             } else if (l.version === null) {
               l.version = dat.stats.get().version;
             } else {
               l.updated = false;
             }

             dat.leave()
             dat.close()
             resolve("Stuff worked!");
           }, 5000)
         })
       })
     })
   })

  });
}

const write = () => {
  console.log("write json");
  fs.writeFile(argv.loc, JSON.stringify(feed));
  // console.log(feed);
}





module.exports = { loop, write  };


// loop().then(write)
