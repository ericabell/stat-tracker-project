let Activity = require('../models/activities');

let ObjectId = require('mongodb').ObjectId

function findAllActivities () {
  let p = new Promise( (resolve, reject) => {
    Activity.find().distinct('activityName')
      .then( (docs) => {
        let activityWithLinks = docs.map( (doc) => {
          return {name: doc, url: `http://localhost:3000/activities/${doc}`}
        })
        resolve({status: 'success', data: activityWithLinks});
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

function logActivityData( activityName, date_time, statisticValue ) {
  let p = new Promise( (resolve, reject) => {
    console.log(activityName);
    Activity.findOne({activityName: activityName})
      .then( (doc) => {
        Activity.create({activityName: activityName,
                         date_time: new Date(date_time),
                         statisticName: doc.statisticName,
                         statisticValue: statisticValue})
          .then( (docs) => {
              resolve({status: 'success', data: docs});
          })
          .catch( (err) => {
            reject(err);
          })
      })

  })

  return p;

}

function deleteActivityForDay(activityName, dayToDelete) {
  let p = new Promise( (resolve, reject) => {
    let startOfDay = dayToDelete.setHours(0,0,0,0);
    let endOfDay = dayToDelete.setHours(23,59,59,999);

    Activity.find({activityName: activityName, date_time: { $gt: startOfDay, $lt: endOfDay}}).remove()
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
  logActivityData: logActivityData,
  deleteActivityForDay: deleteActivityForDay,
}

module.exports = ActivityController;
