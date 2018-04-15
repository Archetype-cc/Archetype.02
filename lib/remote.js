const fs = require('fs');
const path = require('path');
var argv = require('minimist')(process.argv.slice(2));
var userHome = require('user-home');

argv.loc = argv.loc || path.join(userHome, '/Archetype');

let counter = 0;

class FileLinks {
  constructor(){
    this.data = {};
    this.counter = 0;
    this.path = `${argv.loc}/feed.json`;
    this.readData().then(data => this.data = JSON.parse(data))
  }

  getData() {
    return this.data;
  }

  setData(newdata){
    // write some file
    // this.readData o this.data = la cosa que guardaste
    console.log("----------------------");
    this.counter =  counter++;
    return this.counter;


  }

  // readData(){
  //   fs.readFile(this.path, 'utf8', (err, links) => this.data = JSON.parse(links));
  //   console.log(this.data.Design);
  //   return this.data;
  // }

  readData() {
    return new Promise(function(resolve, reject){
      fs.readFile(`${argv.loc}/feed.json`, 'utf8', (err, data) => {
          err ? reject(err) : resolve(data);
      });
    });
  }

  writeData(data) {
    return new Promise(function(resolve, reject){
      fs.writeFile(`${argv.loc}/feed.json`, JSON.stringify(data));
      err ? reject(err) : resolve(data);
    });
  }

}

const links = new FileLinks();

module.exports = { links };
