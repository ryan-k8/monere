![monere](https://socialify.git.ci/ryan-k8/monere/image?description=1&descriptionEditable=&font=Inter&language=1&name=1&owner=1&theme=Light)

## About The Project

Monere is a scalable, real-time monitoring application for collecting and
displaying resource information of many servers in a network.

### Built With

- [Node.js](https://nodejs.org/) as the primary framework and for the
  [cluster](https://nodejs.org/api/cluster.html) module.
- [React.js](https://reactjs.org/) for the real-time dashboard.
- [Express.js](https://expressjs.com/) for the backend api.
- [MongoDB](https://www.mongodb.com/) for the storage of metrics in timeseries
  collections.
- [Socket.io](https://socket.io/) for websockets.
- [Redis](https://redis.io/) adapter for socketio.

In the current state, this is not a good option for production usage. Check
[OpenWISP](https://github.com/openwisp/) or
[Netdata](https://github.com/netdata/netdata) for production use.

## Features

On its own, monere has a react based dashboard for displaying real-time
information. However, since the data can be stored in a mongodb collection, one
could leverage mongo's features for creating charts as explained later.

## React Dashboard

![image](https://github.com/user-attachments/assets/3d63c454-3a15-4f74-bb76-aa0524fcbbe1)
A react dashboard which displays metrics in real time.

## MongoDB Timeseries Collections

![image](https://github.com/user-attachments/assets/198182ce-ab6a-47b5-bb86-291a011424cf)
The metrics are by default, stored in a mongoDB collection which can be used for
creating charts as explained in the
[mongodb charts guide](https://www.mongodb.com/docs/charts/). In future, the
react dashboard may possibly display this information itself.

## Architecture

![Monere Architecture](https://github.com/user-attachments/assets/098027bb-7147-4bc5-969e-dc9d7d4ce60c)
The application comprises of 3 components:

- React Dashboard
- Agent Script
- SocketIO Server

The socketIO server is responsible for creating node cluster for concurrent
processing when a large number of servers are sending their data simultaneously.
By default, the socketio server will update the dashboard on an interval of
1000ms which can be configured as per the user's needs.

## Usage

First, clone this repository on your host machine.

### Installing the dashboard

First, install the socketio server using the following commands:

```bash
$ cd server
$ npm i
$ npm start
```

Make sure to copy the `.env_sample` file into `.env` and set up the environment
variables accordingly

Install and start the react dashboard using the following commands:

```bash
$ cd client
$ npm i
$ npm start
```

Again, make sure to copy the `.env_sample` file into `.env` and set up the
environment variables accordingly

### Connecting devices

For every device in the system, you have to run an agent on it. To install and
start an agent, use the following commands:

```bash
$ cd agent
$ npm i
$ npm start
```

Make sure to set up the environment variables in the `.env` file accordingly

### Mongodb charts

With your provided credentials, a mongodb timeseries collection will be created.
Follow the [mongodb charts guide](https://www.mongodb.com/docs/charts/) for
instructions on setting up charts for your choice of metrics.

## Contributing

:warning: This project was created for learning purposes and the code is
untested. In the current state, this is not a good option for production usage.
:warning::warning::warning:

## Inspiration

This project is heavily inspired by

- [OpenWISP](https://github.com/openwisp/)
- [Netdata](https://github.com/netdata/netdata)

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.
