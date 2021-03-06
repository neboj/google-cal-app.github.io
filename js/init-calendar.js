// Client ID and API key from the Developer Console
var gapi = window.gapi
var CLIENT_ID = '106558246625911451944';
var API_KEY = 'AIzaSyC2L1tmv-3H2yYEk5D1mFNUhF-h47g42vY';
var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
var SCOPES = "https://www.googleapis.com/auth/calendar.readonly";


const handleForm = () => {
    handleClientLoad();
}
/**
 *  On load, called to load the auth2 library and API client library.
 */
function handleClientLoad() {
    gapi.load('client:auth2', () => {
        console.log("Loaded client");
        initClient();
    });
}

/**
 *  Initializes the API client library and sets up sign-in state
 *  listeners.
 */
function initClient() {
    gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES
    });
    console.log("Initialized client");
    loadCalendar();
}


function loadCalendar() {
    gapi.client.load("calendar", "v3", () => console.log("Loaded calendar"));
    startSignIn();
}

function startSignIn() {
    gapi.auth2.getAuthInstance().signIn();
}

/**
 *  Sign in the user upon button click.
 */
function handleAuthClick(event) {
    gapi.auth2.getAuthInstance().signIn();
}

/**
 * Append a pre element to the body containing the given message
 * as its text node. Used to display the results of the API call.
 *
 * @param {string} message Text to be placed in pre element.
 */
function appendPre(message) {
    var pre = document.getElementById('content');
    var textContent = document.createTextNode(message + '\n');
    pre.appendChild(textContent);
}
