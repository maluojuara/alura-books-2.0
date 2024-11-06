const btnList = document.querySelectorAll(".btn");

btnList.forEach(btn => {
    btn.addEventListener("click", () => {
        const livrosFiltrados = filtrarLivros(btn.value);
        mostrarLivros(livrosFiltrados);
    })
});

function filtrarLivros (categoria) {
    let livrosFiltrados = livros.filter(livro => livro.categoria == categoria);
    console.table(livrosFiltrados);
    return livrosFiltrados;
};

