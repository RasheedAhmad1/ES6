/* ==== Promise ==== */
// const axiosRequest = require('axios');

// axiosRequest
//     .get('https://www.boredapii.com/api/activity')
//     .then(response => {
//         console.log(`You could ${response.data.activity}`);
//     })
//     .catch(error => {
//         console.log(`Error! ${error}`);
//     });

// /* ==== Placing some code after the Promise ==== */
// const axiosRequest = require('axios');

// axiosRequest
//     .get('https://www.boredapi.com/api/activity')
//     .then(response => {
//         console.log(`You could ${response.data.activity}`);
//     })
//     .catch(error => {
//         console.log(`Error! ${error}`);
//     });

// // Hey I'm after 
// console.log(`Why I'm here!`);
// // This last console will get executed first b/c
// // only the code inside the then and catch method is 
// // executed after the request returns

// /* ==== To run the code sequentially, we need async ==== */
const axiosRequest = require('axios');
async function getActivity() {
    let response = await axiosRequest.get('https://www.boredapi.com/api/activity');
    console.log(`You could ${response.data.activity}`);
}

getActivity();

/* ==== To use try and catch ==== */
const axiosRequest = require('axios');
async function getActivity() {
    try {
        let response = await axiosRequest.get('https://httpstat.us/500');
        console.log(`You could ${response.data.activity}`);
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

getActivity();