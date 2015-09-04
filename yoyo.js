#!/usr/bin/env node
console.log("outer yoyo");

var yoyo = function(param){
  console.log("inner yoyo");
  return {
    yoyo: function(){ return "yoyoyoyo"},
    getParam: function(){return param}
  };

};

module.exports = yoyo;
