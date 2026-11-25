// Dados de exemplo. Depois podem vir do MySQL via PHP (json_encode).
const ANIMAIS = [
    { nome: "Rambo", especie: "Cachorro", sexo: "Macho", faixa: "adulto", porte: "G", castrado: true, foto: "IMG_0490.JPEG" },
    { nome: "Jiló", especie: "Cachorro", sexo: "Macho", faixa: "adulto", porte: "G", castrado: true, foto: "IMG_0491.JPEG" },
    { nome: "Ruth", especie: "Cachorro", sexo: "Fêmea", faixa: "adulto", porte: "M", castrado: true, foto: "IMG_0492.JPEG" },
    { nome: "Sandy", especie: "Cachorro", sexo: "Fêmea", faixa: "adulto", porte: "G", castrado: true, foto: "IMG_0493.JPEG" },
    { nome: "Balu", especie: "Cachorro", sexo: "Fêmea", faixa: "adulto", porte: "M/G", castrado: true, foto: "IMG_0494.JPEG" }
];

const POR_PAGINA = 12; // grade 4x3
const PASTA_FOTOS = "imagens/animaisadocao/";
const LINK_ADOCAO = "https://www.instagram.com/apadrsl/";

const form = document.getElementById("formFiltros");
const grade = document.getElementById("grade");
const vazio = document.getElementById("vazio");
const contador = document.getElementById("contador");
const paginacao = document.getElementById("paginacao");

let filtrados = ANIMAIS.slice();
let pagina = 1;

function rotulo(a) {
    const fem = a.sexo === "Fêmea";
    const idade = a.faixa.charAt(0).toUpperCase() + a.faixa.slice(1, -1) + (fem ? "a" : "o");
    const cast = a.castrado ? (fem ? "Castrada" : "Castrado") : "Não castrado";
    return a.sexo + " · " + idade + " · " + cast + " · Porte " + a.porte;
}

function aplicarFiltros() {
    const nome = document.getElementById("fNome").value.trim().toLowerCase();
    const especie = document.getElementById("fEspecie").value;
    const porte = document.getElementById("fPorte").value;
    const faixa = document.getElementById("fFaixa").value;
    const sexo = document.getElementById("fSexo").value;

    filtrados = ANIMAIS.filter(a =>
        (!nome || a.nome.toLowerCase().includes(nome)) &&
        (!especie || a.especie === especie) &&
        (!porte || a.porte.split("/").includes(porte)) &&
        (!faixa || a.faixa === faixa) &&
        (!sexo || a.sexo === sexo)
    );
    pagina = 1;
    desenhar();
}

function desenhar() {
    const total = filtrados.length;
    const paginas = Math.max(1, Math.ceil(total / POR_PAGINA));
    const inicio = (pagina - 1) * POR_PAGINA;
    const lista = filtrados.slice(inicio, inicio + POR_PAGINA);

    contador.textContent = total === 0
        ? "Nenhum animal encontrado"
        : "Mostrando " + lista.length + " de " + total + (total === 1 ? " animal" : " animais");

    grade.innerHTML = lista.map(a =>
        '<article class="card">' +
        '<img src="' + PASTA_FOTOS + a.foto + '" alt="Foto de ' + a.nome + '" loading="lazy">' +
        '<div class="info"><h2>' + a.nome + '</h2><p>' + rotulo(a) + '</p>' +
        '<a class="btnAdotar" href="' + LINK_ADOCAO + '" target="_blank">Quero adotar</a></div>' +
        '</article>'
    ).join("");
    vazio.hidden = total !== 0;

    let html = '<button class="pg" data-p="' + (pagina - 1) + '"' + (pagina === 1 ? " disabled" : "") + '>Anterior</button>';
    for (let i = 1; i <= paginas; i++) {
        html += '<button class="pg" data-p="' + i + '"' + (i === pagina ? ' aria-current="page"' : "") + '>' + i + '</button>';
    }
    html += '<button class="pg" data-p="' + (pagina + 1) + '"' + (pagina === paginas ? " disabled" : "") + '>Próxima</button>';
    paginacao.innerHTML = html;
}

paginacao.addEventListener("click", e => {
    const p = e.target.dataset.p;
    if (!p) return;
    pagina = Number(p);
    desenhar();
    document.querySelector(".registros").scrollIntoView();
});

form.addEventListener("submit", e => { e.preventDefault(); aplicarFiltros(); });
form.addEventListener("input", aplicarFiltros);
form.addEventListener("reset", () => setTimeout(aplicarFiltros, 0));

desenhar();
