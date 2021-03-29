angular.module("appModule").controller("meal-controller", [
  "$scope",
  function($scope){
    $scope.categories = ["Main Dish", "Appetizer", "Salad", "Dessert"];

    $scope.addMeal = function(){
      const data = JSON.parse(localStorage.getItem('meal-data'))
      //form validation
      if($scope.meal.price < 1 || $scope.meal.name === '' || $scope.meal.category === ''){return}
      
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
      $scope.image_source= 'Assets/image-placeholder.jpg'
    }

    $scope.setFile = function(element) {
      $scope.currentFile = element.files[0];
       var reader = new FileReader();
    
      reader.onload = function(event) {
        $scope.image_source = event.target.result
        $scope.$apply()
    
      }
      reader.readAsDataURL(element.files[0]);
    }

  },
]);
