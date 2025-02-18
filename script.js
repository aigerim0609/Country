let searchBtn = document.getElementById('search-btn')
let countryInp = document.getElementById('country-inp')
let result = document.getElementById('result')


searchBtn.addEventListener('click', () => {
    let countryName = countryInp.value
    let finalURL =`https://restcountries.com/v3.1/name/${countryName}?fullText=true`


    fetch(finalURL)
    .then(response => response.json())
    .then(data=>{
        result.innerHTML=`
        <img src="${data[0].flags.svg}" class="flag-img" />
        <h2>${data[0].name.common}</h2>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Столица:</h4>
                <span>${data[0].capital[0]}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Континент:</h4>
                <span>${data[0].continents[0]}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Население:</h4>
                <span>${data[0].population}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Валюта:</h4>
                <span>${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Общие языки:</h4>
                <span>${Object.values(data[0].languages).toString().split(",").join(", ")}</span>
            </div>
        </div>
        `
    }).catch(() => {
        if (countryName.length ==0){
            result.innerHTML = `
            <h3>Пустое значение!</h3
            `
        }else{
            result.innerHTML = `
            <h3>Неправильное значение!</h3
            ` 
        }
    })
})