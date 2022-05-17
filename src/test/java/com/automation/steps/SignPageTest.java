package com.automation.steps;

import com.automation.pages.HomePage;
import com.automation.pages.SignInPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class SignPageTest {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }


    @When("^I click on SigninLink$")
    public void iClickOnSigninLink() {
        new HomePage().clickOnSignIn();
    }

    @Then("^I Should navigate to SigninLink successfully$")
    public void iShouldNavigateToSigninLinkSuccessfully() {
//        String expectedMessage = "AUTHENTICATION";
//        Assert.assertEquals("Sign page not displayed", expectedMessage,
                new SignInPage().getTextAuthentication();


    }

    @And("^I enter Username \"([^\"]*)\"$")
    public void iEnterUsername(String username) {
new SignInPage().setEmail(username);
    }

    @And("^I enter Password \"([^\"]*)\"$")
    public void iEnterPassword(String password) {

    }

    @And("^I click on login button$")
    public void iClickOnLoginButton() {
        new SignInPage().clickOnSignButton();
    }

    @Then("^I should see the error message\"([^\"]*)\"$")
    public void iShouldSeeTheErrorMessage(String errorMessage) {





    }
}
