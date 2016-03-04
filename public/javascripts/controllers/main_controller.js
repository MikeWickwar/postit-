app.controller('MyController', ['$scope', 'ReaditService', function ($scope, ReaditService) {
  $scope.forms = [];
  $scope.showMe = false
  $scope.showComment = false
  $scope.showFormComment = false
  $scope.sorter = {value :'-votes',
                   title : 'Votes'};
  var vm = this;
  vm.time = new Date()
  $scope.index = 0;

  ReaditService.posts().then(function (posts) {
    ReaditService.comments().then(function (comments) {
      posts.forEach(function (post) {
        post.singlePlural = 'No Comments To Show'
        post.numOfComments = 0;
        post.comments = [];
        comments.forEach(function (comment) {
          if (comment.post_id === post.id) {
            post.comments.push({comment:comment.comment, commentAuthor:comment.comment_author});
            post.numOfComments ++;
            post.singlePlural = post.numOfComments + " Comments";
          }
        })
        post.created_at = new Date();
        post.index = $scope.index++;
        post.toggler = false;
        $scope.forms.push(post);
        $scope.title = null;
        $scope.author = null;
        $scope.img_url = null;
        $scope.description = null;
      })
    })
  })

  $scope.voteColor = function (post) {
    var votenum = document.getElementById('vote_color'+post.index);
    if (post.votes === 0) {
      votenum.style.color = "black";
    }else if (post.votes > 0) {
      votenum.style.color = "green";
    }else if (post.votes < 0) {
      votenum.style.color = "red"
    }
  }
  $scope.toggleShow = function () {
    $scope.showMe = !$scope.showMe
  }
  $scope.showComment = function (post) {
    post.commentToggler = true;
  }
  $scope.toggleCommentShow = function (post) {
    post.commentToggler = !post.commentToggler
  }
  $scope.toggleCommentFormShow = function (post) {
    post.toggler = !post.toggler
    console.log('here');
  }
  $scope.upVote = function (post) {
    post.votes = post.votes + 1
    voteColor(post);
  }
  $scope.downVote = function (post) {
    post.votes = post.votes - 1
    voteColor(post);
  }
  $scope.sortby = function (value) {
    $scope.sorter = value;
  }

  $scope.submitForm= function () {
    $scope.post = ReaditService.buildPost($scope.post);
    $scope.post.index = $scope.index++;
    $scope.forms.push($scope.post);
    $scope.toggleShow();
    $scope.post = {};
    ReaditService.addPost($scope.post).then(function (response) {
        console.log(response, "pooooossssttted");
    })
  }

  $scope.submitCommentForm= function (post) {
    var newComment = {}
    post.numOfComments += 1;
    var comment = (document).getElementById('cFormComment'+post.index)
    var author = (document).getElementById('cFormAuthor'+post.index)
    newComment.commentAuthor = author.value
    newComment.comment = comment.value
    post.comments.push(newComment)
    singlePlural(post)
    $scope.toggleCommentFormShow(post)
    author.value = null;
    comment.value = null ;

  }

  singlePlural = function (post) {
    if (post.comments.length === 1) {
      post.singlePlural = "Show "+post.numOfComments+" Comment"
      } else {
      post.singlePlural = "Show "+post.numOfComments+" Comments"
      }
    }
}])
