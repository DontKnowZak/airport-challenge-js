'use strict';

function Airport(weather){
  this._weather = typeof weather !== 'undefined' ? weather : new Weather();
  this._hangar = [];
}

Airport.prototype.airplanes = function(){
  return this._hangar;
};

Airport.prototype.clearForLanding = function(airplane) {
  if (this._weather.isStormy()) {
    throw new Error('cannot land during storm');
  }
  this._hangar.push(airplane);
};

Airport.prototype.clearForTakeoff = function(airplane) {
  if (this._weather.isStormy()) {
    throw new Error('cannot takeoff during storm');
  }
  this._hangar = [];
};
