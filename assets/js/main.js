$(document).ready(function(){
	var dibujarGifs = function(data){
		var gif = "";
		var url = "";
		data.forEach(function(element){
			gif = element.images.downsized_large.url;
			url = element.bitly_git_url;
			$("#elementos").append(armarTemplate(gif, url));
		});
	}
	var armarTemplate = function(gif.url){
		var t = "<div class='elemento'><img src='" + gif + "'/<a href='" + url + "'>Ver más</a></div>"
		return t;
	}
})