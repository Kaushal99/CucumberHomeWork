$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/Resources/Features/currency.feature");
formatter.feature({
  "line": 2,
  "name": "User Should be on homepage,",
  "description": "So user can select the currency from top left corner to US Dollar or Euro",
  "id": "user-should-be-on-homepage,",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@currency"
    }
  ]
});
formatter.before({
  "duration": 19318933480,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should be able to select currency",
  "description": "",
  "id": "user-should-be-on-homepage,;user-should-be-able-to-select-currency",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "user should able to click on drp down to see currency option",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user should able to select currency US Dollar or Euro",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user should able to see the price of product in selected currency successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDef.userShouldAbleToClickOnDrpDownToSeeCurrencyOption()"
});
formatter.result({
  "duration": 2187699034,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.userShouldAbleToSelectCurrencyUSDollarOrEuro()"
});
formatter.result({
  "duration": 2118175660,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.userShouldAbleToSeeThePriceOfProductInSelectedCurrencySuccessfully()"
});
formatter.result({
  "duration": 119856393,
  "status": "passed"
});
formatter.after({
  "duration": 442762735,
  "status": "passed"
});
formatter.uri("src/test/Resources/Features/registration.feature");
formatter.feature({
  "line": 2,
  "name": "User should able to register successfully,",
  "description": "So that he can use all user features from our website",
  "id": "user-should-able-to-register-successfully,",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@register"
    }
  ]
});
formatter.before({
  "duration": 7464583908,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should able to register",
  "description": "",
  "id": "user-should-able-to-register-successfully,;user-should-able-to-register",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "user is on register page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enters all registration details",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user should able to register successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDef.user_is_on_register_page()"
});
formatter.result({
  "duration": 1455589375,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.user_enters_all_registration_details()"
});
formatter.result({
  "duration": 4052173076,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.user_should_able_to_register_successfully()"
});
formatter.result({
  "duration": 124143995,
  "status": "passed"
});
formatter.after({
  "duration": 311706185,
  "status": "passed"
});
});