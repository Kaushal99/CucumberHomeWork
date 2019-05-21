package Testabc;

import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;

public class HomePage extends Utils
{
    LoadProp loadProp = new LoadProp();
    private By _register = By.xpath("//a[@class='ico-register']");


    public void registrationButton()
    {
        Utils.clickingElement(_register);

    }






}
