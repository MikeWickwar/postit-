app.factory('ReaditService', function ($http) {
  return {
    posts: function() {
      return $http.get('/api/readit').then(function (response) {
        return response.data;
      })
    },
    comments: function () {
      return $http.get('/api/readit/comments').then(function (response) {
        return response.data;
      })
    },
    addPost: function (post) {
      console.log('made it to service post', post);
      return $http.post("http://localhost:3000/api/readit", post);
    }
  }
})
