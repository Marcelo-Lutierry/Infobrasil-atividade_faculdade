'use strict';

const CHAVE_DB = 'infobrasil_noticias_v2';
const CHAVE_TEMA = 'infobrasil-tema';
const CHAVE_AUTH = 'infobrasil_admin_auth';
const CHAVE_USUARIO = 'infobrasil_usuario_ativo';

const NOTICIAS_PADRAO = [
  {
    id: 1,
    titulo: 'Brasil registra crescimento de 3,5% no PIB e supera expectativas do mercado',
    subtitulo: 'Dados oficiais apontam maior ritmo de expansão em seis anos impulsionado por agro e serviços.',
    categoria: 'economia',
    autor: 'Ana Souza',
    data: '05/10/2026',
    imagem: 'img/hero.jpg',
    status: 'publicado',
    resumo: 'Dados do IBGE apontam para a maior expansão econômica em seis anos, impulsionada pelo agronegócio, serviços e retomada do consumo das famílias.',
    conteudo: [
      'A economia brasileira registrou um crescimento robusto de 3,5% no Produto Interno Bruto (PIB) no acumulado do terceiro trimestre de 2026, de acordo com o Instituto Brasileiro de Geografia e Estatística (IBGE). O resultado surpreendeu analistas financeiros e bancos internacionais, que projetavam uma expansão média de 2,2% para o período.',
      'O principal motor desse desempenho positivo foi o setor de serviços, que avançou 3,8% no trimestre, impulsionado pelo comércio varejista, tecnologia da informação e transportes. A agropecuária também manteve forte ritmo com safra recorde de grãos, enquanto a indústria apresentou recuperação gradual.',
      'Com o resultado positivo, agências de classificação de risco já revisaram para cima as expectativas de crescimento anual do país, sinalizando maior atratividade para investimentos externos e estabilidade na geração de empregos.'
    ]
  },
  {
    id: 2,
    titulo: 'Seleção brasileira garante vaga na Copa com vitória convincente por 2 a 0',
    subtitulo: 'Atuação segura garante classificação antecipada com 100% de aproveitamento nas eliminatórias.',
    categoria: 'esportes',
    autor: 'Carlos Lima',
    data: '04/10/2026',
    imagem: 'img/esportes.jpg',
    status: 'publicado',
    resumo: 'Com dois gols nos primeiros 20 minutos, o Brasil assegurou a classificação antecipada e mantém 100% de aproveitamento nas eliminatórias.',
    conteudo: [
      'Em noite inspirada no estádio do Maracanã, a seleção brasileira de futebol carimbou seu passaporte para o próximo Mundial ao vencer o clássico sul-americano por 2 a 0. A equipe comandou o ritmo do jogo do primeiro ao último minuto.',
      'O primeiro gol surgiu logo aos 8 minutos, após triangulação precisa pelo meio-campo finalizada com precisão no canto esquerdo. Aos 19 minutos, em jogada de bola parada, a zaga subiu mais alto para selar o placar definitivo.',
      'O técnico destacou a consistência tática e a entrega dos atletas jovens convocados, ressaltando que a preparação agora entra em fase de testes táticos para a disputa global.'
    ]
  },
  {
    id: 3,
    titulo: 'Nova revolução dos semicondutores e IA impulsiona ecossistema de tecnologia no país',
    subtitulo: 'Empresas nacionais e multinacionais expandem centros de pesquisa e desenvolvimento de inteligência artificial.',
    categoria: 'tecnologia',
    autor: 'Mariana Faria',
    data: '04/10/2026',
    imagem: 'img/tecnologia.jpg',
    status: 'publicado',
    resumo: 'Ferramentas de computação avançada e novos semicondutores transformam setores industriais e aceleram automação em todo o país.',
    conteudo: [
      'O setor de tecnologia vive um marco histórico com o anúncio de novas parcerias público-privadas voltadas para o desenvolvimento de hardware especializado e centros de inteligência artificial aplicada.',
      'Com mais de R$ 5 bilhões previstos em aportes para os próximos três anos, startups e laboratórios universitários ganham fôlego para desenvolver soluções próprias em segurança da informação, saúde digital e logística preditiva.',
      'Especialistas apontam que a capacitação de novos talentos nas áreas de computação quântica e IA ética será determinante para consolidar a soberania tecnológica nacional.'
    ]
  },
  {
    id: 4,
    titulo: 'Congresso avança na votação do marco regulatório da infraestrutura e energia limpa',
    subtitulo: 'Texto-base foi aprovado em comissão especial e prevê agilização de licenciamentos e incentivos a renováveis.',
    categoria: 'politica',
    autor: 'Roberto Dias',
    data: '03/10/2026',
    imagem: 'img/politica.jpg',
    status: 'publicado',
    resumo: 'Acordo entre lideranças partidárias viabilizou avanço de proposta prioritária que moderniza investimentos em rodovias, ferrovias e energia solar.',
    conteudo: [
      'Em sessão plenária concorrida em Brasília, os parlamentares aprovaram o relatório prioritário que estabelece o novo marco de infraestrutura sustentável para o Brasil.',
      'O texto inclui mecanismos de incentivo à geração solar, eólica e biomassa, além de regras claras para concessões de longo prazo e segurança jurídica a investidores.',
      'Lideranças destacaram que o projeto representa um consenso suprapartidário focado na modernização da matriz energética e na integração logística dos polos produtivos.'
    ]
  },
  {
    id: 5,
    titulo: 'Taxa Selic é mantida em 10,5% pelo Banco Central em decisão unânime do Copom',
    subtitulo: 'Autoridade monetária reforça cautela com cenário internacional e ancoragem das metas de inflação.',
    categoria: 'economia',
    autor: 'Ana Souza',
    data: '03/10/2026',
    imagem: 'img/economia.jpg',
    status: 'publicado',
    resumo: 'O Comitê de Política Monetária (Copom) manteve a taxa básica de juros, avaliando indicadores de emprego, câmbio e inflação corrente.',
    conteudo: [
      'O Comitê de Política Monetária do Banco Central confirmou a manutenção da Selic em 10,5% ao ano. A ata da reunião enfatizou o compromisso com a meta contínua de inflação e a necessidade de serenidade diante da volatilidade externa.',
      'Analistas de mercado avaliam que o atual patamar equilibra a desaceleração de preços sem asfixiar o crédito para empresas e famílias.',
      'O mercado financeiro reagiu com estabilidade, mantendo o dólar em patamar equilibrado e juros futuros comportados.'
    ]
  },
  {
    id: 6,
    titulo: 'Bolsa de Valores atinge marca histórica impulsionada por fluxo recorde de investidores',
    subtitulo: 'Ibovespa fecha acima dos 182 mil pontos com forte presença de capital internacional.',
    categoria: 'economia',
    autor: 'Juliana Mendes',
    data: '02/10/2026',
    imagem: 'img/economia.jpg',
    status: 'publicado',
    resumo: 'O índice B3 superou recorde nominal com valorização expressiva das ações do setor financeiro, energia e mineração.',
    conteudo: [
      'O pregão desta semana consagrou o melhor desempenho anual do Ibovespa, superando as máximas históricas e consolidando o otimismo dos investidores locais e estrangeiros.',
      'A estabilidade fiscal e os bons resultados trimestrais divulgados pelas principais companhias de capital aberto serviram como catalisadores para novas compras.'
    ]
  },
  {
    id: 7,
    titulo: 'Bienal Internacional de Artes reúne obras inéditas e atrai mais de 200 mil visitantes',
    subtitulo: 'Exposições interativas e mostras de cinema gratuito marcam a abertura do maior evento cultural do ano.',
    categoria: 'cultura',
    autor: 'Beatriz Ramos',
    data: '02/10/2026',
    imagem: 'img/noticias.jpg',
    status: 'publicado',
    resumo: 'Pavilhões culturais contam com instalações imersivas, oficinas gratuitas e homenagens a mestres da literatura e arte brasileira.',
    conteudo: [
      'A abertura da Bienal Cultural reuniu artistas consagrados e novos nomes das artes plásticas, cinema e música contemporânea em um circuito totalmente integrado.',
      'A programação inclui ingressos populares, visitas guiadas para escolas públicas e debates abertos sobre o papel das manifestações populares na identidade nacional.'
    ]
  },
  {
    id: 8,
    titulo: 'Cúpula Global do Clima debate transição energética e preservação de biomas tropicais',
    subtitulo: 'Líderes de mais de 70 países assinam compromisso conjunto para restauração florestal até 2030.',
    categoria: 'mundo',
    autor: 'Lucas Tavares',
    data: '01/10/2026',
    imagem: 'img/hero.jpg',
    status: 'publicado',
    resumo: 'Representantes internacionais chegam a consenso sobre financiamento climático direto a comunidades tradicionais e preservação ambiental.',
    conteudo: [
      'As negociações multilaterais sobre o clima avançaram significativamente com o compromisso de repasse de fundos para projetos de descarbonização e proteção da biodiversidade tropical.',
      'A delegação brasileira teve papel central como mediadora entre nações desenvolvidas e países em desenvolvimento na fixação de metas de financiamento transparente.'
    ]
  },
  {
    id: 9,
    titulo: 'MEC anuncia ampliação de bolsas de iniciação científica e vagas no ensino superior',
    subtitulo: 'Novo plano nacional prevê investimentos em laboratórios universitários e programas de permanência.',
    categoria: 'educacao',
    autor: 'Fernanda Rocha',
    data: '01/10/2026',
    imagem: 'img/tecnologia.jpg',
    status: 'publicado',
    resumo: 'Medida contempla reajuste nos valores dos auxílios de pesquisa e expansão de vagas em cursos de ciências exatas e engenharias.',
    conteudo: [
      'O Ministério da Educação divulgou pacote de incentivos destinado a fortalecer a pesquisa acadêmica de base e a retenção de jovens talentos em universidades públicas e privadas.',
      'Além das bolsas de graduação e pós-graduação, o programa criará polos regionais de inovação tecnológica integrados aos institutos federais.'
    ]
  },
  {
    id: 10,
    titulo: 'Campeonato Nacional de Clubes chega à reta final com disputa acirrada pela liderança',
    subtitulo: 'Apenas dois pontos separam o primeiro colocado do vice com quatro rodadas restantes.',
    categoria: 'esportes',
    autor: 'Carlos Lima',
    data: '30/09/2026',
    imagem: 'img/esportes.jpg',
    status: 'publicado',
    resumo: 'Rodada decisiva promete emoção com clássicos estaduais e confrontos diretos nas primeiras posições da tabela.',
    conteudo: [
      'O equilíbrio marcou a temporada com quatro clubes ainda com chances matemáticas de conquistar o troféu do campeonato nacional.',
      'Os treinadores prometem força máxima para os confrontos do fim de semana, com ingressos já esgotados em três arenas esportivas.'
    ]
  }
];

