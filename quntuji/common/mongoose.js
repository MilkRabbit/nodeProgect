var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var config = require("./config");
var autoIncrement = require('mongoose-auto-increment');

module.exports = function () {
    var dbUri = "mongodb://" + config.mongo.mongoUser + ":" + config.mongo.mongoPassword + "@" + config.mongo.mongoHost + ":" + config.mongo.mongoPort + "/" + config.mongo.mongoDbName;
    var opts = {
        auth: {
            authMechanism: 'SCRAM-SHA-1',
            authSource: 'admin'
        }
    };
    var connection = mongoose.createConnection(dbUri, opts,function(err){
        //console.log(err)
    });
    autoIncrement.initialize(connection);

    var db = mongoose.connect(dbUri, opts);
    require("../models/album.server.model");
    require("../models/flock.server.model");
    require("../models/flockalbum.server.model");
    require("../models/flockuser.server.model");
    require("../models/user.server.model");
    require("../models/patchphoto.server.model");
    require("../models/photo.server.model");
    require("../models/order.server.model");
    require("../models/albumuser.server.model");
    require("../models/finance.server.model");
    require("../models/withdraw.server.model");
    require("../models/admin.server.model");
    require("../models/feedback.server.model");
    require("../models/bugtrack.server.model");
    return db;
}