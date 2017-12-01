var http = require('http')

var app = http.createServer(function(req,res){
    if(req.url=='/vuedata'){
        res.end("{list:['a','b','c']}")
    }
})

app.listen(3000)