
Feature: Datatable
  

  
  Scenario: Login Credentials
    Given I want to login to testMe
    When Enter Username and password
   
      | Lalitha  |      Password123   |
      | Lalitha   |     Password123 | 
      | Lalitha   |     Password123 |
   
    Then I validate the outcomes
   
