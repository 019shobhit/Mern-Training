// console.log('Hello');

const fs = require("fs");
const http = require("http");
const url = require('url');
const data = fs.readFileSync("./data.json", "utf8");
const dataObj = JSON.parse(data).products;
// console.log(dataObj)

const cardTemplate = `
<div class = 'product-card>
<h3>$TITLE$</h3>
<img src="imgsrc" alt ="product-image"/>
<a href="a_link">More Info</a>
</div>
`;

let result = [];
for (let i = 0; i < dataObj.length; i++) {
    let temp = cardTemplate;
    temp = temp.replace('$TITLE$', dataObj[i].title);
    temp = temp.replace('imgsrc', dataObj[i].images[0]);
    temp = temp.replace('a_link', `?id=${i}`);
    result.push(temp);
}
// console.log(result);

result = result.join(' ');

//  server = http.createServer((req, res) => {
//     // const route =req.url;
//     // console.log('\n',route,'\n');
//     const {pathname} = url.parse(req.url);
//     console.log('\n',pathname,'\n');
//     if(pathname=='/home'){
//         res.end(result);
//     }const
//     else if(pathname == '/product '){
//         // res.end('prroduct page');
//         const id  = quary.id;
//         const productData = 
//         console.log(dataObj(id));
//     }
//     else{
//         res.end('404 page not found');
//     }

//     // const path= url.parse('\n',route,'\n');
//     // console.log(path);

//     // res.end(result);
// });

server = http.createServer((req, res) => {
    const path = url.parse(req.url,true);
    const pathname = path.pathname;
    const q = path.query;
    if (pathname === '/home') {
        res.end(result);
    }
    else if (pathname === '/product') {
        const id = q.id;
        const item = dataObj[id];
        res.end(`
        <div>
            <h4>${item.title}</h4>
        </div>
        `);
    }
    else if (pathname === '/about') {
        res.end('about page');
    }
    else {
        res.end('404 page not found');
    }
});

server.listen(1500)