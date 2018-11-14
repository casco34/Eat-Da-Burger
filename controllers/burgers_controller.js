var orm= require('../config/orm.js');

var Burger = {
    selectAll: function (cb){
        orm.selectAll('Burgers', function (res){
            cb(res);
        })
    },

    insertOne: function (cols,vals,cb) {
        orm.insertOne('Burgers', cols, vals, function (res){
            cb(res);
        });
    },

    updateOne: function (objColVals, condition,cb) {
        orm.updateOne('Burgers', objColVals, condtion, function (res){
            cb(res);
        });
    }
};

module.exports =Burger;