#!/usr/bin/env node

var yo = function(param){
  console.log("inner yo!", param);
  return "returned yo";
};
module.exports = yo;
