//Country API and Wine API

//these two works
//country flag images
//country API: https://api.worldbank.org/v2/country?format=json&per_page=300
//https://countriesnow.space/api/v0.1/countries

//wine API: https://api.sampleapis.com/wines/reds

//The user will enter a country. Use that country to get the country flag.
//get user input in a varibale.

document.querySelector('button').addEventListener('click', getFlag)

function getFlag() {
    const countryName = document.querySelector('input').value;

    const url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`


    //fetch request from api
    //send api key and country to nasa
    //will get response from country API> object
    //process the response json object, needs to be an json object
    //do a task with response (name, Flag, and wine)
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)

            const selectedCountry = data[0];
            
            //help with layomi
            //display name flag Flag
            if (selectedCountry) {
                document.querySelector('h2').innerText = selectedCountry.name.common
                document.querySelector('img').src = selectedCountry.flags.png
                document.querySelector('img').alt = selectedCountry.flags.alt
            }
        })
        .catch(err => {
            console.log(`error ${err}`);
        })

    //fetch request from wine api to get country of wine
    fetch('https://api.sampleapis.com/wines/reds')
        .then(res => res.json())
        .then(wines => {
            console.log(wines)

            //check each wine 
            //check if country name exist in wine location
            //if it exist then display the wines available
            // document.querySelector('h3').innerText = wines.

            // Help with layomi

            //loop through every wine 
            for (let i = 0; i < wines.length; i++) {

                //make the current wine object into a variable
                let currentWine = wines[i]

                //check if the location of the wine includes the country name, also fix case sensitivity
                if (currentWine.location.toLowerCase().includes(countryName.toLowerCase())) {
                    
                    //console log the wine, winery, and country name in a message to try the wine.
                    console.log(`Try  ${currentWine.wine} from ${currentWine.winery} while in ${countryName}`)
                    //display the same message on the page in h3 tag
                    document.querySelector('h3').innerText = `Try  ${currentWine.wine} from ${currentWine.winery} while in ${countryName}`
                }

            }

        })
        // catch errors
        .catch(err => {
            console.log(`error ${err}`)
        });
}


