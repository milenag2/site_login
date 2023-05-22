let email = document.getElementById('email');
let labelEmail = document.getElementById('labelEmail');
let validEmail = false;

let senha = document.getElementById('senha');
let labelSenha = document.getElementById('labelSenha');
let validSenha = false;

let nome = document.getElementById('nome');
let labelNome = document.getElementById('labelNome');
let validNome = false;

let sobrenome = document.getElementById('sobrenome');
let labelSobrenome = document.getElementById('labelSobrenome');
let validSobrenome = false;

let tel = document.getElementById('tel');
let labelTel = document.getElementById('labelTel');
let validTel = false;

let msgError = document.querySelector('#msgError');
let msgSucess = document.querySelector('#msgSucess')

let btnCadastrar = document.getElementById('btnCadastrar');
btnCadastrar.addEventListener('click', cadastrar);

nome.addEventListener('keyup', ()=>{
    if(nome.value.length<=2){
        labelNome.setAttribute('style','color:red');
        labelNome.innerHTML = 'Nome *Insira no mínimo 3 caracteres';
        nome.setAttribute("style", "border: 2px solid red");
        validNome = false;
    }else{
        labelNome.setAttribute('style','color:green');
        labelNome.innerHTML = 'Nome';
        nome.setAttribute("style", "border: 2px solid green");
        validNome = true;
    }
})

email.addEventListener('keyup', ()=>{
    if (!validaEmail(email.value)){
        labelEmail.setAttribute('style','color:red');
        labelEmail.innerHTML = 'E-mail *O email segue o formato nome@mail.com';
        email.setAttribute("style", "border: 2px solid red");
        validEmail = false;
    }else{
        labelEmail.setAttribute('style','color:green');
        labelEmail.innerHTML = 'E-mail';
        email.setAttribute("style", "border: 2px solid green");
        validEmail = true;
    }
})

sobrenome.addEventListener('keyup', ()=>{
    if(sobrenome.value.length<=2){
        labelSobrenome.setAttribute('style','color:red');
        labelSobrenome.innerHTML = 'Sobrenome *Insira no mínimo 3 caracteres';
        sobrenome.setAttribute("style", "border: 2px solid red");
        validSobrenome = false;
    }else{
        labelSobrenome.setAttribute('style','color:green');
        labelSobrenome.innerHTML = 'Sobrenome';
        sobrenome.setAttribute("style", "border: 2px solid green");
        validSobrenome = true;
    }
})

tel.addEventListener('keyup', ()=>{
    if(tel.value.length<10 ||tel.value.length>11){
        labelTel.setAttribute('style','color:red');
        labelTel.innerHTML = 'Telefone';
        tel.setAttribute("style", "border: 2px solid red");
        validTel = false;
    }else{
        labelTel.setAttribute('style','color:green');
        labelTel.innerHTML = 'Telefone';
        tel.setAttribute("style", "border: 2px solid green");
        validTel = true;
    }
})

senha.addEventListener('keyup', ()=>{
    if (!validaSenha(senha.value)){
        labelSenha.setAttribute('style','color:red');
        labelSenha.innerHTML = 'Senha *Mais de 6 caracteres e pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial';
        senha.setAttribute("style", "border: 2px solid red");
        validSenha = false;
    }else{
        labelSenha.setAttribute('style','color:green');
        labelSenha.innerHTML = 'Senha';
        senha.setAttribute("style", "border: 2px solid green");
        validSenha = true;
    }
})


function validaEmail(email){
    var verificaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return verificaEmail.test(email);
}

function validaSenha(senha){
    if (senha.length < 6) {
        return false;
      }
    
      var verificaSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
      return verificaSenha.test(senha);
}


function cadastrar(){
    if(validEmail&&validNome&&validSenha&&validSobrenome&&validTel&&validTipo){
        let listaUsuario = JSON.parse(localStorage.getItem('listaUsuario')||'[]')

        listaUsuario.push(
            {
                nome: nome.value,
                sobrenome: sobrenome.value,
                email: email.value,
                senha: senha.value,
                tel: tel.value,
                tipo: tipo.value
            }
        )
            localStorage.setItem('listaUsuario', JSON.stringify(listaUsuario))
        msgSucess.setAttribute('style','display:block')
        msgSucess.innerHTML = 'Usuário cadastrado!'
        msgError.innerHTML = ''
        setTimeout(() => {
            window.location.href = '/html/login.html'
        }, 3000);
    }else{
        msgError.setAttribute('style','display:block')
        msgError.innerHTML = 'Preencha todos os campos.'
        msgSucess.innerHTML = ''
    }
}