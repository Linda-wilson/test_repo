class joynStreamingPage{

    joyn_title = 'Joyn (streaming platform) - Wikipedia'
    joyn_infobox = '.infobox'
    joyn_textFounded = 'Founded'
    joyn_Year = '2017'
    joyn_textCountry = 'Country'
    joyn_country = 'Germany'
    joyn_texturl = 'URL'
    joyn_url = 'https://www.joyn.de/'
    joyn_footerLinks = '#footer-places li'
    joyn_mobileview = '#footer-places-mobileview > .noprint'


    joynVerifyTitle(){

        cy.title().should('eq',this.joyn_title)
    }


    joynVerifyInfo(){
        cy.get(this.joyn_infobox).within(() => {

            //verify whether year of Joyn is shown and filled
            cy.contains(this.joyn_textFounded).next().should('contain', this.joyn_Year); 

            //verify country of origin of Joyn is shown and filled
            cy.contains(this.joyn_textCountry).next().should('contain',this.joyn_country)
                                                
            //verify the web url is equal to https://www.joyn.de/
            cy.contains(this.joyn_texturl).next().should('contain', this.joyn_url)
        });
    }

    //scroll to the bottom of the page
    joynScrollBottom(){

        cy.scrollTo('bottom')
    }

    //verify whether the footer links are visible
    joynVerifyFooterLinks(){

        cy.get(this.joyn_footerLinks).should('be.visible')
    }

    //verify whether the mobile view link is shown
    joynVerifyMobileViewLink(){
        cy.get(this.joyn_mobileview).should('be.visible')
                                    .and('have.text','Mobile view')
    }

    //click on the mobile view
    joynMobileViewClick(){
        cy.get(this.joyn_mobileview).click()
    }


}

export default joynStreamingPage;