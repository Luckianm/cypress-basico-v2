/// <reference types="Cypress" />

beforeEach(() => {
    cy.visit('src/index.html')
})

context('TAT - formulario - Seçao 3', () => {
    const user = {}



describe('Central de Atendimento ao Cliente TAT', function() {

    it('verifica o título da aplicação', function() {

        cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')
    })

    Cypress._.times(3, function() { // faz o teste rodar 3 vezes
        it('preenche os campos obrigatórios e envia o formulário', function() {

            cy.clock()
            cy.get('#firstName').type('Gustavo')
            cy.get('#lastName').type('Soares')
            cy.get('#email').type('gbsouzaofc@gmail.com')
            cy.get('#open-text-area').type('aaaaaaaaaaaaaaabbbbbbbbbbbbbbbbccccccccccsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssscc', {delay:0})
            cy.contains('button', 'Enviar').click()
            cy.get('.success').should('be.visible')
            cy.tick(3000).get('.success').should('not.be.visible')
        })
    })

    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {

        cy.clock()
        cy.get('#firstName').type('Gustavo')
        cy.get('#lastName').type('Soares')
        cy.get('#email').type('gbsouzaofc@gmail...com')
        cy.contains('button', 'Enviar').click()
        cy.get('.error').should('be.visible')
        cy.tick(3000).get('.error').should('not.be.visible')
    })

    it('Campo telefone só aceita numeros', function() {

        cy.get('#phone').type('aaaaaabbbbbbcccccc').should('have.text', '')
    })

    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function() {

        const longText = Cypress._.repeat('abacate ',35) // declaro uma constante que repete o texto "abacate" 35 vezes

        cy.clock()
        cy.get('#firstName').type('Gustavo')
        cy.get('#lastName').type('Soares')
        cy.get('#email').type('gbsouzaofc@gmail.com')
        cy.get('#phone-checkbox').check()
        cy.get('#open-text-area').type(longText, {delay:0})
        cy.contains('button', 'Enviar').click()
        cy.get('.error').should('be.visible')
        cy.tick(3000).get('.error').should('not.be.visible')
    })


    it('preenche e limpa os campos nome, sobrenome, email e telefone', function() {

        cy.get('#firstName')
        .type('Gustavo')
        .should('have.value', 'Gustavo')
        .clear()
        .should('have.value', '')
        cy.get('#lastName')
        .type('Soares')
        .should('have.value', 'Soares')
        .clear()
        .should('have.value', '')
        cy.get('#email')
        .type('gbsouzaofc@gmail.com')
        .should('have.value', 'gbsouzaofc@gmail.com')
        .clear()
        .should('have.value', '')
        cy.get('#phone')
        .type('81 9 8460 0476')
        .should('have.value', '81984600476')
        .clear()
        .should('have.value', '')
   })

   it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function() {

    cy.clock()
    cy.contains('button', 'Enviar').click()
    cy.get('.error').should('be.visible') 
    cy.tick(3000).get('.error').should('not.be.visible')
   })
   
   it('envia o formuário com sucesso usando um comando customizado', function() {

    cy.fillMandatoryFieldsAndSubmit(user)
        
   })
})
})

context('TAT - formulario - Seçao 4', () => {
    describe('Central de Atendimento ao Cliente TAT', function() {

    it('seleciona um produto (YouTube) por seu texto', function() {
        cy.get('#product')
        .select('YouTube')
        .should('have.value', 'youtube')  
    })

    it('seleciona um produto (Mentoria) por seu valor (value)', function() {
        cy.get('#product')
        .select('mentoria')
        .should('have.value', 'mentoria')  
    })

    it('seleciona um produto (Blog) por seu índice', function() {
        cy.get('#product')
        .select(1)
        .should('have.value', 'blog')  
    })
})
})

context('TAT - formulario - Seçao 5', () => {
    describe('Central de Atendimento ao Cliente TAT', function() {

        it('marca o tipo de atendimento "Feedback"', function(){
            cy.get('input[type="radio"][value="feedback"]')
            .check()
            .should('have.value', 'feedback')
        })

        it('marca cada tipo de atendimento', function() {
            cy.get('input[type="radio"]') // Seleciona os Radio's
            .should('have.length', 3) // Confirmar que sao 3 elementos
            .each(function($radio) { // cria uma funçao pra passar por cada um dos elementos em cada Radio
                cy.wrap($radio).check() //empacota cada um dos radio e usa check
                cy.wrap($radio).should('be.checked') //empacota cada um dos radio e usa should
            })
        })
})
})

