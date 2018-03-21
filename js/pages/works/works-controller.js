app.controller('WorksController', function($scope, $rootScope, $http, $routeParams, config) {  


	$scope.playlistIndex = 0;

    // load works data
    $scope.worksData = [];
    $scope.loadWorksData = function()
    {
        $http({
            method  : 'GET',
            url     : config.api.urls.getWorks,
            params  : {
                'lang': $rootScope.language
            }
        })
        .then(function(response) {
            $scope.worksData = response.data;
			playNext();
        });
    }
    setTimeout(function(){ 
        $scope.loadWorksData();
        $('section#works h1.pageTitle').hide();
    }, 2000);
    



    var video = $("section#works video").get(0);


    $scope.loadVideo = function(src)
    {
        $(video).attr('src', src);
        video.load();
    }


    var toggleSeparator = true;

    function playNext()
    {
        // play separator
        if (toggleSeparator) {
            separatorPlay();
            toggleSeparator = false;
        }
        // play video from playlist
        else {
            $scope.playlistIndex++;
            $scope.$apply();
            if ($scope.playlistIndex >= $scope.worksData.length) {
                $scope.playlistIndex = 0;
            }
            playlistPlay($scope.playlistIndex);
            toggleSeparator = true;        
        }
    }

    video.onended = playNext;



    function playlistPlay(index)
    {
        // load & play current video
        $scope.loadVideo($scope.worksData[index]['video']);
        video.play();

        // show title
        $('section#works .info').removeClass('show');
        setTimeout(function() {
            $('section#works .info').addClass('show');
        },3);
    }


	function separatorPlay()
	{
		$scope.loadVideo('videos/works-separator.mp4');
		video.play();

        $('section#works .info').removeClass('show');
	}




});