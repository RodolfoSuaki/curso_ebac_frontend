const form = document.getElementById("form-agenda");
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha(){
    const nome = document.getElementById('name');
    const fone = document.getElementById('phone');
    
    let linha = '<tr>';
    linha += `<td>${nome.value}</td>`;
    linha += `<td>${fone.value}</td>`;
    linha += '</tr>'; 
    linhas += linha;

    nome.value = "";
    fone.value = "";
};

function atualizaTabela(){
    let corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
    
}
