var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var dashboardRouter = require('./routes/dashboard');
var AddNewCategoryRouter = require('./routes/AddNewCategory');
var passwordCategoryRouter = require('./routes/passwordCategory');
var AddNewPasswordRouter = require('./routes/AddNewPassword');
var ViewAllPasswordRouter = require('./routes/ViewAllPassword');
var passworddetailsRouter = require('./routes/password-details');
var joinRouter = require('./routes/join');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/dashboard', dashboardRouter);
app.use('/AddNewCategory',AddNewCategoryRouter);
app.use('/passwordCategory',passwordCategoryRouter);
app.use('/AddNewPassword', AddNewPasswordRouter);
app.use('/ViewAllPasswords', ViewAllPasswordRouter);
app.use('/password-details', passworddetailsRouter);
app.use('/password-details', joinRouter);
app.use('/joinResult', joinRouter);

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
