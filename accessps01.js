const puppeteer = require('puppeteer'); //bot
const fs = require('fs'); //files
const table = require('table'); //make table


(async () => {
  //launches bot and opens up powerschool
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://ps001.bergen.org/public/home.html');


  /* LOGGING IN */
  const login =fs.readFileSync('login.txt','utf8').split("\r\n");

  //Attempt to log in repeatedly till successful
  while ((await page.$$('#fieldAccount')).length!=0){
    
    //enters log in info
    await page.type('#fieldAccount', login[0], {     delay:30    })
    await page.type('#fieldPassword', login[1], {    delay: 30   })

    // click sign in button
    await page.click('#btn-enter');
    await page.waitForNavigation({  waitUnitl: 'networkidle0    '});
}

  //go to grades
  await page.goto('https://ps001.bergen.org/guardian/home.html');

  await page.setViewport({
    width: 1350,
    height: 625,
    deviceScaleFactor: 1,
  });


  //make image directory and save screenshot there.
  fs.mkdir('images', (err)=>{});
  await page.screenshot({path: 'images/gradesnattend.png'});


  // evaluates function and set it into result
  //Gets a 2d array of the grades table
  const result = await page.evaluate(() => {
    const rows = document.querySelectorAll('table tr');   // querySelectorAll takes content out of the selector
    return Array.from(rows, row => {
      const columns = row.querySelectorAll('td');
      return Array.from(columns, column => column.innerText);
    });
  });

  let tab = new Array(result.length+1);

  //retrieve important parts of grades
for(i=0;i<tab.length;i++){
  tab[i]=new Array(5);
}
tab[0][0]="Course";
tab[0][1]="Tri 1";
tab[0][2]="Tri 2";
tab[0][3]="Tri 3";
tab[0][4]="Overall";
  for(i=1;i<result.length;i++){  
    tab[i][0]=result[i-1][11]
    tab[i][1]=result[i-1][12]
    tab[i][2]=result[i-1][13]
    tab[i][3]=result[i-1][14]
    tab[i][4]=result[i-1][15] 
  }

  //write results into file
  fs.mkdir('results', (err)=>{});
  fs.writeFile('results/overview.txt', table.table(tab), (err)=>{});



  await browser.close();
})();