angular.module("appModule").service("mealOrderServices", function () {
  this.total = function ($scope) {
    return function () {
      let combo = 0,
        spicy = 0;
      if ($scope.combo) {
        combo = 2;
      }
      if ($scope.spicy) {
        spicy = 1;
      }
      if ($scope.selectedMeal && $scope.quantity) {
        return (
          (parseInt(JSON.parse($scope.selectedMeal).price) + combo + spicy) *
          $scope.quantity
        );
      }
    };
  };

  this.addMealToOrder = function ($scope) {
    return function () {
      const meal = {};
      let addons = "";
      if ($scope.combo) addons += "combo ";
      if ($scope.spicy) addons += "spicy";

      meal.name = JSON.parse($scope.selectedMeal).name;
      meal.quantity = $scope.quantity;
      meal.price = JSON.parse($scope.selectedMeal).price;
      meal.addons = addons;
      meal.total = $scope.total();

      $scope.mealsArray.push(meal);
      $scope.totalPrice += meal.total;

      $scope.combo = false;
      $scope.spicy = false;
      $scope.quantity = "";
      $scope.selectedMeal = "";
      $scope.mealCategory = "";
    };
  };

  this.addOrder = function ($scope) {
    return function () {
      let ordersArray = [];
      if ($scope.mealsArray.length === 0) {
        return;
      }
      ordersArray.push({
        orederArray: $scope.mealsArray,
        orderTotal: $scope.totalPrice,
      });
      localStorage.setItem("orders", JSON.stringify(ordersArray));
      $scope.totalPrice = 0;
      ordersArray = [];
      $scope.mealsArray = [];
    };
  };
});
