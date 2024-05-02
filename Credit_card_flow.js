import creditcardpage from '../pageObjects/creditcardpage'

describe('HSBC', function(){
    it('credit card flow', function(){
        const creditpage = new creditcardpage();
      cy.visit('https://www.hsbc.co.in')
      creditpage.getNavigationtitle().eq(1).trigger('mouseover')
      
      //cy.get('ul li:nth-child(1) a[href="/credit-cards/products/visa-cashback/"]').eq(1).should('be.visible')
     creditpage.getcreditcards().eq(1).click({force:true})  
     creditpage.getbanner().trigger('mouseover')
    
        // const credit_text = vali.text()
        // cy.get(vali).should('contains', credit_text)
    
    creditpage.getvisibletext().should('be.visible')
    const allcards = [
        "HSBC Cashback Credit Card",
        "HSBC Visa Platinum Credit Card", 
     "\n    \n    \n        \n        HSBC Premier Credit Card\n    \n"     
          
    
    
    
    
    ]
    // cy.get('.A-LNKND38L-RW-ALL.text-container.text').each((el , index ,list)=>{
    //     expect(list).to.have.length(3);
    //     cy.wrap(el).should('contain.text', allcards[index]);
    
    
    // })
    
    creditpage.get_image().should('be.visible')
   creditpage.getcontainertext().first().should('contain.text', 'HSBC Cashback Credit Card')
   creditpage.getbutton1().should('be.visible')
    creditpage.getbutton2().should('be.visible')
    creditpage.getbutton3().should('be.visible')
    creditpage.click_button()
        .click()
    creditpage.close_button().should('be.visible')
    //cy.get('#title-pp_tools_productComparator_4').should('contain.text','Select cards to compare')
    const popup = [
        "Premier Credit Card",
        "Cashback Credit Card",    
    "Visa Platinum Credit Card",
    
    
    
    ]
    const popup1 = [
        
        "Cashback Credit Card",    
    "Visa Platinum Credit Card",
    "Premier Credit Card",
    
    ]
    creditpage.label_checkbox().each((el , index ,list)=>{
          expect(list).to.have.length(3);
          cy.wrap(el).should('contain.text', popup[index]);
        
        
        })
       // cy.get('[data-product-type="premier-mastercard-credit-card"] > .container-title-checkbox > .modal-checkbox').click()
        creditpage.checkbox_1().eq(1).click();
        //cy.get('.modal-checkbox').eq(2).check()
        creditpage.button_click().click()
        creditpage.product_title().should('be.visible')
        creditpage.visible_text().should('be.visible')
        creditpage.click_on_visibletext().click()
    
        creditpage.title_checkbox().each(($el , index, list)=>{
    
         
          $el.find('.modal-checkbox').click()
            
         })
         popup1.forEach(function(ele){
          creditpage.getarrayele()
           
               })
        // cy.get('[data-product-type="visa-platinum-credit-card"] > .container-title-checkbox > .modal-checkbox').click()
        // cy.get('[data-product-type="premier-mastercard-credit-card"] > .container-title-checkbox > .modal-checkbox').click()
        //cy.get('.container-title-checkbox .modal-checkbox').click()
        creditpage.clickaction().click()
    
        creditpage.getloadedtitle().each(($el, index, list)=>{
            //expect(list).to.have.length(3);
            cy.wrap($el).should('contain.text', popup1[index]);
            
    
         
    
        })
        creditpage. getlinkiconclear().should('be.visible')
        creditpage.  getproductcashcard().click()
        creditpage.validate_length().its('length').should('eq', 1)
        creditpage.clickop().click()
        creditpage.closebutton().click()
            
    
        
    
        })
    
    
    
    })
    
    
          
    
      
    
    
    