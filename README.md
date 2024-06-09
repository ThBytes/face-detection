# Face Detection API

This Api allows you to detect faces in images uploaded to the server. It utilizes the FaceAPI.js library for face detection.

## Categories

- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)

## Installation

To use this Api, follow these steps:

1. Clone the repository from GitHub:

   ```bash
   git clone https://github.com/ThBytes/face-detection
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   npm start
   ```

## Usage

### Endpoint

- **URL:** `/face`
- **Method:** POST
- **Content-Type:** multipart/form-data

### Request Body

The request body should contain a single file named `image`, which is the image file you want to analyze for faces.

### Response

Upon successful detection, the API will respond with a JSON object containing information about the detected faces:

```json
{
  "detection": [
    {
      "x": 100, // X-coordinate of the top-left corner of the bounding box
      "y": 150, // Y-coordinate of the top-left corner of the bounding box
      "width": 80, // Width of the bounding box
      "height": 100 // Height of the bounding box
    }
    // Additional face detections if any
  ]
}
```

If no faces are detected, the API will respond with an empty array `[]`.

### Example

#### Request

```bash
curl -X POST -F "image=@/path/to/your/image.jpg" http://localhost:3000/face
```

#### Response

```json
{
  "detection": [
    {
      "x": 100,
      "y": 150,
      "width": 80,
      "height": 100
    },
    {
      "x": 200,
      "y": 180,
      "width": 70,
      "height": 90
    }
  ]
}
```

## Dependencies

- [Express.js](https://expressjs.com/): Web framework for Node.js
- [express-fileupload](https://www.npmjs.com/package/express-fileupload): Middleware for handling file uploads in Express
- [canvas](https://www.npmjs.com/package/canvas): Node.js canvas library
- [face-api.js](https://github.com/justadudewhohacks/face-api.js): JavaScript face recognition API for the browser and nodejs, built on top of TensorFlow.js
