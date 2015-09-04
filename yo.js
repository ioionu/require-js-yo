#!/usr/bin/env node
var yoyo = require('./yoyo.js');

console.log("inner yo!");

var yo = function(param){
  console.log(param);

  return {
    yo: "yo",
    yoyo: yoyo(param)
  };
};
module.exports = yo;
