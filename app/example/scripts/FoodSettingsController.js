angular
  .module('example')
  .controller('FoodSettingsController', function($scope, supersonic) {
    //Parse.initialize("9ZMoGrZm9iXcoZVZzrt3yh7AJG9GpzbvrD8JDiCz", "pKhmjvhc6hWm7FmsrNjKEvbEac1446gDvNaCEO3k");
    Parse.initialize("HxZKObXH6PGYX3yR0KXj1gCDHc5ON3oYWwcJXql9", "s6JNCHywzyV77o081q4qaV0reQTp0T9pKXtjKYV1");
    supersonic.logger.log("we are in SettingsController");
    $scope.master = {};
    // $scope.user1={mood:"happy"};
    // $scope.ufood="yo";
    // $scope.uex="yo";
    $scope.buttonStyle="button-calm";

        $scope.mycuisines = [{
            name: 'Home-Cooked',
            value: false
        }, {
            name: 'Andhra',
            value: false
        }, {
            name: 'Chinese',
            value: false
        }, {
            name: 'Pizza',
            value: false
        }, {
            name: 'Burger',
            value: false
        }, {
            name: 'Dosa',
            value: false
        }];
    $scope.updateSettings = function() {

        //$scope.buttonStyle="button-balanced";
        var Cuisine = Parse.Object.extend("Cuisine");
        var Diet = Parse.Object.extend("Diet");
        
        supersonic.logger.log("Diet ng models");
        supersonic.logger.log($scope.veg);
        supersonic.logger.log($scope.nonveg);
        supersonic.logger.log($scope.seafood);


        if($scope.veg){
            supersonic.logger.log("veg selected");

            var newDiet = new Diet();
            newDiet.set("cuisineName","veg");
            newDiet.set("user",Parse.User.current());
            newDiet.save(null, {
          success: function(newDiet) {
            // Execute any logic that should take place after the object is saved.
            supersonic.logger.log("food saved");
          },
          error: function(newDiet, error) {
            // Execute any logic that should take place if the save fails.
            // error is a Parse.Error with an error code and message.
            supersonic.logger.log("food NOT saved");
          }
        });
        }      

        if($scope.nonveg){
            supersonic.logger.log("nonveg selected");

            var newDiet2 = new Diet();
            newDiet2.set("cuisineName","nonveg");
            newDiet2.set("user",Parse.User.current());
            newDiet2.save(null, {
          success: function(newDiet) {
            // Execute any logic that should take place after the object is saved.
            supersonic.logger.log("food saved");
          },
          error: function(newDiet, error) {
            // Execute any logic that should take place if the save fails.
            // error is a Parse.Error with an error code and message.
            supersonic.logger.log("food NOT saved");
          }
        });
        }      

        if($scope.seafood){
            supersonic.logger.log("seafood selected");

            var newDiet3 = new Diet();
            newDiet3.set("cuisineName","seafood");
            newDiet3.set("user",Parse.User.current());
            nnewDiet3.save(null, {
          success: function(newDiet) {
            // Execute any logic that should take place after the object is saved.
            supersonic.logger.log("food saved");
          },
          error: function(newDiet, error) {
            // Execute any logic that should take place if the save fails.
            // error is a Parse.Error with an error code and message.
            supersonic.logger.log("food NOT saved");
          }
        });
        }      

      

        supersonic.ui.dialog.alert("Updated successfully");
        supersonic.ui.layers.pop();


    };

    
    
    
 });
