'use strict';

function Airplane() {
}

Airplane.prototype.land = function(airport) {
  airport.clearForLanding(this);
  this._location = airport;
};

Airplane.prototype.takeoff = function() {
  this._location.clearForTakeoff('');
};
