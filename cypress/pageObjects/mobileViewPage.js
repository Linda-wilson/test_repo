class mobileViewPage{
    
    mobile_view = 'iphone-6'
    mobile_header = '.minerva-header'
    mobile_menuIcon = '#mw-mf-main-menu-button > .minerva-icon'
    mobile_desktopLink = '#mw-mf-display-toggle'

    //change the size and orientation of the screen to iphone-6 
    changeToMobileView(){
        cy.viewport(this.mobile_view);
    }

     //verify if the mobile view header exists
    verifyMobileHeader(){
        cy.get(this.mobile_header).should('exist')
    }

    //check if the menu icon is shown
    verifyMenuIcon(){
        cy.get(this.mobile_menuIcon).should('be.visible')
    }

     //scroll to the bottom of the page
    scrollBottom(){
        cy.scrollTo('bottom')
    }

    //verify the link to Desktop view is shown
    verifyDesktopLink(){
        cy.get(this.mobile_desktopLink).should('have.text','Desktop')
    }
}

export default mobileViewPage