const WordExtractor = require("word-extractor");
const fs = require("fs");

const getWordBodyText = async (fileName) => {
  try {
    if (fs.existsSync(fileName)) {
      const extractor = new WordExtractor() 
      const extracted = await extractor.extract(fileName)
      if(extractor) {
        return extracted.getBody();
      }
    }
  } catch (error) {
    return error.message;
  }
};

getWordBodyText("js/test2.docx")
  .then((content) => {
  console.log(content);
}).catch (errMsg => {
  console.log(errMsg);
});