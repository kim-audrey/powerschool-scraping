const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://ps001.bergen.org/public/home.html');
  await page.type('#username', 'username');
  await page.type('#password', 'password');
  //we can change as need be
  await page.setViewport({
    width: 800,
    height: 600,
    deviceScaleFactor: 1,
  });
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();
