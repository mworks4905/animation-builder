app.service('animationService', function($http){
  return {
    getAnimations: function(){
      return $http.get('/api/animations').then(function(res){
        return res.data
      })
    },
    saveAnimation: function(arr){
      var reqObj = {arr}
      console.log(arr);
      return $http.post('/api/animation')
    }
  }
})