function obterBanco() {
  const dados = localStorage.getItem(CHAVE_DB);
  if (!dados) {
    salvarBanco(NOTICIAS_PADRAO);
    return NOTICIAS_PADRAO;
  }
  try {
    return JSON.parse(dados);
  } catch (e) {
    salvarBanco(NOTICIAS_PADRAO);
    return NOTICIAS_PADRAO;
  }
}

function salvarBanco(lista) {
  localStorage.setItem(CHAVE_DB, JSON.stringify(lista));
}

function obterUsuarioAtivo() {
  const salvo = localStorage.getItem(CHAVE_USUARIO);
  if (!salvo) return null;
  try {
    return JSON.parse(salvo);
  } catch (e) {
    return null;
  }
}

function salvarUsuarioAtivo(usuario) {
  if (usuario) {
    localStorage.setItem(CHAVE_USUARIO, JSON.stringify(usuario));
    if (usuario.perfil === 'admin') {
      sessionStorage.setItem(CHAVE_AUTH, 'true');
    }
  } else {
    localStorage.removeItem(CHAVE_USUARIO);
    sessionStorage.removeItem(CHAVE_AUTH);
  }
}

window.fazerLogout = function () {
  salvarUsuarioAtivo(null);
  exibirToast('Sessão encerrada com sucesso.');
  setTimeout(function () {
    window.location.reload();
  }, 400);
};

