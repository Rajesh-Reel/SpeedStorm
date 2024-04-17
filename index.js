console.log("hello");

//https://disneyspeedstorm.com/news/disney-speedstorm-community-pit-stop-upgrade-system-rework
const coinLevels = [0, 150, 170, 190, 210, 230, 250, 270, 300, 320, 350, 380, 400, 450, 500, 540, 580, 630, 700, 750, 820, 900, 970, 1050, 1150, 1250, 1350, 1450, 1550, 1700, 1850, 2000, 2150, 2300, 2500, 2700, 3000, 3300, 3600, 4000, 4300, 4750, 5200, 5700, 6200, 6700, 7300, 8000, 8900, 10000];
const racerShards = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7, 7, 7, 7, 9, 9, 9, 10, 10, 10];

// console.log(coinLevels.length, racerShards.length);

function coinsProgression(max = 50) {
    let min = document.getElementById("min").value;

    let coinsResult = 0;
    for (let i = min; i < max; i++) {
        coinsResult += coinLevels[i];
    }
    
    document.getElementById("noOfCoins").innerHTML = coinsResult;
    return coinsResult;
}

console.log(coinsProgression());