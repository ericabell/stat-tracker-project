let Activity = require('../models/activities');

let ObjectId = require('mongodb').ObjectId

function findAllActivities () {
  let p = new Promise( (resolve, reject) => {
    Activity.find().distinct('activityName')
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

function getAllByActivityName(activityName) {
  let p = new Promise( (resolve, reject) => {
    console.log(activityName);
    Activity.find({activityName: activityName})
      .then( (docs) => {
        resolve({status: 'success', data: docs});
      })
      .catch( (err) => {
        reject(err);
      })
  })

  return p;
}

function updateActivityByName(activityName, updatedActivity) {
  let p = new Promise( (resolve, reject) => {
    console.log(updatedActivity);
    Activity.updateMany({activityName: activityName},
        {
          $set: {activityName: updatedActivity.activityName,
                 statisticName: updatedActivity.statisticName}
        }
    )
      .then( (docs) => {
          resolve({status: 'success', data: docs});
      })
      .catch( (err) => {
        reject(err);
      })
  })

  return p;
}

function deleteActivityByName( activityName ) {
  let p = new Promise( (resolve, reject) => {
    Activity.find({activityName: activityName}).remove()
      .then( (docs) => {
          resolve({status: 'success', data: docs});
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
  getAllByActivityName: getAllByActivityName,
  updateActivityByName: updateActivityByName,
  deleteActivityByName: deleteActivityByName,
}

module.exports = ActivityController;