function qs(seletor, contexto = document) {
  return contexto.querySelector(seletor);
}

function qsAll(seletor, contexto = document) {
  return contexto.querySelectorAll(seletor);
}

function exibirToast(mensagem) {
  let toast = qs('#toast-notificacao');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notificacao';
    toast.className = 'toast-notificacao';
    document.body.appendChild(toast);
  }
  toast.textContent = mensagem;
  toast.classList.add('visivel');
  setTimeout(function () {
    toast.classList.remove('visivel');
  }, 3200);
}

function atualizarHeaderUsuario() {
  const containerAcoes = qs('.header-acoes');
  if (!containerAcoes) return;

  let bloco = qs('#bloco-usuario-header');
  if (!bloco) {
    bloco = document.createElement('div');
    bloco.id = 'bloco-usuario-header';
    bloco.className = 'header-usuario';
    containerAcoes.insertBefore(bloco, containerAcoes.firstChild);
  }

  const usuario = obterUsuarioAtivo();

  if (!usuario) {
    bloco.innerHTML = `<a href="login.html" class="btn-login-header">Entrar 👤</a>`;
  } else if (usuario.perfil === 'admin') {
    bloco.innerHTML = `
      <div class="badge-usuario">
        <a href="admin.html" class="badge-usuario__nome">⚙️ Admin</a>
        <button class="badge-usuario__sair" onclick="window.fazerLogout()" title="Sair da conta">Sair</button>
      </div>
    `;
  } else {
    bloco.innerHTML = `
      <div class="badge-usuario">
        <span class="badge-usuario__nome">👤 ${usuario.nome || 'Leitor'}</span>
        <button class="badge-usuario__sair" onclick="window.fazerLogout()" title="Sair da conta">Sair</button>
      </div>
    `;
  }
}

function inicializarMenuHamburguer() {
  const btnHamburguer = qs('#btn-hamburguer');
  const navPrincipal  = qs('#nav-principal');

  if (!btnHamburguer || !navPrincipal) return;

  btnHamburguer.addEventListener('click', function () {
    const estaAberto = this.classList.toggle('aberto');
    navPrincipal.classList.toggle('aberta', estaAberto);
    this.setAttribute('aria-expanded', String(estaAberto));
    navPrincipal.setAttribute('aria-hidden', String(!estaAberto));
  });

  qsAll('.nav-principal__link').forEach(function (link) {
    link.addEventListener('click', function () {
      btnHamburguer.classList.remove('aberto');
      navPrincipal.classList.remove('aberta');
      btnHamburguer.setAttribute('aria-expanded', 'false');
      navPrincipal.setAttribute('aria-hidden', 'true');
    });
  });

  document.addEventListener('click', function (evento) {
    if (!btnHamburguer.contains(evento.target) && !navPrincipal.contains(evento.target)) {
      btnHamburguer.classList.remove('aberto');
      navPrincipal.classList.remove('aberta');
      btnHamburguer.setAttribute('aria-expanded', 'false');
    }
  });
}

function inicializarTema() {
  const btnTema = qs('#btn-tema');
  if (!btnTema) return;

  const temaSalvo = localStorage.getItem(CHAVE_TEMA);
  const prefereEscuro = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const temaInicial = temaSalvo || (prefereEscuro ? 'escuro' : 'claro');

  aplicarTema(temaInicial);

  btnTema.addEventListener('click', function () {
    const temaAtual = document.documentElement.getAttribute('data-tema') || 'claro';
    const novoTema  = temaAtual === 'claro' ? 'escuro' : 'claro';
    aplicarTema(novoTema);
  });
}

function aplicarTema(tema) {
  document.documentElement.setAttribute('data-tema', tema);
  localStorage.setItem(CHAVE_TEMA, tema);
  const btnTema = qs('#btn-tema');
  if (btnTema) {
    btnTema.textContent = tema === 'escuro' ? '☀️' : '🌙';
    btnTema.setAttribute('title', tema === 'escuro' ? 'Mudar para tema claro' : 'Mudar para tema escuro');
    btnTema.setAttribute('aria-label', tema === 'escuro' ? 'Mudar para tema claro' : 'Mudar para tema escuro');
  }
}

