function controlaFormulario(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];


    function recebeEventoForm(evento){
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        console.log(pessoas);

        const criaGrupo = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        }

        pessoas.push(criaGrupo)

        
        resultado.innerHTML += `${criaGrupo.nome} ${criaGrupo.sobrenome} ${criaGrupo.peso} ${criaGrupo.altura}<br/>`;
        
    }

    form.addEventListener('submit', recebeEventoForm)
    
    
}

controlaFormulario();