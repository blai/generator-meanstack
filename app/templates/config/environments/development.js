var express = require('express'),
    path = require('path');

module.exports = function (app) {
    app.configure('development', function () {
        app.set('port', process.env.PORT || 3000);
        app.set('views', path.join(app.directory, '/views'));
        app.set('view engine', 'ejs');
        app.use(express.favicon());
        app.use(express.logger('dev'));
        app.use(express.bodyParser());
        app.use(express.methodOverride());
        app.use(express.cookieParser('your secret here'));
        app.use(express.session());
        app.use(app.router);
        app.use(express.static(path.join(app.directory, 'public')));
        app.use(express.errorHandler());
    });
};