function inicializarBusca() {
  const btnBusca       = qs('#btn-busca');
  const btnFecharBusca = qs('#btn-fechar-busca');
  const overlayBusca   = qs('#overlay-busca');
  const inputBusca     = qs('#input-busca-global');
  const caixaResultados= qs('#busca-resultados');

  if (!btnBusca || !overlayBusca || !inputBusca) return;

  function abrirBusca() {
    overlayBusca.classList.add('visivel');
    overlayBusca.setAttribute('aria-hidden', 'false');
    inputBusca.value = '';
    if (caixaResultados) caixaResultados.innerHTML = '';
    setTimeout(function () { inputBusca.focus(); }, 150);
  }

  function fecharBusca() {
    overlayBusca.classList.remove('visivel');
    overlayBusca.setAttribute('aria-hidden', 'true');
  }

  btnBusca.addEventListener('click', abrirBusca);
  if (btnFecharBusca) btnFecharBusca.addEventListener('click', fecharBusca);

  overlayBusca.addEventListener('click', function (evento) {
    if (evento.target === overlayBusca) fecharBusca();
  });

  document.addEventListener('keydown', function (evento) {
    if (evento.key === 'Escape' && overlayBusca.classList.contains('visivel')) {
      fecharBusca();
    }
  });

  inputBusca.addEventListener('input', function () {
    const termo = this.value.trim().toLowerCase();
    if (!caixaResultados) return;

    if (termo.length < 2) {
      caixaResultados.innerHTML = '';
      return;
    }

    const banco = obterBanco();
    const resultados = banco.filter(function (n) {
      return (
        n.status === 'publicado' &&
        (n.titulo.toLowerCase().includes(termo) ||
        (n.resumo && n.resumo.toLowerCase().includes(termo)) ||
        n.categoria.toLowerCase().includes(termo))
      );
    });

    if (resultados.length === 0) {
      caixaResultados.innerHTML = '<p class="busca-resultados__vazio">Nenhuma notícia encontrada.</p>';
      return;
    }

    caixaResultados.innerHTML = resultados.slice(0, 6).map(function (n) {
      return `
        <a href="noticia.html?id=${n.id}" class="busca-resultados__item">
          <strong>[${n.categoria.toUpperCase()}]</strong> ${n.titulo}
        </a>
      `;
    }).join('');
  });
}

function criarCardNoticiaHTML(n) {
  return `
    <article class="card-noticia" data-categoria="${n.categoria}" role="listitem">
      <figure class="card-noticia__figura">
        <img src="${n.imagem || 'img/hero.jpg'}" alt="${n.titulo}" loading="lazy" />
      </figure>
      <div class="card-noticia__corpo">
        <span class="card-noticia__tag tag--${n.categoria}">${n.categoria}</span>
        <h3 class="card-noticia__titulo">${n.titulo}</h3>
        <p class="card-noticia__resumo">${n.resumo || (n.subtitulo || '')}</p>
        <div class="card-noticia__rodape">
          <span class="card-noticia__autor">Por ${n.autor} · ${n.data}</span>
          <a href="noticia.html?id=${n.id}" class="card-noticia__link">Ler mais →</a>
        </div>
      </div>
    </article>
  `;
}

function renderizarFeedsDoPortal() {
  const banco = obterBanco().filter(function (n) { return n.status === 'publicado'; });

  const gradeListagem = qs('#grade-listagem');
  if (gradeListagem) {
    const categoriaFiltroPagina = gradeListagem.getAttribute('data-feed-categoria');
    let listaParaExibir = banco;

    if (categoriaFiltroPagina && categoriaFiltroPagina !== 'todas') {
      listaParaExibir = banco.filter(function (n) { return n.categoria === categoriaFiltroPagina; });
    }

    if (listaParaExibir.length > 0) {
      gradeListagem.innerHTML = listaParaExibir.map(criarCardNoticiaHTML).join('');
    }
  }

  const gradeIndexFeed = qs('#grade-index-feed');
  if (gradeIndexFeed) {
    const noticiasDestaque = banco.slice(0, 6);
    if (noticiasDestaque.length > 0) {
      gradeIndexFeed.innerHTML = noticiasDestaque.map(criarCardNoticiaHTML).join('');
    }
  }
}

function inicializarFiltrosListagem() {
  const botoesFiltro = qsAll('.filtro-btn');
  const inputBusca   = qs('#filtro-busca');
  const grade        = qs('#grade-listagem');

  if (!grade) return;

  function aplicarFiltros() {
    const botaoAtivo = qs('.filtro-btn.ativo');
    const categoriaSelecionada = botaoAtivo ? botaoAtivo.getAttribute('data-categoria') : 'todas';
    const termoBusca = inputBusca ? inputBusca.value.trim().toLowerCase() : '';

    const cards = grade.querySelectorAll('.card-noticia');
    let visiveis = 0;

    cards.forEach(function (card) {
      const cardCategoria = card.getAttribute('data-categoria') || '';
      const tituloElemento = card.querySelector('.card-noticia__titulo');
      const tituloTexto = tituloElemento ? tituloElemento.textContent.toLowerCase() : '';

      const matchCategoria = (categoriaSelecionada === 'todas' || cardCategoria === categoriaSelecionada);
      const matchBusca     = (!termoBusca || tituloTexto.includes(termoBusca));

      if (matchCategoria && matchBusca) {
        card.classList.remove('oculto');
        visiveis++;
      } else {
        card.classList.add('oculto');
      }
    });

    let msgSemResultados = qs('#msg-sem-resultados');
    if (visiveis === 0) {
      if (!msgSemResultados) {
        msgSemResultados = document.createElement('div');
        msgSemResultados.id = 'msg-sem-resultados';
        msgSemResultados.className = 'sem-resultados';
        msgSemResultados.innerHTML = '<div class="sem-resultados__icone">🔍</div><p>Nenhuma notícia encontrada com os filtros aplicados.</p>';
        grade.appendChild(msgSemResultados);
      }
      msgSemResultados.classList.remove('oculto');
    } else if (msgSemResultados) {
      msgSemResultados.classList.add('oculto');
    }
  }

  botoesFiltro.forEach(function (btn) {
    btn.addEventListener('click', function () {
      botoesFiltro.forEach(function (b) { b.classList.remove('ativo'); });
      this.classList.add('ativo');
      aplicarFiltros();
    });
  });

  if (inputBusca) {
    inputBusca.addEventListener('input', aplicarFiltros);
  }
}

