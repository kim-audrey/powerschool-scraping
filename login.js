const puppeteer = require('puppeteer');
const fs = require('fs');   // accesses physical file system
const config = require('./config.json')   // contains 2 properties: username + pwd


(async () => {
    // starts up pupeteer and create new page
  const browser = await puppeteer.launch({  headless: false   });
  const page = await browser.newPage();

  // check if we have previously saved session
  if(Object.keys(cookies).length){
        // if we have a session saved, we enter initiate the page we started up with this previous session
      await page.setCookie(...cookies);
      // in this case, we go to powerschool but we're already logged in
      await page.goto('https://ps001.bergen.org/public/home.html', {    waitUntil: 'networkidle2'   });

  }
  else{
    await page.goto('https://ps001.bergen.org/public/home.html', {    waitUntil: 'networkidle2'   });
        // write in username + pwd
    await page.type('#fieldAccount', config.username, { delay:30    })
    await page.type('#fieldpassword', config.password, {    delay: 30   })

    // click sign in button
    await page.click('#btn-enter');

    // time out so we can 'introduce security codes from the phone'
    await page.waitForNavigation({  waitUnitl: 'networkidle0    '});
    await page.waitFor(1500000);

    // we're going to try clicking on something on the logged in page and exit if we don't get it
    try{
                                        // change this thing to suit powerschool's
        await page.waitFor('[data-click="profile_icon"]');
    } catch (error){
        console.log('Failed to login.');
        process.exit(0);
    }

    


  }



  //we can change as need be
  await page.setViewport({
    width: 800,
    height: 600,
    deviceScaleFactor: 1,
  });
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();
