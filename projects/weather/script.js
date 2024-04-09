function fetchAPI(){
    fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[location]/[date1]/[date2]?key=KSX997YZSFUY2M4ZC8DNDWUBK")
    .then((res)=>res.json())
    .then(console.log);
}
fetchAPI();

function renderUI(data){
    // const days = data.days;
    // console.log(days);

const row = document.createElement("tr");

let cell = document.createElement("th");
cell.innerText = 'Date';
row.appendChild(cell);

let cell2 = document.createElement("th");
cell2.innerText = 'date';
row.appendChild(cell2);

root.appendChild(row);
}
renderUI();

// KSX997YZSFUY2M4ZC8DNDWUBK