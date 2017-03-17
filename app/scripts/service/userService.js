/**
 * Created by mzwart on 3-3-2017.
 */

'use strict';

angular.module('cosZoneApp').factory('userService', ['$http', function ($http) {

/*  var userResource = $resource('scripts/resources/users.json')*/

  var service = {
    getUserById: function(id) {
      return $http.get('scripts/resources/singleuser/user.json').then(function(result) {
        return result.data;
      });
    },
    getAllUsers: function() {
      return $http.get('scripts/resources/users.json').then(function(result){
        return result.data;
      });
    },

    getProject: function(userid, projectid) {
      return $http.get('scripts/resources/users.json').then(function(result) {
        var user = result.data[userid];
        return user.projects[projectid];
      });
    },
    getProjectsByUserid: function(userid) {
      return $http.get('scripts/resources/singleuser/projects.json').then(function(result) {
        return result.data;
      });
    },
    getAllProjects: function() {
      return $http.get('scripts/resources/projects.json').then(function(result) {
        return result.data;
      });
    },

    getMaterialsUsedByUserid: function(userid){
      return $http.get('scripts/resources/singleuser/materialsused.json').then(function(result) {
        return result.data;
      });
    },
    getMaterialsUsedByProjectid: function(projectid) {
      return $http.get('scripts/resources/singleuser/singleproject/materialsused.json').then(function(result) {
        return result.data;
      });
    },
    getMaterials: function(){
      return $http.get('scripts/resources/materials.json').then(function(result) {
        return result.data;
      });
    },
    getMaterialById: function(id){
      //TODO
    },

    getTasksByProjectid: function(projectid) {
      return $http.get('scripts/resources/singleuser/singleproject/tasks.json').then(function(result) {
        return result.data;
      });
    },
    getAllTasks: function() {
      return $http.get('scripts/resources/todos.json').then(function(result) {
        return result.data;
      });
    },

    getArmorChips: function(){
      return $http.get('scripts/resources/armorchips.json').then(function(result) {
        return result.data;
      })
    }
  };

  return service;

}]);
