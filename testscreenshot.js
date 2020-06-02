const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://ps001.bergen.org/public/home.html');
  
  //we can change as need be
  await page.setViewport({
    width: 800,
    height: 600,
    deviceScaleFactor: 1,
  }); await page.screenshot({path: 'prelogin.png'});

  /* LOGGING IN */
  await page.type('#fieldAccount', "aledru21", {     delay:30    })
  await page.type('#fieldPassword', "Druz200#", {    delay: 30   })



  // click sign in button
  await page.click('#btn-enter');
  
  await page.setViewport({
    width: 1350,
    height: 625,
    deviceScaleFactor: 1,
  });  await page.screenshot({path: 'loggingin.png'});

  await page.waitForNavigation({  waitUnitl: 'networkidle0    '});
  await page.waitFor(1500000);

  
    // we're going to try clicking on something on the logged in page and exit if we don't get it
    try{
         // change this thing to suit powerschool's
        await page.waitFor('[data-click=".feedback-alert"]');
    } catch (error){
        console.log('Failed to login.');
        process.exit(0);
    }



  debugger;

  await browser.close();
})();