context('TAT - formulario - Seçao 6', () => {
    describe('Central de Atendimento ao Cliente TAT', function() {

        it('marca ambos checkboxes, depois desmarca o último', function(){
            cy.get('input[type="checkbox"]')
            .check().should('be.checked')
            .last().uncheck().should('not.be.checked')
        })
    })
})

context('TAT - formulario - Seçao 7', () => {
    describe('Central de Atendimento ao Cliente TAT', function() {

        it('seleciona um arquivo da pasta fixtures', function(){
            cy.get('input[type="file"]') //pego o campo file - retorna um input
            .selectFile('cypress/fixtures/example.json') // seleciono o arquivo para upload
            .should(function($input) { // entao crio uma funçao
                console.log($input) // Uso o console.log para ver como montar o expect abaixo
                expect($input[0].files[0].name).to.equal('example.json') // a funçao recebe o input e  
            })                                                          // confirma se o nome do arquivo 0 
        })                                                              // do input 0 é igual example.json
        
        it('seleciona um arquivo simulando um drag-and-drop', function(){
            cy.get('input[type="file"]')
            .selectFile('cypress/fixtures/example.json', {action: 'drag-drop'})
            .should(function($input) { // entao crio uma funçao
                expect($input[0].files[0].name).to.equal('example.json') // a funçao recebe o input e  
            }) 
        })

        it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', function(){
            cy.fixture('example.json').as('myFixture') // seleciona o example.json e apelida ele de myFixture
            cy.get('input[type="file"]').selectFile('@myFixture') // seleciona o campo file e seleciona o arquivo usando o apelido
            .should(function($input) { // entao crio uma funçao
                expect($input[0].files[0].name).to.equal('example.json') // a funçao recebe o input e  
            }) 
        })
    })
})

context('TAT - formulario - Seçao 8', () => {
    describe('Central de Atendimento ao Cliente TAT', function() {
        it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', function(){
            cy.get('a[href="privacy.html"]')
            .should('have.attr', 'target', '_blank') // confirmo se o link tem o atributo target:_blank
        })

        it('acessa a página da política de privacidade removendo o target e então clicando no link', function(){
            cy.get('a[href="privacy.html"]')
            .invoke('removeAttr', 'target') //removo o atributo target do link.
            .click()
        })

        it('testa a página da política de privacidade de forma independente', function(){
            cy.get('a[href="privacy.html"]')
            .invoke('removeAttr', 'target') //removo o atributo target do link.
            .click()
            cy.get('h1[id="title"]').should('have.text', 'CAC TAT - Política de privacidade')
        })
    })
})


context('TAT - formulario - Seçao 12', () => {
    describe('Central de Atendimento ao Cliente TAT', function() {

        it('exibe e esconde as mensagens de sucesso e erro usando o .invoke()', function(){
            cy.get('.success')
            .should('not.be.visible')
            .invoke('show')
            .should('be.visible')
            .and('contain', 'Mensagem enviada com sucesso.')
            .invoke('hide')
            .should('not.be.visible')
            cy.get('.error')
            .should('not.be.visible')
            .invoke('show')
            .should('be.visible')
            .and('contain', 'Valide os campos obrigatórios!')
            .invoke('hide')
            .should('not.be.visible')
        })

        it('preenche a area de texto usando o comando invoke', function(){
            const longText = Cypress._.repeat('abacate ',35)
            cy.get('#open-text-area')
            .invoke('val', longText)    //invoca o valor na area de texto
            .should('have.value', longText)
        })

        it('faz uma requisição HTTP', function() {
            cy.request('GET', 'https://cac-tat.s3.eu-central-1.amazonaws.com/index.html') //  faço uma requisiçao GET
            .should((response) => { // funçao de callback dentro do should, funçao recebendo a reposta da requisiçao
                expect(response.status).to.equal(200); //status igual a 200
                expect(response.statusText).to.equal('OK'); //statusText igual a OK
                expect(response.body).to.include('CAC TAT') //body inclui CAC TAT
            })
        })

        it.only('Desafio (encontre o gato)', function(){
            cy.get('#cat')
            .invoke('show')
            .should('be.visible')
        })
    })
})
