'use strict'
var mongo           = require('mongodb').MongoClient;
var url             = process.env.MONGODB_PATH_ACCESS;
var DBMONGODB       = process.env.DBMONGODB;
let self = module.exports = {
    create : function (tbl, data){
        return new Promise(function(resolve, reject) {
            mongo.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: false
            },(err, client) => {
                if (err) {
                reject(err);
                    }else{
                        const db            = client.db(DBMONGODB);
                        const collection    = db.collection(tbl);
                        collection.insertOne(data, (err, result) => {
                          client.close();
                          if (err) {
                          reject(err);
                          }else{
                          resolve(result);
                          }
                        })
                    }
            })
        })
    },
    createMany : function (tbl, data){
        return new Promise(function(resolve, reject) {
            mongo.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: false
            },(err, client) => {
                if (err) {
                reject(err);
                    }else{
                        const db            = client.db(DBMONGODB);
                        const collection    = db.collection(tbl);
                        collection.insertMany(data, (err, result) => {
                          client.close();
                          if (err) {
                          reject(err);
                          }else{
                          resolve(result);
                          }
                        })
                    }
            })
        })
    },
    find : function (tbl, data, sort, offset, limit){
        return new Promise(function(resolve, reject) {
            mongo.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: false
            },(err, client) => {
                if (err) {
                reject(err);
                    }else{
                        const db            = client.db(DBMONGODB);
                        const collection    = db.collection(tbl);
                        collection.find(data).sort({}).skip(Number(offset)).limit(Number(limit)).toArray((err, items) => {
                          client.close();
                          if (err) {
                          reject(err);
                          }else{
                          resolve(items);
                          }
                        })
                    }
            })
        })
    },
    findOne : function (tbl, data){
        return new Promise(function(resolve, reject) {
            mongo.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: false
            },(err, client) => {
                if (err) {
                reject(err);
                    }else{
                        const db            = client.db(DBMONGODB);
                        const collection    = db.collection(tbl);
                        collection.findOne(data, (err, items) => {
                          client.close();
                          if (err) {
                          reject(err);
                          }else{
                          resolve(items);
                          }
                        })
                    }
            })
        })
    },
    findAll : function (tbl, data, sort){
        return new Promise(function(resolve, reject) {
            mongo.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: false
            },(err, client) => {
                if (err) {
                reject(err);
                    }else{
                        const db            = client.db(DBMONGODB);
                        const collection    = db.collection(tbl);
                        collection.find(data).sort(sort).toArray((err, items) => {
                          client.close();
                          if (err) {
                          reject(err);
                          }else{
                          resolve(items);
                          }
                        })
                    }
            })
        })
    },
    updateOne : function (tbl, condition, data){
        return new Promise(function(resolve, reject) {
            mongo.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: false
            },(err, client) => {
                if (err) {
                reject(err);
                    }else{
                        const db            = client.db(DBMONGODB);
                        const collection    = db.collection(tbl);
                        collection.updateOne(condition, data, (err, items) => {
                          client.close();
                          if (err) {
                          reject(err);
                          }else{
                          console.log(`${items.matchedCount} document(s) matched the filter, updated ${items.modifiedCount} document(s)`);
                          resolve(items);
                          }
                        })
                    }
            })
        })
    },
    update : function (tbl, condition, data){
        return new Promise(function(resolve, reject) {
            mongo.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: false
            },(err, client) => {
                if (err) {
                reject(err);
                    }else{
                        const db            = client.db(DBMONGODB);
                        const collection    = db.collection(tbl);
                        collection.update(condition, data, (err, items) => {
                          client.close();
                          if (err) {
                          reject(err);
                          }else{
                          console.log(`${items.matchedCount} document(s) matched the filter, updated ${items.modifiedCount} document(s)`);
                          resolve(items);
                          }
                        })
                    }
            })
        })
    },
    delete : function (tbl, condition){
        return new Promise(function(resolve, reject) {
            mongo.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: false
            },(err, client) => {
                if (err) {
                reject(err);
                    }else{
                        const db            = client.db(DBMONGODB);
                        const collection    = db.collection(tbl);
                        collection.deleteOne(condition, (err, items) => {
                          client.close();
                          if (err) {
                          reject(err);
                          }else{
                          resolve(items);
                          }
                        })
                    }
            })
        })
    },
    deleteMany : function (tbl, condition){
        return new Promise(function(resolve, reject) {
            mongo.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: false
            },(err, client) => {
                if (err) {
                reject(err);
                    }else{
                        const db            = client.db(DBMONGODB);
                        const collection    = db.collection(tbl);
                        collection.deleteMany(condition, (err, items) => {
                          client.close();
                          if (err) {
                          reject(err);
                          }else{
                          resolve(items);
                          }
                        })
                    }
            })
        })
    },
    findCount : function (tbl, data){
        return new Promise(function(resolve, reject) {
            mongo.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: false
            },(err, client) => {
                if (err) {
                reject(err);
                    }else{
                        const db            = client.db(DBMONGODB);
                        const collection    = db.collection(tbl);
                        collection.aggregate([
                            { $match: data },
                            { $group: { _id: null, count: { $sum: 1 } } }
                        ]).toArray((err, items) => {
                          client.close();
                          if (err) {
                          reject(err);
                          }else{
                          resolve(items);
                          }
                        })
                    }
            })
        })
    },
    lookup : function (tbl, relational, connectFromField, connectToField, match, offset, limit){
        return new Promise(function(resolve, reject) {
            mongo.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: false
            },(err, client) => {
                if (err) {
                reject(err);
                    }else{
                        const db            = client.db(DBMONGODB);
                        const collection    = db.collection(tbl);
                        collection.aggregate([
                            { $match: match },
                            { $limit: Number(limit) },
                            { $skip: Number(offset) },
                            {
                                $lookup: {
                                    from: relational,
                                    localField: connectFromField,
                                    foreignField: connectToField,
                                    as: relational
                                }
                            }
                        ]).toArray((err, items) => {
                          client.close();
                          if (err) {
                          reject(err);
                          }else{
                          resolve(items);
                          }
                        })
                    }
            })
        })
    },
    kalkulasi : function (bil1, bil2){
        return bil1 * bil2;
    },
}
