const puppeteer = require('puppeteer'); //bot
const fs = require('fs'); //files
//const table = require('table'); //make table


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
/*
  await page.setViewport({
    width: 1350,
    height: 625,
    deviceScaleFactor: 1,
  });


  //make image directory and save screenshot there.
  fs.mkdir('images', (err)=>{});
  await page.screenshot({path: 'images/gradesnattend.png'});
*/

  // evaluates function and set it into result
  //Gets a 2d array of the grades table
  const result = await page.evaluate(() => {
    const rows = document.querySelectorAll('table tr');   // querySelectorAll takes content out of the selector
    return Array.from(rows, row => {
      const columns = row.querySelectorAll('td');
      return Array.from(columns, column => {
        //makes an object of the overview text and href link.
        if(column.querySelectorAll('a[href]').length>=1)
        return {FGrade: column.innerText, href: column.querySelector('a[href]').getAttribute('href')}
        else
        return {FGrade: column.innerText};
      });
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
var j=0;

  //gets important parts from results
  for(i=0;i<result.length-3;i++){

    if(result[i][11]!= null){
    var name = result[i][11];
    var tri1 = result[i][12];
    var tri2 = result[i][13];
    var tri3 = result[i][14];
    var overall = result[i][15];


    if(tri1.FGrade.includes("\n") || tri2.FGrade.includes("\n") || tri3.FGrade.includes("\n")){  //makes sure class exists/has grades
      tab[j][0]={FGrade: name.FGrade.split("\n")[0], href:name.href}; //only gets name of class
      tab[j][1]=tri1;
      tab[j][2]=tri2;
      tab[j][3]=tri3;
      tab[j][4]=overall;
      j++; 
    }
  }
}

  //loop removes trailing nulls
  var bool=true;
  while(bool){
    if(tab[tab.length-1][0]==null){
      tab.pop();
    }
    else{
      bool=!bool;
    }
  }

  //write results into file
  fs.mkdir('results', (err)=>{});
//  fs.writeFile('results/overview.txt', table.table(tab), (err)=>{});

  //var json = JSON.stringify({overview: tab});
  fs.writeFile("results/grades.json", JSON.stringify({overview: tab}), (err)=>{});



  await browser.close();
})();