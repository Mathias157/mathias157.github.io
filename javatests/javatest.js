function receiving_response() {
    // pretend this came from a server instead of me just declaring it here.
    const responseFromServer = `{"name": "Luna","age": 10,"breed": "Havanese","location": {"city":"Seattle","state": "WA"}}`;
    const output = document.getElementById("code-output");

    output.innerText = responseFromServer; // a string

    const responseObject = JSON.parse(responseFromServer);

    output.innerText = output.innerText + "\n" + responseObject.name; 
    output.innerText = output.innerText + "\n" + responseObject.location.city; 
    output.innerText = output.innerText + "\n" + responseObject; 
}

function sending_request() {
    // The information
    const dog = {
        name: "Luna",
        age: 10,
        breed: "Havanese",
        location: {
            city: "Seattle",
            state: "WA"
        },
    };

    // Preparing for the request
    const objString = JSON.stringify(dog);
    const output = document.getElementById("code-output");
    output.innerText = objString;
}