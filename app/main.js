let livros = [];
const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
buscarLivrosDaAPI();

async function buscarLivrosDaAPI() {
    const res = await fetch(endpointAPI);
    livros = await res.json();
    let livrosComDesconto = aplicarDesconto(livros);

    mostrarLivros(livrosComDesconto);
}
