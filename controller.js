'use-strict';

var response = require('./res');

exports.index = function(req,res){
    response.ok("hello wolrd",res)
}