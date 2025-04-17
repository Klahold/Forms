function validarFormulario() {

    const nome = document.getElementById('nome').value;

    const email = document.getElementById('email').value;

    const idade = document.getElementById('idade').value;

    const genero = document.getElementById('genero').value;

    const comida = document.getElementById('comida').value;

    const corOlho = document.getElementById('corOlho').value;

    const corCabelo = document.getElementById('corCabelo').value;

    const pe = document.getElementById('pe').value;

    const tamanho = document.getElementById('tamanho').value;

    const nomePai = document.getElementById('nomePai').value;

    const nomeMae = document.getElementById('nomeMae').value;

    const numero = document.getElementById('numero').value;

    const geladeira = document.getElementById('geladeira').value;

    const aniversario = document.getElementById('aniversario').value;

    const time = document.getElementById('time').value;

    const materia = document.getElementById('materia').value;

    const nasceu = document.getElementById('nasceu').value;

    const animal = document.getElementById('animal').value;

    const tel = document.getElementById('tel').value;

    const senha = document.getElementById('senha').value;

    const carro = document.getElementById('carro').value;

    if (!nome || !email || !idade || !genero || !comida || !tamanho || !nomePai || !nomeMae || !tel || !senha) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return false;
    }

    if (isNaN(idade)) {
        alert('Digite somente números no campo idade');
        return;
    }

    if (isNaN(tamanho)) {
        alert('Digite somente números no campo tamanho');
        return;
    }

    if (isNaN(pe)) {
        alert('Digite somente números no campo pe');
        return;
    }

    if (isNaN(numero)) {
        alert('Digite somente números no campo numero');
        return;
    }

    if (isNaN(geladeira)) {
        alert('Digite somente números no campo geladeira');
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, insira um email válido.");
        return false;
    }

    if (idade <= 0) {
        alert("Por favor, insira uma idade válida.");
        return false;
    }

    alert("Formulário enviado com sucesso!");

}