import example2page from '../pageObjects/example2page'

describe('test_Scenario', function(){

    it('Test_scenarios', function(){
        const tc = new example2page();
     
    cy.visit("https://www.hsbc.co.in/");
    cy.scrollTo(0 , 3000);
    tc.getScrolldown().click();
    //cy.url('eq', 'ways-to-bank/branches/')
    cy.url().should('include', 'ways-to-bank/')
    cy.title().should('include', 'Branches & ATM')
    tc.mainButton().click()
    cy.wait(6000)
    tc.getInput().type('india')
    tc.getAutocomplete().click()
    //cy.get('button').click().should('have.class', 'active')
    // cy.get('.S4y5MRLMz5P7VsczpZwj > :nth-child(3)').then(function(road){
    // const atm_header = road.text()
    // expect(atm_header).should('include','Rajbhavan Road')
    // })
    
    tc.check_disbaled().invoke('removeAttr' , 'disabled').click()
    
    tc.validate_text().each(($el, index) =>{
    
    const num= $el.find('span.yWQITJvVOSElgOOsYgyM').text()
    if(num.includes('2')){
        cy.log('true')
    }
    else{
        cy.log('false')
    }
    
    })
    cy.scrollTo(0 , 2000)
    cy.wait(3000)
    tc. getText().each(($el, index) => {
    
    cy.log($el.find('a'))
    
    })
    tc.getHeader().click()
    
    //cy.go(forward);
    cy.scrollTo('0','3000')
   tc.getFooter().click()
    
    
    
    
    
    
    
    
    
    
    })
    
    
    })