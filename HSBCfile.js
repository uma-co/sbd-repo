//// <reference types = 'cypress'/>
import HSBCPAGE from '../pageObjects/HSBCPAGE'
import Checking from '../pageObjects/Checking'
//onst cypress = require('cypress')
describe('Validate HSBC app',function(){


//   before(function(){
//     cy.fixture('example').then(function(data){
//         this.data = data;
//     })
// })

    it('Validate HSBC apps', function(){

const home = new HSBCPAGE();
const checking = new Checking();

    cy.visit("https://www.hsbc.co.in/");


 home.logo().should('have.attr' , 'src').should('include', "HSBC_MASTERBRAND_LOGO_RGB.svg");

 
 home.getTitle().should('eq', 'HSBC India - Credit Cards, NRI Services, Saving and Deposit');
 home.getLOgon().click({force: true});
 home.getLOgonHeader().should('eq', 'Username | Log on | HSBC');
 checking.Continue().should('exist');
 //cy.get(':nth-child(5) > .col-sm-12').should('be.disabled');
 //cy.get('Continue').should('be.disabled');
checking.getUsername().type('umaraaj1999@gmail.com');
//checking.subutton().should('not.be.disabled')
 cy.wait(4000);
//  if(cy.get('#rememberMe').not.be.check()){
//      cy.log("unchecked");

//  }
 
checking.gettoolTip().should('exist');
//cy.get('#not_register > [role="text"]').should('exist')
//cy.get('#not_register > [role="text"]').should('have.value','Not registered for personal banking');
checking.Tooltipclicking().click();
 


    })

})