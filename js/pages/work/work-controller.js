app.controller('WorkController', function($scope, $rootScope, $http, $routeParams, config) {  

    console.log('WorkController');

	var video = $("section#work video").get(0);

    function playVideo(src)
    {
	    $(video).find('source').attr('src', src);
        video.load();
        video.play();
    }


    function playFragments()
    {
    	playVideo('videos/works/looking-for/fragments.mp4');
    	video.onended = showText;
    }


    function showText()
    {
    	playVideo('videos/works/looking-for/background.mp4');
    	video.loop = true; 
    	$('section#work').addClass('show-text');
    }

    playFragments();

});