function inicializarPaginaNoticia() {
  const containerNoticia = qs('#artigo-detalhe-corpo');
  if (!containerNoticia) return;

  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'), 10) || 1;

  const banco = obterBanco();
  const noticia = banco.find(function (n) { return n.id === id; }) || banco[0];

  if (!noticia) return;

  const elCategoria = qs('#noticia-categoria');
  const elTitulo = qs('#noticia-titulo');
  const elSubtitulo = qs('#noticia-subtitulo');
  const elAutor = qs('#noticia-autor');
  const elData = qs('#noticia-data');
  const elImagem = qs('#noticia-imagem');
  const elConteudo = qs('#noticia-conteudo');
  const elBreadcrumb = qs('#breadcrumb-categoria');

  if (elCategoria) {
    elCategoria.textContent = noticia.categoria.toUpperCase();
    elCategoria.className = `card-noticia__tag tag--${noticia.categoria}`;
  }
  if (elBreadcrumb) {
    elBreadcrumb.textContent = noticia.categoria.charAt(0).toUpperCase() + noticia.categoria.slice(1);
    elBreadcrumb.href = `${noticia.categoria}.html`;
  }
  if (elTitulo) elTitulo.textContent = noticia.titulo;
  if (elSubtitulo) elSubtitulo.textContent = noticia.subtitulo || noticia.resumo;
  if (elAutor) elAutor.textContent = noticia.autor;
  if (elData) elData.textContent = noticia.data;
  if (elImagem) {
    elImagem.src = noticia.imagem || 'img/hero.jpg';
    elImagem.alt = noticia.titulo;
  }
  if (elConteudo) {
    if (Array.isArray(noticia.conteudo)) {
      elConteudo.innerHTML = noticia.conteudo.map(function (p) { return `<p>${p}</p>`; }).join('');
    } else if (typeof noticia.conteudo === 'string') {
      elConteudo.innerHTML = noticia.conteudo.split('\n\n').map(function (p) { return `<p>${p}</p>`; }).join('');
    }
  }
  document.title = `${noticia.titulo} — InfoBrasil`;

  const btnCurtir = qs('#btn-curtir-noticia');
  const elContagemCurtidas = qs('#contagem-curtidas');
  const chaveCurtida = `infobrasil_curtidas_${noticia.id}`;
  const chaveJaCurtiu = `infobrasil_jacurtiu_${noticia.id}`;

  let curtidas = parseInt(localStorage.getItem(chaveCurtida), 10) || (20 + (noticia.id * 7));
  if (elContagemCurtidas) elContagemCurtidas.textContent = String(curtidas);

  if (btnCurtir) {
    if (localStorage.getItem(chaveJaCurtiu) === 'true') {
      btnCurtir.classList.add('curtido');
    }

    btnCurtir.addEventListener('click', function () {
      const jaCurtiu = localStorage.getItem(chaveJaCurtiu) === 'true';
      if (jaCurtiu) {
        curtidas = Math.max(0, curtidas - 1);
        localStorage.setItem(chaveJaCurtiu, 'false');
        btnCurtir.classList.remove('curtido');
        exibirToast('Curtida removida.');
      } else {
        curtidas++;
        localStorage.setItem(chaveJaCurtiu, 'true');
        btnCurtir.classList.add('curtido');
        exibirToast('Obrigado por curtir esta matéria! ❤️');
      }
      localStorage.setItem(chaveCurtida, String(curtidas));
      if (elContagemCurtidas) elContagemCurtidas.textContent = String(curtidas);
    });
  }

  const areaComentario = qs('#area-comentario-leitor');
  const listaComentarios = qs('#lista-comentarios');
  const elTotalComentarios = qs('#total-comentarios');
  const chaveComentarios = `infobrasil_comentarios_${noticia.id}`;

  const comentariosPadrao = [
    { autor: 'Marcelo Silva (Leitor)', data: '05/10/2026, 09:15', texto: 'Excelente cobertura jornalística! É muito bom ver dados claros sobre os setores produtivos.' },
    { autor: 'Aline Pires (Leitora)', data: '05/10/2026, 10:40', texto: 'Acompanho o InfoBrasil diariamente. Parabéns à redação pela matéria aprofundada.' }
  ];

  let comentarios = [];
  try {
    const salvos = localStorage.getItem(chaveComentarios);
    comentarios = salvos ? JSON.parse(salvos) : comentariosPadrao;
  } catch (e) {
    comentarios = comentariosPadrao;
  }

  function renderizarComentarios() {
    if (elTotalComentarios) elTotalComentarios.textContent = String(comentarios.length);
    if (!listaComentarios) return;

    listaComentarios.innerHTML = comentarios.map(function (c) {
      const iniciais = c.autor.substring(0, 2).toUpperCase();
      return `
        <div class="comentario-item">
          <div class="comentario-avatar">${iniciais}</div>
          <div class="comentario-corpo">
            <div class="comentario-topo">
              <span class="comentario-autor">${c.autor}</span>
              <span class="comentario-data">${c.data}</span>
            </div>
            <p class="comentario-texto">${c.texto}</p>
          </div>
        </div>
      `;
    }).join('');
  }

  renderizarComentarios();

  if (areaComentario) {
    const usuario = obterUsuarioAtivo();

    if (usuario) {
      areaComentario.innerHTML = `
        <form id="form-comentario-leitor" class="form-comentario-espaco">
          <div class="form-grupo">
            <label for="comentario-mensagem" class="form-rotulo">Deixe seu comentário como <strong>${usuario.nome}</strong>:</label>
            <textarea id="comentario-mensagem" class="form-textarea" placeholder="Participe do debate com respeito e argumentos..." required></textarea>
          </div>
          <button type="submit" class="btn-primario">Publicar Comentário 💬</button>
        </form>
      `;

      const formComentario = qs('#form-comentario-leitor');
      if (formComentario) {
        formComentario.addEventListener('submit', function (e) {
          e.preventDefault();
          const texto = qs('#comentario-mensagem').value.trim();
          if (!texto) return;

          const hoje = new Date();
          const dataFormatada = `${String(hoje.getDate()).padStart(2, '0')}/${String(hoje.getMonth() + 1).padStart(2, '0')}/${hoje.getFullYear()}, ${String(hoje.getHours()).padStart(2, '0')}:${String(hoje.getMinutes()).padStart(2, '0')}`;

          comentarios.unshift({
            autor: `${usuario.nome} (${usuario.perfil === 'admin' ? 'Redação' : 'Leitor'})`,
            data: dataFormatada,
            texto: texto
          });

          localStorage.setItem(chaveComentarios, JSON.stringify(comentarios));
          renderizarComentarios();
          qs('#comentario-mensagem').value = '';
          exibirToast('Comentário publicado com sucesso!');
        });
      }
    } else {
      areaComentario.innerHTML = `
        <div class="comentarios-bloqueio-aviso">
          <p>Você precisa estar logado para publicar um comentário.</p>
          <a href="login.html" class="btn-primario btn-login-leitor-aviso">Fazer Login como Leitor 👤</a>
        </div>
      `;
    }
  }
}

