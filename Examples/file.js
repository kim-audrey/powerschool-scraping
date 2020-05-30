const fs = require('fs');
//makes and read file

// fs.writeFile('example.txt', "this is an example", (err)=>{
//     if(err)
//         console.log(err);
//     else{
//         console.log('worked');
//         fs.readFile('example.txt','utf8',(err,file)=>{
//             if(err)
//                 console.log(err);
//             else{
//                 console.log(file);
//             }
//         });

//     }
        
// // })


//rename


// fs.rename('example.txt', 'example2.txt', (err)=>{
//     if(err)
//         console.log(err);
//     else 
//     console.log('succ');
// // })
// fs.appendFile('example2.txt',' More data', (err)=>{
//     if(err)
//         console.log(err);
//     else{
//         console.log("successful append");
//     }
// })

//delete

// fs.unlink('example2.txt',(err)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log("delete succ");
// })

//make folder with file
// fs.mkdir('tut', (err)=>{
//     if(err)
//         console.log(err);
//     else{
//         fs.writeFile('./tut/example.txt', "this is an example", (err)=>{
//     if(err)
//         console.log(err);
//     else{
//         console.log('worked');
                

//     }
        
//  })
//         console.log("made folder");
//     }
// })

// delete folder. if it has file, delete that/those first
// fs.rmdir('tut', (err)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log("delete folder");
// })

//delete all files in folder
// fs.readdir('example', (err,files)=>{
//     if(err)
//         console.log(err);
//     else{
//         for(let file of files){
//             fs.unlink('./example/'+file,(err)=>{
//                 if(err)
//                     console.log(err);
//             })
//         }
//     }
        
// })