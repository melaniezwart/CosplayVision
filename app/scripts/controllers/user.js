/**
 * Created by mzwart on 23-2-2017.
 */
'use strict';

angular.module('cosZoneApp')
  .controller('userCtrl', function($scope, userService, $log) {

    var logger = $log;
    var ctrl = this;
    var showEdit = false;

    /*
    Getters for data from backend
     */
    ctrl.getProject = function(userid, projectnr){
      userService.getProject(userid, projectnr).then(function (data) {
        $scope.project = JSON.parse(JSON.stringify(data));
      });
    };

    ctrl.getProjectsByUserid = function(userid) {
      userService.getProjectsByUserid(userid).then(function(data) {
        $scope.projects = JSON.parse(JSON.stringify(data));
      });
    };

    ctrl.getMaterials = function(){
      userService.getMaterials().then(function(data) {
        $scope.materials = JSON.parse(JSON.stringify(data));
      });
    };

    ctrl.getMaterialsUsedByProjectid = function(projectid){
      userService.getMaterialsUsedByProjectid(projectid).then(function(data) {
        $scope.materialsUsed = JSON.parse(JSON.stringify(data));
      });
    };

    ctrl.getUserDetails = function(){
      userService.getUserById(2).then(function(data) {
        $scope.userDetails = JSON.parse(JSON.stringify(data));
      });
    };

    /*
    Getting calculations from projects.html
     */
    ctrl.getMoneySpent = function(){
      if($scope.projects) {
        var totalspent = 0;
        var projectsObj = $scope.projects;
        for (var i = 0; i < projectsObj.length; i++) {
          totalspent += projectsObj[i].moneyspent;
        }
        return totalspent;
      }
    };
    ctrl.getTimeSpent = function(){
      if($scope.projects) {
        var totaltimespent = 0;
        var projectsObj = $scope.projects;
        for (var i = 0; i < projectsObj.length; i++) {
          totaltimespent += projectsObj[i].timespent;
        }
        return totaltimespent;
      }
    };
    ctrl.getAvgSpent = function(){
      if($scope.projects) {
        return ctrl.getMoneySpent() / $scope.projects.length;
      }
    };
    ctrl.getAvgTime = function(){
      if($scope.projects) {
        return ctrl.getTimeSpent() / $scope.projects.length;
      }
    };

    /*
    New project
     */
    ctrl.project = {
      name: "",
      deadline: new Date(),
      taskList: [{
        task:'Preparations', time: 8, cost: 5, finished:false
      }],
      materials: []
    };
    $scope.newMaterial = {name: '', amount: 0, cost: 0, quantitytype: ''};
    $scope.typeMaterial = {name: '', amount: 0, cost: 0, quantitytype: ''};

    ctrl.addProject = function(){
      //TODO Save project, retrieve the id of the project, then save the tasks and materials with the projectid.
      logger.info("Adding new project. Name: " + ctrl.project.name + ", deadline: " + ctrl.project.deadline.toDateString() + " and a task list with " + ctrl.project.taskList.length + " entries");
      ctrl.project = {name: "",
        deadline: new Date(),
        taskList: [{
          task:'Preparations', time: 8, cost: 5, finished:false
        }]};
    };
    //TODO create watch on the estimates
    ctrl.calcEstimatedCost = function(){
      var project = ctrl.project;
      var estimate = 0;
      angular.forEach(project.taskList, function(task){
        if(!task.finished){
          estimate = estimate + task.cost;
        }
      });
      return estimate;
    };
    ctrl.calcEstimatedTime = function(){
      var project = ctrl.project;
      var estimate = 0;
      angular.forEach(project.taskList, function(task){
        if(!task.finished) {
          estimate = estimate + task.time;
        }
      });
      return estimate;
    };

    /*
    Editing materials in a new project
     */
    ctrl.addMaterial = function(material) {
      ctrl.project.materials.push({name:material.name, amount: material.amount, cost: material.cost, quantitytype: material.quantitytype, editmode: false});
      $scope.matName = "";
      $scope.matAmount = "";
      $scope.matCost = "";
    };
    ctrl.removeMaterial = function(material) {
      var index = ctrl.project.materials.indexOf(material);
      logger.info("Removing " + material.name + " with index " + index + " which in the list is " + ctrl.project.materials[index].name);
      if(index === 0){
        ctrl.project.materials.shift();
      } else {
        ctrl.project.materials.splice(index, 1);
      }
    };
    ctrl.toggleEditMode = function(material){
      if(material.editmode){
        ctrl.project.materials.
        material.editmode = false;
      } else {

        material.editmode = true;
      }
    };

    /*
    Making task list
     */
    ctrl.addTask = function() {
      ctrl.project.taskList.push({task:$scope.taskInput, time: $scope.taskTime, cost: $scope.taskCost, finished:false});
      $scope.taskInput = "";
      $scope.taskTime = 0;
      $scope.taskCost = 0;
    };
    ctrl.removeTask = function(task) {
      var index = ctrl.project.taskList.indexOf(task);
      if(index === 0){
        ctrl.project.taskList.shift();
      } else {
        ctrl.project.taskList.splice(index, 1);
      }
    };
    ctrl.toggleDone = function(task){
      task.finished = !task.finished;
    };

    /*
    Buttons
     */
    ctrl.addNewMaterial = function(newMaterial, projectnr) {
      logger.info("Adding new material: " + newMaterial.name + ", €" + newMaterial.cost + " amount " + newMaterial.amount);
      //You need the project id first
    };

    $scope.oneAtATime = true;

    $scope.toggleEdit = function() {
      if(showEdit === false){
        showEdit = true;
        return showEdit;
      } else {
        showEdit = false;
        return false;
      }
    };

    /*
    Chips
     */
    ctrl.getArmorChips = function(){
      userService.getArmorChips().then(function(data){
        $scope.armorChips = JSON.parse(JSON.stringify(data));
      })
    };

    ctrl.addChipToProject = function(chip){
      logger.info("Adding chip to project");
      ctrl.addChipMaterials(chip.materials);
      ctrl.addChipTasks(chip.tasks);
    };

    ctrl.addChipMaterials = function(materials){
      logger.info("Adding " + materials.length + " materials");
      angular.forEach(materials, function(material){
        /*var dbMaterial = userService.getMaterialById(material.id); TODO add when database is in place*/
        logger.info("Adding material with id " + material.id);
        angular.forEach($scope.materials, function(dbMaterial){
          logger.info("Attempting to find material");
          if(dbMaterial.id === material.id){
            logger.info("Adding " + dbMaterial.name + " to project");
            ctrl.project.materials.push({name:dbMaterial.name, amount: material.amount, cost: (dbMaterial.cost * material.amount), quantitytype: dbMaterial.quantitytype});
          } else {
            logger.info("No material found with matching id");
          }
        });
      });
    };

    ctrl.addChipTasks = function(tasks){
      angular.forEach(tasks, function(task){
        ctrl.project.taskList.push({task:task.task, time: task.time, cost: task.cost, finished:false});
      });
    };
  });
