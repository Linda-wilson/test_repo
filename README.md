To install the Cypress project and run tests, follow these steps:

Pre requisites
Node.js and npm: Cypress is a JavaScript end-to-end testing framework and requires Node.js and npm to be installed. You can download them from the official Node.js website.

Step1
Clone the repository : 
Run the following command : git clone <repository-url>

Step2
Navigate to the Project Directory:
cd path/to/your/project

Step3
Open the Cypress Test Runner: npx cypress open
This will open the Cypress Test Runner interface.

Alternatively
Step 3: Run Tests from the Command Line (Optional)
If you prefer to run tests from the command line, you can use the following commands:
# Run all tests headlessly (in the terminal)
npx cypress run
# Run a specific test file
npx cypress run --spec "cypress/integration/your-test-file.spec.js"

When you run the tests from command line screenshots of the failed tests will be available in the foleder cypress/screenshots
Video of the entire test would be available in the cypress/videos
