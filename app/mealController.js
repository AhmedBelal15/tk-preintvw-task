angular.module("appModule").controller("mealController", [
  "$scope",
  function($scope){
    $scope.categories = ["Main Dish", "Appetizer", "Salad", "Dessert"];
    $scope.log = function(){
      const data = JSON.parse(localStorage.getItem('meal-data'))
      console.log(data);
      if(data){
        const newData = [...data, $scope.meal]
        localStorage.setItem('meal-data', JSON.stringify(newData))
      } else {
        localStorage.setItem('meal-data', JSON.stringify([$scope.meal]))
      }
      $scope.meal.name=''
      $scope.meal.price=''
      $scope.meal.description=''
      $scope.meal.category=''
    }
  },
]);
