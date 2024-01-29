class searchPage{

    searchPage_verifyResult = '.mw-content-ltr li';

    //check if a list of search result related to joyn is displayed and the displayed result should be greater than 2
    searchPageVerification(){

        cy.get(this.searchPage_verifyResult).should('exist')
                                           .and('contain','Joyn')
                                           .and('have.length.gt', 2)  
    }

    //Click on the link that corresponds to "Joyn (streaming platform)"
    joynlinkclick(){
        cy.get(this.searchPage_verifyResult).contains('Joyn (streaming platform)').click()
    }

}

export default searchPage;