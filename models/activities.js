const mongoose = require('mongoose');
ObjectId = require('mongodb').ObjectID;

mongoose.Promise = require('bluebird');

const activitySchema = new mongoose.Schema({
  activityName: String,
  date_time: Date,
  statisticName: String,
  statisticValue: Number
}, {collection: 'activities'});

const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;
