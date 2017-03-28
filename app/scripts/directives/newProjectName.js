/**
 * Created by mzwart on 22-3-2017.
 */
'use strict';

angular.module('cosZoneApp')
.directive('newProjectName', ['userService', '$q', function(userService, $q) {
  return {
    link: function (ngModelCtrl) {
      function newProjectName(projectName) {
        if (projectName) {
          userService.getProjectByName(projectName).then(function (result) {
            if (result == null) {
              return $q.resolve('Unique');
            } else {
              return $q.reject('Not unique');
            }
          });
        }
      }
      ngModelCtrl.$asyncValidators.projectNameExists = newProjectName;
    }
}
}]);
