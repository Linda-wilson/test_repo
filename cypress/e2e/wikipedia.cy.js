/// <reference types="cypress"/>

describe('Wikipedia Joyn Streaming Platform Information Verification', ()=>{

    //assigning url to a constant
    const wikiURL = "https://www.wikipedia.org/"

    //runs before each testcase
    beforeEach(() => {
        
        //opens wikipedia homepage
        cy.visit(wikiURL);
    });

    // testcase1 - Open wikipedia page
    it('open Wikipedia Homepage',()=>{
        
        //verify the title of the home page
        cy.title().should('eq', 'Wikipedia')

        //verify the logo exists
        cy.get('.central-textlogo').should('exist')

        //verify the central feature exists
        cy.get('.central-featured').should('exist')

        //verify the existence of the search input field
        cy.get('#searchInput').should('exist')

        //verify the search button exists
        cy.get('.pure-button').should('exist')
    })


    //testcase2 - Search for "joyn"
    it('search for joyn',()=>{

        //locate the search bar on the wikipedia home page,type the joyn text and press enter key
        cy.get('#searchInput').type('joyn{enter}')

        //check if a list of search result related to joyn is displayed and the displayed result should be greater than 2
        cy.get('.mw-content-ltr li').should('exist')
                                    .and('contain','Joyn')
                                    .and('have.length.gt', 2)                                
    })

    //testcase3 - Navigate to Joyn Streaming Platform Page
    it('navigate to joyn streaming page',() => {

        //locate the search bar on the wikipedia home page,type the joyn text and press enter key
        cy.get('#searchInput').type('joyn{enter}')

        //Click on the link that corresponds to "Joyn (streaming platform)" 
        cy.contains('Joyn (streaming platform)').click()

        //check whether the title of the page is 'Joyn (streaming platform)'
        cy.title().should('eq','Joyn (streaming platform) - Wikipedia') 
    })


    //testcase4 - Page information verification
    it(('page information verification on Joyn page'),()=>{

        //locate the search bar on the wikipedia home page,type the joyn text and press enter key
        cy.get('#searchInput').type('joyn{enter}')

        //click on the link that corresponds to "Joyn (streaming platform)" 
        cy.contains('Joyn (streaming platform)').click()

        //locate the information box and check whether the details are within the information box
        cy.get('.infobox').within(() => {

            //verify whether year of Joyn is shown and filled
            cy.contains('Founded').next().should('contain', '2017'); 

            //verify country of origin of Joyn is shown and filled
            cy.contains('Country of origin').next().should('contain','Germany')
                                                
            //verify the web url is equal to https://www.joyn.de/
            cy.contains('URL').next().should('contain','https://www.joyn.de/')
        });
    })

    //testcase5 - Scroll to the Bottom of the Page
    it(('scroll to the bottom of the page'),()=>{

        //locate the search bar on the wikipedia home page,type the joyn text and press enter key
        cy.get('#searchInput').type('joyn{enter}')

        //click on the link that corresponds to "Joyn (streaming platform)" 
        cy.contains('Joyn (streaming platform)').click()

        //scroll to the bottom of the page
        cy.scrollTo('bottom')

        //verify whether the footer links are visible
        cy.get('#footer-places li').should('be.visible')

        //verify whether the mobile view link is shown
        cy.get('#footer-places-mobileview > .noprint').should('be.visible')
                                                      .and('have.text','Mobile view')
    })

    //testcase6 - Switch to Mobile View
    it('mobile view verification',()=>{

        //locate the search bar on the wikipedia home page,type the joyn text and press enter key
        cy.get('#searchInput').type('joyn{enter}')

        //click on the link that corresponds to "Joyn (streaming platform)"
        cy.contains('Joyn (streaming platform)').click()

        //scroll to the bottom of the page
        cy.scrollTo('bottom')

        //click on the link mobile-view
        cy.get('#footer-places-mobileview > .noprint').click()

        //change the size and orientation of the screen to iphone-6 
        cy.viewport('iphone-6');

        //verify if the mobile view header exists
        cy.get('.minerva-header').should('exist')

        //check if the menu icon is shown
        cy.get('#mw-mf-main-menu-button > .minerva-icon').should('be.visible')

        //scroll to the bottom of the page
        cy.scrollTo('bottom')

        //verify the link to Desktop view is shown
        cy.get('#mw-mf-display-toggle').should('have.text','Desktop')
                                       
    })
})