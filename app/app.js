angular.module("appModule", ["ngRoute"]);

angular.module("appModule").config([
  "$routeProvider",
  function($routeProvider) {
    $routeProvider
      .when("/addmeal", {
        templateUrl: "views/addMealView.html",
        controller: "meal-controller",
      })
      .when("/addorder", {
        templateUrl: "views/addOrderView.html",
        controller: "order-controller"
      })
      .otherwise({
        redirectTo: "/addmeal",
      });
  },
]);

