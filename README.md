
## Minhas anotações

  

**Configuração do Cypress.**

> - Para instalar o cypress no projeto eu executo `npm install cypress` na raiz do projeto.

  

> - Para abrir o cypress eu executo `npx cypress open`.

  

> - Crio o arquivo `CAC-TAT.spec.js` para os testes em `cypress/integration`.

  

> - Modifico o arquivo `cypress.json` conforme abaixo para sobrescrever o viewport padrao do cypress.

```
`{

"pluginsFile": false,

"viewportHeight": 880,

"viewportWidth": 1280

}`

  
```
**Comandos**

Estrutura basica para a suite de testes:

```

describe('NOME DA SUITE DE TESTES', function() {

it('NOME DO CASO DE TESTE', function() {

  

})

})

```

**Para visitar uma URL :**

`cy.visit()`

  

**Para verificar o titulo da pagina:**

`cy.title()`

  

**Para criar uma afirmação:**

`.should()`

**Exemplos:**

```

.should(be.visible) afirma que esta visivel

.should(be.empty) afirma que esta vazio

```

**Para digitar um texto:**

`.type()`

  

**Para Clicar:**

`.click()`

  

**Para selecionar um elemento:**

`cy.get()`

  

**Codigo que vai rodar antes de cada caso de teste**

`beforeEach()`

**Exemplo:**

```

beforeEach(() => {

  

cy.visit('src/index.html')

  

})

```

**Limpa o value de um `input` ou `textarea`:**

`.clear()`

  

**Identificar Elementos podendo passar texto como segundo argumento:**

`cy.contains()`

**Exemplo:**

`cy.contains('a', 'Clique aqui!')`

  

**Para a seleção de opções em campos de seleção suspensa:**

`.select()`

  

**Marcar `Checkbox` e `Radio`:**

`.check()`

  

**Passar por mais de 1 elemento quando o `cy.get()` retorna mais de 1 elemento:**

`.each()`

**Exemplo:**

```

.each(function($radio) { // cria uma funçao pra passar por cada um dos elementos em cada Radio

cy.wrap($radio).check() //envelopa cada um dos radio e usa check

cy.wrap($radio).should('be.checked') //envelopa cada um dos radio e usa should

```

  

**Empacotar algo para utilizar mais pra frente(exemplo acima):**

`cy.wrap()`

  

**Desmarcar Checkbox:**

`.uncheck()`

  

**Selecionar o ultimo elemento quando o `cy.get()` pega mais que 1:**

`.last()`

**Selecionar um arquivo para fazer upload:**

`.selectfile()`
  
  **invocar uma funçao**
  
  `.invoke()`

**congela o tempo do navegador**

`cy.clock()`

**avança o tempo do navegador em milésimos**

`cy.tick()`

**Faz uma requisiçao HTTP**
 [`cy.request()`](https://on.cypress.io/request)

 **[lodash (](https://github.com/Luckianm/cypress-basico-v2/blob/main/lessons/11.md#lodash-cypress_)[`Cypress._`](https://docs.cypress.io/api/utilities/_))**

O  [lodash](https://lodash.com/)  é uma biblioteca famosa no mundo JavaScript, com diversas funções utilitárias.

E o legal é que o Cypress já empacota o  `lodash`  junto com ele, através do módulo  `Cypress._`.

Algumas das minhas funcionalidades favoritas do  `._`  são:

-   [`Cypress._.times()`](https://lodash.com/docs/4.17.15#times)

>  A funcionalidade  `_.times()`  serve para você executar uma função de  _callback_  um certo número de vezes, onde o número de vezes é o primeiro argumento, e a função de  _callback_  é o segundo.

-   [`Cypress._.repeat()`](https://lodash.com/docs/4.17.15#repeat)

>  A funcionalidade  `_.repeat()`  serve para repetir uma string um certo número de vezes, onde o primeiro argumento é a string a qual deseja-se repetir, e o segundo argumento quantas vezes tal string deve ser repetida.

## Recapitulando

  

No curso de testes automatizados com Cypress (básico), eu aprendi:

  

- Como configurar um projeto Cypress do zero ✔️

- Como visitar páginas locais e remotas ✔️

- Como lidar com os elementos mais comuns encontrados em aplicações web ✔️

- Como testar _upload_ de arquivos ✔️

- Como realizar as mais diversas verificações de resultados esperados ✔️

- Como criar comandos customizados ✔️

- Como lidar com links que abrem em outra aba do navegador ✔️

- Como rodar testes simulando as dimensões de um dispositivo móvel ✔️

- Como resolver os mesmos problemas de diferentes formas, conhecendo a [API do Cypress](https://docs.cypress.io/api/table-of-contents) ✔️

- Como executar os testes em um _pipeline_ de integração contínua sempre que mudanças ocorrerem no código da aplicação (ou dos testes) ✔️

- Como criar uma documentação mínima para seu projeto de testes automatizados ✔️

  
  

# Documentação do Projeto

  

Estou usando esse repositório no [curso de Cypress basico](https://www.udemy.com/course/testes-automatizados-com-cypress-basico/learn/lecture/31148116#content) do **Walmyr Filho**

  

# Pré-requisitos

  

- [git](https://git-scm.com/) (estou usando a versão `2.41.0`)

- [Node.js](https://nodejs.org/en/) (estou usando a versão `v20.9.0`)

- npm (estou usando a versão `10.1.0`)

- [Visual Studio Code](https://code.visualstudio.com/) (estou usando a versão `1.83.1` ) ou alguma outra IDE de sua preferência

>**Obs. 2:** Ao instalar o Node.js o npm é instalado junto. 🎉

  
  

## Instalação e inicialização do [Cypress](https://cypress.io/) 🌲

  

1. Na raiz do projeto, execute o comando `npm install cypress@9.5.1 --save-dev` (ou `npm i cypress@9.5.1 -D` para a versão curta)

2. Logo após, execute o comando `npx cypress open` para abrir o Cypress pela primeira vez

3. Por fim, com o _Test Runner_ aberto, delete os exemplos criados automaticamente, crie um arquivo chamado `CAC-TAT.spec.js` e feche o _Test Runner_.

  

> **Obs. 2:** Quando inicializado pela primeira vez, o Cypress automaticamente cria o arquivo `cypress.json` e o diretório `cypress/`, com os sub-diretórios `fixtures/`, `integration/`, `plugins/` e `support/`, com seus respetivos arquivos (com exceção dos exemplos, que acabamos de deletar).

  

> **Obs. 3:** ⚠️ Instale a exata versão do Cypress descrita nos passos acima. Ao final do curso deixo o link para um vídeo no Canal TAT no YouTube demonstrando como fazer o _upgrade_ para uma versão mais recente do Cypress (v10+).

  
  

## Testes

  

Para rodar os testes estou usando o comando `npm test` no **terminal** ou os scripts que estão em `package.json`.

  
```
"scripts": {

"cy:open": "cypress open",

"cy:open:mobile": "cypress open --config viewportWidth=410 viewportHeight=860",

"test": "cypress run",

"test:mobile": "cypress run --config viewportWidth=410 viewportHeight=860"

}
``