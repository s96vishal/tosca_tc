const expect =require('chai').expect;

module.exports=async function(){
    await this.Given("I visit tosca sample app website",function(){
      return helpers.loadPage("http://sampleapp.tricentis.com/101/")
        
    })

    this.When("I click on automobile tab",function(){
        return driver.wait(until.elementsLocated(by.id('nav_automobile')),20000).then(()=>{
            driver.findElement(by.id('nav_automobile')).click();
        })
       // return driver.findElement(by.id('nav_automobile')).click();
    })

    this.Then("I should see Enter Vehicle Data page",function(){
        return true;
    })

    await this.When("I enter details and click next",function(){
        
        driver.findElement(by.id('make')).sendKeys("Audi");
        driver.findElement(by.id('engineperformance')).sendKeys("120")
        driver.findElement(by.id('dateofmanufacture')).sendKeys('04/25/2015');
        driver.findElement(by.id('numberofseats')).sendKeys('5');
        driver.findElement(by.id('fuel')).sendKeys('Diesel');
        driver.findElement(by.id('listprice')).sendKeys('10000');
        driver.findElement(by.id('licenseplatenumber')).sendKeys('12345678');
        driver.findElement(by.id('annualmileage')).sendKeys('168')

        return driver.wait(until.elementsLocated(by.id('nextenterinsurantdata')),10000).then(()=>{
            driver.findElement(by.id('nextenterinsurantdata')).click();
        })
        //return driver.findElement(by.id('nextenterinsurantdata')).click();
        
    })
    await this.Then("I should see Insurant Data page",function(){
        return driver.wait(until.elementsLocated(by.id('firstname')),10000);
    })

    this.When('I enter insurant data and click next',function(){

        driver.findElement(by.id('firstname')).sendKeys("Insurant");
        driver.findElement(by.id('lastname')).sendKeys("services");
        driver.findElement(by.id('birthdate')).sendKeys("03/25/1995");
        driver.findElement(by.className('ideal-radio')).click();
        driver.findElement(by.id('streetaddress')).sendKeys("hinjewadi pune");
        driver.findElement(by.id('country')).sendKeys("India");
        driver.findElement(by.id('zipcode')).sendKeys("411057");
        driver.findElement(by.id('city')).sendKeys("Pune");
        driver.findElement(by.id('occupation')).sendKeys("Employee");
        driver.findElement(by.className('ideal-check')).click();

        return driver.wait(until.elementsLocated(by.id('nextenterproductdata')),10000).then(()=>{
            driver.findElement(by.id('nextenterproductdata')).click();
        })


    })

    this.Then('I should see Product Data page',function(){
        return driver.wait(until.elementsLocated(by.id('startdate')),10000);
    })

    this.When('I enter product data and click next',function(){

        driver.findElement(by.id('startdate')).sendKeys("09/05/2019");
        driver.findElement(by.id('insurancesum')).sendKeys("3.000.000,00");
        driver.findElement(by.id('meritrating')).sendKeys("Bonus 9");
        driver.findElement(by.id('damageinsurance')).sendKeys("Partial Coverage");
        
        
        driver.findElement(by.xpath('//*[@id="insurance-form"]/div/section[3]/div[5]/p/label[1]/span')).click();
        driver.findElement(by.id('courtesycar')).sendKeys('Yes');
        return driver.wait(until.elementsLocated(by.id('nextselectpriceoption')),10000).then(()=>{
           driver.findElement(by.id('nextselectpriceoption')).click();
        })



    })
    this.Then('I should see price options',function(){
        return driver.wait(until.elementsLocated(by.id('priceTable')),10000);
    })

    this.When('I select pricing option and click next',function(){
        driver.wait(until.elementsLocated(by.className('//*[@id="priceTable"]/tfoot/tr/th[2]/label[1]/span')),30000).then(()=>{
            driver.findElement(by.className('//*[@id="priceTable"]/tfoot/tr/th[2]/label[1]/span')).click();

        });

        return driver.wait(until.elementsLocated(by.id('nextsendquote')),20000).then(()=>{
            driver.findElement(by.id('nextsendquote')).click();
        })

    })

    this.Then('I should see',function(){
        return true;
    })
}


