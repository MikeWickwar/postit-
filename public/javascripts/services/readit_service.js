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
      return $http.post("/api/readit", post);
    },
    buildPost: function (post) {
      console.log('made it to buld post service post', post);
      post.votes = 0;
      post.comments = [];
      post.numOfComments = 0;
      post.time = new Date()
      post.toggler = false;
      post.singlePlural = "No Comments to Show"
      return post;
    },
    deletePost: function(post){
      console.log(post);
      console.log('here deleteing service', post.id);
      return $http.post("/api/readit/posts/"+post.id)
    }
  }
})
