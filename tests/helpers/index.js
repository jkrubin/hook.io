let user = require('../../lib/resources/user')
const {promisify} = require ('util')

let createTestUsers = async () =>{
  return promisify(user.create({ name: 'examples', email: 'examples@marak.com' }, function (err, userExamples) {
      user.create({ name: 'david', email: 'david@marak.com', paidStatus: 'paid' }, function (err, userDavid) {
        userDavid.password = "asd";
        user.update(userDavid, function (err, david) {
          return { examples: userExamples, david: david };
        })
      })
    }))

}

module.exports = {createTestUsers}