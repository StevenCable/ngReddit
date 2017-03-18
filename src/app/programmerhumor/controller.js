export const ProgHumourCtrl = ['$scope', 'proghumour', class ProgrammerHumourCtrl {
  constructor($scope, ProgHumourService) {
    this.title = "Awwwww funny lil' hackers, eh?";
    $scope.posts = [];
    ProgHumourService.getPosts()
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