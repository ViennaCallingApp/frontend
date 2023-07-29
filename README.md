# ViennaCallingApp/frontend

`ViennaCallingApp/frontend` s a web application that simplifies and facilitates navigation in subway stations for people with visual impairments. It allows users to enter their starting point and destination by voice and to control the web application with screen readers.

## Developing

`ViennaCallingApp/frontend` is a React app and you can start it as follows:

1. `npm install` will install all dependencies
2. `npm run start` will start the dev server with hot reloading enabled.
3. Use your favourite IDE to contribute!

### Back-end

To start the API server you can use its Docker image and expose it on port 3000 (e.g. `docker run -p 3000:8080 ViennaCallingApp/backend`).
All `/api` requests will then be forwarded to it.

## Contributing

Please refer to our LICENSE and CONTRIBUTING.md for our guidelines.
