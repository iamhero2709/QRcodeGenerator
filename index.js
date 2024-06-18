import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    { message: "Type in url", name: 'URL' }
  ])
  .then((answers) => {
 const url=answers.URL;
  var qr_svg = qr.image('qr_img.png')
qr_svg.pipe(fs.createWriteStream('i_love_qr.png'));
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error("Prompt couldn't be rendered in the current environment");
    } else {
      console.error("An error occurred:", error);
    }
  });

  // qr image npm packeage to turn into  image 
