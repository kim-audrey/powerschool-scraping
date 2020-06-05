// before everything, I ran npm init -y which is supposed to create an empty package json

const puppeteer = require('puppeteer');

async function scrapeProduct(URL HERE){
    const browers = awaitpuppeteer.launch();
    const page = await browswer.newPage();
    await page.goto(URL HERE);

    // .$x is pupetteer's selector, select an item by xpath
    const [el] = await page.$x('//*[@id="ccid_817487"]/td[13]/a'); 
    const src = await el.getProperty('src');
    const srcTxt = src.jsonValue();

    console.log({srcTxt}); 


}