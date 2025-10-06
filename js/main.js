//The user will enter a date. Use that date to get the country flag.
//get user input in a varibale.
//fetch request from api
//send api key and date to nasa
//will get response from country API> object
//process the response json object, needs to be an json object
//do a task with response (name, Flag, and wine)
//display name, Flag, and Activity
//For sencond API(wine) it should be in rthe first fetch

//these two works
//country API: https://api.worldbank.org/v2/country?format=json&per_page=300
//https://countriesnow.space/api/v0.1/countries
//country flag images

//wine API: https://api.sampleapis.com/wines/reds



document.querySelector('button').addEventListener('click', getFlag)

function getFlag() {
    const countryName = document.querySelector('input').value;

    const url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)

            const selectedCountry = data[0];

            if (selectedCountry) {
                document.querySelector('h2').innerText = selectedCountry.name.common
                document.querySelector('img').src = selectedCountry.flags.png
                document.querySelector('img').alt = selectedCountry.flags.alt
            }
        })
        .catch(err => {
            console.log(`error ${err}`);
        })


    fetch('https://api.sampleapis.com/wines/reds')
        .then(res => res.json())
        .then(wines => {
            console.log(wines)

            //check each wine 
            //check if country name exist in wine location
            //if it exist then display the wines available
            // document.querySelector('h3').innerText = wines.

            // Help with layomi

            for (let i = 0; i < wines.length; i++) {


                let currentWine = wines[i]

                if (currentWine.location.toLowerCase().includes(countryName.toLowerCase())) {
                    console.log(`Try  ${currentWine.wine} from ${currentWine.winery} while in ${countryName}`)
                    document.querySelector('h3').innerText = `Try  ${currentWine.wine} from ${currentWine.winery} while in ${countryName}`
                }

            }

        })

        .catch(err => {
            console.log(`error ${err}`)
        });
}


