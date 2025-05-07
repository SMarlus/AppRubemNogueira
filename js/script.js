function mostrarPagina(id) {
    // Esconde todas as páginas
    document.querySelectorAll('.pagina').forEach(sec => {
        sec.style.display = 'none';
    });
    // Mostra a página selecionada
    document.getElementById(id).style.display = 'block';
}
