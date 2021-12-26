Feature: Creating new account Test

  Scenario: As a user I want to create new account with valid credentials
    When User clicks on the sign in button from the homepage
    And enters an email in the email address field
    And clicks on create an account tab
    And fill all mandatory fields
      | James | Bond | abc12456 | 123 Abc Street | London | Florida | 12345 | 01234567890 |
    And click on register
    And verify my account text "MY ACCOUNT"
    Then verify user can see his name on top right "James Bond"

  Scenario: As a user I want to see an error message while trying
  to create account with invalid credentials
    When User clicks on the sign in button from the homepage
    And enters an email in the email address field
    And clicks on create an account tab
    And fill all mandatory fields
      | $%1234 | DD12** | abc$%12456 | 123 Abc Str%%t | Lo$%^on | Florida | 123ssa45 | 0123abcd67890 |
    And click on register
    And verify that invalid information will give an error message "There are 6 errors"


