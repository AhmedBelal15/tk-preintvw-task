angular.module("appModule").controller("meal-controller", [
  "$scope",
  "addMealServices",
  function($scope, addMealServices){
    $scope.categories = ["Main Dish", "Appetizer", "Salad", "Dessert"];
    $scope.addMeal = addMealServices.addMeal($scope)
    $scope.setFile= addMealServices.setFile($scope)
  },
]);
