let numerosSorteados = [];

function sortearNumero() {
    let inQuantNumeros = document.querySelector("#quantidade");
    let quantNumeros = inQuantNumeros.value;

    let inDe = document.querySelector("#de");
    let de = inDe.value;

    let inAte = document.querySelector("#ate");
    let ate = inAte.value;

    // verificao pra ve se o campo estao preenchidos
    if(quantNumeros == "" || de == "" || ate == "") {
        alert("Por favor, insira um valor valido!");
        inQuantNumeros.focus();
        return;
    }

    if(quantNumeros > (ate - de)) {
        alert("Por favor insira uma quantidade menor");
        location.reload();
        inQuantNumeros.focus();
        return;
    }

    gerarNumero(quantNumeros, de, ate);
    carregarResposta();

    btnSortear.classList.remove("container__botao");
    btnReiniciar.classList.remove("container__botao-desabilitado");

    btnSortear.classList.add("container__botao-desabilitado");
    btnReiniciar.classList.add("container__botao");
}

function gerarNumero(quantNumeros, de, ate) {
    while(quantNumeros > 0) {
        let numeroGerado = (parseInt(Math.random()*(ate - de) + 1) + (de - 1));

        if(!(numerosSorteados.includes(numeroGerado))) {
            numerosSorteados.push(numeroGerado);
            quantNumeros--;
        } 
    }   
}

function carregarResposta() {
    let resultado = document.querySelector("#resultado");
    let resposta = "Numeros sorteados: " + String(numerosSorteados[0]);

    for(let i = 1; i < numerosSorteados.length; i++) {
        resposta += ", " + String(numerosSorteados[i]);
    }

    resultado.textContent = resposta;
}

function reiniciarJogo() {
    location.reload();
}

let btnSortear = document.querySelector("#btn-sortear");
btnSortear.addEventListener("click", sortearNumero);

let btnReiniciar = document.querySelector("#btn-reiniciar");
btnReiniciar.addEventListener("click", reiniciarJogo);