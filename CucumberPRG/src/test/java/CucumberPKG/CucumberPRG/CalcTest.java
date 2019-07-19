package CucumberPKG.CucumberPRG;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class CalcTest {
	
	Calc calc=new Calc();
	
	public static void Main() {
		
	}
	
	@Test
	public void name() {
		assertEquals(10,calc.add(6, 4));
	}

}
