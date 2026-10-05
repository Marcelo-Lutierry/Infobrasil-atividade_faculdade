# 📰 InfoBrasil - Portal de Notícias

Projeto desenvolvido para a **Atividade Prática de Desenvolvimento Web**. Trata-se de um portal de notícias com múltiplas páginas, construído para simular um site de cobertura jornalística em tempo real. O projeto conta com uma área pública de leitura e um painel simulado de administração (CMS).

## 🎯 Requisitos da Disciplina Atendidos

O projeto foi estruturado com foco em boas práticas, cumprindo integralmente os critérios de avaliação propostos:
- **Múltiplas Páginas:** O portal possui navegação funcional entre várias telas (`index.html`, `economia.html`, `esportes.html`, `cultura.html`, `educacao.html`, etc).
- **Separação de Responsabilidades (Clean Code):** Toda a camada de estilos está devidamente separada num ficheiro externo de CSS e as funcionalidades interativas num ficheiro de JavaScript puro, mantendo os ficheiros HTML limpos.
- **Estruturação de Diretórios:** Os ficheiros estão organizados de forma profissional em pastas dedicadas (`/css`, `/js`, `/img`).
- **Navegação Funcional:** Todos os links, botões e modais funcionam corretamente e transitam entre as páginas.

## 📁 Organização dos Ficheiros

```text
infobrasil/
├── css/
│   └── style.css       # Estilos visuais, cores, tipografia e design responsivo
├── img/                # Imagens otimizadas utilizadas nas notícias
├── js/
│   └── script.js       # Lógica das funcionalidades e interações da interface
├── admin.html          # Painel CMS de gestão de conteúdo
├── contato.html        # Formulário para envio de sugestões
├── economia.html       # Página da editoria de finanças e indicadores
├── esportes.html       # Página com placar desportivo e tabelas
├── index.html          # Página inicial com os destaques e feed geral
└── login.html          # Ecrã de autenticação para leitores e redatores
```
🛠️ Tecnologias Utilizadas
HTML5: Responsável por toda a marcação estrutural e semântica do projeto.

CSS3: Responsável pela aparência e organização dos elementos no ecrã (Flexbox e Grid). Conta com variáveis CSS para permitir a alternância de temas (Claro ☀️ / Escuro 🌙).

JavaScript (Vanilla): Responsável por todas as interações dinâmicas, como o menu responsivo, o modal de pesquisa, o painel de login e a troca de tema, sem o uso de bibliotecas externas.

🚀 Como visualizar e testar o projeto
Este projeto é estático e não exige instalações complexas. Para executá-lo na sua máquina:

1. Faça o download dos ficheiros ou clone o repositório:

```bash
git clone [https://github.com/Marcelo-Lutierry/Infobrasil-atividade_faculdade.git](https://github.com/Marcelo-Lutierry/Infobrasil-atividade_faculdade.git)
```

2. Aceda à pasta onde os ficheiros foram guardados.

3. Dê um duplo clique no ficheiro index.html para abri-lo no seu navegador padrão (Chrome, Firefox, Edge, etc.).

4. Navegue pelo site utilizando o menu superior e teste as funcionalidades interativas.
