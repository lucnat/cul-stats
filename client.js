
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { Mongo } from 'meteor/mongo';

Cul_Stats = new Mongo.Collection('cul_stats');

// subscriptions
Meteor.startup(() => {
  Tracker.autorun(() => {
    Meteor.subscribe('admin_cul_stats');
  });
});
