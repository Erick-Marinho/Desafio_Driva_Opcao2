# Desafio_Driva_Opção_2
Neste repositório encontram-se as resoluções para o desafio proposto pela empresa Driva.

Foram disponibilzadas pela empresa, através de seu CTO - [Wagner Agostinho](https://www.linkedin.com/in/wagnerrua/),  duas opções de desafios, logo, neste repositório, encontram-se as soluções para a 2º opção. 

## :rocket: Desafio Opção 02

Na opção 02, foi pedido para fazer uma API Rest utilizando Javascript(Node.JS) ou Python que atende-se os seguintes requisitos:

**Checklist**

- [x] Uma rota /hello do tipo GET que retorne a mensagem "World";
- [x] Uma rota /soma do tipo POST que recebe um JSON com dois números inteiros e retorna a soma deles;
- [x] Uma rota /starwars/films  do tipo GET que retorna o nome dos filmes da franquia Star Wars (para fazer essa etapa você precisa usar a API aberta https://swapi.dev/, nela você pode fazer uma requisição para o endereço https://swapi.dev/api/films que retorna a informação de todos os filmes da franquia, incluindo o nome)
    
## :computer: Desenvolvimento

Decidi realizar o desafio utilizando o Node.JS. A opção pela ferramenta foi simplesmente para diversificar a linguagem da qual adotei para a 1º opção de desafio.

O Node, assim como o Python, nos oferecem diversas ferramentas que otimizam o nosso desenvolvimento, decidi utilizar as mais consolidadas para não ter nenhum <s>*susto*</s> problema. Para a requisição da API, utilizei o axios, por questões de desempenho e compatibilidades que percebi ao longo de atividades semelhantes. Inclusive, segue um artigo interessante que trata um pouco sobre [Fetch](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch) VS [Axios](https://www.npmjs.com/package/axios) https://medium.com/@thejasonfile/fetch-vs-axios-js-for-making-http-requests-2b261cdd3af5. 

A realização das tarefas foi de forma bem intuitiva, um GET pra lá, e mensagem aparecendo, um POST pra cá e soma realizada. Já na fase 3, fiquei um pouco confuso pois não tinha visto claramente onde estava a chave que eu queria para contemplar a resposta, mas dei aquela espertada e pronto. Fiz um map no array retornado e *voila!*, lista de filmes carregada com sucesso.🤓

## :wrench: Construido com

* [Node](https://nodejs.org/en/) - Software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web.
* [Express](https://expressjs.com/pt-br/) - Framework para Node.js que fornece recursos mínimos para construção de servidores web.
* [Body-parser](https://www.npmjs.com/package/body-parser) - Middleware de análise do body das solicitações recebidas do Node.js.
* [Nodemon](https://www.npmjs.com/package/nodemon) - Ferramenta que ajuda a desenvolver aplicativos baseados em node.js, reiniciando automaticamente o aplicativo quando mudanças de arquivo no diretório são detectadas.
* [Axios](https://www.npmjs.com/package/axios) - Cliente HTTP baseado em promessa para o navegador e node.js.

## :flags: Versão

* Usei o [GitHub](github.com) para o controle de versão.

## ✒️ Autores

* **Desenvolvedor Web** - *Desenvolvimento* - [Erick Marinho](https://github.com/Erick-Marinho)

## :blush: Expressões de gratidão

* Queria deixar aqui meu agradecimento especial ao [Wagner Agostinho](https://www.linkedin.com/in/wagnerrua/) CTO | [Driva](https://www.linkedin.com/company/driva-tech/) - pela oportunidade oferecida em realizar este desafio, que com certeza, ajudou-me a desafiar-me e principalmente em aprender um pouco mais. 🤓

---
⌨️ com ❤️ [Erick Marinho](https://github.com/Erick-Marinho)
