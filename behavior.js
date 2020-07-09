document.addEventListener("DOMContentLoaded", function(event) {
    var thumbnailElement = document.getElementById("smart_thumbnail");
    thumbnailElement.addEventListener("click", function() {
	if (thumbnailElement.className == "small") {
	    thumbnailElement.className = "";
	    thumbnailElement.className = "Big Totoro";
	}else {
	    thumbnailElement.className = "small";
	}
    }); 
});
