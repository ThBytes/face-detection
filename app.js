const express = require("express");
const fileUpload = require("express-fileupload");
const fs = require("fs");
const { Canvas, Image, ImageData, loadImage, createCanvas } = require("canvas");
const faceapi = require("face-api.js");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(fileUpload());

faceapi.env.monkeyPatch({ Canvas, Image, ImageData });
const MODEL_URL = "./models";
faceapi.nets.ssdMobilenetv1.loadFromDisk(MODEL_URL);

app.post("/face", async (req, res) => {
  try {
    const imageFile = req.files.image;
    const image = await loadImage(imageFile.data);

    const detection = await faceapi.detectAllFaces(image);

    res.json({ detection });
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => console.log(`server started`));
