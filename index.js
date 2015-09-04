#!/usr/bin/env node
var yo = require('./yo.js');

var yoyo = yo("param yo!");

console.log("log yo!", yoyo.yo);
console.log("log yoyo!", yoyo.yoyo.yoyo());
console.log("get param yoyo!", yoyo.yoyo.getParam());
