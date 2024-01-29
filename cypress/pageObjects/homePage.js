class homePage{


    homepage_logo =".central-textlogo";
    homePage_centalFeatures = '.central-featured';
    homePage_searchbox = '#searchInput';
    homePage_searchButton = '.pure-button';



    

    verifyHomePage(){

        //verify title of the homepage
        cy.title().should('eq', 'Wikipedia')

        //verify the logo exists
        cy.get(this.homepage_logo).should('exist')

        //verify the central feature exists
        cy.get(this.homePage_centalFeatures).should('exist')

        //verify the existence of the search input field
        cy.get(this.homePage_searchbox).should('exist')

        //verify the search button exists
        cy.get(this.homePage_searchButton).should('exist')
    }

    //search the text joyn and press enter
    searchText(text){
        cy.get(this.homePage_searchbox).type(text).type('{enter}')
    }
}

export default homePage;