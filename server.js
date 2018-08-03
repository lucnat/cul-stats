
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { Mongo } from 'meteor/mongo';

let Stats = new Mongo.Collection('cul_stats');

function getNewStatsObj() {
  let o = {};
  Mongo.Collection.getAll().forEach(c => {
    const collection = c.instance;
    const name = c.name.replace(/\./g,'_')   // since keys cannot contain dots
    o[name] = collection.find().count();
  });
  o.createdAt = new Date();
  return o;
}

Meteor.setInterval(() => {
  const o = getNewStatsObj();
  Stats.insert(o);
}, 4*3600*1000);


// publications
Meteor.startup(() => {
    Meteor.publish('cul_stats', function() {
      const user = Meteor.users.findOne(this.userId);
      if(user && user.emails[0].address == adminEmail){
        return collection.instance.find({});
      }
    });
});

// fixtures 
Meteor.startup(() => {
  Meteor.setTimeout(() => {
    if(Stats.find().count() == 0) {
      console.log('doing stats fixtures...');
      let o1 = getNewStatsObj();
      Stats.insert(o1);
      Meteor.setTimeout(() => {
        let o2 = getNewStatsObj();
        Stats.insert(o2);
        Meteor.setTimeout(() => {
          let o3 = getNewStatsObj();
          Stats.insert(o3);
        }, 1000)
      }, 1000)
    }
  },5000)
})
