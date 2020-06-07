// before everything, I ran npm init -y which is supposed to create an empty package json

const puppeteer = require('puppeteer');

async function scrapeProduct(URL HERE){
    const browers = awaitpuppeteer.launch();
    const page = await browswer.newPage();
    await page.goto(URL HERE);

    // .$x lets us select item by xpath
    // what we select gives us back an array
    // we're pulling out the 0th index into a variable called "el" (called destructuring)
    const [el] = await page.$x('//*[@id="ccid_817487"]/td[13]/a'); 
    const src = await el.getProperty('src'); // pulls source attribute out of element
    const srcTxt = await src.jsonValue();  // because src isnt string, we pull out string with jsonValue

    console.log({srcTxt}); 

    browser.close();


}