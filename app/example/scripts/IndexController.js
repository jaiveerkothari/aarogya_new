angular
  .module('example')
  .controller('IndexController', function($scope, supersonic) {
    Parse.initialize("YdciSvjYPxd4lqlcyHqcbAmyZpCkECZjG6LFiqvk", "KavEECdKH4FU4qxIikS8zPq6xPbvGAvdFuOUlGG2");
    var searchHistory = Parse.Object.extend("searchHistory");
    //Parse.GeoPoint.current({
	//	success: function (point) {
	//		$scope.myLocation = point;
	//	}
    //});
    $scope.navbarTitle = "Settings";
    $scope.searchList = function(){
	var newSearch = new searchHistory();
        newSearch.set("search", $scope.searchThing);
	newSearch.save();
	//window.location.assign("https://www.google.com/#q=" + $scope.searchThing);
        //var view = new supersonic.ui.View("https://www.google.com/#q=" + $scope.searchThing);
	var view = new supersonic.ui.View("example#search");
	supersonic.ui.layers.push(view);
    };
    $scope.searchMap = function(){
        var newSearch = new searchHistory();
        newSearch.set("search", $scope.searchThing);
	newSearch.save();
	var view = new supersonic.ui.View("https://www.google.com/maps/search/" + $scope.searchThing + "/@" + "42"+ ","+"-87"+",14z/data=!3m1!4b1");
	supersonic.ui.layers.push(view);
        //window.location.assign("https://www.google.com/maps/search/" + $scope.searchThing + "/@"
	//+ "42" +"," 
	//+ "-87" + ",14z/data=!3m1!4b1");
    };
 });
