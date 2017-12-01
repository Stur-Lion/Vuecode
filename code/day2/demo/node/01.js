var http = require('http')

var app = http.createServer(function(req,res){
    if(req.url=='/vuedata'&&req.method.toLowerCase()=='get'){
        res.end("{list:['a','b','c']}")
    }
})

app.listen(3000,'172.17.16.236')