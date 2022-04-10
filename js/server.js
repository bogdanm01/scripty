let express  = require('express');
let summarizer = require('./summarizer.js');
let path = require('path');
let fs = require('fs');
const bodyParser = require('body-parser');
let pdfGen = require('./pdf_generator.js');

const text3 = `
By the early part of 1939 the German dictator Adolf Hitler had become determined to invade and occupy Poland. Poland, for its part, had guarantees of French and British military support should it be attacked by Germany. Hitler intended to invade Poland anyway, but first he had to neutralize the possibility that the Soviet Union would resist the invasion of its western neighbour. Secret negotiations led on August 23–24 to the signing of the German-Soviet Nonaggression Pact in Moscow. In a secret protocol of this pact, the Germans and the Soviets agreed that Poland should be divided between them, with the western third of the country going to Germany and the eastern two-thirds being taken over by the U.S.S.R.

Having achieved this cynical agreement, the other provisions of which stupefied Europe even without divulgence of the secret protocol, Hitler thought that Germany could attack Poland with no danger of Soviet or British intervention and gave orders for the invasion to start on August 26. News of the signing, on August 25, of a formal treaty of mutual assistance between Great Britain and Poland (to supersede a previous though temporary agreement) caused him to postpone the start of hostilities for a few days. He was still determined, however, to ignore the diplomatic efforts of the western powers to restrain him. Finally, at 12:40 pm on August 31, 1939, Hitler ordered hostilities against Poland to start at 4:45 the next morning. The invasion began as ordered. In response, Great Britain and France declared war on Germany on September 3, at 11:00 am and at 5:00 pm, respectively. World War II had begun.
`;

let app = express();

//add other middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const path_to_index = path.join(__dirname,'..','index.html');
app.use(express.static(path.join(__dirname,'..', 'public/')));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname,'..', 'public', '/index.html'));
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname,'..', 'public', '/summarizer.html'));
});

app.post('/textinput', (req, res) => {
    
    let summaryText = summarizer.summarize(req.body.data, parseInt(req.body.range));

    console.log(summaryText);
    pdfGen.generatePDF(summaryText.summary, 'pdfResult.pdf');
    
    res.sendStatus(200);
});

app.post('/summarizeText', (req, res) => {
    console.log(req.body);
    let summaryText = summarizer.summarize(req.body.data, parseInt(req.body.range));
    console.log(JSON.stringify({data: summaryText.summary}));
    res.send(JSON.stringify({data: summaryText.summary}));
});

app.listen(3000, function(){
	console.log("Server started on port: 3000");
});

app.get('/test', (req, res) => {
    res.sendFile(path.join(__dirname,'..', 'public', 'test.html'));
});

app.post('/getpdf', (req, res) => {
    res.sendFile(path.join(__dirname, '..', "pdfResult.pdf"));
})