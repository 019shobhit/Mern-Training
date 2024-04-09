console.log("......API STARTED.....");






function callAPI() {
    fetch("https://newsapi.org/v2/top-headlines?country=in&apikey=47a71f2c76a9423aab50297414f947d8")
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            renderUI(data);
        })
}
// callAPI();

function renderUI(data) {
    const root = document.getElementById("root");


    // got the articles from data
    const articles = data.articles;
    // console.log(data);

    // single article from the article array
    for (let  i=0; i <articles.length; i++) {

        const ar = articles[i];
        const div = document.createElement("div");
        div.setAttribute("class","news-card");

        const h3 = document.createElement("h3");
        h3.innerText = ar.title;
        div.appendChild(h3);
        
        const img = document.createElement("img");
        img.src = ar.urlToImage;
        div.appendChild(img);

        const p = document.createElement("p");
        p.innerText = ar.description;
        div.appendChild(p);

        root.appendChild(div);
    }
}


callAPI();