function inicializarTelaLogin() {
  const abaLeitor = qs('#aba-btn-leitor');
  const abaAdmin  = qs('#aba-btn-admin');
  const painelLeitor = qs('#painel-login-leitor');
  const painelAdmin  = qs('#painel-login-admin');

  if (!abaLeitor || !abaAdmin) return;

  function ativarAba(tipo) {
    if (tipo === 'admin') {
      abaAdmin.classList.add('ativo');
      abaLeitor.classList.remove('ativo');
      if (painelAdmin) painelAdmin.classList.remove('oculto');
      if (painelLeitor) painelLeitor.classList.add('oculto');
    } else {
      abaLeitor.classList.add('ativo');
      abaAdmin.classList.remove('ativo');
      if (painelLeitor) painelLeitor.classList.remove('oculto');
      if (painelAdmin) painelAdmin.classList.add('oculto');
    }
  }

  abaLeitor.addEventListener('click', function () { ativarAba('leitor'); });
  abaAdmin.addEventListener('click', function () { ativarAba('admin'); });

  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('tipo') === 'admin') {
    ativarAba('admin');
  }

  const formLeitor = qs('#form-login-leitor');
  if (formLeitor) {
    formLeitor.addEventListener('submit', function (e) {
      e.preventDefault();
      const usuario = qs('#leitor-usuario').value.trim() || 'Leitor';
      salvarUsuarioAtivo({
        perfil: 'leitor',
        nome: usuario.charAt(0).toUpperCase() + usuario.slice(1),
        email: `${usuario.toLowerCase()}@infobrasil.com`
      });
      exibirToast(`Bem-vindo, ${usuario}! Login de Leitor realizado.`);
      setTimeout(function () {
        window.location.href = 'index.html';
      }, 700);
    });
  }

  const formAdmin = qs('#form-login-admin-painel');
  if (formAdmin) {
    formAdmin.addEventListener('submit', function (e) {
      e.preventDefault();
      const usuario = qs('#admin-usuario').value.trim();
      const senha = qs('#admin-senha').value.trim();

      if (usuario === 'admin' && senha === 'admin123') {
        salvarUsuarioAtivo({
          perfil: 'admin',
          nome: 'Redator Chefe',
          email: 'admin@infobrasil.com'
        });
        exibirToast('Acesso de Administrador concedido!');
        setTimeout(function () {
          window.location.href = 'admin.html';
        }, 700);
      } else {
        alert('Credenciais incorretas! Use usuário: admin e senha: admin123');
      }
    });
  }
}

