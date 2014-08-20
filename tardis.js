var tardis = (function(window, undefined) {
  var _originalDate;
  var _tardis = this;
  _tardis._offset = 0;

  var _propertiesToCopy = ['UTC', 'parse', 'toString', 'toLocaleString', 'valueOf'];

  function _init() {
    if (!!_originalDate) return;

    _originalDate = window.Date;

    // passing parameters manually because fn.apply() on the constructor won't return a date object
    var NewDate = function(arg1) {
      var absoluteValueRequired = arg1 !== undefined;
      var date = absoluteValueRequired  ? new _originalDate(arg1) : new _originalDate();
      return absoluteValueRequired ? date : new _originalDate(+date + _tardis._offset);
    };

    NewDate.now = function() {
      var realNow = _originalDate.now();
      return realNow + _tardis._offset;
    };

    for (var i = _propertiesToCopy.length; i--;) {
      var propName = _propertiesToCopy[i];
      NewDate[propName] = _originalDate[propName];
    }

    window.Date = NewDate;
  }

  function travelToFuture(offsetMilliseconds) {
    _init();
    _tardis._offset += offsetMilliseconds;
  }

  function travelToPast(offsetMilliseconds) {
    _init();
    _tardis._offset += -offsetMilliseconds;
  }

  function restoreTime() {
    if (!_originalDate) return;

    window.Date = _originalDate;
    _originalDate = null;
    _tardis._offset = 0;
  }

  var tardis = {
    travelToFuture: travelToFuture,
    travelToPast: travelToPast,
    restoreTime: restoreTime
  };
  window.tardis = tardis;
  return tardis;
})(window);