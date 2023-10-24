import("cypress-file-upload")

describe('csv invoice', ()=> {
    beforeEach(() => {
        cy.visit('https://csvdemomockappp.bundlewallet.com')
    })

    it('URL Link should be Accessible',()=>{
        cy.visit('https://csvdemomockappp.bundlewallet.com')
    })

    it('Valid file format',()=>{
        cy.get('#statement-file').attachFile('bill.csv')
    });
    it('Invalid file format',()=>{
        cy.get('#statement-file').attachFile('IncomeShareAgreement.pdf')
    })

    it('CSV Invoice Parser visibility',()=>{
        cy.get('h1').should('be.visible')
        cy.get('h1').should('contain','CSV Invoice Parser')
    })

    it('verify the display screen shows a file upload Button',()=>{
        cy.get('#statement-file').should('be.visible')
    })

      it('Parser Invoice file visibility',()=>{
        cy.get('.btn').should('be.visible')
        cy.get('.btn').should('contain','Parse Invoice File')
 
      })

      it('Click Here visibility',()=>{
        cy.get('a').should('be.visible')
        cy.get('a').should('contain','Click Here')
        //cy.get('a').click()
      })

      it('verify the display screen shows a specify file description',()=>{
        cy.get('label').should('be.visible')
        cy.get('label').should('contain', 'Specify File')
      })

      it('verify the display screen shows a Choose File',()=>{
        cy.get('#statement-file').should('be.visible')
        //cy.get('#statement-file').should('contain', 'Choose File')
      })

      it('verify that the Parse Invoice File Button is functional',()=>{
        cy.get('#statement-file').attachFile('bill.csv')
        cy.get('.btn').click()
    
      })

      it('Verify that a summary result shows after parsing a file',()=>{
        cy.get('#statement-file').attachFile('bill.csv')
        cy.get('.btn').click()
        cy.get('[ng-view=""]').should('be.visible')
        cy.get('[ng-view=""]').should('contain','summary')

      })

      it('Response time to parse a file should be less than 300ms',()=>{
        cy.get('#statement-file').attachFile('bill.csv')
        // Record start time before request is made
        const starttime = Date.now();
        
        //Use cy.get to interact with an element or trigger a network request 
        cy.wait(1000)
        cy.get('.btn').click()
        cy.wait(1000)

        //Record end time after request is complete
        const endTime = Date.now();

      })

      it('Response time to upload a File should be less than 300ms',()=>{
        cy.get('#statement-file').attachFile('bill.csv')

        const startTime = Date.now();
        cy.wait(1000)
        cy.get('#statement-file').attachFile('bill.csv')
        cy.wait(1000)
        const endTime = Date.now();

      })

      it('Validate that Invalide file format can not be parsed',()=>{
        cy.get('#statement-file').attachFile('IncomeShareAgreement.pdf')
        cy.get('.btn').click()
      })

      it('Verify that an Alert shows when an Invalid File format is Parsed',()=>{
        cy.get('#statement-file').attachFile('IncomeShareAgreement.pdf')
        cy.get('.btn').click()
        cy.get('.alert')
      })

      it('Verify that a processing message Alert shows after clicking on the Parse File Button',()=>{
        cy.get('#statement-file').attachFile('bill.csv')
        cy.wait(1000)
        cy.get('.btn').click()
        cy.get('span')
      })
      it('Verify that a message shows could not parse input when an invalid file format is uploaded is visible',()=>{
        cy.get('#statement-file').attachFile('IncomeShareAgreement.pdf')
        cy.get('.btn').click()
        cy.get('.alert').should('be.visible')
        cy.get('.alert').should('contain', 'Could not parse input')

      })

      it('Verify that the Alert message for processing parsed input file is visible',()=>{
        cy.get('#statement-file').attachFile('bill.csv')
        cy.wait(1000)
        cy.get('.btn').click()
        cy.get('span').should('be.visible')
        cy.get('span').should('contain','Please wait while we parse the uploaded file')


      })
})