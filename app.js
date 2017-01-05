'use strict'
var app = angular.module('myApp', ['ngAnimate'])

app.controller('mainController', ['$scope', '$timeout', function($scope, $timeout) {
    $scope.welcome = false
    $scope.cloud = true
    $scope.animationName = 'myAni'
    $scope.frames = []
    $scope.keyframes = []
    $scope.fadeOut = false
    $scope.rotateOut = false
    $scope.time = 3
    $scope.x
    $scope.y

    $scope.animationProps = [$scope.time, $scope.animationName]
    $scope.frameProps = ['transform', 'translate', 'rotate', 'scale', 'opacity', $scope.x, $scope.y]

    $scope.log = function() {
        // console.log($scope.animation);
        console.log($scope.keyframes);
    }


    $timeout(function() {
        $scope.welcome = true
    }, 1000)

    $scope.animations = [{
        animationType: 'Fade Out'
    }, {
        animationType: 'Rotate Out'
    }, {
        animationType: 'Bounce'
    }]
    $scope.selectAnimation = function(info) {
        if (info === 'Fade Out') {
            $scope.keyframes = []
            $scope.frames[0].isKeyFrame = true;
            $scope.frames[0].x = 500
            $scope.frames[0].y = 300
            $scope.frames[0].rotate = 0
            $scope.frames[0].scale = 1
            $scope.frames[0].opacity = 1
            $scope.frames[0].transform = ['transform', 'translate', 'rotate', 'scale', 'opacity']

            $scope.keyframes.push($scope.frames[0])

            $scope.frames[100].isKeyFrame = true;
            $scope.frames[100].x = 900
            $scope.frames[100].y = 300
            $scope.frames[100].rotate = 0
            $scope.frames[100].scale = 1
            $scope.frames[100].opacity = 0
            $scope.frames[100].transform = ['transform', 'translate', 'rotate', 'scale', 'opacity']

            $scope.keyframes.push($scope.frames[100])

            $scope.fadeOut = true
        }

        if (info === 'Rotate Out') {
            $scope.keyframes = []

            $scope.rotateOut = true
            $scope.fadeOut = false

            $scope.frames[0].isKeyFrame = true;
            $scope.frames[0].x = 475
            $scope.frames[0].y = 300
            $scope.frames[0].rotate = 0
            $scope.frames[0].scale = 1
            $scope.frames[0].opacity = 1
            $scope.frames[0].transform = ['transform', 'translate', 'rotate', 'scale', 'opacity']

            $scope.keyframes.push($scope.frames[0])

            $scope.frames[100].isKeyFrame = true;
            $scope.frames[100].x = 900
            $scope.frames[100].y = 300
            $scope.frames[100].rotate = 720
            $scope.frames[100].scale = 1
            $scope.frames[100].opacity = 0
            $scope.frames[100].transform = ['transform', 'translate', 'rotate', 'scale', 'opacity']

            $scope.keyframes.push($scope.frames[100])
        }
    }

    //setting frames
    function frameSet() {
        for (var i = 0; i <= 100; i++) {
            $scope.frame = {
                frameNum: i,
                isKeyFrame: false,
                x: 0,
                y: 0,
                rotate: 0,
                scale: 1,
                opacity: 1,
                transform: ['transform', 'translate', 'rotate', 'scale', 'opacity']
            }
            $scope.frames.push($scope.frame)
        }
    }

    // Designating keyframes
    $scope.selectFrame = function(info) {
        for (var i = 0; i < $scope.frames.length; i++) {
            if ($scope.frames[i].frameNum === info.frameNum) {
                // if($scope.frames[i].isKeyFrame === true){
                //   $scope.frames[i].isKeyFrame = false
                // }
                $scope.frames[i].isKeyFrame = true
                $scope.keyframes.push($scope.frames[i])

            }
            sortKeyFrames()
        }
    }

    $scope.selectKeyFrame = function(info) {
        for (var i = 0; i < $scope.keyframes.length; i++) {
            if ($scope.keyframes[i].frameNum === info.frameNum) {
                $scope.x = info.x
                $scope.y = info.y
            }
        }
    }

    function sortKeyFrames() {
        $scope.keyframes.sort(function(a, b) {
            return a.frameNum - b.frameNum;
        })
    }

    $scope.$watch('animationName', function() {
        $scope.animationProps[1] = $scope.animationName
    })

    $scope.$watch('time', function() {
        $scope.animationProps[0] = $scope.time
    })

    $scope.$watch('x', function() {
        $scope.frameProps[5] = $scope.x

    })

    $scope.$watch('y', function() {
        $scope.frameProps[6] = $scope.y
    })

    $scope.getPosition = function() {
        $scope.position = $('#object').attr('style')
        var temp = $scope.position
        var tempArr = temp.split(';')

        $scope.findX = function() {
            if (tempArr[0].length < 10) {
                var temp2 = tempArr[0].slice(6, 7)
                $scope.x = temp2
            } else if (tempArr[0].length < 11) {
                var temp2 = tempArr[0].slice(6, 8)
                $scope.x = temp2
            } else {
                var temp2 = tempArr[0].slice(6, 9)
                $scope.x = temp2
            }
        }

        $scope.findY = function() {

            if (tempArr[1].length < 10) {
                var temp2 = tempArr[1].slice(6, 7)
                $scope.y = temp2
            } else if (tempArr[1].length < 11) {
                var temp2 = tempArr[1].slice(6, 8)
                $scope.y = temp2

            } else {
                var temp2 = tempArr[1].slice(6, 9)
                $scope.y = temp2
                console.log($scope.y);
            }
        }

        $scope.findX()
        $scope.findY()
    }

//jQuery move animations
    //enables moving on default object
    $(function() {
        $("#object").draggable({
            containment: "#containment",
            scroll: false
        });
    })
    //enable moving on welcome pop-up
    $(function() {
        $(".welcome").draggable();
    })

    //runs playback animation of all keyframes
    $(".playBtn").click(function() {

        animateIt(0, $scope.keyframes)

        function animateIt(index, keyframes) {
            console.log('in animateIt');
            console.log('index: ', index);

            if (index < keyframes.length) {
                // doit again
                console.log('index: ', index);
                $("#object").animate({
                        opacity: $scope.keyframes[index].opacity,
                        left: $scope.keyframes[index].x,
                        top: $scope.keyframes[index].y
                    }, 1000,
                    function() {
                        console.log('im here');
                        animateIt(index + 1, keyframes)
                    })
            } else {
                return
            }
        }
    })

    //resets animation
    $('.resetBtn').click(function(){
      console.log('im here');
      $('#object').animate({
        opacity: $scope.keyframes[0].opacity,
        left: $scope.keyframes[0].x,
        top: $scope.keyframes[0].y
      }, 0, function(){
        console.log('reset');
      })
    })


    frameSet()




}])


// generate code function
// takes input from the base animation button
// takes input from the timeline
// takes input from the workspace
// outputs code formatted like CSS animation code
// output can also be saved to a DB
