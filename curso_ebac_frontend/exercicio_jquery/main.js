$('form').on('submit',function(e){

    e.preventDefault();
    adicionarTarefa();
})

$(document).on('click', 'li', function() {
    $(this).toggleClass("test");
});


function adicionarTarefa() {
    const novaTarefa = $('#tarefa').val();
    const novoItem = $('.lista');

    console.log(novoItem);
    $(`<li class="lista-item">${novaTarefa}</li>`).appendTo(novoItem);

    $(novoItem).appendTo('ul');
}




