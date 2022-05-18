Feature: WomanCategoryPageTest
  As user I want to open Woman page In automation practice website

  Scenario: User Should navigate to woman page successfully
    Given I am on homepage
    When I click on woman tab
    Then I Should navigate to woman page successfully

  Scenario Outline: User Should Add Product To The CartSuccessfully
    Given I am on homepage
    When I click on woman tab
    Then I Should navigate to woman page successfully
    And I Select "<product>"
    And I Enter Quantity "<qty>"
    And I SelectSize "<size>"
    And I SelectColour "<colour>"
    And I click on Add To Cart Button
    Then I verify popupmessege
    And I click on close
    Examples:
      | product                                | qty | size | colour |
      | Blouse                                 | 2   | M    | White  |
      | Printed Dress                          | 3   | L    | Orange |
      | Printed Chiffon Dress                  | 4   | S    | Green  |
      | Printed Summer Dress | 2   | M    | Blue   |Feature: WomanCategoryPageTest
  As user I want to open Woman page In automation practice website

  Scenario: User Should navigate to woman page successfully
    Given I am on homepage
    When I click on woman tab
    Then I Should navigate to woman page successfully

  Scenario Outline: User Should Add Product To The CartSuccessfully
    Given I am on homepage
    When I click on woman tab
    Then I Should navigate to woman page successfully
    And I Select "<product>"
    And I Enter Quantity "<qty>"
    And I SelectSize "<size>"
    And I SelectColour "<colour>"
    And I click on Add To Cart Button
    Then I verify popupmessege
    And I click on close
    Examples:
      | product               | qty | size | colour |
      | Blouse                | 2   | M    | White  |
      | Printed Dress         | 3   | L    | Orange |
      | Printed Chiffon Dress | 4   | S    | Green  |
      | Printed Summer Dress  | 2   | M    | Blue   |
