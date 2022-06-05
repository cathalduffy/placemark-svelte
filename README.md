## The Placemark Application
The Placemark application allows users to be able to sign up, log in and then store different places that they have visited or might wish to visit.
They also have the ability to be able to sort these different placemarks into different category types, like for example beaches, mountains, etc.

With their placemarks, a user will be able to store the Name, Description, Latitude and Longitude of the place that 
they have visited. Once the user inputs a valid latitude and longitude, then they will then also be able to see those
coordindates rendered on a map, through the use of Leaflet.

The application uses various map types including getting all placemarks, placemarks by category and a single placemark map for a particular placemark.

Also included are charts that allow users to view the various reviews of each placemark based on frappe charts.

The application also pulls in data from Open Weather Map api through the use of axios. When a placemark is added with their latitude and longitude, the placemark application communicates with Open Weather Map api and displays the most recent weather data for that area

## Built Using
The Placemark app is built by using a Nodejs backend, specifically Hapi.js. The frontend is then built using the 
Svelte framework.

## Run the application
**Pull down repo from Github** Clone repository from github

**Run this command** $npm install