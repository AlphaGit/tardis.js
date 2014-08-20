describe('tardis.js', function() {
  beforeEach(function() {
    this.Date = window.Date;
    jasmine.addMatchers({
      toBeCloseTo: function() {
        return {
          compare: function(actual, expected, tolerance) {
            if (!tolerance) tolerance = 0;  
            var result = {};

            var diff = Math.abs(actual - expected);

            result.pass = diff <= tolerance;
            result.message = actual + ' is ' + (result.pass ? '' : 'not ') +
              'close enough to ' + expected + ' (tolerance: ' + tolerance + ', was off by ' +
              (diff - tolerance) + ')';
            return result;
          }
        };
      }
    });
  });

  afterEach(function() {
    tardis.restoreTime();
    window.Date = this.Date;
  });

  it('is loaded in the environment', function() {
    expect(tardis).toBeDefined();
  });

  it('allows to advance the current time (milliseconds)', function() {
    var diff = 20;
    var now = Date.now();
    tardis.travelToFuture(diff);
    var newNow = Date.now();
    expect(newNow - now).toBeCloseTo(diff, 2);
  });

  it('allows to advance the current time (seconds)', function() {
    var diff = 20 * 1000;
    var now = Date.now();
    tardis.travelToFuture(diff);
    var newNow = Date.now();
    expect(newNow - now).toBeCloseTo(diff, 2);
  });

  it('allows to advance the current time (minutes)', function() {
    var diff = 20 * 1000 * 60;
    var now = Date.now();
    tardis.travelToFuture(diff);
    var newNow = Date.now();
    expect(newNow - now).toBeCloseTo(diff, 2);
  });

  it('allows to advance the current time (hours)', function() {
    var diff = 10 * 1000 * 60 * 60;
    var now = Date.now();
    tardis.travelToFuture(diff);
    var newNow = Date.now();
    expect(newNow - now).toBeCloseTo(diff, 2);
  });

  it('allows to advance the current time (days)', function() {
    var diff = 10 * 1000 * 60 * 60 * 24;
    var now = Date.now();
    tardis.travelToFuture(diff);
    var newNow = Date.now();
    expect(newNow - now).toBeCloseTo(diff, 2);
  });

  it('allows to advance the current time (weeks)', function() {
    var diff = 10 * 1000 * 60 * 60 * 24 * 7;
    var now = Date.now();
    tardis.travelToFuture(diff);
    var newNow = Date.now();
    expect(newNow - now).toBeCloseTo(diff, 2);
  });

  it('allows to advance the current time (months)', function() {
    var diff = 10 * 1000 * 60 * 60 * 24 * 7 * 4;
    var now = Date.now();
    tardis.travelToFuture(diff);
    var newNow = Date.now();
    expect(newNow - now).toBeCloseTo(diff, 2);
  });

  it('allows to advance the current time (years)', function() {
    var diff = 10 * 1000 * 60 * 60 * 24 * 365;
    var now = Date.now();
    tardis.travelToFuture(diff);
    var newNow = Date.now();
    expect(newNow - now).toBeCloseTo(diff, 2);
  });

  it('supports Date.now() changes', function() {
    var diff = 10 * 1000;
    var now = Date.now();
    tardis.travelToFuture(diff);
    var newNow = Date.now();
    expect(newNow - now).toBeCloseTo(diff, 2);
  });

  it('supports new Date().valueOf() changes', function() {
    var diff = 10 * 1000;
    var now = new Date().valueOf();
    tardis.travelToFuture(diff);
    var newNow = new Date().valueOf();
    expect(newNow - now).toBeCloseTo(diff, 2);
  });

  xit('allows new dates to also be Date objects', function() {
    tardis.travelToFuture(1);
    var newDate = new Date();
    expect(newDate instanceof Date).toBe(true);
  });
});