<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Animais para adoção - APAD</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" crossorigin="anonymous" referrerpolicy="no-referrer">
    <link rel="stylesheet" href="consulta.css">
</head>

<body>
    <header class="capa">
        <div class="capaContent">
            <a href="index.php#topo"><img id="logo" src="imagens/apad logo.png" alt="APAD"></a>
            <h1>Animais para adoção</h1>
            <p>Conheça quem está esperando por um lar</p>
            <a class="voltar" href="index.php">Voltar ao início</a>
        </div>
    </header>

    <!-- Filtros (fica fixo ao rolar a página) -->
    <section class="filtros">
        <div class="filtrosTopo">
            <span id="contador">Carregando...</span>
        </div>
        <form id="formFiltros" class="barra">
            <label class="busca">Buscar por nome
                <input type="search" id="fNome" placeholder="Ex.: Rambo, Balu">
            </label>
            <label>Espécie
                <select id="fEspecie"><option value="">Todas</option><option>Cachorro</option><option>Gato</option></select>
            </label>
            <label>Porte
                <select id="fPorte"><option value="">Todos</option><option value="P">Pequeno</option><option value="M">Médio</option><option value="G">Grande</option></select>
            </label>
            <label>Idade
                <select id="fFaixa"><option value="">Qualquer</option><option value="filhote">Filhote</option><option value="adulto">Adulto</option><option value="idoso">Idoso</option></select>
            </label>
            <label>Sexo
                <select id="fSexo"><option value="">Todos</option><option>Fêmea</option><option>Macho</option></select>
            </label>
            <div class="acoes">
                <button type="submit" class="btnCheio">Filtrar</button>
                <button type="reset" class="btnVazado">Limpar</button>
            </div>
        </form>
    </section>

    <!-- Registros: grade 4x3 (12 por página). Depois os dados virão do MySQL via PHP. -->
    <main class="registros">
        <div class="grade" id="grade"></div>
        <p class="vazio" id="vazio" hidden>Nenhum animal encontrado com esses filtros. Clique em Limpar para ver todos.</p>
    </main>

    <!-- Paginação -->
    <nav class="paginacao" id="paginacao" aria-label="Paginação"></nav>

    <footer class="footer">
        <div class="upperBarContent">
            <a href="index.php#topo"><img id="LogoApad" src="imagens/apad logo.png" alt="APAD"></a>
            <h1>APAD - Associação Protetora dos Animais Desamparados</h1>
            <div id="icons">
                <a href="https://www.facebook.com/apadrsl" target="_blank" aria-label="Facebook"><i class="fa-brands fa-facebook fa-2xl" style="color: #972849;"></i></a>
                <a href="https://www.instagram.com/apadrsl" target="_blank" aria-label="Instagram"><i class="fa-brands fa-instagram fa-2xl" style="color: #972849;"></i></a>
            </div>
        </div>
    </footer>

    <script src="consulta.js"></script>
</body>

</html>
