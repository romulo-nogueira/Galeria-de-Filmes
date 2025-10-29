// Aqui criamos os elementos que serao exibidos na pagina

const ui ={
    criarElements(video){
        const li = document.createElement("li")
        li.classList.add("card-box-filme");

        const iframe = document.createElement("iframe");
        iframe.src = video.url;
        iframe.title = video.titulo;
        iframe.allowFullscreen
    }
}