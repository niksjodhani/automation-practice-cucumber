Feature: AccountPageTest
  As user I want to sign  into automation practice website
  Scenario: User should navigate to Sign page successfully
    Given I am on homepage
    When I click on SigninLink
    And I enter email
    And I click on create an accountbutton
    And I Should navigate to CREATE AN ACCOUNT successfully
    And I Select Gender
    And I Enter FirstName
    And I Enter LastName
    And I enter Password
    And I enter Password
    And I Enter FirstNameAdd
    And I Enter LastNameAdd
    And I Enter Address
    And I Enter city
    And I Select State
    And I Enter ZipCode
    And I Select Country
    And I Enter MobileNum
    And I Enter FutureReference
    And I click on RegisterButton
    Then I Should navigate to MyAccount  page successfully