function inicializarCMS() {
  const painelCMS = qs('#painel-cms');
  if (!painelCMS) return;

  const loginCaixa = qs('#cms-login-caixa');
  const formLogin = qs('#form-login-cms');
  const formNoticia = qs('#form-cms-noticia');
  const btnSair = qs('#btn-cms-sair');
  const btnRestaurar = qs('#btn-cms-restaurar');
  const inputBuscaTabela = qs('#cms-busca-tabela');
  const selectFiltroTabela = qs('#cms-filtro-categoria');
  const corpoTabela = qs('#cms-tabela-corpo');

  function estaAutenticadoAdmin() {
    const usuario = obterUsuarioAtivo();
    return (usuario && usuario.perfil === 'admin') || sessionStorage.getItem(CHAVE_AUTH) === 'true';
  }

  function alternarTelasAuth() {
    if (estaAutenticadoAdmin()) {
      if (loginCaixa) loginCaixa.classList.add('oculto');
      if (painelCMS) painelCMS.classList.remove('oculto');
      carregarEstatisticas();
      renderizarTabela();
    } else {
      if (loginCaixa) loginCaixa.classList.remove('oculto');
      if (painelCMS) painelCMS.classList.add('oculto');
    }
  }

  if (formLogin) {
    formLogin.addEventListener('submit', function (e) {
      e.preventDefault();
      const usuario = qs('#login-usuario').value.trim();
      const senha = qs('#login-senha').value.trim();

      if (usuario === 'admin' && senha === 'admin123') {
        salvarUsuarioAtivo({
          perfil: 'admin',
          nome: 'Redator Chefe',
          email: 'admin@infobrasil.com'
        });
        exibirToast('Login de administrador realizado!');
        alternarTelasAuth();
        atualizarHeaderUsuario();
      } else {
        alert('Credenciais incorretas! Use usuário: admin e senha: admin123');
      }
    });
  }

  if (btnSair) {
    btnSair.addEventListener('click', function () {
      salvarUsuarioAtivo(null);
      exibirToast('Sessão encerrada.');
      alternarTelasAuth();
      atualizarHeaderUsuario();
    });
  }

  if (btnRestaurar) {
    btnRestaurar.addEventListener('click', function () {
      if (confirm('Deseja realmente restaurar as notícias originais? Quaisquer alterações personalizadas serão perdidas.')) {
        salvarBanco(NOTICIAS_PADRAO);
        carregarEstatisticas();
        renderizarTabela();
        exibirToast('Banco de notícias restaurado com sucesso!');
      }
    });
  }

  function carregarEstatisticas() {
    const banco = obterBanco();
    const total = banco.length;
    const publicados = banco.filter(function (n) { return n.status === 'publicado'; }).length;
    const rascunhos = total - publicados;

    if (qs('#kpi-total')) qs('#kpi-total').textContent = String(total);
    if (qs('#kpi-publicados')) qs('#kpi-publicados').textContent = String(publicados);
    if (qs('#kpi-rascunhos')) qs('#kpi-rascunhos').textContent = String(rascunhos);
    if (qs('#kpi-views')) qs('#kpi-views').textContent = `${(total * 1420 + 850).toLocaleString('pt-BR')}`;
  }

  function renderizarTabela() {
    if (!corpoTabela) return;
    const banco = obterBanco();
    const termo = inputBuscaTabela ? inputBuscaTabela.value.trim().toLowerCase() : '';
    const categoriaFiltro = selectFiltroTabela ? selectFiltroTabela.value : 'todas';

    const filtrados = banco.filter(function (n) {
      const matchCat = (categoriaFiltro === 'todas' || n.categoria === categoriaFiltro);
      const matchTermo = (!termo || n.titulo.toLowerCase().includes(termo) || n.autor.toLowerCase().includes(termo));
      return matchCat && matchTermo;
    });

    if (filtrados.length === 0) {
      corpoTabela.innerHTML = `<tr><td colspan="7" class="sem-resultados">Nenhuma notícia encontrada.</td></tr>`;
      return;
    }

    corpoTabela.innerHTML = filtrados.map(function (n) {
      const statusClasse = n.status === 'publicado' ? 'status-badge--publicado' : 'status-badge--rascunho';
      const statusTexto = n.status === 'publicado' ? 'Publicado' : 'Rascunho';

      return `
        <tr>
          <td><img src="${n.imagem || 'img/hero.jpg'}" alt="" class="tabela-cms__thumb" /></td>
          <td>
            <div class="tabela-cms__titulo">${n.titulo}</div>
            <small class="artigo-meta-sub">ID: ${n.id}</small>
          </td>
          <td><span class="card-noticia__tag tag--${n.categoria}">${n.categoria}</span></td>
          <td>${n.autor}</td>
          <td>${n.data}</td>
          <td><span class="status-badge ${statusClasse}">${statusTexto}</span></td>
          <td>
            <div class="tabela-cms__acoes">
              <button class="btn-acao" onclick="window.cmsEditar(${n.id})" title="Editar">✏️</button>
              <button class="btn-acao" onclick="window.cmsAlternarStatus(${n.id})" title="Alternar Status">🔄</button>
              <a href="noticia.html?id=${n.id}" class="btn-acao" title="Visualizar" target="_blank">👁️</a>
              <button class="btn-perigo" onclick="window.cmsExcluir(${n.id})" title="Excluir">🗑️</button>
            </div>
          </td>
        </tr>
      `;
    }).join('');
  }

  if (formNoticia) {
    formNoticia.addEventListener('submit', function (e) {
      e.preventDefault();
      const idInput = qs('#cms-noticia-id').value;
      const titulo = qs('#cms-noticia-titulo').value.trim();
      const categoria = qs('#cms-noticia-categoria').value;
      const autor = qs('#cms-noticia-autor').value.trim() || 'Redação InfoBrasil';
      const status = qs('#cms-noticia-status').value;
      const imagem = qs('#cms-noticia-imagem').value.trim() || 'img/hero.jpg';
      const resumo = qs('#cms-noticia-resumo').value.trim();
      const conteudoTexto = qs('#cms-noticia-conteudo').value.trim();

      const paragrafos = conteudoTexto.split('\n').map(function (p) { return p.trim(); }).filter(Boolean);

      let banco = obterBanco();

      if (idInput) {
        const idNum = parseInt(idInput, 10);
        const idx = banco.findIndex(function (n) { return n.id === idNum; });
        if (idx !== -1) {
          banco[idx].titulo = titulo;
          banco[idx].categoria = categoria;
          banco[idx].autor = autor;
          banco[idx].status = status;
          banco[idx].imagem = imagem;
          banco[idx].resumo = resumo;
          banco[idx].conteudo = paragrafos.length > 0 ? paragrafos : [resumo];
          salvarBanco(banco);
          exibirToast('Notícia atualizada com sucesso!');
        }
      } else {
        const novoId = banco.reduce(function (maior, n) { return n.id > maior ? n.id : maior; }, 0) + 1;
        const hoje = new Date();
        const dataFormatada = `${String(hoje.getDate()).padStart(2, '0')}/${String(hoje.getMonth() + 1).padStart(2, '0')}/${hoje.getFullYear()}`;

        const novaNoticia = {
          id: novoId,
          titulo: titulo,
          subtitulo: resumo,
          categoria: categoria,
          autor: autor,
          data: dataFormatada,
          imagem: imagem,
          status: status,
          resumo: resumo,
          conteudo: paragrafos.length > 0 ? paragrafos : [resumo]
        };

        banco.unshift(novaNoticia);
        salvarBanco(banco);
        exibirToast('Nova notícia postada pelo administrador com sucesso!');
      }

      formNoticia.reset();
      qs('#cms-noticia-id').value = '';
      qs('#cms-form-titulo').textContent = 'Publicar Nova Notícia';
      if (btnCancelar) btnCancelar.classList.add('oculto');

      carregarEstatisticas();
      renderizarTabela();
    });
  }

  const btnCancelar = qs('#cms-btn-cancelar');
  if (btnCancelar) {
    btnCancelar.addEventListener('click', function () {
      formNoticia.reset();
      qs('#cms-noticia-id').value = '';
      qs('#cms-form-titulo').textContent = 'Publicar Nova Notícia';
      btnCancelar.classList.add('oculto');
    });
  }

  window.cmsEditar = function (id) {
    const banco = obterBanco();
    const noticia = banco.find(function (n) { return n.id === id; });
    if (!noticia) return;

    qs('#cms-noticia-id').value = String(noticia.id);
    qs('#cms-noticia-titulo').value = noticia.titulo;
    qs('#cms-noticia-categoria').value = noticia.categoria;
    qs('#cms-noticia-autor').value = noticia.autor;
    qs('#cms-noticia-status').value = noticia.status;
    qs('#cms-noticia-imagem').value = noticia.imagem;
    qs('#cms-noticia-resumo').value = noticia.resumo || '';

    if (Array.isArray(noticia.conteudo)) {
      qs('#cms-noticia-conteudo').value = noticia.conteudo.join('\n\n');
    } else {
      qs('#cms-noticia-conteudo').value = noticia.conteudo || '';
    }

    qs('#cms-form-titulo').textContent = `Editando Notícia #${noticia.id}`;
    if (btnCancelar) btnCancelar.classList.remove('oculto');
    formNoticia.scrollIntoView({ behavior: 'smooth' });
  };

  window.cmsExcluir = function (id) {
    if (confirm('Tem certeza de que deseja excluir esta notícia?')) {
      let banco = obterBanco();
      banco = banco.filter(function (n) { return n.id !== id; });
      salvarBanco(banco);
      exibirToast('Notícia excluída!');
      carregarEstatisticas();
      renderizarTabela();
    }
  };

  window.cmsAlternarStatus = function (id) {
    const banco = obterBanco();
    const noticia = banco.find(function (n) { return n.id === id; });
    if (noticia) {
      noticia.status = noticia.status === 'publicado' ? 'rascunho' : 'publicado';
      salvarBanco(banco);
      exibirToast(`Status alterado para ${noticia.status.toUpperCase()}!`);
      carregarEstatisticas();
      renderizarTabela();
    }
  };

  if (inputBuscaTabela) inputBuscaTabela.addEventListener('input', renderizarTabela);
  if (selectFiltroTabela) selectFiltroTabela.addEventListener('change', renderizarTabela);

  alternarTelasAuth();
}

function inicializarContato() {
  const formContato = qs('#form-contato');
  if (!formContato) return;

  formContato.addEventListener('submit', function (e) {
    e.preventDefault();
    const nome = qs('#contato-nome').value.trim();
    const email = qs('#contato-email').value.trim();
    const mensagem = qs('#contato-mensagem').value.trim();

    if (!nome || !email || !mensagem) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    exibirToast(`Obrigado, ${nome}! Sua mensagem foi enviada à nossa redação.`);
    formContato.reset();
  });
}

document.addEventListener('DOMContentLoaded', function () {
  obterBanco();
  atualizarHeaderUsuario();
  inicializarMenuHamburguer();
  inicializarTema();
  inicializarBusca();
  renderizarFeedsDoPortal();
  inicializarFiltrosListagem();
  inicializarPaginaNoticia();
  inicializarTelaLogin();
  inicializarCMS();
  inicializarContato();
});
