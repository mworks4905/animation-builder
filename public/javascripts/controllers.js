'use strict'

app.controller('mainController', ['$scope', '$timeout', function($scope, $timeout) {
    $scope.welcome = false
    $scope.cloud = true
    $scope.animationName = 'myAni'
    $scope.frames = []
    $scope.keyframes = []
    $scope.fadeOut = false
    $scope.rotateOut = false
    $scope.bounce = false
    $scope.time = 3
    var time
    var timeArr = []
    $scope.x
    $scope.y
    $scope.opacity = 1

    $scope.animationProps = [$scope.time, $scope.animationName]
    $scope.frameProps = ['transform', 'translate', 'rotate', 'scale', 'opacity', $scope.x, $scope.y]

    //Debug purposes only
    $scope.log = function() {
        // console.log($scope.animation);
        // console.log($scope.keyframes);
        // console.log(time);
    }

    //watchers
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

    $timeout(function() {
        $scope.welcome = true
    }, 1000)

    //enable moving on welcome pop-up
    $(function() {
        $(".welcome").draggable();
    })

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

            $scope.fadeOut = true
            $scope.rotateOut = false
            $scope.bounce = false


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

        }

        if (info === 'Rotate Out') {
            $scope.keyframes = []

            $scope.rotateOut = true
            $scope.fadeOut = false
            $scope.bounce = false


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
            $scope.frames[100].rotate = 180
            $scope.frames[100].scale = 1
            $scope.frames[100].opacity = 0
            $scope.frames[100].transform = ['transform', 'translate', 'rotate', 'scale', 'opacity']

            $scope.keyframes.push($scope.frames[100])
        }

        if (info === 'Bounce') {
            $scope.keyframes = []

            $scope.rotateOut = false
            $scope.fadeOut = false
            $scope.bounce = true


            $scope.frames[0].isKeyFrame = true;
            $scope.frames[0].x = 500
            $scope.frames[0].y = 300
            $scope.frames[0].rotate = 0
            $scope.frames[0].scale = 1
            $scope.frames[0].opacity = 1
            $scope.frames[0].transform = ['transform', 'translate', 'rotate', 'scale', 'opacity']

            $scope.keyframes.push($scope.frames[0])

            $scope.frames[20].isKeyFrame = true;
            $scope.frames[20].x = 500
            $scope.frames[20].y = 250
            $scope.frames[20].rotate = 0
            $scope.frames[20].scale = 1
            $scope.frames[20].opacity = 1
            $scope.frames[20].transform = ['transform', 'translate', 'rotate', 'scale', 'opacity']

            $scope.keyframes.push($scope.frames[20])

            $scope.frames[40].isKeyFrame = true;
            $scope.frames[40].x = 500
            $scope.frames[40].y = 300
            $scope.frames[40].rotate = 0
            $scope.frames[40].scale = 1
            $scope.frames[40].opacity = 1
            $scope.frames[40].transform = ['transform', 'translate', 'rotate', 'scale', 'opacity']

            $scope.keyframes.push($scope.frames[40])

            $scope.frames[60].isKeyFrame = true;
            $scope.frames[60].x = 500
            $scope.frames[60].y = 275
            $scope.frames[60].rotate = 0
            $scope.frames[60].scale = 1
            $scope.frames[60].opacity = 1
            $scope.frames[60].transform = ['transform', 'translate', 'rotate', 'scale', 'opacity']

            $scope.keyframes.push($scope.frames[60])

            $scope.frames[80].isKeyFrame = true;
            $scope.frames[80].x = 500
            $scope.frames[80].y = 300
            $scope.frames[80].rotate = 0
            $scope.frames[80].scale = 1
            $scope.frames[80].opacity = 1
            $scope.frames[80].transform = ['transform', 'translate', 'rotate', 'scale', 'opacity']

            $scope.keyframes.push($scope.frames[80])

            $scope.frames[100].isKeyFrame = true;
            $scope.frames[100].x = 500
            $scope.frames[100].y = 300
            $scope.frames[100].rotate = 180
            $scope.frames[100].scale = 1
            $scope.frames[100].opacity = 1
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
    frameSet()

    // Designating and removing keyframes
    $scope.selectFrame = function(info) {
        for (var i = 0; i < $scope.frames.length; i++) {
            if ($scope.frames[i].frameNum === info.frameNum) {

                if ($scope.frames[i].isKeyFrame === true) {
                    $scope.frames[i].isKeyFrame = false
                    removeKeyframe(info)
                    return
                }

                $scope.frames[i].isKeyFrame = true
                $scope.frames[i].x = $scope.x
                $scope.frames[i].y = $scope.y
                $scope.frames[i].rotate = info.rotate
                $scope.frames[i].scale = info.scale
                $scope.frames[i].opacity = $scope.opacity

                $scope.keyframes.push($scope.frames[i])
            }
            sortKeyframes()
        }
    }

    $scope.selectKeyFrame = function(info) {
        for (var i = 0; i < $scope.keyframes.length; i++) {
            if ($scope.keyframes[i].frameNum === info.frameNum) {
                $scope.x = info.x
                $scope.y = info.y
                $scope.opacity = info.opacity
            }
        }
    }

    function removeKeyframe(info) {
        for (var i = 0; i < $scope.keyframes.length; i++) {
            if ($scope.keyframes[i].frameNum === info.frameNum && $scope.keyframes[i].isKeyFrame === false) {
                $scope.keyframes.splice(i, 1)
            }
        }
    }

    function sortKeyframes() {
        $scope.keyframes.sort(function(a, b) {
            return a.frameNum - b.frameNum;
        })
    }

    // Timeline buttons

    // runs playback animation of all keyframes
    $scope.playBtn = function() {
        timeArr = []

        for (var i = 0; i < $scope.keyframes.length - 1; i++) {
            time = ((($scope.keyframes[i + 1].frameNum - $scope.keyframes[i].frameNum) / 100) * $scope.time) * 1000
            timeArr.push(time)
        }

        animateIt(1, 0, $scope.keyframes)

        function animateIt(index, timeIndex, keyframes) {
            if (index < keyframes.length) {

                $("#object").animate({
                        left: $scope.keyframes[index].x,
                        top: $scope.keyframes[index].y,
                        opacity: $scope.keyframes[index].opacity
                    }, timeArr[timeIndex],
                    function() {
                        animateIt(index + 1, timeIndex + 1, keyframes)
                    })
            } else {
                return
            }
        }
    }

    // resets animation
    $scope.resetBtn = function() {
        $('#object').animate({
            left: $scope.keyframes[0].x,
            top: $scope.keyframes[0].y,
            opacity: $scope.keyframes[0].opacity
        }, 0, function() {
            //object reset
        })
    }

    // clears all keyframes from the timeline
    $scope.clear = function() {
        $scope.keyframes = []
        for (var i = 0; i < $scope.frames.length; i++) {
            $scope.frames[i].isKeyFrame = false
        }
    }

    // loads all current user's saved animations
    $scope.load = function() {
        animationService.getAnimations().then(function(res) {
            //ng-repeat next to base animations
        })
    }

    // saves current keyframes to user's profile
    $scope.save = function() {
        console.log('save function');
        animationService.saveAnimation($scope.keyframes)

    }

    $scope.getPosition = function() {
        $scope.position = $('#object').attr('style')
        var position = $scope.position
        var positionArr = position.split(';')

        $scope.findX(positionArr)
        $scope.findY(positionArr)
    }

    $scope.findX = function(arr) {
        if (arr[0].length < 10) {
            var x = arr[0].slice(6, 7)
            $scope.x = x
        } else if (arr[0].length < 11) {
            var x = arr[0].slice(6, 8)
            $scope.x = x
        } else {
            var x = arr[0].slice(6, 9)
            $scope.x = x
        }
    }

    $scope.findY = function(arr) {
        if (arr[1].length < 10) {
            var y = arr[1].slice(6, 7)
            $scope.y = y
        } else if (arr[1].length < 11) {
            var y = arr[1].slice(6, 8)
            $scope.y = y

        } else {
            var y = arr[1].slice(6, 9)
            $scope.y = y
        }
    }

    //enables moving on default object
    $scope.move = function() {
        $(function() {
            $("#object").draggable({
                containment: "#containment",
                scroll: false,
                cursor: 'move',
            });
        })
    }

    // function for object rotation

    // function for object scaling


}])
