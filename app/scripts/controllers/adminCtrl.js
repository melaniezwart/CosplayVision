/**
 * Created by mzwart on 17-3-2017.
 */


angular.module('cosZoneApp')
  .controller('adminCtrl', function($scope, userService, $log) {
    ctrl = this;

    ctrl.getAllUsers = function(){
      userService.getAllUsers().then(function(data) {
        $scope.users = JSON.parse(JSON.stringify(data));
      });
    };

    ctrl.getAllMaterials = function() {
      userService.getMaterials().then(function(data) {
        $scope.materials = JSON.parse(JSON.stringify(data));
      });
    };

    ctrl.getAllTasks = function() {
      userService.getAllTasks().then(function(data) {
        $scope.tasks = JSON.parse(JSON.stringify(data));
      });
    };

    ctrl.getAllProjects = function() {
      userService.getAllProjects().then(function(data) {
        $scope.projects = JSON.parse(JSON.stringify(data));
      });
    };

  });
