const form = document.getElementById('form-comp');
const campoA = document.getElementById('numA');
const campoB = document.getElementById('numB');


form.addEventListener('submit', function(e){
    
    e.preventDefault();
    

    if (campoA.value >= campoB.value){
        alert('O formulário não é válido, pois campo A é maior ou igual ao campo B'); 
    }
    
    else{
        alert("O formulário é válido, pois campo B é maior ou igual ao campo A");
    }  
})