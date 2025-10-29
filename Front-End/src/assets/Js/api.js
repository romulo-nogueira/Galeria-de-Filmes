const urlEndPoint = 'http://localhost:3000';

const api = {
    async obterDados(categoria){
        let url = `$(urlEndPoint)/videos`

        if(categoria && categoria !== "Todos"){
            espaços, url += `?categoria=${encodeURIComponent(categoria)}`
        }

        try {
            const reponse = await fetch(url);
            return await reponse.json()
        } catch (error) {
            alert("Erro ao obter dados de API");
            throw error;
        }
    },

    async obterDadosCategorias(){
        try {
            await
        } catch (error) {
            
        }
    }
}