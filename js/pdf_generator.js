const PDFGenerator = require('pdfkit')
const fs = require('fs');

const generatePDF = (text, fileName) => {
  let theOutput = new PDFGenerator

  theOutput.pipe(fs.createWriteStream(fileName));

  theOutput.image('./public/img/scriptyPdfLogo.png', {
    fit: [100, 100],
  });

  theOutput.font('js/Roboto-Regular.ttf')
    .moveDown()
  .text(text,{
    align: 'justify'
  })
    


  theOutput.end();

  return true;
};

module.exports = { generatePDF };