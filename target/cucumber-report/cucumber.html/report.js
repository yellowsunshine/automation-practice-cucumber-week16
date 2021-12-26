$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("createaccounttest.feature");
formatter.feature({
  "line": 1,
  "name": "Creating new account Test",
  "description": "",
  "id": "creating-new-account-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7577603000,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "As a user I want to create new account with valid credentials",
  "description": "",
  "id": "creating-new-account-test;as-a-user-i-want-to-create-new-account-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User clicks on the sign in button from the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "enters an email in the email address field",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "clicks on create an account tab",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "fill all mandatory fields",
  "rows": [
    {
      "cells": [
        "James",
        "Bond",
        "abc12456",
        "123 Abc Street",
        "London",
        "Florida",
        "12345",
        "01234567890"
      ],
      "line": 8
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click on register",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "verify my account text \"MY ACCOUNT\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "verify user can see his name on top right \"James Bond\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateAccountSteps.userClicksOnTheSignInButtonFromTheHomepage()"
});
formatter.result({
  "duration": 1665316000,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountSteps.entersAnEmailInTheEmailAddressField()"
});
formatter.result({
  "duration": 132701500,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountSteps.clicksOnCreateAnAccountTab()"
});
formatter.result({
  "duration": 111025300,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountSteps.fillAllMandatoryFields(DataTable)"
});
formatter.result({
  "duration": 2971763400,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountSteps.clickOnRegister()"
});
formatter.result({
  "duration": 1987773000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MY ACCOUNT",
      "offset": 24
    }
  ],
  "location": "CreateAccountSteps.verifyMyAccountText(String)"
});
formatter.result({
  "duration": 51882700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "James Bond",
      "offset": 43
    }
  ],
  "location": "CreateAccountSteps.verifyUserCanSeeHisNameOnTopRight(String)"
});
formatter.result({
  "duration": 44600000,
  "status": "passed"
});
formatter.after({
  "duration": 845207100,
  "status": "passed"
});
formatter.before({
  "duration": 4636927100,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "As a user I want to see an error message while trying",
  "description": "to create account with invalid credentials",
  "id": "creating-new-account-test;as-a-user-i-want-to-see-an-error-message-while-trying",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "User clicks on the sign in button from the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "enters an email in the email address field",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "clicks on create an account tab",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "fill all mandatory fields",
  "rows": [
    {
      "cells": [
        "$%1234",
        "DD12**",
        "abc$%12456",
        "123 Abc Str%%t",
        "Lo$%^on",
        "Florida",
        "123ssa45",
        "0123abcd67890"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "click on register",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "verify that invalid information will give an error message \"There are 6 errors\"",
  "keyword": "And "
});
formatter.match({
  "location": "CreateAccountSteps.userClicksOnTheSignInButtonFromTheHomepage()"
});
formatter.result({
  "duration": 1671078500,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountSteps.entersAnEmailInTheEmailAddressField()"
});
formatter.result({
  "duration": 142746900,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountSteps.clicksOnCreateAnAccountTab()"
});
formatter.result({
  "duration": 106308100,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountSteps.fillAllMandatoryFields(DataTable)"
});
formatter.result({
  "duration": 2422099700,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountSteps.clickOnRegister()"
});
formatter.result({
  "duration": 1029529400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "There are 6 errors",
      "offset": 60
    }
  ],
  "location": "CreateAccountSteps.verifyThatInvalidInformationWillGiveAnErrorMessage(String)"
});
formatter.result({
  "duration": 39884800,
  "status": "passed"
});
formatter.after({
  "duration": 945388600,
  "status": "passed"
});
formatter.uri("deletiontest.feature");
formatter.feature({
  "line": 1,
  "name": "Test for deleting item from cart",
  "description": "",
  "id": "test-for-deleting-item-from-cart",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4551751100,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "As a user I want to delete an item from the basket and see basket is empty",
  "description": "",
  "id": "test-for-deleting-item-from-cart;as-a-user-i-want-to-delete-an-item-from-the-basket-and-see-basket-is-empty",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User selects Women \"Women\" tab from the main menu",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Select Blouses \"Summer Dresses\" from the sub menu",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Adds item to cart",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "closes shopping cart window",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "verify shopping cart has delete button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "removes item from cart",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "verifies the banner display \"Your shopping cart is empty.\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Women",
      "offset": 20
    }
  ],
  "location": "DeletionTestSteps.userSelectsWomenTabFromTheMainMenu(String)"
});
formatter.result({
  "duration": 192463500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Summer Dresses",
      "offset": 16
    }
  ],
  "location": "DeletionTestSteps.selectBlousesFromTheSubMenu(String)"
});
formatter.result({
  "duration": 1883837300,
  "status": "passed"
});
formatter.match({
  "location": "DeletionTestSteps.addsItemToCart()"
});
formatter.result({
  "duration": 1412424300,
  "status": "passed"
});
formatter.match({
  "location": "DeletionTestSteps.closesShoppingCartWindow()"
});
formatter.result({
  "duration": 739413000,
  "status": "passed"
});
formatter.match({
  "location": "DeletionTestSteps.verifyShoppingCartHasDeleteButton()"
});
formatter.result({
  "duration": 846238700,
  "status": "passed"
});
formatter.match({
  "location": "DeletionTestSteps.removesItemFromCart()"
});
formatter.result({
  "duration": 79490600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your shopping cart is empty.",
      "offset": 29
    }
  ],
  "location": "DeletionTestSteps.verifiesTheBannerDisplay(String)"
});
formatter.result({
  "duration": 21364929800,
  "status": "passed"
});
formatter.after({
  "duration": 847127700,
  "status": "passed"
});
formatter.uri("storefinder.feature");
formatter.feature({
  "line": 1,
  "name": "Finding a store on the \u0027Our Stores\u0027 page",
  "description": "",
  "id": "finding-a-store-on-the-\u0027our-stores\u0027-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5015174200,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Verify that user can drap the map to see a store from West Palm Beach",
  "description": "",
  "id": "finding-a-store-on-the-\u0027our-stores\u0027-page;verify-that-user-can-drap-the-map-to-see-a-store-from-west-palm-beach",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User clicks on the link from the homepage \"Our Stores\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User accepts the alert",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "moves the map to be able to view a store from West Palm Beach",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "scrolls the map for a clear view",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "takes a screenshot for future reference",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Our Stores",
      "offset": 43
    }
  ],
  "location": "StoreFinderSteps.userClicksOnTheLinkFromTheHomepage(String)"
});
formatter.result({
  "duration": 1651354300,
  "status": "passed"
});
formatter.match({
  "location": "StoreFinderSteps.userAcceptsTheAlert()"
});
formatter.result({
  "duration": 75507000,
  "status": "passed"
});
formatter.match({
  "location": "StoreFinderSteps.movesTheMapToBeAbleToViewAStoreFromWestPalmBeach()"
});
formatter.result({
  "duration": 662776200,
  "status": "passed"
});
formatter.match({
  "location": "StoreFinderSteps.scrollsTheMapForAClearView()"
});
formatter.result({
  "duration": 29729500,
  "status": "passed"
});
formatter.match({
  "location": "StoreFinderSteps.takesAScreenshotForFutureReference()"
});
formatter.result({
  "duration": 265369800,
  "status": "passed"
});
formatter.after({
  "duration": 902498900,
  "status": "passed"
});
formatter.uri("summerdressesoption.feature");
formatter.feature({
  "line": 1,
  "name": "Selecting a submenu from the main menu",
  "description": "",
  "id": "selecting-a-submenu-from-the-main-menu",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4882751800,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "User should be able to view Summer Dresses option from the navigation menu",
  "description": "",
  "id": "selecting-a-submenu-from-the-main-menu;user-should-be-able-to-view-summer-dresses-option-from-the-navigation-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User selects Women \"Women\" tab from the main menu",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Select Blouses \"Summer Dresses\" from the sub menu",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "verifies the \"SUMMER DRESSES \" page verification text",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Women",
      "offset": 20
    }
  ],
  "location": "DeletionTestSteps.userSelectsWomenTabFromTheMainMenu(String)"
});
formatter.result({
  "duration": 199986700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Summer Dresses",
      "offset": 16
    }
  ],
  "location": "DeletionTestSteps.selectBlousesFromTheSubMenu(String)"
});
formatter.result({
  "duration": 1787385900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SUMMER DRESSES ",
      "offset": 14
    }
  ],
  "location": "SummerDressOptionSteps.verifiesThePageVerificationText(String)"
});
formatter.result({
  "duration": 35357800,
  "status": "passed"
});
formatter.after({
  "duration": 817912700,
  "status": "passed"
});
formatter.uri("summerdressespricerangetest.feature");
formatter.feature({
  "line": 1,
  "name": "Changing price range",
  "description": "",
  "id": "changing-price-range",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4580194700,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "User should be able to update the price range for the filter options",
  "description": "",
  "id": "changing-price-range;user-should-be-able-to-update-the-price-range-for-the-filter-options",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User selects Women \"Women\" tab from the main menu",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Select Blouses \"Summer Dresses\" from the sub menu",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "verifies the \"SUMMER DRESSES \" page verification text",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "moves the slider to change the price range",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Women",
      "offset": 20
    }
  ],
  "location": "DeletionTestSteps.userSelectsWomenTabFromTheMainMenu(String)"
});
formatter.result({
  "duration": 189856300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Summer Dresses",
      "offset": 16
    }
  ],
  "location": "DeletionTestSteps.selectBlousesFromTheSubMenu(String)"
});
formatter.result({
  "duration": 2043574900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SUMMER DRESSES ",
      "offset": 14
    }
  ],
  "location": "SummerDressOptionSteps.verifiesThePageVerificationText(String)"
});
formatter.result({
  "duration": 41458000,
  "status": "passed"
});
formatter.match({
  "location": "PriceRangeTests.movesTheSliderToChangeThePriceRange()"
});
formatter.result({
  "duration": 467405900,
  "status": "passed"
});
formatter.after({
  "duration": 829659400,
  "status": "passed"
});
});