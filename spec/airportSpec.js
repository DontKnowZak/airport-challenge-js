'use strict';

describe('Airport', function(){
  var airport;
  var airplane;
  var weather;

  beforeEach(function(){
    weather = jasmine.createSpyObj('weather', ['isStormy']);
    airplane = jasmine.createSpy('airplane');
    airport = new Airport(weather);
  });

  it('has no planes by default', function(){
    expect(airport.airplanes()).toEqual([]);
  });

  describe('under normal conditions', function(){
    beforeEach(function(){
      weather.isStormy.and.returnValue(false);
    });

    it('can clear planes for landing', function(){
      airport.clearForLanding(airplane);
      expect(airport.airplanes()).toEqual([airplane]);
    });

    it('can clear planes for takeoff', function(){
      airport.clearForLanding(airplane);
      airport.clearForTakeoff(airplane)
      expect(airport.airplanes()).toEqual([]);
    });
  });

  describe('under stormy conditions', function(){
    beforeEach(function(){
      weather.isStormy.and.returnValue(true);
    });

    it('does not clear planes for take off', function() {
      expect(function() { airport.clearForTakeoff(airplane); }).toThrowError('cannot takeoff during storm');
    });

    it('does not clear planes for landing', function() {
      expect(function() { airport.clearForLanding(airplane); }).toThrowError('cannot land during storm');
    });
  });
});
