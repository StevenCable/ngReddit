export const AwwCtrl = ['$scope', 'aww', class AwwCtrl {
  constructor() {
    this.title = "Awwwww cute lil' fuckers, eh?";
    $scope.posts = [];
    Service.getPosts()
      .then(posts => {
        $scope.posts = posts;
      });
  }
}];