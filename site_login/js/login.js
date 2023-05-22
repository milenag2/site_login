let form = document.getElementById('form');


form.addEventListener("submit", event =>{
    event.preventDefault();
})
let btnEntrar = document.getElementById('btnEntrar');
btnEntrar.addEventListener('click', entrar);

function entrar(){
    let senha = document.getElementById('senha');
    let labelSenha = document.getElementById('labelSenha');
    let email = document.getElementById('email');
    let labelEmail = document.getElementById('labelEmail');
    
    let msgError = document.querySelector('#msgError');

    let listaUsuario = []

    let userValid = {
        nome: '',
        sobrenome: '',
        email: '',
        tel:'',
        tipo:'',
        senha: ''
    }

    listaUsuario = JSON.parse(localStorage.getItem('listaUsuario'))
    listaUsuario.forEach((item) => {
        if(email.value == item.email && senha.value == item.senha){
            userValid = {
                nome: item.nome,
                sobrenome: item.sobrenome,
                email: item.email,
                tipo: item.tipo,
                senha: item.senha,
                tel: item.tel
            }
        }
    })
    if(email.value == userValid.email && senha.value == userValid.senha){
        window.location.href = '/html/home.html'
    }else{
        labelEmail.setAttribute('style','color:red')
        email.setAttribute('style','border-color:red')
        labelSenha.setAttribute('style','color:red')
        senha.setAttribute('style','border-color:red')
        msgError.setAttribute('style','display: block')
        msgError.innerHTML = 'Usuario ou senha incorretos'
    }

}