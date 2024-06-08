const convertVideo = require("./convertVideo");
var fs = require("fs");

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

init();
