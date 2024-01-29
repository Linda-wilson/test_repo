import homePage from "../pageObjects/homePage";
import searchPage from "../pageObjects/searchPage";
import joynStreamingPage from "../pageObjects/joynStreamingPage";
import mobileViewPage from "../pageObjects/mobileViewPage";

describe('Wikipedia Joyn Streaming Platform Information Verification',()=>{

    //assigning url to a constant
    const wikiURL = "https://www.wikipedia.org/"

    //runs before each testcase
    beforeEach(() => {
        
        //opens wikipedia homepage
        cy.visit(wikiURL);
    });


    const home_Page = new homePage()
    const search = new searchPage()
    const joyn_Page = new joynStreamingPage()
    const mobile_view = new mobileViewPage()

    // testcase1 - Open wikipedia page
    it('open Wikipedia Homepage',()=>{
        
        //verify whether wikipedia homepage is opened or not
        home_Page. verifyHomePage()
        
    })

    //testcase2 - Search for "joyn"
    it('search for joyn',()=>{

        //type the joyn text and press enter key
        home_Page.searchText("Joyn")
        //verify the joyn search page
        search.searchPageVerification()
    })

     //testcase3 - Navigate to Joyn Streaming Platform Page
    it('navigate to joyn streaming page',() => {

        //type the joyn text and press enter key
        home_Page.searchText("Joyn")
        //click on joyn link
        search.joynlinkclick()      
        //verify the page title
        joyn_Page.joynVerifyTitle()

    })

    //testcase4 - Page information verification
    it(('page information verification on Joyn page'),()=>{

        //type the joyn text and press enter key
        home_Page.searchText("Joyn")
        //click on joyn link
        search.joynlinkclick()  
        //verify the information on the page
        joyn_Page.joynVerifyInfo()

    })

    //testcase5 - Scroll to the Bottom of the Page
    it(('scroll to the bottom of the page'),()=>{

        //type the joyn text and press enter key
        home_Page.searchText("Joyn")
        //click on joyn link
        search.joynlinkclick() 
        //scroll to the bottom of the page
        joyn_Page.joynScrollBottom()
        //verify the footer links
        joyn_Page.joynVerifyFooterLinks()
        //verify the mobile view link
        joyn_Page.joynVerifyMobileViewLink()

    })

    //testcase6 - Switch to Mobile View
    it('mobile view verification',()=>{

        //type the joyn text and press enter key
        home_Page.searchText("Joyn")
        //click on joyn link
        search.joynlinkclick() 
        //scroll to the bottom of the page
        joyn_Page.joynScrollBottom()
        //click on the mobile view
        joyn_Page.joynMobileViewClick()
        //change the page to mobile view
        mobile_view.changeToMobileView()
        //verfiy the mobile header
        mobile_view.verifyMobileHeader()
        //verfy the menu icon
        mobile_view.verifyMenuIcon()
        //scroll to the bottom
        mobile_view.scrollBottom()
        //verify the desktop link
        mobile_view.verifyDesktopLink()

    })
})