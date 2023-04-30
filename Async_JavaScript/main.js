/* ==== Fetching data with fetch API ==== */
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

/* ==== The above task with async and await ==== */
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

// The Blob object represents a blob, which is a file-like object of immutable,
// raw data; they can be read as text or binary data, or converted into a 
// ReadableStream so its methods can be used for processing the data. 
// Blobs can represent data that isn't necessarily in a JavaScript-native format.