package com.automation.steps;

import com.automation.pages.HomePage;
import com.automation.pages.WomenCategoryPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class WomanCategoryTest {
    @When("^I click on woman tab$")
    public void iClickOnWomanTab() {
        new HomePage().clickOnWomen();
    }

    @Then("^I Should navigate to woman page successfully$")
    public void iShouldNavigateToWomanPageSuccessfully() {
        String ecpected="WOMEN";
        Assert.assertEquals("Page not Found",ecpected,new WomenCategoryPage().verifyWomenText());
    }

    @And("^I Select \"([^\"]*)\"$")
    public void iSelect(String product)  {
new WomenCategoryPage().setSelectProduct(product);
    }

    @And("^I Enter Quantity \"([^\"]*)\"$")
    public void iEnterQuantity(String qty)  {
        new WomenCategoryPage().enterQty(qty);
    }

    @And("^I SelectSize \"([^\"]*)\"$")
    public void iSelectSize(String size)  {
        new WomenCategoryPage().setSelectSize(size);
    }

    @And("^I SelectColour \"([^\"]*)\"$")
    public void iSelectColour(String colour)  {
        new WomenCategoryPage().setSelectColour(colour);
    }

    @And("^I click on Add To Cart Button$")
    public void iClickOnAddToCartButton() {
        new WomenCategoryPage().setAddToCartButton();
    }

    @And("^I verify popupmessege$")
    public void iVerifyPopupmessege() throws InterruptedException {
        String expected="Product successfully added to your shopping cart";
        Assert.assertEquals("not found page",expected,new WomenCategoryPage().setConfirmationText());
    }

    @Then("^I click on close$")
    public void iClickOnClose() {
        new WomenCategoryPage().setCloseWindow();
    }
}
