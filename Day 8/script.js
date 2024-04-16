const fs = require("fs");
const http = require("http");
const { title } = require("process");
const url = require('url');
const data = fs.readFileSync("./data.json", "utf8");
const dataObj = JSON.parse(data).products;

const inputElement = `
<form action="/product">
<input type="text" placeholder="Enter product"> 
<button type="submit">Search</button>
</form>
`

const cardTemplate = `
<!DOCTYPE html>
<html>
    <head>
        <title>Shoping Page</title>
        <style>
            .product-card{
                border: 2px solid red;
                height:100px;
                width:100px;
            }
        </style>
    </head>
    <body>
        <div class = 'product-card style="border: 5px solid red;background-color: aqua; height:400px; width:400px; text-align:center; justify-content:center;  ";
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        background-color: #cdc8c8;" >
            <h1 style="height:50px; background-color: black; color:white; ">$TITLE$</h1>
            <img src="imgsrc" alt ="product-image"/ style="height:300px; width:320px;background-color: aqua;">
            <a href="a_link">More Info</a>
        </div>
    </body>
</html>
`;

let result = [];
for (let i = 0; i < dataObj.length; i++) {
    let temp = cardTemplate;
    temp = temp.replace('$TITLE$', dataObj[i].title);
    temp = temp.replace('imgsrc', dataObj[i].images[0]);
    temp = temp.replace('a_link', `?id=${i}`);
    result.push(temp);
}
result = result.join(' ');
server = http.createServer((req, res) => {
    res.writeHead(200,{
        'content-type':'text/html',
    });
    const path = url.parse(req.url, true);
    const pathname = path.pathname;
    const q = path.query;
    if (pathname === '/home') {
        res.end(inputElement+result);
    }
    else if (pathname === '/product') {
        // const id = q.id;
        const pName = q.productName;
        // if(id){
        //         console.log("only id ")
        // }
        if(pName){
            const serachNameResult = dataObj.filter((elem)=>{
                if(elem.title.includes(pName)){
                    return true;
                }
                else{
                    return false;
                }
            })
            res.end(JSON.stringify(serachNameResult));
        }
        else{
            res.end('<h3>.....ERROR.......</h3>');
        }
        // const item = dataObj[id];
        // res.end(`
        // <div>
        //     <h4>${item.title}</h4>
        // </div>
        // `);
    }
    else if (pathname === '/about') {
        res.end('about page');
    }
    else {
        res.end('404 page not found');
    }
});

server.listen(1500)