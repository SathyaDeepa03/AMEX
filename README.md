# AMEX
#About Playwright:
Playwright is a  free and open source framework for Web Testing and Automation.

# Supports
Applications : Web browser apps, Mobile web apps and API
Languages : Typescript, Javascript, Java, Python, .NET(C#)
Browsers : Chromium, Webkit and Firefox
OS : Windows, MacOS, Linus

# Prerequisites
Node JS
IDE (Visual Studio Code)
Github account

# Installation
1. Create a new folder and open in VS code
2. Go to terminal and run command "npm init playwright@latest"
3. Following files and modules will created
     > .github
     > node_modules
     > playwright-report
     > tests
     > tests-examples
     > .gitignore
     > package-lock.json
     > package.json
     > playwright.config.js

4. Check playwright added using "npm playwright -v" cmd
5. Check playwright command options using "npx playwright -h" cmd

# How to run tests: 
npx playwright test  //runs all tests on all browsers in headless mode
npx playwright test --workers 3  // runs with 3 workers in parallel
npx playwright test test.spec.js  //runs a specific test file

# Comments to run AMEX - QA Assessment test cases
1. npx playwright test Amex_full_flow.spec.js --project=chromium --headedS
2. npx playwright test Separate_tc.spec.js
