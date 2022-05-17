package com.automation.pages;

import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

//WOMEN text, TOPS and DRESSES links, SortBy drop down, ProductsList Locators
//and create appropriate methods for it.
public class WomenCategoryPage extends Utility {
    private static final Logger log = LogManager.getLogger(WomenCategoryPage.class.getName());
    public WomenCategoryPage(){
        PageFactory.initElements(driver,this);
    }

    @FindBy(xpath = "//h2[normalize-space()='Women']")
    WebElement verifyWomenWord;
    @FindBy(xpath = "//a[@class='subcategory-name'][normalize-space()='Tops']")
    WebElement topsLink;
    @FindBy(xpath = "//a[@class='subcategory-name'][normalize-space()='Dresses']")
    WebElement dressesLink;
    @FindBy(id = "selectProductSort")
    WebElement selectProductSort;
    @FindBy(xpath = "//i[@class='icon-th-list']")
    WebElement selectListView;
    @FindBy(id = "center_column")
    WebElement selectProduct;
    @FindBy(id = "group_1")
    WebElement selectSize;
    @FindBy(xpath = "//span[normalize-space()='Add to cart']")
    WebElement addToCartButton;
    @FindBy(xpath = "//h2[normalize-space()='Product successfully added to your shopping cart']")
    WebElement confirmationText;
    @FindBy(xpath = "//span[@title='Close window']")
    WebElement closeWindow;
    @FindBy(xpath = "//input[@id='quantity_wanted']")
    WebElement qtyfield;

    public String verifyWomenText() {
        log.info("verify verifyWomenText : " + verifyWomenWord.toString());
        return getTextFromElement(verifyWomenWord);
    }


    public void setSelectProduct(String product) {
        clickOnElement(By.xpath("//a[normalize-space()='"+product+"']"));
        log.info("verify setSelectProduct : " + product.toString());
    }

    public void enterQty(String quantity){
        qtyfield.clear();
        sendTextToElement(qtyfield,quantity);
        log.info("verify enterQty : " + qtyfield.toString());
    }

    public void setSelectSize(String size) {
        selectByVisibleTextFromDropDown(selectSize, size);
        log.info("verify setSelectSize : " + selectSize.toString());
    }

    public void setSelectColour(String colour) {
        clickOnElement(By.xpath("//a[@title='" + colour + "']"));
        log.info("verify setSelectColour : " + colour.toString());
    }
    public void setAddToCartButton(){
        clickOnElement(addToCartButton);
        log.info("verify setAddToCartButton : " + addToCartButton.toString());
    }

    public String setConfirmationText() throws InterruptedException {

        log.info("verify setConfirmationText : " + confirmationText.toString());
        Thread.sleep(3000);
        return getTextFromElement(confirmationText);
    }
    public void setCloseWindow(){
        clickOnElement(closeWindow);
        log.info("verify setCloseWindow : " + closeWindow.toString());
    }



}
