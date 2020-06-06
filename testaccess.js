const puppeteer = require('puppeteer');
const fs = require('fs');
const table = require('table');




// async function getHrefs(page, selector) {
//   return await page.$$eval(selector, anchors => [].map.call(anchors, a => a.href));
//  }


(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://ps001.bergen.org/public/home.html');


  /* LOGGING IN */
  let login =fs.readFileSync('login.txt','utf8').split("\r\n");

  while((await page.$$('#fieldAccount')).length!=0){

    await page.type('#fieldAccount', login[0], {     delay:30    })
    await page.type('#fieldPassword', login[1], {    delay: 30   })

    // click sign in button
    await page.click('#btn-enter');
    await page.waitForNavigation({  waitUnitl: 'networkidle0    '});
}

 // await page.waitFor(1500000);


  await page.goto('https://ps001.bergen.org/guardian/home.html');

const result = await page.evaluate(
    () => Array.from(
      document.querySelectorAll('table tr td a[href]'),
      a => a.getAttribute('href')
    )
  );
  let scores=new Array;
for(i=0;i<result.length;i++){
    if(result[i].substring(0,15)=="scores.html?frn")
        scores.push(result[i]);
}

// const result =await page.$$eval("td", anchors => [].map.call(anchors, td => td.href));
console.log(scores);


//.innerHTML  .href     .getAttribute("href");
// const hrefs1 = await page.evaluate(
//   () => Array.from(
//     document.querySelectorAll('a[href]'),
//     a => a.getAttribute('href')
//   )
// );

  await browser.close();
})();