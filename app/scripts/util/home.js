/**
 * Created by mzwart on 3-2-2017.
 */
'use strict';

angular.module('cosZoneApp')
  .controller('profileCtrl', profileCtrl)
  .directive('modal', modalDir);


function profileCtrl($scope, $mdSidenav){
  $scope.openLeftMenu = function(){
    $mdSidenav('left').toggle();
  };
  $scope.openRightMenu = function() {
    $mdSidenav('right').toggle();
  };
  $scope.user = {
    email: '',
    username: '',
    password: ''
  };
  $scope.showNewProject=false;
  $scope.toggleNewProject = function(){
    $scope.showNewProject = !$scope.showNewProject;
  };
}

function modalDir(){
  return {
    template: `
        <div class="modal fade">
        <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        <h4 class="modal-title">{{title}}</h4>
        </div><div class="modal-body" ng-transclude></div></div></div></div>
        `,
    restrict: 'E',
    transclude: true,
    replace:true,
    scope:true,
    link: function postLink(scope, element, attrs) {
      scope.title = attrs.title;
      scope.$watch(attrs.visible, function(value) {
        if(value === true) {
          $(element).modal('show');
        } else {
          $(element).modal('hide');
        }
      });

      $(element).on('shown.bs.modal', function() {
        scope.$apply(function() {
          scope.$parent[attrs.visible] = true;
        });
      });

      $(element).on('hidden.bs.modal', function() {
        scope.$apply(function() {
          scope.$parent[attrs.visible] = false;
        });
      });
    }
  };
}
