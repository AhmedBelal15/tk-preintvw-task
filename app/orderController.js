angular.module("appModule").controller("order-controller", [
  "$scope",
  "mealOrderServices",
  function ($scope, mealOrderServices) {
    const mealsData = JSON.parse(localStorage.getItem("meal-data"));
    $scope.mealsData = mealsData;

    $scope.total = mealOrderServices.total($scope);
    $scope.mealsArray = [];
    $scope.totalPrice = 0;

    $scope.addMealToOrder = mealOrderServices.addMealToOrder($scope);
    $scope.addOrder = mealOrderServices.addOrder($scope);
  },
]);
