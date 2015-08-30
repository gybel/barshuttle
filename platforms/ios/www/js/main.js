// JavaScript Document

$( document ).bind( "mobileinit", function() {
    // Make your jQuery Mobile framework configuration changes here!

    $.support.cors = true;
$.mobile.allowCrossDomainPages = true;
});

var deviceType;


/*function onDeviceReady() {
		navigator.splashscreen.hide();
        /*navigator.geolocation.getCurrentPosition(foundLocation, onError,{ maximumAge: 3000, timeout: 15000, enableHighAccuracy: true });
		
		/*document.addEventListener("backbutton", function(e){
    if($.mobile.activePage.is('#page')){
        e.preventDefault();
        navigator.app.exitApp();
    }
    else {
        $.mobile.changePage("#page", "none");
    }
}, false);
		
			
    }*/
	
	/*function foundLocation(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    var userLocation = lat + ', ' + lon;
  }*/
	
	function loadService() {
		$.support.cors = true;
		$.mobile.allowCrossDomainPages = true; 
		/*navigator.splashscreen.hide();*/
		
		
	}
	
	var initialScreenSize = window.innerHeight;
window.addEventListener("resize", function() {
    if(window.innerHeight < initialScreenSize){
        $("[data-role=footer]").hide();
    }
    else{
        $("[data-role=footer]").show();
    }
});
	

function getRealContentHeight() {
    var header = $.mobile.activePage.find("div[data-role='header']:visible");
    var footer = $.mobile.activePage.find("div[data-role='footer']:visible");
    var content = $.mobile.activePage.find("div[data-role='content']:visible:visible");
    var viewport_height = $(window).height();

    var content_height = viewport_height - header.outerHeight() - footer.outerHeight();
    if((content.outerHeight() - header.outerHeight() - footer.outerHeight()) <= viewport_height) {
        content_height -= (content.outerHeight() - content.height());
    } 
    return content_height;
}









