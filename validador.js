function validarFormulario(){

    //pegar os dados//

    const nome =document.getElementById('nome_maquinista').value.trim();

    const cpf =document.getElementById('cpf_maquinista').value.trim();

    const idade =parseInt(document.getElementById('idade_maquinista').value, 10);


    //processamento//

    if(!nome){
        alert('Por favor, preencha o nome.');
        return;
    }else{
        console.log(nome);
    }

    if (!cpf ||  cpf.length !== 11  || isNaN(cpf)) {
        alert('Por favor, insira um CPF valido com 11 digitos');
        return;
    } else {
        console.log(cpf);
    }

    if (isNaN(idade) || idade < 21 || idade > 0) {
        alert('A idade deve ser um numeor maior do que 30 anos');
        return;
    } else {
        console.log(idade);
    }

    //developer//

    alert('formulario enviado com sucesso')

}