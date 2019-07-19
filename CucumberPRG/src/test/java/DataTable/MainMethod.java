package DataTable;


import java.util.List;
import java.util.Map;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MainMethod {

	
	
	@Given("I want to login to testMe")
	public void i_want_to_login_to_testMe() {
	   
	}

	@When("Enter Username and password")
	public void enter_Username_and_password(io.cucumber.datatable.DataTable dataTable) {
	  
		List<Map<String,String>> list=dataTable.asMaps(String.class,String.class);
		
		System.out.println("+++++"+list.size());
		
		
	}

	@Then("I validate the outcomes")
	public void i_validate_the_outcomes() {
	}
}
