const btnList = document.querySelectorAll(".btn");
const btnDisponveis = document.getElementById("btnLivrosDisponiveis");

btnList.forEach(btn => {
    btn.addEventListener("click", () => {
        let livrosFiltrados = filtrarLivros(btn.value);
        mostrarLivros(livrosFiltrados);
    })
});

btnDisponveis.addEventListener("click", () => {
    const livrosDisponiveis = filtrarLivrosDisponiveis();
    const valorTotalDisponiveis = calcularValorTotalDisponiveis(livrosDisponiveis);
    mostrarLivros(livrosDisponiveis);
    exibirValorTotalDosLivrosDisponiveis(valorTotalDisponiveis);
});

function filtrarLivros(categoria) {
    let livrosFiltrados = livros.filter(livro => livro.categoria == categoria);
    console.table(livrosFiltrados);
    return livrosFiltrados;
};

function filtrarLivrosDisponiveis() {
    let livrosDisponiveis = livros.filter(livro => livro.quantidade > 0);
    return livrosDisponiveis;
}

function exibirValorTotalDosLivrosDisponiveis(valorTotal) {
    sectionValorTotalLivrosDisponiveis.innerHTML = 
    `<div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>`
}
