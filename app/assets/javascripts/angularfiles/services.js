myApp.factory('searchFunctions', function($http, $q){
    return {
        getAll: function(){
            var deferred = $q.defer();
            $http.get('city/index.json').success(function(data) {
                deferred.resolve(data);
            }).error(function(data, status){
                deferred.reject(data);
            });
            return deferred.promise;
        },
        doSearch: function(what, where){
            var deferred = $q.defer();
            var param = {q: what, w: where};
            $http.post('classifieds/search.json',param).success(function(data) {
                deferred.resolve(data);
            }).error(function(data, status){
                deferred.reject(data);
            });
            return deferred.promise;
        },
        doLogin: function(username, password){

        }
    }               
});