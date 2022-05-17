package com.automation.pages;

import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;


public class ProductPage extends Utility {
    private static final Logger log = LogManager.getLogger(ProductPage.class.getName());

    public ProductPage() {
        PageFactory.initElements(driver, this);
    }
    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Faded Short Sleeve T-shirts')]")
    WebElement productnavigate;
    @CacheLookup
    @FindBy(xpath = "//*[@id=\"quantity_wanted\"]")
    WebElement quantity;
    @CacheLookup
    @FindBy(xpath = "//option[contains(text(),'S')]")
    WebElement size;
    @CacheLookup
    @FindBy(xpath = "//a[@id='color_14']")
    WebElement colour;
    @CacheLookup
    @FindBy(xpath = "//a[@title='Women']")
    WebElement clickOnWomenLink;
    public void setClickOnWomenLink(){
        log.info("verify ClickOnWomenLink : " + clickOnWomenLink.toString());
        clickOnElement(clickOnWomenLink);
    }

    public void verifyproductnavigate(){
        log.info("verify verifyproductnavigate : " + productnavigate.toString());
        clickOnElement(productnavigate);
    }
    public void verifySelectquantity(){
        log.info("verify verifySelectquantity : " + quantity.toString());
        clickOnElement(quantity);
    }
    public void verifySize(){
        log.info("verify verifySize : " + size.toString());
        clickOnElement(size);
    }
 public void verifycolour(){
     log.info("verify verifycolour : " + colour.toString());
        clickOnElement(colour);
    }


}
