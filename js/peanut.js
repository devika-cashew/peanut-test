$(document).ready(function() {
	$("#contentParent").hide();
	$("#banner-image-holder-small").hide();
	$("#banner-image-holder").click(function() {
		$("#banner-image-holder").hide();
		$("#banner-image-holder-small").show();
		$("#contentParent").show();
	});  
});