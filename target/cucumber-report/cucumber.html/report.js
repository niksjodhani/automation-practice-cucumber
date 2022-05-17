$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("accountPageTest.feature");
formatter.feature({
  "line": 1,
  "name": "AccountPageTest",
  "description": "As user I want to sign  into automation practice website",
  "id": "accountpagetest",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "User should navigate to Sign page successfully",
  "description": "",
  "id": "accountpagetest;user-should-navigate-to-sign-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on SigninLink",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I enter email",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click on create an accountbutton",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I Should navigate to CREATE AN ACCOUNT successfully",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I Select Gender",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I Enter FirstName",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I Enter LastName",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter Password",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter Password",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Enter FirstNameAdd",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I Enter LastNameAdd",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I Enter Address",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I Enter city",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I Select State",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I Enter ZipCode",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I Select Country",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I Enter MobileNum",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I Enter FutureReference",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on RegisterButton",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I Should navigate to MyAccount  page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "SignPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 110587200,
  "status": "passed"
});
formatter.match({
  "location": "SignPageTest.iClickOnSigninLink()"
});
formatter.result({
  "duration": 71610800,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat com.automation.utility.Utility.clickOnElement(Utility.java:52)\r\n\tat com.automation.pages.HomePage.clickOnSignIn(HomePage.java:41)\r\n\tat com.automation.steps.SignPageTest.iClickOnSigninLink(SignPageTest.java:20)\r\n\tat ✽.When I click on SigninLink(accountPageTest.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CreateAccountTest.iEnterEmail()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateAccountTest.iClickOnCreateAnAccountbutton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateAccountTest.iShouldNavigateToCREATEANACCOUNTSuccessfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateAccountTest.iSelectGender()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateAccountTest.iEnterFirstName()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateAccountTest.iEnterLastName()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateAccountTest.iEnterPassword()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateAccountTest.iEnterPassword()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateAccountTest.iEnterFirstNameAdd()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateAccountTest.iEnterLastNameAdd()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateAccountTest.iEnterAddress()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateAccountTest.iEnterCity()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateAccountTest.iSelectState()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateAccountTest.iEnterZipCode()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateAccountTest.iSelectCountry()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateAccountTest.iEnterMobileNum()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateAccountTest.iEnterFutureReference()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateAccountTest.iClickOnRegisterButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateAccountTest.iShouldNavigateToMyAccountPageSuccessfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 17080387500,
  "status": "passed"
});
formatter.after({
  "duration": 1449745400,
  "status": "passed"
});
formatter.uri("signpageTest.feature");
formatter.feature({
  "line": 1,
  "name": "SignPageTest",
  "description": "As user I want to sign  into automation practice website",
  "id": "signpagetest",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "User should navigate to Sign page successfully",
  "description": "",
  "id": "signpagetest;user-should-navigate-to-sign-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on SigninLink",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I Should navigate to SigninLink successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "SignPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 54200,
  "status": "passed"
});
formatter.match({
  "location": "SignPageTest.iClickOnSigninLink()"
});
formatter.result({
  "duration": 25968400,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-GDT3JREG\u0027, ip: \u0027192.168.0.8\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [null, findElement {using\u003dxpath, value\u003d//*[@id\u003d\"header\"]/div[2]/div/div/nav/div[1]/a}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\ektam\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:62464}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:62464/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:145)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat com.automation.utility.Utility.clickOnElement(Utility.java:52)\r\n\tat com.automation.pages.HomePage.clickOnSignIn(HomePage.java:41)\r\n\tat com.automation.steps.SignPageTest.iClickOnSigninLink(SignPageTest.java:20)\r\n\tat ✽.When I click on SigninLink(signpageTest.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SignPageTest.iShouldNavigateToSigninLinkSuccessfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 10716051500,
  "status": "passed"
});
formatter.after({
  "duration": 1526800600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "verifyTheErrorMessageWithInValidCredentials",
  "description": "",
  "id": "signpagetest;verifytheerrormessagewithinvalidcredentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on SigninLink",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I Should navigate to SigninLink successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I enter Username \"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter Password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see the error message\"\u003cerrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "signpagetest;verifytheerrormessagewithinvalidcredentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "errorMessage"
      ],
      "line": 19,
      "id": "signpagetest;verifytheerrormessagewithinvalidcredentials;;1"
    },
    {
      "cells": [
        "",
        "123456",
        "An email address required."
      ],
      "line": 20,
      "id": "signpagetest;verifytheerrormessagewithinvalidcredentials;;2"
    },
    {
      "cells": [
        "abcd@gmail.com",
        "",
        "Password is required."
      ],
      "line": 21,
      "id": "signpagetest;verifytheerrormessagewithinvalidcredentials;;3"
    },
    {
      "cells": [
        "adfdfgfg",
        "123456",
        "Invalid email address."
      ],
      "line": 22,
      "id": "signpagetest;verifytheerrormessagewithinvalidcredentials;;4"
    },
    {
      "cells": [
        "abcd@gmail.com",
        "123456",
        "Authentication failed."
      ],
      "line": 23,
      "id": "signpagetest;verifytheerrormessagewithinvalidcredentials;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 20,
  "name": "verifyTheErrorMessageWithInValidCredentials",
  "description": "",
  "id": "signpagetest;verifytheerrormessagewithinvalidcredentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on SigninLink",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I Should navigate to SigninLink successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I enter Username \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter Password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see the error message\"An email address required.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 56100,
  "status": "passed"
});
formatter.match({
  "location": "SignPageTest.iClickOnSigninLink()"
});
formatter.result({
  "duration": 4993300,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-GDT3JREG\u0027, ip: \u0027192.168.0.8\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [null, findElement {using\u003dxpath, value\u003d//*[@id\u003d\"header\"]/div[2]/div/div/nav/div[1]/a}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\ektam\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:62523}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:62523/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:145)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat com.automation.utility.Utility.clickOnElement(Utility.java:52)\r\n\tat com.automation.pages.HomePage.clickOnSignIn(HomePage.java:41)\r\n\tat com.automation.steps.SignPageTest.iClickOnSigninLink(SignPageTest.java:20)\r\n\tat ✽.When I click on SigninLink(signpageTest.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SignPageTest.iShouldNavigateToSigninLinkSuccessfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    }
  ],
  "location": "SignPageTest.iEnterUsername(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 18
    }
  ],
  "location": "SignPageTest.iEnterPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SignPageTest.iClickOnLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "An email address required.",
      "offset": 31
    }
  ],
  "location": "SignPageTest.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 12797289500,
  "status": "passed"
});
formatter.after({
  "duration": 1317438500,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "verifyTheErrorMessageWithInValidCredentials",
  "description": "",
  "id": "signpagetest;verifytheerrormessagewithinvalidcredentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on SigninLink",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I Should navigate to SigninLink successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I enter Username \"abcd@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter Password \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see the error message\"Password is required.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 43500,
  "status": "passed"
});
formatter.match({
  "location": "SignPageTest.iClickOnSigninLink()"
});
formatter.result({
  "duration": 9115500,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-GDT3JREG\u0027, ip: \u0027192.168.0.8\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [null, findElement {using\u003dxpath, value\u003d//*[@id\u003d\"header\"]/div[2]/div/div/nav/div[1]/a}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\ektam\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:62574}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:62574/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:145)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat com.automation.utility.Utility.clickOnElement(Utility.java:52)\r\n\tat com.automation.pages.HomePage.clickOnSignIn(HomePage.java:41)\r\n\tat com.automation.steps.SignPageTest.iClickOnSigninLink(SignPageTest.java:20)\r\n\tat ✽.When I click on SigninLink(signpageTest.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SignPageTest.iShouldNavigateToSigninLinkSuccessfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd@gmail.com",
      "offset": 18
    }
  ],
  "location": "SignPageTest.iEnterUsername(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    }
  ],
  "location": "SignPageTest.iEnterPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SignPageTest.iClickOnLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 31
    }
  ],
  "location": "SignPageTest.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1839952500,
  "status": "passed"
});
formatter.after({
  "duration": 940340800,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "verifyTheErrorMessageWithInValidCredentials",
  "description": "",
  "id": "signpagetest;verifytheerrormessagewithinvalidcredentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on SigninLink",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I Should navigate to SigninLink successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I enter Username \"adfdfgfg\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter Password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see the error message\"Invalid email address.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 68900,
  "status": "passed"
});
formatter.match({
  "location": "SignPageTest.iClickOnSigninLink()"
});
formatter.result({
  "duration": 5318300,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-GDT3JREG\u0027, ip: \u0027192.168.0.8\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [null, findElement {using\u003dxpath, value\u003d//*[@id\u003d\"header\"]/div[2]/div/div/nav/div[1]/a}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\ektam\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:62626}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:62626/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:145)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat com.automation.utility.Utility.clickOnElement(Utility.java:52)\r\n\tat com.automation.pages.HomePage.clickOnSignIn(HomePage.java:41)\r\n\tat com.automation.steps.SignPageTest.iClickOnSigninLink(SignPageTest.java:20)\r\n\tat ✽.When I click on SigninLink(signpageTest.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SignPageTest.iShouldNavigateToSigninLinkSuccessfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "adfdfgfg",
      "offset": 18
    }
  ],
  "location": "SignPageTest.iEnterUsername(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 18
    }
  ],
  "location": "SignPageTest.iEnterPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SignPageTest.iClickOnLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid email address.",
      "offset": 31
    }
  ],
  "location": "SignPageTest.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 4159963000,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom unknown error: cannot determine loading status\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d101.0.4951.67)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-GDT3JREG\u0027, ip: \u0027192.168.0.8\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [53c9aa76723754af42bb6925e7bfe47f, get {url\u003dhttp://automationpractice.com/index.php}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\ektam\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:62647}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:62647/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 53c9aa76723754af42bb6925e7bfe47f\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:328)\r\n\tat com.automation.drivermanager.ManageDriver.selectBrowser(ManageDriver.java:41)\r\n\tat com.automation.Hooks.setup(Hooks.java:15)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 4099478500,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d101.0.4951.67)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-GDT3JREG\u0027, ip: \u0027192.168.0.8\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [53c9aa76723754af42bb6925e7bfe47f, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\ektam\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:62647}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:62647/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 53c9aa76723754af42bb6925e7bfe47f\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:614)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:618)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:349)\r\n\tat com.automation.utility.Utility.getScreenshot(Utility.java:334)\r\n\tat com.automation.Hooks.tearDown(Hooks.java:22)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 23,
  "name": "verifyTheErrorMessageWithInValidCredentials",
  "description": "",
  "id": "signpagetest;verifytheerrormessagewithinvalidcredentials;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on SigninLink",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I Should navigate to SigninLink successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I enter Username \"abcd@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter Password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see the error message\"Authentication failed.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 25300,
  "status": "passed"
});
formatter.match({
  "location": "SignPageTest.iClickOnSigninLink()"
});
formatter.result({
  "duration": 12206246000,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d101.0.4951.67)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-GDT3JREG\u0027, ip: \u0027192.168.0.8\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [53c9aa76723754af42bb6925e7bfe47f, findElement {using\u003dxpath, value\u003d//*[@id\u003d\"header\"]/div[2]/div/div/nav/div[1]/a}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\ektam\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:62647}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:62647/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 53c9aa76723754af42bb6925e7bfe47f\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat com.automation.utility.Utility.clickOnElement(Utility.java:52)\r\n\tat com.automation.pages.HomePage.clickOnSignIn(HomePage.java:41)\r\n\tat com.automation.steps.SignPageTest.iClickOnSigninLink(SignPageTest.java:20)\r\n\tat ✽.When I click on SigninLink(signpageTest.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SignPageTest.iShouldNavigateToSigninLinkSuccessfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd@gmail.com",
      "offset": 18
    }
  ],
  "location": "SignPageTest.iEnterUsername(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 18
    }
  ],
  "location": "SignPageTest.iEnterPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SignPageTest.iClickOnLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Authentication failed.",
      "offset": 31
    }
  ],
  "location": "SignPageTest.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 10920444200,
  "status": "passed"
});
formatter.after({
  "duration": 1396101500,
  "status": "passed"
});
formatter.uri("womencategorypageTest.feature");
formatter.feature({
  "line": 1,
  "name": "WomanCategoryPageTest",
  "description": "As user I want to open Woman page In automation practice website",
  "id": "womancategorypagetest",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "User Should navigate to woman page successfully",
  "description": "",
  "id": "womancategorypagetest;user-should-navigate-to-woman-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on woman tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I Should navigate to woman page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "SignPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 17900,
  "status": "passed"
});
formatter.match({
  "location": "WomanCategoryTest.iClickOnWomanTab()"
});
formatter.result({
  "duration": 3417400,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-GDT3JREG\u0027, ip: \u0027192.168.0.8\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [null, findElement {using\u003dxpath, value\u003d//*[@id\u003d\"block_top_menu\"]/ul/li[1]/a}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\ektam\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:62718}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:62718/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:145)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat com.automation.utility.Utility.clickOnElement(Utility.java:52)\r\n\tat com.automation.pages.HomePage.clickOnWomen(HomePage.java:35)\r\n\tat com.automation.steps.WomanCategoryTest.iClickOnWomanTab(WomanCategoryTest.java:14)\r\n\tat ✽.When I click on woman tab(womencategorypageTest.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "WomanCategoryTest.iShouldNavigateToWomanPageSuccessfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 7176039300,
  "status": "passed"
});
formatter.after({
  "duration": 1318630200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "User Should Add Product To The CartSuccessfully",
  "description": "",
  "id": "womancategorypagetest;user-should-add-product-to-the-cartsuccessfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on woman tab",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I Should navigate to woman page successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I Select \"\u003cproduct\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Enter Quantity \"\u003cqty\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I SelectSize \"\u003csize\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I SelectColour \"\u003ccolour\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on Add To Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I verify popupmessege",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I click on close",
  "keyword": "And "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "womancategorypagetest;user-should-add-product-to-the-cartsuccessfully;",
  "rows": [
    {
      "cells": [
        "product",
        "qty",
        "size",
        "colour"
      ],
      "line": 21,
      "id": "womancategorypagetest;user-should-add-product-to-the-cartsuccessfully;;1"
    },
    {
      "cells": [
        "Blouse",
        "2",
        "M",
        "White"
      ],
      "line": 22,
      "id": "womancategorypagetest;user-should-add-product-to-the-cartsuccessfully;;2"
    },
    {
      "cells": [
        "Printed Dress",
        "3",
        "L",
        "Orange"
      ],
      "line": 23,
      "id": "womancategorypagetest;user-should-add-product-to-the-cartsuccessfully;;3"
    },
    {
      "cells": [
        "Printed Chiffon Dress",
        "4",
        "S",
        "Green"
      ],
      "line": 24,
      "id": "womancategorypagetest;user-should-add-product-to-the-cartsuccessfully;;4"
    },
    {
      "cells": [
        "Printed Summer Dress with Price $28.98",
        "2",
        "M",
        "Blue"
      ],
      "line": 25,
      "id": "womancategorypagetest;user-should-add-product-to-the-cartsuccessfully;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 22,
  "name": "User Should Add Product To The CartSuccessfully",
  "description": "",
  "id": "womancategorypagetest;user-should-add-product-to-the-cartsuccessfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on woman tab",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I Should navigate to woman page successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I Select \"Blouse\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Enter Quantity \"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I SelectSize \"M\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I SelectColour \"White\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on Add To Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I verify popupmessege",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I click on close",
  "keyword": "And "
});
formatter.match({
  "location": "SignPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 53700,
  "status": "passed"
});
formatter.match({
  "location": "WomanCategoryTest.iClickOnWomanTab()"
});
formatter.result({
  "duration": 8032300,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-GDT3JREG\u0027, ip: \u0027192.168.0.8\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [null, findElement {using\u003dxpath, value\u003d//*[@id\u003d\"block_top_menu\"]/ul/li[1]/a}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\ektam\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:62770}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:62770/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:145)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat com.automation.utility.Utility.clickOnElement(Utility.java:52)\r\n\tat com.automation.pages.HomePage.clickOnWomen(HomePage.java:35)\r\n\tat com.automation.steps.WomanCategoryTest.iClickOnWomanTab(WomanCategoryTest.java:14)\r\n\tat ✽.When I click on woman tab(womencategorypageTest.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "WomanCategoryTest.iShouldNavigateToWomanPageSuccessfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Blouse",
      "offset": 10
    }
  ],
  "location": "WomanCategoryTest.iSelect(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "WomanCategoryTest.iEnterQuantity(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 14
    }
  ],
  "location": "WomanCategoryTest.iSelectSize(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "White",
      "offset": 16
    }
  ],
  "location": "WomanCategoryTest.iSelectColour(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WomanCategoryTest.iClickOnAddToCartButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WomanCategoryTest.iVerifyPopupmessege()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WomanCategoryTest.iClickOnClose()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 12635568100,
  "status": "passed"
});
formatter.after({
  "duration": 1280076800,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "User Should Add Product To The CartSuccessfully",
  "description": "",
  "id": "womancategorypagetest;user-should-add-product-to-the-cartsuccessfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on woman tab",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I Should navigate to woman page successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I Select \"Printed Dress\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Enter Quantity \"3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I SelectSize \"L\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I SelectColour \"Orange\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on Add To Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I verify popupmessege",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I click on close",
  "keyword": "And "
});
formatter.match({
  "location": "SignPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 132300,
  "status": "passed"
});
formatter.match({
  "location": "WomanCategoryTest.iClickOnWomanTab()"
});
formatter.result({
  "duration": 5077000,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-GDT3JREG\u0027, ip: \u0027192.168.0.8\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [null, findElement {using\u003dxpath, value\u003d//*[@id\u003d\"block_top_menu\"]/ul/li[1]/a}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\ektam\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:62812}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:62812/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:145)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat com.automation.utility.Utility.clickOnElement(Utility.java:52)\r\n\tat com.automation.pages.HomePage.clickOnWomen(HomePage.java:35)\r\n\tat com.automation.steps.WomanCategoryTest.iClickOnWomanTab(WomanCategoryTest.java:14)\r\n\tat ✽.When I click on woman tab(womencategorypageTest.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "WomanCategoryTest.iShouldNavigateToWomanPageSuccessfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Dress",
      "offset": 10
    }
  ],
  "location": "WomanCategoryTest.iSelect(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "WomanCategoryTest.iEnterQuantity(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "L",
      "offset": 14
    }
  ],
  "location": "WomanCategoryTest.iSelectSize(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Orange",
      "offset": 16
    }
  ],
  "location": "WomanCategoryTest.iSelectColour(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WomanCategoryTest.iClickOnAddToCartButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WomanCategoryTest.iVerifyPopupmessege()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WomanCategoryTest.iClickOnClose()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 13096031700,
  "status": "passed"
});
formatter.after({
  "duration": 1244621500,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "User Should Add Product To The CartSuccessfully",
  "description": "",
  "id": "womancategorypagetest;user-should-add-product-to-the-cartsuccessfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on woman tab",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I Should navigate to woman page successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I Select \"Printed Chiffon Dress\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Enter Quantity \"4\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I SelectSize \"S\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I SelectColour \"Green\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on Add To Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I verify popupmessege",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I click on close",
  "keyword": "And "
});
formatter.match({
  "location": "SignPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 43000,
  "status": "passed"
});
formatter.match({
  "location": "WomanCategoryTest.iClickOnWomanTab()"
});
formatter.result({
  "duration": 4535400,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-GDT3JREG\u0027, ip: \u0027192.168.0.8\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [null, findElement {using\u003dxpath, value\u003d//*[@id\u003d\"block_top_menu\"]/ul/li[1]/a}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\ektam\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:62866}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:62866/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:145)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat com.automation.utility.Utility.clickOnElement(Utility.java:52)\r\n\tat com.automation.pages.HomePage.clickOnWomen(HomePage.java:35)\r\n\tat com.automation.steps.WomanCategoryTest.iClickOnWomanTab(WomanCategoryTest.java:14)\r\n\tat ✽.When I click on woman tab(womencategorypageTest.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "WomanCategoryTest.iShouldNavigateToWomanPageSuccessfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Chiffon Dress",
      "offset": 10
    }
  ],
  "location": "WomanCategoryTest.iSelect(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "WomanCategoryTest.iEnterQuantity(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 14
    }
  ],
  "location": "WomanCategoryTest.iSelectSize(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Green",
      "offset": 16
    }
  ],
  "location": "WomanCategoryTest.iSelectColour(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WomanCategoryTest.iClickOnAddToCartButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WomanCategoryTest.iVerifyPopupmessege()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WomanCategoryTest.iClickOnClose()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2099893400,
  "status": "passed"
});
formatter.after({
  "duration": 907366900,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "User Should Add Product To The CartSuccessfully",
  "description": "",
  "id": "womancategorypagetest;user-should-add-product-to-the-cartsuccessfully;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on woman tab",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I Should navigate to woman page successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I Select \"Printed Summer Dress with Price $28.98\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Enter Quantity \"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I SelectSize \"M\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I SelectColour \"Blue\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on Add To Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I verify popupmessege",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I click on close",
  "keyword": "And "
});
formatter.match({
  "location": "SignPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 28400,
  "status": "passed"
});
formatter.match({
  "location": "WomanCategoryTest.iClickOnWomanTab()"
});
formatter.result({
  "duration": 4193000,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-GDT3JREG\u0027, ip: \u0027192.168.0.8\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [null, findElement {using\u003dxpath, value\u003d//*[@id\u003d\"block_top_menu\"]/ul/li[1]/a}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\ektam\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:62920}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:62920/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:145)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat com.automation.utility.Utility.clickOnElement(Utility.java:52)\r\n\tat com.automation.pages.HomePage.clickOnWomen(HomePage.java:35)\r\n\tat com.automation.steps.WomanCategoryTest.iClickOnWomanTab(WomanCategoryTest.java:14)\r\n\tat ✽.When I click on woman tab(womencategorypageTest.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "WomanCategoryTest.iShouldNavigateToWomanPageSuccessfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Summer Dress with Price $28.98",
      "offset": 10
    }
  ],
  "location": "WomanCategoryTest.iSelect(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "WomanCategoryTest.iEnterQuantity(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 14
    }
  ],
  "location": "WomanCategoryTest.iSelectSize(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Blue",
      "offset": 16
    }
  ],
  "location": "WomanCategoryTest.iSelectColour(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WomanCategoryTest.iClickOnAddToCartButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WomanCategoryTest.iVerifyPopupmessege()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WomanCategoryTest.iClickOnClose()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1709527800,
  "status": "passed"
});
formatter.after({
  "duration": 879263100,
  "status": "passed"
});
});