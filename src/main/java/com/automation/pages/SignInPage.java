package com.automation.pages;

import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;


//Email address, Password, Sign In Button, Create an account button and
//"AUTHENTICATION" text, "CREATE AN ACCOUNT" text Locators
//and create appropriate methods for it.
public class SignInPage extends Utility {
    private static final Logger log = LogManager.getLogger(SignInPage.class.getName());

    public SignInPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//*[@id=\"email\"]")
    WebElement email;
    @CacheLookup
    @FindBy(xpath = "//*[@id=\"passwd\"]")
    WebElement Password;
    @CacheLookup
    @FindBy(xpath = "//*[@id=\"SubmitLogin\"]")
    WebElement signInButton;
    @CacheLookup
    @FindBy(xpath = "//button[@id='SubmitCreate']")
    WebElement createanaccountbutton;
    @CacheLookup
    @FindBy(xpath = "//h3[contains(text(),'Create an account')]")
    WebElement creatanaccountText;
    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Authentication')]")
    WebElement authentication;
    @CacheLookup
    @FindBy(xpath = "//li[contains(text(),'Invalid email address.')]")
    WebElement emailerror;
    @CacheLookup
    @FindBy(xpath = "//li[contains(text(),'Password is required.')]")
    WebElement passwordrerror;
    @CacheLookup
    @FindBy(xpath = "//li[contains(text(),'Invalid email address.')]")
    WebElement invalidmail;
    @CacheLookup
    @FindBy(xpath = "//li[contains(text(),'Authentication failed.')]")
    WebElement authenticalerror;
    @CacheLookup
    @FindBy(xpath = "//input[@id='email_create']")
    WebElement createEmail;
//
//    @FindBy(xpath = "//ol//li")
//    WebElement errorText;


    public void setCreateEmail(String email) {
        sendTextToElement(createEmail, email);
        log.info("verify setCreateEmail : " + createEmail.toString());


    }

    public void clickOnCreateAnAccount() {
        clickOnElement(createanaccountbutton);
        log.info("verify click On CreateAnAccount : " + createanaccountbutton.toString());

    }



        public String getErrorText(String errorMessage) {

            if (errorMessage.equalsIgnoreCase(String.valueOf(emailerror))) {

                return (String.valueOf(errorMessage));

            }
            else if (errorMessage.equalsIgnoreCase(String.valueOf(passwordrerror))) {
                return errorMessage;}else
            if (errorMessage.equalsIgnoreCase(String.valueOf(invalidmail))) {
                return errorMessage;}else
            if (errorMessage.equalsIgnoreCase(String.valueOf(authenticalerror))) {
                return errorMessage;}
            log.info("verify get Error Text : " + errorMessage.toString());
            return errorMessage;



        }



    public void setEmail(String username) {
        sendTextToElement(email, username);
        log.info("verify setEmail : " + email.toString());

    }

    public void setPassword(String str) {
        sendTextToElement(Password, str);
        log.info("verify setPassword : " + Password.toString());

    }

    public void clickOnSignButton() {
        clickOnElement(signInButton);
        log.info("verify clickOnSignButton : " + signInButton.toString());

    }


    public void clickOnCreateNewAccount() {
        clickOnElement(createanaccountbutton);
        log.info("verify clickOnCreateNewAccount : " + createanaccountbutton.toString());

    }

    public String getTextAuthentication() {
        log.info("verify getTextAuthentication : " + authentication.toString());
        return getTextFromElement(authentication);

    }

    public String getTextCreateAccount() {
        log.info("verify getTextCreateAccount : " + creatanaccountText.toString());
        return getTextFromElement(creatanaccountText);

    }


}