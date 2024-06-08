const ffmpeg = require("fluent-ffmpeg");

function convertVideo(inputFile, quality) {
  const outputFile = `output/video-${quality}.mp4`;
  return new Promise((resolve, reject) => {
    ffmpeg(inputFile)
      .size(quality)
      .on("end", () => {
        resolve();
      })
      .on("error", (err) => {
        reject(err);
      })
      .save(outputFile);
  });
}

module.exports = convertVideo;
