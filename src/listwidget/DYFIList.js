'use strict';

var EqList = require('listwidget/EqList'),
    Util = require('listwidget/Util');


var DYFIList = function (params) {
  var _this;


  _this = EqList(params);


  /**
   * @APIMethod
   *
   * @Overrides EqList#getClassName
   */
   _this.getClassName = function () {
    return 'eqlist dyfilist';
  };

  /**
   * @APIMethod
   *
   * @Overrides EqList#getEventAside
   */
   _this.getEventAside = function (e) {
    return (e.properties.felt||0) + ' responses';
  };

  /**
   * @APIMethod
   *
   * @Overrides EqList#getEventTitle
   */
   _this.getEventTitle = function (e) {
    return e.properties.title;
  };

  /**
   * @APIMethod
   *
   * @Overrides EqList#getEventValue
   */
   _this.getEventValue = function (e) {
    var romanCdi = Util.decToRoman(e.properties.cdi);

    return '<span class="roman mmi' + romanCdi + '">' + romanCdi + '</span>';
  };

  /**
   * @APIMethod
   *
   * @Overrides EqList#includeEvent
   */
   _this.includeEvent = function (e) {
    return (e.properties.types.indexOf('dyfi') !== -1);
  };


  params = null;
  return _this;
};

module.exports = DYFIList;
