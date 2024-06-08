const express = require("express");
const convertVideo = require("./convertVideo");
require("dotenv").config();
var fs = require("fs");

const app = express();
const port = process.env.SERVER_PORT || 3000;

async function init() {
  //input file
  const inputFile = "input/samplevideo.mp4";

  //output file
  if (!fs.existsSync("output")) fs.mkdirSync("output");
  const resolutions = ["720x480", "480x360", "360x240", "240x180", "144x108"];

  for (const quality of resolutions) {
    try {
      await convertVideo(inputFile, quality);
      console.log(`video successfully converted to quality ${quality}`);
    } catch (error) {
      console.log(error);
    }
  }
}

app.get("/", (req, res) => {
  init();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
