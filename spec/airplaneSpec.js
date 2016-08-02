'use strict';

describe('Airplane', function(){
  var airplane;
  var airport;

  beforeEach(function(){
    airplane = new Airplane();
    airport = jasmine.createSpyObj('airport',['clearForLanding', 'clearForTakeoff']);
  });

  it('can land at an airport', function(){
    airplane.land(airport);
    expect(airport.clearForLanding).toHaveBeenCalledWith(airplane);
  });

  it('can takeoff from an airport', function(){
    airplane.land(airport);
    airplane.takeoff();
    expect(airport.clearForTakeoff).toHaveBeenCalled();
  });
});
