let Activity = require('../models/activities');

let ObjectId = require('mongodb').ObjectId

function findAllActivities () {
  let p = new Promise( (resolve, reject) => {
    Activity.find({})
      .then( (doc) => {
        resolve({status: 'success', data: doc});
      })
      .catch( (err) => {
        reject(err);
      })
  })

  return p;
}

function createNewActivity(newActivity) {
  let p = new Promise( (resolve, reject) => {
    console.log(newActivity);
    Activity.create(newActivity)
      .then( (doc) => {
        resolve({status: 'success', data: doc});
      })
      .catch( (err) => {
        reject(err);
      })
  })

  return p;
}

let ActivityController = {
  findAllActivities: findAllActivities,
  createNewActivity: createNewActivity,
}

module.exports = ActivityController;
