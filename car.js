'use strict';

var Car = function (mpg) {
  this.mpg = mpg;
  this.gallons = 0;
  this.distanceTraveled = 0;
  this.tripLog = [];
};

Car.prototype.fill = function (gallons) {
  this.gallons += gallons;
};

Car.prototype.drive = function(miles) {
  this.gallons -= miles / this.mpg;
  this.distanceTraveled += miles;
  this.tripLog.push(miles + ' miles');
};

Car.prototype.odometer = function() {
  return this.distanceTraveled;
};

Car.prototype.trips = function() {
  return this.tripLog;
};

module.exports = Car;
