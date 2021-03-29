angular.module("appModule").controller("orderController", [
  "$scope",
  function ($scope) {
    const mealsData = JSON.parse(localStorage.getItem("meal-data"));
    $scope.mealsData = mealsData;

    $scope.total = function () {
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

    $scope.mealsArray = [];
    $scope.totalPrice = 0;

    $scope.addMealToOrder = function () {
      const mealObject1 = {};
      let addons = "";
      if ($scope.combo) addons += "combo ";
      if ($scope.spicy) addons += "spicy";
      mealObject1.name = JSON.parse($scope.selectedMeal).name;
      mealObject1.quantity = $scope.quantity;
      mealObject1.price = JSON.parse($scope.selectedMeal).price;
      mealObject1.addons = addons;
      mealObject1.total = $scope.total();
      $scope.mealsArray.push(mealObject1);
      $scope.totalPrice += mealObject1.total;
      $scope.combo = false;
      $scope.spicy = false;
      $scope.quantity = "";
      $scope.selectedMeal = "";
      $scope.mealCategory = "";
    };

    $scope.addOrder = function () {
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
  },
]);
