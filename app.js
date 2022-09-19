//?monaco=1

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const helmet = require("helmet");
const session = require("express-session");

var indexRouter = require('./routes/index');
var statsRouter = require('./routes/stats')
var usersRouter = require('./routes/users');
var discordRouter = require('./routes/discord');
var hypedRouter = require('./routes/hypedbot');
var addRouter = require('./routes/addbot');
var hypedmRouter = require('./routes/hypedmusic');
var tosRouter = require('./routes/tos');
var encurtaRouter = require('./routes/encurta');
var sitemapRouter = require('./routes/sitemap');
var contratoRouter = require('./routes/contrato');
var aceitarRouter = require('./routes/aceitar');
var transfurRouter = require('./routes/transfur');
var replRouter = require('./routes/repl');
var mineRouter = require('./routes/minecraft')
var youtubeRouter = require('./routes/youtube')
var instaRouter = require('./routes/instagram')
var docsRouter = require('./routes/docs');
var snftRouter = require('./routes/snft')
var loginRouter = require('./routes/login')
var redesRouter = require('./routes/redes')
var dashboardRouter = require('./routes/dashboard')

var registerRouter = require('./routes/register')

var hypedShareItHome = require('./routes/shareIt/homePage.js')
var hypedShareItProfiles = require('./routes/shareIt/userProfile.js')
var hypedShareItPosts = require('./routes/shareIt/viewPost.js')
var hypedShareItImages = require('./routes/shareIt/images.js')
var hypedShareItNotifications = require('./routes/shareIt/notifications.js')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));

app.use(helmet.hidePoweredBy());
app.use(helmet.expectCt());
app.use(helmet.referrerPolicy({
  policy: "no-referrer"
}));
app.use(helmet.noSniff());
app.use(
  helmet.dnsPrefetchControl({
    allow: false,
  })
);
app.use(helmet.ieNoOpen());
app.use(
  helmet.frameguard({
    action: "sameorigin",
  })
);
app.use(
  helmet.permittedCrossDomainPolicies({
    permittedPolicies: "none",
  })
);
app.use(helmet.xssFilter());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'static')));


app.use(session({
  secret: 8080,
  resave: true,
  saveUninitialized: false,
  cookie: {
    expires: 604800000
  }
}));

//Routes
app.use('/', registerRouter)
app.use('/', dashboardRouter)
app.use('/', redesRouter)
app.use('/', loginRouter)
app.use('/', indexRouter);
app.use('/', statsRouter);
app.use('/users', usersRouter);
app.use('/', hypedRouter);
app.use('/', discordRouter);
app.use('/', addRouter);
app.use('/', tosRouter);
app.use('/', hypedmRouter);
app.use('/', encurtaRouter);
app.use('/', sitemapRouter);
app.use('/', contratoRouter);
app.use('/', aceitarRouter);
app.use('/', transfurRouter);
app.use('/', replRouter);
app.use('/', mineRouter);
app.use('/', youtubeRouter);
app.use('/', instaRouter);
app.use('/', docsRouter);
app.use('/', snftRouter);

app.use('/', hypedShareItHome);
app.use('/', hypedShareItProfiles);
app.use('/', hypedShareItPosts);
app.use('/', hypedShareItImages);
app.use('/', hypedShareItNotifications);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
