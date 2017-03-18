export const AwwCtrl = ['$scope', 'aww', class AwwCtrl {
  constructor($scope, AwwService) {
    this.title = "Awwwww cute lil' fuckers, eh?";
    $scope.posts = [];
    AwwService.getPosts()
      .then(({
        status,
        data: {
          data: {
            children
          }
        }
      }) => {
        if( status !== 200 ){
          $scope.error = `yo bro, no go d'oh!`;
        }
        $scope.posts = children
          .filter(child => {
            let image =  child.data.preview.images[0].source.url;
              if(image.indexOf('gif') <0 ){
                return child;
              }
          })
          .map(child => child.data);
      })
      .catch(err => console.error(err));
  }
}];