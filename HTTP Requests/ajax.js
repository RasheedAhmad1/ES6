// Making an HTTP request
function getTODO() {
    let http = new XMLHttpRequest();
    let url = 'https://jsonplaceholder.typicode.com/todos';
    // using readyState property
    http.onreadystatechange = function() {
        if(this.readyState === 4) {
            if(this.status === 200) {
                var response = JSON.parse(http.responseText);
                for(var i=0; i<response.length; i++) {
                    console.log(response[i].id, response[i].title);
                }
            } else {
                console.log('Call failed!');
            }
        }
    }

    // Open a request
    http.open('GET', url, true);

    // Send the request
    http.send();
}

// calling the function
getTODO();