$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:CucumberPKG/CucumberPRG/Purchase.feature");
formatter.feature({
  "name": "TestMe Purchase",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Launch the chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Purchase.launch_the_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Load TestMeUrl \"http://192.168.40.4:8083/TestMeApp1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Purchase.load_TestMeUrl(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d75.0.3770.142)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027DESKTOP-HE6F1NI\u0027, ip: \u0027192.168.50.28\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002712.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 75.0.3770.142, chrome: {chromedriverVersion: 75.0.3770.90 (a6dcaf7e3ec6f..., userDataDir: C:\\Users\\test\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:59322}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: c73f0332572df89d0673679591ab7880\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat CucumberPKG.CucumberPRG.Purchase.load_TestMeUrl(Purchase.java:96)\r\n\tat ✽.Load TestMeUrl \"http://192.168.40.4:8083/TestMeApp1\"(classpath:CucumberPKG/CucumberPRG/Purchase.feature:8)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "click SignIn Button",
  "keyword": "Then "
});
formatter.match({
  "location": "Purchase.click_SignIn_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter Username \"\u003cusername\u003e\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Purchase.enter_Username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter Password \"\u003cPassword123\u003e\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Purchase.enter_Password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click Login Button",
  "keyword": "Then "
});
formatter.match({
  "location": "Purchase.click_Login_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Home page should appear",
  "keyword": "Then "
});
formatter.match({
  "location": "Purchase.home_page_should_appear()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Add HeadPhone to cart",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I Go to All categories",
  "keyword": "When "
});
formatter.match({
  "location": "Purchase.i_Go_to_All_categories()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d75.0.3770.142)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027DESKTOP-HE6F1NI\u0027, ip: \u0027192.168.50.28\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002712.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 75.0.3770.142, chrome: {chromedriverVersion: 75.0.3770.90 (a6dcaf7e3ec6f..., userDataDir: C:\\Users\\test\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:59322}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: c73f0332572df89d0673679591ab7880\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getWindowHandle(RemoteWebDriver.java:472)\r\n\tat CucumberPKG.CucumberPRG.Purchase.i_Go_to_All_categories(Purchase.java:141)\r\n\tat ✽.I Go to All categories(classpath:CucumberPKG/CucumberPRG/Purchase.feature:20)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I Navigate TO Electronics",
  "keyword": "And "
});
formatter.match({
  "location": "Purchase.i_Navigate_TO_Electronics()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on HeadPhones",
  "keyword": "And "
});
formatter.match({
  "location": "Purchase.click_on_HeadPhones()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click Add to cart",
  "keyword": "And "
});
formatter.match({
  "location": "Purchase.click_Add_to_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click Cart Button",
  "keyword": "Then "
});
formatter.match({
  "location": "Purchase.click_Cart_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Product CheckOut",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I click Checkout Button",
  "keyword": "When "
});
formatter.match({
  "location": "Purchase.i_click_Checkout_Button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d75.0.3770.142)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027DESKTOP-HE6F1NI\u0027, ip: \u0027192.168.50.28\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002712.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 75.0.3770.142, chrome: {chromedriverVersion: 75.0.3770.90 (a6dcaf7e3ec6f..., userDataDir: C:\\Users\\test\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:59322}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: c73f0332572df89d0673679591ab7880\n*** Element info: {Using\u003dpartial link text, value\u003dCheckout}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByPartialLinkText(RemoteWebDriver.java:388)\r\n\tat org.openqa.selenium.By$ByPartialLinkText.findElement(By.java:250)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat CucumberPKG.CucumberPRG.Purchase.i_click_Checkout_Button(Purchase.java:181)\r\n\tat ✽.I click Checkout Button(classpath:CucumberPKG/CucumberPRG/Purchase.feature:27)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click Proceed To Pay",
  "keyword": "And "
});
formatter.match({
  "location": "Purchase.click_Proceed_To_Pay()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Payment Page should appear",
  "keyword": "And "
});
formatter.match({
  "location": "Purchase.payment_Page_should_appear()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Payment",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I Select \"UCO Bank\" and Click Continue",
  "keyword": "When "
});
formatter.match({
  "location": "Purchase.i_Select_and_Click_Continue(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d75.0.3770.142)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027DESKTOP-HE6F1NI\u0027, ip: \u0027192.168.50.28\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002712.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 75.0.3770.142, chrome: {chromedriverVersion: 75.0.3770.90 (a6dcaf7e3ec6f..., userDataDir: C:\\Users\\test\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:59322}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: c73f0332572df89d0673679591ab7880\n*** Element info: {Using\u003dxpath, value\u003d.//label[text()\u003d\"UCO Bank\"]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat CucumberPKG.CucumberPRG.Purchase.i_Select_and_Click_Continue(Purchase.java:218)\r\n\tat ✽.I Select \"UCO Bank\" and Click Continue(classpath:CucumberPKG/CucumberPRG/Purchase.feature:32)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "NetBanking Login Page should Appear",
  "keyword": "And "
});
formatter.match({
  "location": "Purchase.netbanking_Login_Page_should_Appear()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter NetBanking Username \"123460\"",
  "keyword": "And "
});
formatter.match({
  "location": "Purchase.enter_NetBanking_Username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter NetBanking Password \"Pass@460\"",
  "keyword": "And "
});
formatter.match({
  "location": "Purchase.enter_NetBanking_Password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter Transaction Password \"Trans@460\"",
  "keyword": "And "
});
formatter.match({
  "location": "Purchase.enter_Transaction_Password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Order Confirmation Page should Appear",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "Lalitha",
        "Password123"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Purchase.order_Confirmation_Page_should_Appear()"
});
formatter.result({
  "status": "skipped"
});
});