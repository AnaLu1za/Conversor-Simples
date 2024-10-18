# Conversor de Moedas Simples
Este projeto web simples e intuitivo permite a conversão de diversas moedas de forma rápida e eficiente. A aplicação utiliza JavaScript para realizar os cálculos de conversão e o HTML/CSS para criar a interface do usuário.

## Introdução 

## Índice
* [Introdução](#introdução)
* [Descrição](#descrição)
* [Arquitetura do Código](#arquitetura-do-código)
* [Responsividade](#responsividade)
* [Funcionamento](#funcionamento)
* [Funcionalidades](#funcionalidades)
* [Técnicas e tecnologias utilizadas](#técnicas-e-tecnologias-utilizadas)
* [Fontes Consultadas](#fontes-consultadas)
* [Autor(a)](#autora)

## Descrição
O projeto consiste em um aplicativo web simples e intuitivo que permite aos usuários converter valores monetários entre diversas moedas internacionais. 


- A aplicação oferece uma interface gráfica onde o usuário pode:
    - **Selecionar a moeda de origem:** O usuário escolhe a moeda que deseja converter a partir de um menu dropdown.
    - **Informar o valor:** O usuário insere o valor numérico que deseja converter em um campo de texto.
    - **Selecionar a moeda de destino:** O usuário escolhe a moeda para a qual deseja converter o valor, também a partir de um menu dropdown.
    - **Obter o resultado:** Ao clicar no botão "Converter", o aplicativo realiza o cálculo e exibe o valor convertido na tela.
    - **Resetar os campos:** Um botão "Resetar" permite limpar os campos de entrada e o resultado para uma nova conversão.

![Tela de Cadastro](img/conversor-simples.gif)

### Arquitetura do Código
- **HTML:** Define a estrutura da página, incluindo os elementos do formulário, botões e área de resultado.
- **CSS:** Estiliza a aparência da página, controlando cores, fontes, layout e responsividade.
- **JavaScript:** Realiza a lógica da aplicação, incluindo a obtenção dos valores dos campos de entrada, o cálculo da conversão e a atualização da área de resultado.

### Responsividade
- **Layout:** O layout da aplicação é responsivo, adaptando-se a diferentes tamanhos de tela. O contêiner principal se ajusta automaticamente à largura disponível.
- **Fontes e tamanhos:** Os tamanhos das fontes e elementos da interface são ajustados para garantir legibilidade em diferentes dispositivos.
- **Espaçamentos:** Os espaçamentos entre os elementos são definidos de forma a manter uma aparência consistente em diferentes resoluções.
- **Botões:** Os botões são dimensionados para ocupar o espaço disponível e possuem um efeito hover para indicar interação.

### Funcionamento
1. **Interface do Usuário:** O usuário interage com a página através de um formulário, selecionando as moedas e informando o valor a ser convertido.
2. **Captura de Dados:** Ao clicar no botão "Converter", o JavaScript captura os valores selecionados pelo usuário nos campos do formulário.
3. **Cálculo da Conversão:** Utilizando as taxas de câmbio pré-definidas em um objeto JavaScript, o código calcula o valor convertido.
4. **Exibição do Resultado:** O resultado da conversão é exibido em uma área específica da página.
5. **Reset:** Ao clicar no botão "Resetar", os campos do formulário são limpos e a área de resultado é zerada, preparando a aplicação para uma nova conversão.

## Funcionalidades 
- **Conversão de moedas:** Permite converter entre diversas moedas populares, como Dólar, Euro, Real, Libra Esterlina, Iene, Dólar Canadense e Dólar Australiano.
- **Interface intuitiva:** A interface é projetada para ser fácil de usar, com campos de entrada claros e um layout organizado.
- **Atualização automática das taxas de câmbio:** As taxas de câmbio são definidas no código JavaScript e podem ser facilmente atualizadas para refletir as taxas de mercado mais recentes.
- **Responsividade:** A aplicação se adapta a diferentes tamanhos de tela, garantindo uma boa experiência do usuário em dispositivos móveis e desktops.

## Javascript
![Conversor](img/script-conversor.gif)

- O objeto ``exchangeRates`` armazena as taxas de câmbio entre as diferentes moedas. Cada chave do objeto representa uma moeda de origem, e os valores são objetos que mapeiam para as moedas de destino e suas respectivas taxas de câmbio.

- Funcionalidade do JavaScript
    - **Ouvinte de eventos:** Um ouvinte de eventos é adicionado ao formulário para capturar o evento de envio.
    - **Obtenção de valores:** Os valores dos campos de entrada (valor, moeda de origem e moeda de destino) são obtidos.
    - **Cálculo da conversão:** A taxa de câmbio correspondente é obtida do objeto exchangeRates e o valor convertido é calculado.
    - **Atualização da área de resultado:** O resultado da conversão é exibido na área de resultado.
    - **Botão de reset:** Um ouvinte de eventos é adicionado ao botão de reset para limpar os campos de entrada e a área de resultado.
![miau.gif](https://steemitimages.com/DQmZCo76MUSeg8WNYUqr9UMGig3kufJWfENY337KfSbpoJC/miau.gif)


## Técnicas e tecnologias utilizadas
* [<code><img height="32" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" alt="HTML5"/></code>](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
* [<code><img height="32" src="https://cdn.worldvectorlogo.com/logos/css-3.svg" alt="CSS3"/></code>](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
* [<code><img height="32" src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript"/></code>](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
* [<code><img height="32" src="https://www.malwarebytes.com/wp-content/uploads/sites/2/2023/01/asset_upload_file97293_255583.jpg" alt="Git"/></code>](https://git-scm.com/)
* [<code><img height="32" src="https://blog.netscandigital.com/wp-content/uploads/2023/07/O-que-e-o-Google-Bard.png" alt="Bard"/></code>](https://bard.google.com/chat?hl=pt)
* [<code><img height="32" src="https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white" alt="VisualStudio"/></code>](https://code.visualstudio.com/)
* [<code><img height="32" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/></code>](https://github.com/)


## Fontes consultadas 
* [Alura - Como escrever um bom README.md](https://www.alura.com.br/artigos/escrever-bom-readme)
* [Bootstrap](https://getbootstrap.com/docs/5.3/forms/checks-radios/#radios)
* [Alura - Tipos de type](https://cursos.alura.com.br/forum/topico-type-do-campo-telefone-104370)
* [Dio](https://www.dio.me/articles/tutorial-criando-um-readme-bonitao-para-o-seu-github)
* [Progamador alternativo - Youtube](https://youtu.be/HJ16WEmOWTw?si=UFvCAtBHbuCc08Hu)
* [Fotos para o subtópico "Técnicas e tecnologias consultadas"](https://github.com/alexandresanlim/Badges4-README.md-Profile)
* [Youtube - TELA DE LOGIN COM TEMA DARK | HTML + CSS](https://youtu.be/69-WfrVBli8?si=GGultNVszQg0wDUK)
* [HomeHost](https://www.homehost.com.br/blog/tutoriais/html-buttton/)
* [W3schools](https://www.w3schools.com/js/js_window_location.asp)


## Autores
| [<img loading="lazy" src="https://avatars.githubusercontent.com/u/140712280?v=4" width=115><br><sub>Fellipe Zanin</sub>](https://github.com/Fell1pe) |  [<img loading="lazy" src="https://avatars.githubusercontent.com/u/140712281?v=4" width=115><br><sub>Ana Luiza</sub>](https://github.com/AnaLu1za) |  [<img loading="lazy" src="https://avatars.githubusercontent.com/u/140712298?v=4" width=115><br><sub>Kleyverson Sampaio</sub>](https://github.com/KleyversonO) | [<img loading="lazy" src="https://avatars.githubusercontent.com/u/140712345?v=4" width=115><br><sub>Rafael Mastellini</sub>](https://github.com/SouzaRafael7) |
| :---: | :---: | :---: | :---: |

[<code><img height="32" src="https://t.ctcdn.com.br/IwwDh-BajTE4ZwE4zuIcvz9Q2ZY=/i490027.jpeg" alt="Linkedin"/></code>](https://www.linkedin.com/posts/ana-luiza-santos-a5032a2a2_projeto-acad%C3%AAmico-valida%C3%A7%C3%A3o-de-tela-de-activity-7189273725291163648-fbh6?utm_source=share&utm_medium=member_ios)