const puppeteer = require('puppeteer');
const fs = require('fs');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://ps001.bergen.org/public/home.html');


  /* LOGGING IN */


  await page.type('#fieldAccount', "aledru21", {     delay:30    })
  await page.type('#fieldPassword', "Druz200#", {    delay: 30   })

  // click sign in button
  await page.click('#btn-enter');

  // await page.waitForNavigation({  waitUnitl: 'networkidle0    '});
 // await page.waitFor(1500000);


  await page.goto('https://ps001.bergen.org/guardian/home.html');

  await page.setViewport({
    width: 1350,
    height: 625,
    deviceScaleFactor: 1,
  });
  fs.mkdir('images', (err)=>{});
  await page.screenshot({path: 'images/gradesnattend.png'});
  

  await browser.close();
})();
