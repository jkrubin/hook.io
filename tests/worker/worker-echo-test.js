let colors = require('colors');
let user = require('../../lib/resources/user')
let worker = require('../../lib/worker/worker');
let tap = require("tape");
let config = require('../config');
let {createTestUsers} = require('../helpers')

var r = require('../lib/helpers/_request');
var baseURL = config.baseUrl;
var examples = require('microcule-examples');
var async = require('async');

//Start Worker node 
worker.start({}, function (err, app) {
  if (err) {
    console.log('worker error'.red);
    throw err;
  }
  console.log('worker started'.blue, app.server.address());
});

//Create test users 
try{
	createTestUsers()
}catch(err){
	console.log(err)
}
//Create Webhook Echo 

//Run Webhook Tests

//Run Cleanup 

	//Destroy user 

	//Destroy webhook

//process.exit()