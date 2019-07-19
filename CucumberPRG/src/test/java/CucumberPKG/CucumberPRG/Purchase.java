package CucumberPKG.CucumberPRG;

import static org.junit.Assert.assertTrue;
import static org.testng.Assert.assertEquals;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class Purchase {
	
	public static WebDriver driver;
	Actions action;

	
	@Given("Launch the chrome browser")
	public void launch_the_chrome_browser() {
		System.setProperty("webdriver.chrome.driver","C:\\Users\\test\\Desktop\\S U N D E E P\\SOFTWARES\\sellinium\\chromedriver_win32\\chromedriver.exe");
		driver=new ChromeDriver();
	}

	@Then("Load TestMeUrl {string}")
	public void load_TestMeUrl(String URL) {
		
		driver.get(URL);
		action=new Actions(driver);
	  
	}

	@Then("click SignIn Button")
	public void click_SignIn_Button() {
		WebElement signin_button=driver.findElement(By.partialLinkText("SignIn"));
		signin_button.click();	  

	}

	@Then("Enter Username {string}")
	public void enter_Username(String username) {
		driver.findElement(By.name("userName")).sendKeys(username);
		System.out.println(username);

	   
	}

	@Then("Enter Password {string}")
	public void enter_Password(String password) {
		driver.findElement(By.name("password")).sendKeys(password);
		System.out.println(password);
		
	 
	}

	@Then("Click Login Button")
	public void click_Login_Button() {
		
		driver.findElement(By.name("Login")).click();
	}

	@Then("Home page should appear")
	public void home_page_should_appear() {
	  
	   assertEquals(driver.getTitle(),"Home");
	}
	
	
	//end of LOGIN Scenario**************************************************

	@When("I Go to All categories")
	public void i_Go_to_All_categories() {

        action=new Actions(driver);
		System.out.println(driver.getWindowHandle());		
       action.moveToElement(driver.findElement(By.xpath(".//span[contains(text(),\"Categories\")]"))).build().perform();

	    
	}

	@When("I Navigate TO Electronics")
	public void i_Navigate_TO_Electronics() {
		
		
		 action.moveToElement(driver.findElement(By.xpath(".//span[contains(text(),\"Electronics\")]"))).click().build().perform();
			
		driver.manage().timeouts().implicitlyWait(500,TimeUnit.MILLISECONDS);
		
	}

	@When("Click on HeadPhones")
	public void click_on_HeadPhones() {
		
		
		 action.moveToElement(driver.findElement(By.xpath(".//span[contains(text(),\"Head\")]"))).click().build().perform();

	  
	}

	@When("Click Add to cart")
	public void click_Add_to_cart() {
		driver.findElement(By.partialLinkText("Add to")).click();
		
	   
	}

	@Then("Click Cart Button")
	public void click_Cart_Button() {
		  driver.findElement(By.partialLinkText("Cart")).click();
	}

	@When("I click Checkout Button")
	public void i_click_Checkout_Button() {
		
		  driver.findElement(By.partialLinkText("Checkout")).click();
		  
			
	   
	}

	@When("Click Proceed To Pay")
	public void click_Proceed_To_Pay() {
		
		driver.findElement(By.xpath(".//input[@value='Proceed to Pay']")).click();
		driver.manage().timeouts().implicitlyWait(2000,TimeUnit.MILLISECONDS);
	   
	}

	@When("Payment Page should appear")
	public void payment_Page_should_appear() {
		//assertEquals(driver.getTitle(), "Payment Gateway");
	 
	}

	@When("I Select {string} and Click Continue")
	public void i_Select_and_Click_Continue(String Bankname) {
		
		switch (Bankname) {
		case "HDFC Bank":
			 driver.findElement(By.xpath(".//label[text()=\"HDFC Bank\"]")).click();
			break;
			
		case "Andhra Bank":
			 driver.findElement(By.xpath(".//label[text()=\"Andhra Bank\"]")).click();
			break;
			
		case "IDBI Bank":
			 driver.findElement(By.xpath(".//label[text()=\"IDBI Bank\"]")).click();
			break;
			
		case "UCO Bank":
			 driver.findElement(By.xpath(".//label[text()=\"UCO Bank\"]")).click();
			break;

		default:
			break;
		}
		
		 driver.findElement(By.id("btn")).click();
	    
	}

	@When("NetBanking Login Page should Appear")
	public void netbanking_Login_Page_should_Appear() {
		
		
		
		assertEquals(driver.getTitle(), "Payment Gateway");
		 
	  
	}

	@When("Enter NetBanking Username {string}")
	public void enter_NetBanking_Username(String username) {
		
		
		
		driver.findElement(By.name("username")).sendKeys(username);
		  
	    
	}

	@When("Enter NetBanking Password {string}")
	public void enter_NetBanking_Password(String password) {
		
	
		 
	     driver.findElement(By.name("password")).sendKeys(password);
		 driver.findElement(By.xpath(".//input[@value='LOGIN']")).click();
		
	   
	}

	@When("Enter Transaction Password {string}")
	public void enter_Transaction_Password(String TransPassword) throws InterruptedException {		

		driver.findElement(By.name("transpwd")).sendKeys(TransPassword);
		
		  
		  driver.findElement(By.xpath(".//input[@value='PayNow']")).click();
	    
	}

	@Then("Order Confirmation Page should Appear")
	public void order_Confirmation_Page_should_Appear() {
		
		//driver.get(arg0);
	   
	}
	
	
}
