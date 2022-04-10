const PDFGenerator = require('pdfkit')
const fs = require('fs');

let theOutput = new PDFGenerator

theOutput.pipe(fs.createWriteStream('ScriptySummarizedDocument.pdf'))

theOutput.image('./public/img/scriptyPdfLogo.png', {
    fit: [100, 100],
  });

const text = 'TestčćšđžчћшђжљњTestčćšđžчћшђжљњTestčćšđžчћшђжљњ'

theOutput.font('js/Roboto-Regular.ttf')
    .text(text)

theOutput.end()