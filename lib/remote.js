const fs = require('fs');
const path = require('path');
var argv = require('minimist')(process.argv.slice(2));
var userHome = require('user-home');

argv.loc = argv.loc || path.join(userHome, '/Archetype02');

class FileLinks {
  constructor(){
    this.data = {};
    this.path = `${argv.loc}/feed.json`;
    this.readData();
  }

  getData() {
    return this.data;
  }

  setData(newdata){
    // write some file
    // this.readData o this.data = la cosa que guardaste
  }

  readData(){
    fs.readFile(this.path, 'utf8', (err, links) => this.data = JSON.parse(links));
  }
}

const links = new FileLinks();

module.exports = links;
