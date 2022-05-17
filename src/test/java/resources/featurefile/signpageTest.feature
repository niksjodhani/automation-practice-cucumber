Feature: SignPageTest
  As user I want to sign  into automation practice website

  Scenario: User should navigate to Sign page successfully
    Given I am on homepage
    When I click on SigninLink
    Then I Should navigate to SigninLink successfully


  Scenario Outline: verifyTheErrorMessageWithInValidCredentials
    Given I am on homepage
    When I click on SigninLink
    Then I Should navigate to SigninLink successfully
    And I enter Username "<username>"
    And I enter Password "<password>"
    And I click on login button
    Then I should see the error message"<errorMessage>"
    Examples:
      | username       | password | errorMessage               |
      |                | 123456   | An email address required. |
      | abcd@gmail.com |          | Password is required.      |
      | adfdfgfg       | 123456   | Invalid email address.     |
      | abcd@gmail.com | 123456   | Authentication failed.     |
