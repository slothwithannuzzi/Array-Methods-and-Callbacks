import { fifaData } from './fifa.js';

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/

//(a) Home Team name for 2014 world cup final

//(b) Away Team name for 2014 world cup final

//(c) Home Team goals for 2014 world cup final

//(d) Away Team goals for 2014 world cup final

//(e) Winner of 2014 world cup final */

const final2014 = fifaData.filter((data) => {
    return data.Year === 2014 && data.Stage === "Final";
})

console.log(final2014[0]["Home Team Name"])
console.log(final2014[0]["Away Team Name"])
console.log(final2014[0]["Home Team Goals"])
console.log(final2014[0]["Away Team Goals"])
console.log(final2014[0]["Win conditions"])




/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive data as a parameter
2. Return an array of objects with the data of the teams that made it to the final stage

hint - you should be looking at the stage key inside of the objects
*/

function getFinals(data) {
   const finalArr = data.filter((data) => {
       return data.Stage === "Final";
   })

   return finalArr;
}



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array
2. Receive a callback function getFinals from task 2 
3. Return an array called years containing all of the years in the getFinals data set*/

function getYears(data, getFinals) {
    const years = getFinals(data).map((data) => {
        return data.Year;
    })
    return years;
}



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receives an array
2. Receives the callback function getFinals from task 2 
3. Determines the winner (home or away) of each `finals` game. 
4. Returns the names of all winning countries in an array called `winners` */ 

function getWinners(data, getFinals) {
    const winners = getFinals(data).map((data) => {
        if (data["Home Team Goals"] > data["Away Team Goals"]) {
            return data["Home Team Name"];
        }   else if(data["Home Team Goals"] < data["Away Team Goals"]) {
            return data["Away Team Name"]
        }   else {
            return "neither";
        }
    })
    return winners;
}



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array
2. Receive a callback function getYears from task 3
3. Receive a callback function getWinners from task 4
4. Return an array of strings that say "In {year}, {country} won the world cup!" 

hint: the strings returned need to exactly match the string in step 4.
 */

function getWinnersByYear(data, getYears, getWinners) {
    const yearArr = getYears(data, getFinals);
    const winnerArr = getWinners(data, getFinals);
    const stringArr = [];
    for (let i = 0; i < yearArr.length; i++) {
      stringArr.push(`In ${yearArr[i]}, ${winnerArr[i]} won the world cup!`)
    }
    return stringArr;
}



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function getAverageGoals to do the following: 
 1. Receive the callback function getFinals from task 2 ensure you pass in the data as an argument
 2. Return the the average number of the total home team goals and away team goals scored per match and round to the second decimal place. 
 
 (Hint: use .reduce and do this in 2 steps) 
 
 Example of invocation: getAverageGoals(getFinals(fifaData));
*/

function getAverageGoals(getFinals) {
    const avgGoals = getFinals.reduce((accumulator, data) => {
        return accumulator += (data["Home Team Goals"] + data["Away Team Goals"])
    }, 0)
    const avg = (avgGoals / getFinals.length);
    return avg.toFixed(2);
 }




/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data, teamInt) {

    const intToTeam = data.filter((data) => {
        return teamInt === data["Home Team Initials"] || teamInt === data["Away Team Initials"]
    })
    let winCounter = 0;
    for (let i = 0; i < intToTeam.length; i++) {
        if (teamInt === intToTeam[i]["Home Team Initials"] && intoTeam[i]["Home Team Goals"] > intoTeam[i]["Away Team Goals"]) {
            winCounter++;
        } else if (teamInt === intToTeam[i]["Away Team Initials"] && intoTeam[i]["Home Team Goals"] < intoTeam[i]["Away Team Goals"]) {
            winCounter++;
        }
    }
    return `${teamInt} has won ${winCounter} games.`;

}



/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getCountryWins(data, teamInt) {

    const intToTeam = data.filter((data) => {
        return teamInt === data["Home Team Initials"] || teamInt === data["Away Team Initials"]
    })

    for (let i = 0; i < intToTeam.length; i++) {
        if (teamInt === intToTeam[i]["Home Team Initials"]) {

        } 
    }

}


/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

}


/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
    console.log('its working');
    return 'bar';
}
export default{
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}
