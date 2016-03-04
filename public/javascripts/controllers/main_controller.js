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
        var form = {};
          form.id = post.id;
          form.title = post.title;
          form.author = post.author;
          form.img_url = post.img_url;
          form.description = post.description;
          form.votes = post.votes;
          form.numOfComments = 0;
          form.comments = [];
          comments.forEach(function (comment) {
            if (comment.post_id === post.id) {
              form.comments.push(comment);
              form.numOfComments ++;
            }
          })
          console.log(post.post_id);
          console.log(post.id);
          form.time = new Date();
          form.index = $scope.index++;
          form.toggler = false;
          form.singlePlural = 'No Comments To Show'
          $scope.forms.push(form);
          $scope.title = null;
          $scope.author = null;
          $scope.img_url = null;
          $scope.description = null;
        })
      })
    })

  // ReaditService.all().then(function (posts) {
  //   posts.forEach(function (post, i) {
  //       console.log(post, "opst!!!!");
  //       console.log($scope.forms, "FOOOORM");
  //       if ($scope.forms[i] != post) {
  //         console.log('test 1');
  //         var form = {}
  //         form.id = post.id
  //         form.title = post.title;
  //         form.author = post.author;
  //         form.img_url = post.img_url;
  //         form.description = post.description;
  //         form.votes = post.votes;
  //         form.numOfComments = 0;
  //         form.comments = [];
  //         console.log(post.post_id);
  //         console.log(post.id);
  //         form.time = new Date()
  //         form.index = $scope.index++;
  //         form.toggler = false;
  //         form.singlePlural = "No Comments to Show"
  //         $scope.forms.push(form);
  //         $scope.title = null;
  //         $scope.author = null;
  //         $scope.img_url = null;
  //         $scope.description = null;
  //         if (post.post_id === post.id) {
  //           var newComment = {}
  //           console.log('here');
  //           newComment.commentAuthor = post.comment_author
  //           newComment.comment = post.comment
  //           form.comments.push(newComment)
  //           form.numOfComments ++;
  //           console.log(form.comments);
  //         }
  //       }else if (post.post_id === post.id) {
  //         var newComment = {}
  //         console.log('here');
  //         newComment.commentAuthor = post.comment_author
  //         newComment.comment = post.comment
  //         form.comments.push(newComment)
  //         form.numOfComments ++;
  //         console.log(form.comments)
  //         }
  //
  //     })
  //   })

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
    var form = {}
    form.title = $scope.title;
    form.author = $scope.author;
    form.img_url = $scope.img_url;
    form.description = $scope.description;
    form.votes = 0;
    form.comments = [];
    form.numOfComments = 0;
    form.time = new Date()
    form.index = $scope.index++;
    form.toggler = false;
    form.singlePlural = "No Comments to Show"
    $scope.forms.push(form);
    $scope.toggleShow();
    $scope.title = null;
    $scope.author = null;
    $scope.img_url = null;
    $scope.description = null;
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
