let colors = require('colors');
let worker = require('../../lib/worker/worker');
let tap = require('tape');
let config = require('../config');
let {createTestUsers} = require('../helpers');
let hookM = require('../../lib/resources/hook');
let hooks = require('microcule-examples');
let http = require('axios');
var baseURL = config.baseUrl;

const util = require ('util')

var r = require('../lib/helpers/_request');
var examples = require('microcule-examples');
var async = require('async');

let user = require('../../lib/resources/user');
const createUser = util.promisify(user.create);
const find = util.promisify(user.find);


let echoTest = async() =>{
  //Start Worker node 
  console.log('Starting Worker'.green);
  let [err, app] = await worker.start({});
  if (err) {
    console.log('worker error'.red);
    process.exit(-1);
  }
  console.log('worker started'.blue, app.server.address());

  //Create test users 
  console.log('Creating test users'.green);
  tap.test('Create Users', async(t)=>{
    try{
      let created = await createUser({
        name: 'examples',
        email: 'examples@marak.com',
      });
      if(created.id){
        t.pass('user created');
      }
    }catch(err){
      t.err(err, 'no error');
      console.log(err);
    }
  });
  console.log('Test users Created'.blue);
  
  //Delete test users 
  // //Create Webhook Echo 
  // console.log('Creating Echo service'.green);
  // var newHook = hooks.services['echo'];
  // if (typeof newHook.mschema === 'object' && Object.keys(newHook.mschema).length > 0) {
  //   newHook.mschemaStatus = 'enabled';
  // }

  // hookM.create(newHook, (err, res)=>{
  //   if(err) {
  //     throw err;
  //   }
  //   console.log('created'.green, newHook.name);
  //   // iterate
  // });

  //  let echoHook = await hookM.create(newHook, function(err, res){
  // if(err) {
  //   throw err
  // }
  // console.log('created'.green, newHook.name)
  //  });

  //Run Webhook Tests
  // tap.test('get the echo hook', async(t)=>{
  //   try{
  //     let getRes = await http.get(`${baseURL}/examples/echo`);

  //   }catch(err){
  //     t.error(err, 'did not error');
  //   }
  //   t.end();
  // });
  //Run Cleanup 

  //Destroy user 

  //Destroy webhook

  //process.exit()

};

echoTest();