'use strict'
var app = angular.module('myApp', [])

app.controller('mainController', ['$scope', function($scope){
  $scope.animationName = 'myAni'
  $scope.frames = []
  $scope.keyframes = []
  $scope.moveCode = false
  $scope.rotateCode = false
  $scope.time = 3
  $scope.x = 0
  $scope.y = 0

  $scope.animationProps = [ $scope.time, $scope.animationName]
  $scope.frameProps = ['transform', 'translate', 'rotate', 'scale', 'opacity', $scope.x, $scope.y]

  $scope.log = function(){
    console.log($scope.animation);
    console.log($scope.keyframes);
  }

  $scope.animations = [
    {animationType: 'Fade Out'},
    {animationType: 'Rotate Out'},
    {animationType: 'Bounce'}
  ]
  $scope.selectAnimation = function(info){
    if(info === 'Fade Out'){
      $scope.frames[0].isKeyFrame = true;
      $scope.frames[0].x = 0
      $scope.frames[0].y = 0
      $scope.frames[0].rotate = 0
      $scope.frames[0].scale = 1
      $scope.frames[0].opacity = 1
      $scope.frames[0].transform = ['transform', 'translate', 'rotate', 'scale', 'opacity']

      $scope.keyframes.push($scope.frames[0])

      $scope.frames[100].isKeyFrame = true;
      $scope.frames[100].x = 300
      $scope.frames[100].y = -150
      $scope.frames[100].rotate = 0
      $scope.frames[100].scale = 1
      $scope.frames[100].opacity = 0
      $scope.frames[100].transform = ['transform', 'translate', 'rotate', 'scale', 'opacity']

      $scope.keyframes.push($scope.frames[100])

      $scope.moveCode = true
    }

    if(info === 'rotate'){
      $scope.rotateCode = true
      $scope.moveCode = false
    }
  }

//setting frames
  function frameSet(){
    for (var i = 0; i <= 100; i++) {
      $scope.frame = {
        frameNum: i,
        isKeyFrame: false,
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1,
        opacity: 1,
        transform: ['transform', 'translate', 'rotate', 'scale', 'opacity']}
        $scope.frames.push($scope.frame)
    }
  }

// Designating keyframes
  $scope.selectFrame = function(info){
    for (var i = 0; i < $scope.frames.length; i++) {
      if($scope.frames[i].frameNum === info.frameNum){
        // if($scope.frames[i].isKeyFrame === true){
        //   $scope.frames[i].isKeyFrame = false
        // }
        $scope.frames[i].isKeyFrame = true
        $scope.keyframes.push($scope.frames[i])

      }
      sortKeyFrames()
    }
  }

  $scope.selectKeyFrame = function(info){
    for (var i = 0; i < $scope.keyframes.length; i++) {
      if ($scope.keyframes[i].frameNum === info.frameNum) {
        $scope.x = info.x
        $scope.y = info.y
      }
    }
  }

  function sortKeyFrames(){
    $scope.keyframes.sort(function (a, b) {
      return a.frameNum - b.frameNum;
    })
  }

  $scope.$watch('animationName', function(){
    $scope.animationProps[1] = $scope.animationName
  })

  $scope.$watch('time', function(){
    $scope.animationProps[0] = $scope.time
  })

  $scope.$watch('x', function(){
    $scope.frameProps[5] = $scope.x
     
  })

  $scope.$watch('y', function(){
    $scope.frameProps[6] = $scope.y
  })

  //move animation
  $(function(){
    $("#object").draggable({ containment: "#containment", scroll: false });
  })

$scope.getPosition = function(){
  $scope.position = $('#object').attr('style')
  var temp = $scope.position
  var tempArr = temp.split(';')

  $scope.findX = function(){
    if(tempArr[0].length < 10){
      var temp2 = tempArr[0].slice(6,7)
      $scope.x = temp2 - 400
    }
    else if(tempArr[0].length < 11){
      var temp2 = tempArr[0].slice(6,8)
      $scope.x = temp2 - 400
    }
    else{
      var temp2 = tempArr[0].slice(6,9)
      $scope.x = temp2 - 400
    }
  }

  $scope.findY = function(){

    if(tempArr[1].length < 10){
      var temp2 = tempArr[1].slice(6,7)
      $scope.y = temp2 - 250
    }
    else if(tempArr[1].length < 11){
      var temp2 = tempArr[1].slice(6,8)
      $scope.y = temp2 - 250

    }
    else{
      var temp2 = tempArr[1].slice(6,9)
      $scope.y = temp2 - 250
      console.log($scope.y);
    }
  }

  $scope.findX()
  $scope.findY()
}

  $scope.play = function(){
    console.log('HAHA are you SERIOUS!!!');
  }

  frameSet()

}])


// generate code function
// takes input from the base animation button
// takes input from the timeline
// takes input from the workspace
// outputs code formatted like CSS animation code
// output can also be saved to a DB
