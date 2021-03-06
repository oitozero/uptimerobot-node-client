var request = require('request');
var _ = require('underscore');

// If you only need the raw JSON response without a function wrapper, send the noJsonCallback parameter with a value of 1
var parseJSONResponse = function(response) {
    if(response.indexOf('jsonUptimeRobotApi') !== -1){
        var regex = /^jsonUptimeRobotApi\((.*)\)$/;
        return JSON.parse(response.match(regex)[1]);
    }
    return JSON.parse(response);
};

var getQueryParams = function(options) {
    return _.mapObject(options, function(val, key) {
        if (_.isArray(val)) return val.join('-');
        if (_.isBoolean(val)) return val ? 1 : 0;
        return val;
    });
};

var Client = module.exports = function(apiKey) {

    var url = 'https://api.uptimerobot.com';

    this.getMonitors = function(options, cb) {
        if (!cb) cb = options;

        request.get(url + '/getMonitors', {
            qs: _.extend({
                apiKey: apiKey,
                format: 'json',
            }, getQueryParams(options))
        }, function(err, res, body) {
            try {
                var data = parseJSONResponse(body);
                process.nextTick(function() {
                    cb(data.stat === 'fail' ? data.message : null, data);
                });
            } catch(ex) {
                cb(err || ex, body);
            }
        });
    };

    this.newMonitor = function(options, cb) {
        if (!cb) cb = options;

        request.get(url + '/newMonitor', {
            qs: _.extend({
                apiKey: apiKey,
                format: 'json'
            }, getQueryParams(options))
        }, function(err, res, body) {
            try {
                var data = parseJSONResponse(body);
                process.nextTick(function() {
                    cb(data.stat === 'fail' ? data.message : null, data);
                });
            } catch(ex) {
                cb(err || ex, body);
            }
        });
    };

    this.editMonitor = function(options, cb) {
        if (!cb) cb = options;

        request.get(url + '/editMonitor', {
            qs: _.extend({
                apiKey: apiKey,
                format: 'json'
            }, getQueryParams(options))
        }, function(err, res, body) {
            try {
                var data = parseJSONResponse(body);
                process.nextTick(function() {
                    cb(data.stat === 'fail' ? data.message : null, data);
                });
            } catch(ex) {
                cb(err || ex, body);
            }
        });
    };

    this.deleteMonitor = function(options, cb) {
        if (!cb) cb = options;

        request.get(url + '/deleteMonitor', {
            qs: _.extend({
                apiKey: apiKey,
                format: 'json'
            }, getQueryParams(options))
        }, function(err, res, body) {
            try {
                var data = parseJSONResponse(body);
                process.nextTick(function() {
                    cb(data.stat === 'fail' ? data.message : null, data);
                });
            } catch(ex) {
                cb(err || ex, body);
            }
        });
    };

    this.resetMonitor = function(options, cb) {
        if (!cb) cb = options;

        request.get(url + '/resetMonitor', {
            qs: _.extend({
                apiKey: apiKey,
                format: 'json'
            }, getQueryParams(options))
        }, function(err, res, body) {
            try {
                var data = parseJSONResponse(body);
                process.nextTick(function() {
                    cb(data.stat === 'fail' ? data.message : null, data);
                });
            } catch(ex) {
                cb(err || ex, body);
            }
        });
    };

    this.getAlertContacts = function(options, cb) {
        if (!cb) cb = options;

        request.get(url + '/getAlertContacts', {
            qs: _.extend({
                apiKey: apiKey,
                format: 'json'
            }, getQueryParams(options))
        }, function(err, res, body) {
            try {
                var data = parseJSONResponse(body);
                process.nextTick(function() {
                    cb(data.stat === 'fail' ? data.message : null, data);
                });
            } catch(ex) {
                cb(err || ex, body);
            }
        });
    };

    this.newAlertContact = function(options, cb) {
        if (!cb) cb = options;

        request.get(url + '/newAlertContact', {
            qs: _.extend({
                apiKey: apiKey,
                format: 'json'
            }, getQueryParams(options))
        }, function(err, res, body) {
            try {
                var data = parseJSONResponse(body);
                process.nextTick(function() {
                    cb(data.stat === 'fail' ? data.message : null, data);
                });
            } catch(ex) {
                cb(err || ex, body);
            }
        });
    };

    this.deleteAlertContact = function(options, cb) {
        if (!cb) cb = options;

        request.get(url + '/deleteAlertContact', {
            qs: _.extend({
                apiKey: apiKey,
                format: 'json'
            }, getQueryParams(options))
        }, function(err, res, body) {
            try {
                var data = parseJSONResponse(body);
                process.nextTick(function() {
                    cb(data.stat === 'fail' ? data.message : null, data);
                });
            } catch(ex) {
                cb(err || ex, body);
            }
        });
    };
};
