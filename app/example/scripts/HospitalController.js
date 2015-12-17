angular
  .module('example')
  .controller('HospitalController', function($scope, supersonic) {
    Parse.initialize("YdciSvjYPxd4lqlcyHqcbAmyZpCkECZjG6LFiqvk", "KavEECdKH4FU4qxIikS8zPq6xPbvGAvdFuOUlGG2");
    var hospitals = Parse.Object.extend("hospitals");
    $scope.searchList = function(){
	var view = new supersonic.ui.View("example#search");
	supersonic.ui.layers.push(view);
    };
});
