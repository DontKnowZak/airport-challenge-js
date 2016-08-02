'use strict';

describe('Feature Test:', function(){
  var airplane;
  var airport;

  beforeEach(function(){
    airplane = new Airplane();
    airport = new Airport();
  });
  describe('under normal conditions', function(){

    beforeEach(function(){
      spyOn(Math,'random').and.returnValue(0);
    });

    it('airplanes can be instructed to land at an airport', function(){
      airplane.land(airport);
      expect(airport.airplanes()).toContain(airplane);
    });

    it('airplanes can be instructed to take off from an airport', function(){
      airplane.land(airport);
      airplane.takeoff();
      expect(airport.airplanes()).not.toContain(airplane);
    });
  });

  describe('under stormy conditions', function(){

    it('prevents takeoff when weather is stormy', function(){
      spyOn(Math,'random').and.returnValue(0);
      airplane.land(airport);
      spyOn(airport._weather, 'isStormy').and.returnValue(true);
      expect(function() { airplane.takeoff(); }).toThrowError('cannot takeoff during storm');
      expect(airport.airplanes()).toContain(airplane);
    });

    it('prevents landing when weather is stormy', function(){
      spyOn(Math,'random').and.returnValue(1);
      expect(function() { airplane.land(airport); }).toThrowError('cannot land during storm');
      expect(airport.airplanes()).not.toContain(airplane);
    });
  });
});
