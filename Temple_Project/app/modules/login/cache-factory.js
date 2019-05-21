(function(){
    'use strict';

    function CacheService($cacheFactory) {
        var cache = $cacheFactory('tasksCache');
        return cache;
    }

    CacheService.$inject = ['$cacheFactory'];
    angular.module('templeSevaUiApp').factory( 'cache', CacheService);
})();
