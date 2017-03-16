/**
 * Created by mzwart on 23-2-2017.
 */
'use strict';

angular.module('cosZoneApp')
  .controller('projectCtrl', function () {
    var ctrl = this;
    ctrl.project = {
      name: '',
      timespent: '',
      email: '',
      datejoined: '',
      timespenttotal: '',
      moneyspenttotal: ''
    };

  });
