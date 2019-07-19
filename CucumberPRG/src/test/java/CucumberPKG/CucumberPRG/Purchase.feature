#Author: sundeep.dayalanl@accenture.com

Feature: TestMe Purchase
 
 
 Scenario Outline: Login
   Given Launch the chrome browser
   Then Load TestMeUrl "http://192.168.40.4:8083/TestMeApp"
   Then click SignIn Button
   Then Enter Username "<username>"
   Then Enter Password "<password>"
   Then Click Login Button
   Then Home page should appear
   
       Examples:
       
    |  username  |  password    |
    |  Lalitha   |  Password123	|

  Scenario: Add HeadPhone to cart
    When I Go to All categories
    And I Navigate TO Electronics
    And Click on HeadPhones 
    And Click Add to cart
    Then Click Cart Button
    
   Scenario: Product CheckOut
    When I click Checkout Button
    And Click Proceed To Pay
    And Payment Page should appear
    
     Scenario Outline: Payment
    When I Select "<BankName>" and Click Continue
    And NetBanking Login Page should Appear
    And Enter NetBanking Username "<BankUsername>"
    And Enter NetBanking Password "<BankPassword>"
    And Enter Transaction Password "<TransPassword>"
    Then Order Confirmation Page should Appear
    
    Examples:
       
    |BankName     |BankUsername|BankPassword|TransPassword|
    |UCO Bank	    |123460	     |Pass@460	  |Trans@460    |
 

  

