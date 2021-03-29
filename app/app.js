angular.module("appModule", ["ngRoute"]);

angular.module("appModule").config([
  "$routeProvider",
  function($routeProvider) {
    $routeProvider
      .when("/addmeal", {
        templateUrl: "views/addMealView.html",
        controller: "mealController",
      })
      .when("/addorder", {
        templateUrl: "views/addOrderView.html",
        controller: "orderController"
      })
      .otherwise({
        redirectTo: "/addmeal",
      });
  },
]);

