package com.automation.pages;

import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }
    @CacheLookup
    @FindBy(xpath = "//*[@id=\"block_top_menu\"]/ul/li[1]/a")
    WebElement women;
    @CacheLookup
    @FindBy(xpath = "//*[@id=\"block_top_menu\"]/ul/li[2]/a")
    WebElement dresses;
    @CacheLookup
    @FindBy(xpath = "//*[@id=\"block_top_menu\"]/ul/li[3]/a")
    WebElement tshirts;
    @CacheLookup
    @FindBy(xpath = "//*[@id=\"header\"]/div[2]/div/div/nav/div[1]/a")
    WebElement signInLinks;
    @CacheLookup
    @FindBy(xpath = "//*[@id=\"header_logo\"]/a/img")
    WebElement logo;


    public void clickOnWomen() {
        clickOnElement(women);
        log.info("clickOnWomen tabs : " + women.toString());
    }


    public void clickOnSignIn() {
        clickOnElement(signInLinks);
        log.info("ClickOnSignIn Link : " + signInLinks.toString());
    }
    public boolean signInLinkDisplayed(){
        log.info("Getting text from : " + logo.toString());
        return signInLinks.isDisplayed();

    }


}