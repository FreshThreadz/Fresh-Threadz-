const fs = require('fs');
const csv = require('csv-parser');
const { parse } = require("csv-parser");

const results = [];

let currentId = 0;
let prevData;
fs.createReadStream('/Users/aifunlook/Documents/RFP2207/rfp2207-SDC-superman/csv/photos.csv')
.pipe(csv({
  escape: '"',
  quote: '\\',
  delimiter: ',',
}))
.on('data', (data) => {
  // console.log(data);

  results.push(data)
  // if (Number(data.id) !== (currentId + 1)) {
  //   console.log(prevData, "previous Data");
  //   console.log(data, "current data");
  // }
  // currentId = Number(data.id);
  // prevData = data;

  if(Object.keys(data).length > 4) {
    console.log(data, "ERROR")
  }

  // if (Number(data.id) === 249) {
  //   console.log(data, '----------------------------------------------------');
  // }

  // if (Number(data.id) === 263) {
  //   console.log(data, '----------------------------------------------------');
  // }

  // if (Number(data.id) === 282) {
  //   console.log(data, '----------------------------------------------------');
  // }

  // if (Number(data.id) === 304) {
  //   console.log(data, '----------------------------------------------------');
  // }

  // if (Number(data.id) === 326) {
  //   console.log(data, '----------------------------------------------------');
  // }

  // if (data.thumbnail_url.length > 160) {
  //   console.log(data, 'WATCH');
  // }

  // if (Number(data.id) === 48) {
  //   console.log(data, '----------------------------------------------------');
  // }

  // console.log(data.url)
  // console.log('--------------------------------------------')
})
.on('end', () => {
  console.log(results);
  // console.log(results[11]);
})
