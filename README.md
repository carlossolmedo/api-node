# api-node

A sample API built with Node.js and Express.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Running Locally](#running-locally)
- [Docker Usage](#docker-usage)
  - [Using Docker Compose](#using-docker-compose)
  - [Building Manually](#building-manually)
- [API Endpoints](#api-endpoints)
- [Configuration](#configuration)
- [License](#license)

## Features

- Security headers with [Helmet](https://helmetjs.github.io/)
- Request logging with [Morgan](https://github.com/expressjs/morgan)
- Ready for Docker and Docker Compose
- Development mode with [Nodemon](https://nodemon.io/)

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [Yarn](https://yarnpkg.com/) (or npm)
- [Docker](https://www.docker.com/) (optional, for containerized deployment)

## Getting Started

### Installation

Clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd api-node
yarn install
```

### Running Locally

To start the API in development mode with auto-reload:

```bash
yarn dev
```

To start the API in production mode:

```bash
yarn start
```

The API will be available at `http://localhost:4000`.

## Docker Usage

### Using Docker Compose

You can start the API using Docker Compose:

```bash
docker-compose up --build
```

### Building Manually

Build the Docker image:

```bash
docker build -t api-node .
```

Run the container:

```bash
docker run -p 4000:4000 api-node
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/`      | Returns a "Hello World!" message. |
| GET    | `/users` | Returns sample user information. |

## Configuration

The application can be configured using the following environment variables:

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT`   | The port the API will listen on. | `4000` |
| `NODE_ENV` | The application environment (`development` or `production`). | `production` |
| `PUBLIC_PATH` | The public path for the application. | `/` |

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
