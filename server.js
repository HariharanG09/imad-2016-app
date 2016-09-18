var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var Articles={
'article-one':{
title:'Article-one|Hariharan G',
heading:'article one',
date:'sept 18',
content:`
<p>
This is my content for article one This is my content for article oneThis is my content for article oneThis is my content for article oneThis is my content for article oneThis is my content for article oneThis is my content for article oneThis is my content for article oneThis is my content for article oneThis is my content for article one
</p>
    <p>
        This is my content for article one This is my content for article oneThis is my content for article oneThis is my content for article oneThis is my content for article oneThis is my content for article oneThis is my content for article oneThis is my content for article oneThis is my content for article oneThis is my content for article one
    </p>
    <p>
        This is my content for article one This is my content for article oneThis is my content for article oneThis is my content for article oneThis is my content for article oneThis is my content for article oneThis is my content for article oneThis is my content for article oneThis is my content for article oneThis is my content for article one
    </p>
    <p>
        This is my content for article one This is my content for article oneThis is my content for article oneThis is my content for article oneThis is my content for article oneThis is my content for article oneThis is my content for article oneThis is my content for article oneThis is my content for article oneThis is my content for article one
    </p>`,
},
'article-two':{title:'Article-two|Hariharan G',
heading:'article two',
date:'sept 18',
content:`
<p>
This is my content for article two This is my content for article oneThis is my content for article oneThis is my content for article oneThis is my content for article oneThis is my content for article oneThis is my content for article oneThis is my content for article oneThis is my content for article oneThis is my content for article one
</p>
    <p>
        This is my content for article one This is my content for article oneThis is my content for article oneThis is my content for article oneThis is my content for article oneThis is my content for article oneThis is my content for article oneThis is my content for article oneThis is my content for article oneThis is my content for article one
    </p>
    <p>
        This is my content for article one This is my content for article oneThis is my content for article oneThis is my content for article oneThis is my content for article oneThis is my content for article oneThis is my content for article oneThis is my content for article oneThis is my content for article oneThis is my content for article one
    </p>
    <p>
        This is my content for article one This is my content for article oneThis is my content for article oneThis is my content for article oneThis is my content for article oneThis is my content for article oneThis is my content for article oneThis is my content for article oneThis is my content for article oneThis is my content for article one
    </p>`,},
'articleThree':{title:'Article-three|Hariharan G',
heading:'article three',
date:'sept 18',
content:`
<p>
This is my content for article three This is my content for article oneThis is my content for article oneThis is my content for article oneThis is my content for article oneThis is my content for article oneThis is my content for article oneThis is my content for article oneThis is my content for article oneThis is my content for article one
</p>
    <p>
        This is my content for article one This is my content for article oneThis is my content for article oneThis is my content for article oneThis is my content for article oneThis is my content for article oneThis is my content for article oneThis is my content for article oneThis is my content for article oneThis is my content for article one
    </p>
    <p>
        This is my content for article one This is my content for article oneThis is my content for article oneThis is my content for article oneThis is my content for article oneThis is my content for article oneThis is my content for article oneThis is my content for article oneThis is my content for article oneThis is my content for article one
    </p>
    <p>
        This is my content for article one This is my content for article oneThis is my content for article oneThis is my content for article oneThis is my content for article oneThis is my content for article oneThis is my content for article oneThis is my content for article oneThis is my content for article oneThis is my content for article one
    </p>`,},
};
function createTemplate(data){
var title=data.title;
var heading=data.heading;
var date=data.date;
var content=data.content;
var htmltemplate=`
<html>
<Head>
    <title>
${title}
    </title><meta name="viewport" content="width=device-width,initial-scale=1">
    <link href="/ui/style.css" rel="stylesheet" />
</Head>
<body>
<div class="container">
<div>
<a href="/">Home</a>    
</div>    
<h3>${heading}
</h3>
<hr>
<div>
${date}
</div>
<div>
${content}
</div>
</body>
</html>`;
return htmltemplate;
    
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req,res){
  var articleName=req.parons.articleName;
   res.send(createTemplate(Articles[articleName]));
});
app.get('/article-two',function(req,res){
 res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-three',function(req,res){
 res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
