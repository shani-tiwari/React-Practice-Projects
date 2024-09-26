import axios from "axios";

 const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/", // error (ERR_NAME_NOT_RESOLVED) occured coz, org3/ -> org/3/
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOWQ0ODY2NzRhNjQ4ZmUxZmY2NWU3Zjg5YmI2YzNkOSIsIm5iZiI6MTcyNjc5OTQzNC43OTEyMTQsInN1YiI6IjY2ZWNkYjQ5MjVjOGViODg0ZDIyYTE3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.c9VQo5WDuE8McnB2cg7nytoD0ERG81dDyOfC4T_eAJ8'
      },
})

export default instance