angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $location,$state) {
	$scope.goPharmacies = function() {
        $state.go('app.playlists'); 
    };
})
.controller('MenuCtrl', function($scope) {

})

.controller('ListController', function($scope) {
   $scope.items = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('ListItemController', function($scope,$stateParams) {
   console.log($stateParams);
})
