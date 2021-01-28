function controlaFormulario(){
    const desativaBotao = document.querySelector('.form');
    const enviar = desativaBotao.addEventListener('submit');
    enviar.preventDefault();
    
}

controlaFormulario();