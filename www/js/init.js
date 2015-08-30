// JavaScript Document
$(document).bind("mobileinit", function () {
    $.support.cors = true;
    $.mobile.touchOverflowEnabled = true;
    $.mobile.allowCrossDomainPages = true;
    $.mobile.loadingMessage = "Loading...";
    $.mobile.pageLoadErrorMessage = "Error Loading Data";
    $.mobile.page.prototype.options.backBtnTheme = "b";
    $.mobile.page.prototype.options.backBtnText = "Back";
    $.mobile.defaultPageTransition = 'none';
    $.mobile.loadingMessageTextVisible = true;
    $.mobile.pushStateEnabled = false;
	
	
	
	
    $.extend($.mobile, {
        defaultPageTransition: 'none'
    });
});