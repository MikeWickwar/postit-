app.factory('ReaditService', function ($http) {
  return {
    all: function() {
      return $http.get('/api/readit').then(function (response) {
        return response.data;
      })
    }
  }
})
