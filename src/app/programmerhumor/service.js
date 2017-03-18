export const ProgHumourServiceName = 'proghumour';
export const ProgHumourService = [
  '$http',
  class ProgHumourService{

    constructor($http){
      this.$http = $http;
      this.endpoint = 'https://www.reddit.com/r/aww.json';
    }

    getPosts(){
      return this.$http.get(this.endpoint);
    }
  }
];