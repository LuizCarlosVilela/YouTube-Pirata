  
(function(){
    const API_KEY = "AIzaSyCWdjSQPJ2-yLIYZTpiPgSJ1fQiUoeWs18";
    const channelId = "UChnPoz2O6d3mdbC4MapA6ZA"; //ID do canal;

    const renderVideos = data =>{
        const container = document.getElementById("videos");
        container.innerHTML = "";

        const content = data.items.map(item =>{

            return `
                <iframe class="video" src="https://www.youtube.com/embed/${item.id.videoId}"> </iframe>
            `;
        }).join(' ');
        container.innerHTML = content;
    };
    fetch(
        `https://www.googleapis.com/youtube/v3/search?channelId=${channelId}&key=${API_KEY}&Results=10&type=video&order=date&fields=items(id(videoId)%2Csnippet(title%2Cdescription%2Cthumbnails(medium)))&prettyPrint=false`
    )
    .then(resp => resp.json()).then(resp => renderVideos(resp));

})();

//Faz a barra de rolagem aparecer

var progress = document.getElementById('progressbar');
		
var totalHeight = document.body.scrollHeight - window.innerHeight;
		
window.onscroll = function(){
	let progressHeight = (window.pageYOffset / totalHeight)*1.9;
	progress.style.height = Math.abs(progressHeight)+ "vh";
}