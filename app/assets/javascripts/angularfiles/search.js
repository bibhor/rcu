myApp.controller('SearchCtrl', ['$scope', '$http', 'searchFunctions',
  function ($scope, $http, searchFunctions) {
 
    $scope.search = {what:'', where:''};
    $scope.recent = [];
    $scope.results = [];

    $scope.markers = [];
    $scope.price_options = [
                            {text:'less than 20',value:'20'},
                            {text:'less than 50',value:'50'},
                            {text:'less than 100',value:'100'},
                            {text:'less than 1000',value:'1000'},
                            {text:'Over 1000',value:'>1000'}
                            ];
    $scope.lat_lng = new google.maps.LatLng(39.37, -112.02)

    $scope.mapOptions = {
                center: $scope.lat_lng,
                zoom: 8
            };

    $scope.date_options = [
                            {text:'',value:''},
                            {text:'',value:''},
                            {text:'',value:''},
                            {text:'',value:''}
                            ];

    $scope.distance_options = [
                            {text:'5 mile radius',value:'5'},
                            {text:'10 mile radius',value:'10'}
                            ];

    $scope.init = function() {
        var map = new google.maps.Map(document.getElementById("map-canvas"), $scope.mapOptions);
        var promise = searchFunctions.getAll();
        promise.then(
            function(data){
                $scope.results = data;
            },function(reason){
                console.log('Failed: '+reason);
            }
        );
        // To add the marker to the map, use the 'map' property
        var marker = new google.maps.Marker({
                            position: $scope.lat_lng,
                            map: map,
                            title:"Hello World!"
                    });
        $scope.markers.push(marker);
    };

    $scope.doSearch = function() {
        var promise = searchFunctions.doSearch($scope.search.what, $scope.search.where);
        promise.then(
            function(data){
                $scope.results = data;
            },function(reason){
                console.log('Failed: '+reason);
            }
        )
    };
}]);