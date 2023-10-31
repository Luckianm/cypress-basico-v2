# Documentação do Projeto

Estou usando esse repositório no [curso de Cypress basico](https://www.udemy.com/course/testes-automatizados-com-cypress-basico/learn/lecture/31148116#content)  do **Walmyr Filho**

# Pré-requisitos

-   [git](https://git-scm.com/)  (estou usando a versão  `2.41.0`)
-   [Node.js](https://nodejs.org/en/)  (estou usando a versão  `v20.9.0`)
-   npm (estou usando a versão  `10.1.0`)
-   [Visual Studio Code](https://code.visualstudio.com/)  (estou usando a versão  `1.83.1` ) ou alguma outra IDE de sua preferência
>**Obs. 2:**  Ao instalar o Node.js o npm é instalado junto. 🎉


## Instalação e inicialização do [Cypress](https://cypress.io/)  🌲

1.  Na raiz do projeto, execute o comando  `npm install cypress@9.5.1 --save-dev`  (ou  `npm i cypress@9.5.1 -D`  para a versão curta)
2.  Logo após, execute o comando  `npx cypress open`  para abrir o Cypress pela primeira vez
3.  Por fim, com o  _Test Runner_  aberto, delete os exemplos criados automaticamente, crie um arquivo chamado  `CAC-TAT.spec.js`  e feche o  _Test Runner_.

> **Obs. 2:**  Quando inicializado pela primeira vez, o Cypress automaticamente cria o arquivo  `cypress.json`  e o diretório  `cypress/`, com os sub-diretórios  `fixtures/`,  `integration/`,  `plugins/`  e  `support/`, com seus respetivos arquivos (com exceção dos exemplos, que acabamos de deletar).

> **Obs. 3:**  ⚠️  Instale a exata versão do Cypress descrita nos passos acima. Ao final do curso deixo o link para um vídeo no Canal TAT no YouTube demonstrando como fazer o  _upgrade_  para uma versão mais recente do Cypress (v10+).


## Testes

Para rodar os testes estou usando o comando `npm test` no **terminal** ou os scripts que estão em `package.json`.

    "scripts": {
    "cy:open":  "cypress open",
    "cy:open:mobile":  "cypress open --config viewportWidth=410 viewportHeight=860",
    "test":  "cypress run",
    "test:mobile":  "cypress run --config viewportWidth=410 viewportHeight=860"
    }


> 
## Minhas anotações

...

