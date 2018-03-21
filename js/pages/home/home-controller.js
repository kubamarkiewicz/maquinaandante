app.controller('HomeController', function($scope, $rootScope, $http, $routeParams, config) {  

	var video = $("section#home video").get(0);

    function loadVideo(src)
    {
        $(video).attr('src', src);
        video.load();
    }

    function playVideo(src)
    {
	    loadVideo(src);
        video.play();
    }	

    function playIntro()
    {
    	playVideo('videos/intro.mp4');
    	video.onended = playAbout;
    }

    function playAbout()
    {
    	playVideo('videos/about.mp4');
        $('section#home main a').addClass('show');
        $('#frame > nav').addClass('show');
    	video.onended = goToWorks;
    }

    function goToWorks()
    {
    	window.location.href = 'works';
    }


    playIntro();

});