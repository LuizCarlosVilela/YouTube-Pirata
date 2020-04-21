var lista = [];
var listaId = [];

function funcaoCallback(json){
    var videos = json.items; //array com os vídeos
    lista = videos.slice();

    for(i = 0; i < videos.length; i++){
        let n = videos[i].id.videoId;
        listaId.push(n);
    }
}

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";

var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
    document.getElementById('videos').innerHTML="";

    for(var i = 0; i < lista.length; i++){
        var div = document.getElementById('videos');
        var video = document.createElement('div');
        video.setAttribute('id', 'player'+i);
        video.setAttribute('class', 'video');
    
        div.appendChild(video);
    
        player = new YT.Player('player'+i, {
            videoId: listaId[i],
        }); 
    }
}

var progress = document.getElementById('progressbar');
		
var totalHeight = document.body.scrollHeight - window.innerHeight;
		
window.onscroll = function(){
	let progressHeight = (window.pageYOffset / totalHeight)*0.90;
	progress.style.height = Math.abs(progressHeight)+ "vh";
}