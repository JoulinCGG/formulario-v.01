const form = document.getElementById('form')
const nome= document.getElementById('nome')
const sobrenome= document.getElementById('sobrenome')
const email= document.getElementById('email')
const experiencia = document.getElementById('experiencia')

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    const nomeValue = nome.value;
    const sobrenomeValue = sobrenome.value;
    const emailValue = email.value;
    const experienciaValue = experiencia.value;

    if(nomeValue === ''){
        setErrorFor(nome, "Digite o seu nome!");
    }else{
        setSucessFor(nome);
    }

    if(sobrenomeValue === ''){
        setErrorFor(sobrenome, "Digite o seu sobrenome!")
    }else{
        setSucessFor(sobrenome);
    }

    if(emailValue === ''){
        setErrorFor(email, 'Digite o seu email!')
    }else if(!checkEmail(emailValue)){
        setErrorFor(email, "Digite um email válido!");
    }else{
        setSucessFor(email);
    }

    if(experienciaValue === ''){
        window.alert('Preencha todos os campos!')
    }else{
        alert('Finalizado!')
        location.href="final.html";
}
}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    //Adicionar mensagem de erro
    small.innerText = message;

    //Adicionar classe de Erro
    formControl.className= "form-control error";

}

function setSucessFor(input, message){
    const formControl = input.parentElement;

    //Adicionar a classe de sucesso
    formControl.className= "form-control success";
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
}
