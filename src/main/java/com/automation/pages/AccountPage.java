package com.automation.pages;

import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AccountPage extends Utility {
    private static final Logger log = LogManager.getLogger(AccountPage.class.getName());

    public AccountPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(linkText = "Sign out")
    WebElement signOutLink;
    @CacheLookup
    @FindBy(xpath = "//input[@id='id_gender1']")
    WebElement maleRadio;
    @CacheLookup
    @FindBy(xpath = "//input[@id='customer_firstname']")
    WebElement firstnameField;
    @CacheLookup
    @FindBy(xpath = "//input[@id='customer_lastname']")
    WebElement lastnameField;
    @CacheLookup
    @FindBy(xpath = "//input[@id='passwd']")
    WebElement passwordField;
    @CacheLookup
    @FindBy(xpath = "//input[@id='firstname']")
    WebElement firstname1;
    @CacheLookup
    @FindBy(xpath = "//input[@id='lastname']")
    WebElement lastname1;
    @CacheLookup
    @FindBy(xpath = "//input[@id='address1']")
    WebElement addressField;
    @CacheLookup
    @FindBy(xpath = "//input[@id='city']")
    WebElement city;
    @CacheLookup
    @FindBy(xpath = "//select[@id='id_state']")
    WebElement state;
    @CacheLookup
    @FindBy(xpath = "//select[@id='id_country']")
    WebElement country;
    @CacheLookup
    @FindBy(xpath = "//input[@id='phone_mobile']")
    WebElement mobileNum;
    @CacheLookup
    @FindBy(xpath = "//input[@id='postcode']")
    WebElement zipCode;
    @CacheLookup
    @FindBy(xpath = "//input[@id='alias']")
    WebElement futureReference;
    @CacheLookup
    @FindBy(xpath = "//body[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/form[1]/div[4]/button[1]/span[1]")
    WebElement registerButton;
    @CacheLookup
    @FindBy(xpath = "//div[@id=\"center_column\"]/h1")
    WebElement myAccount;
    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Create an account')]")
    WebElement createanaccounttext;

    public boolean verifySignOutLink() {
        log.info("verify Sign Out Link : " + signOutLink.toString());
        return signOutLink.isDisplayed();

    }

    public void clickOnSignOut() {
        clickOnElement(signOutLink);
        log.info("verify Sign Out  : " + signOutLink.toString());
    }

    public void selectMrRadio() {
        clickOnElement(maleRadio);
        log.info("verify selectMrRadio : " + maleRadio.toString());
    }

    public void setFirstnameField(String first) {
        sendTextToElement(firstnameField, first);
        log.info("verify FirstnameField : " + firstnameField.toString());
    }


    public void setLastnameField(String last) {
        sendTextToElement(lastnameField, last);
        log.info("verify LastnameField : " + lastnameField.toString());
    }

    public void setPasswordField(String password) {
        sendTextToElement(passwordField, password);
        log.info("verify PasswordField : " + passwordField.toString());
    }


    public void setFirstnameAdd(String firstAdd) {
        sendTextToElement(firstname1, firstAdd);
        log.info("verify FirstnameAdd : " + firstname1.toString());

    }

    public void setLastnameAdd(String lastAdd) {
        sendTextToElement(lastname1, lastAdd);
        log.info("verify LastnameAdd : " + lastname1.toString());
    }

    public void setAddress(String address) {
        sendTextToElement(addressField, address);
        log.info("verify Address field : " + addressField.toString());
    }

    public void setCityField(String cityField) {
        sendTextToElement(city, cityField);
        log.info("verify CityField : " + city.toString());
    }

    public void selectState(String stateName) {
        selectByVisibleTextFromDropDown(state, stateName);
        log.info("verify State field : " + state.toString());
    }

    public void selectCountry(String countryName) {
        selectByVisibleTextFromDropDown(country, countryName);
        log.info("verify Country field : " + country.toString());
    }

    public void setMobileNum(String number) {
        sendTextToElement(mobileNum, number);
        log.info("verify MobileNum field : " + mobileNum.toString());
    }

    public void setZipCode(String zip) {
        sendTextToElement(zipCode, zip);
        log.info("verify ZipCode field : " + zipCode.toString());
    }

    public void setFutureReference(String add) {
        sendTextToElement(futureReference, add);
        log.info("verify FutureReference field : " + futureReference.toString());
    }

    public void clickOnRegisterButton() {
        clickOnElement(registerButton);
        log.info("verify RegisterButton : " + registerButton.toString());
    }

    public String getMyAccountText() {
        log.info("verify MyAccountText : " + myAccount.toString());
        return getTextFromElement(myAccount);
    }
 public String getCreateAnAccounttext() {
     log.info("verify CreateAnAccounttext : " + createanaccounttext.toString());
        return getTextFromElement(createanaccounttext);
    }

}