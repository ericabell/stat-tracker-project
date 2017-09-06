var express = require('express');
var router = express.Router();

let ActivityController = require('../controllers/ActivityController');

// ITEMS ROUTES

router.get('/activities', function(req, res, next) {
// Show a list of all activities I am tracking, and links to their individual pages
  ActivityController.findAllActivities()
    .then( (result) => {
      res.json(result);
    })
});

router.post('/activities', function(req, res, next) {
// Create a new activity for me to track.
  let activityName = req.body.activity;
  let date_time = new Date();
  let statisticName = req.body.statisticName;
  let statisticValue = req.body.statisticValue;

  let newActivity = {
    activityName: activityName,
    date_time: date_time,
    statisticName: statisticName,
    statisticValue: statisticValue
  }

  ActivityController.createNewActivity(newActivity)
    .then( (result) => {
      res.json(result);
    })
});

router.get('/activities/:name', function(req, res, next) {
// Show information about one activity I am tracking, and give me the data I have recorded for that activity.
  let activityName = decodeURI(req.params.name);

  ActivityController.getAllByActivityName(activityName)
    .then( (result) => {
      res.json(result);
    })
    .catch( (err) => {
      res.send(err);
    })
});

router.put('/activities/:name', function(req, res, next) {
// Update one activity I am tracking, changing attributes such as name or type. Does not allow for changing tracked data.
  let activityName = decodeURI(req.body.activity);

  let statisticName = req.body.statisticName;

  let updatedActivity = {
    activityName: req.body.activityName,
    statisticName: statisticName,
  }

  ActivityController.updateActivityByName(activityName, updatedActivity)
    .then( (result) => {
      res.json(result);
    })
    .catch( (err) => {
      res.send(err);
    })
});

router.delete('/activities/:name', function(req, res, next) {
// Delete one activity I am tracking. This should remove tracked data for that activity as well.
  let activityName = decodeURI(req.params.name);

  console.log(activityName);
  ActivityController.deleteActivityByName( activityName )
    .then( (result) => {
      res.json(result);
    })
    .catch( (err) => {
      res.send(err);
    })

});

router.post('/activities/:id/stats', function(req, res, next) {
// Add tracked data for a day. The data sent with this should include the day tracked. You can also override the data for a day already recorded.

});

router.delete('/stats/:id', function(req, res, next) {
// Remove tracked data for a day.

});

module.exports = router;
