// Fetching data with fetch
// fetch('../assets/DOM.png').
// then( (response) => {
//     return response.blob();
// }).
// then( (blob) => {
//     document.getElementById('image').src = URL.createObjectURL(blob);
// }).catch( (message) => {
//     console.log(`This is in the catch ${message}`);
// });

// catchImage()

// The above task with async and await
async function catchImage () {
    const response = await fetch('../assets/DOM.png');
    const blob = await response.blob();
    document.getElementById('image').src = URL.createObjectURL(blob);
}

catchImage()
    .then( (response) => {
        console.log('Loading...');
    })
    .catch( (error) => {
        console.log('Our own error!');
        console.log(error);
    });