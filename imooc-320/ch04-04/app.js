const http = require('http');
const querystring = require('querystring');

const server = http.createServer((req, res)=>{
    const method = req.method
    const url = req.url
    const path = url.split('?')[0]
    const query = querystring.parse(url.split('?')[1]);

    res.setHeader('Content-type', 'application/json')

    const resData = {
        method,
        url,
        path,
        query
    }

    if('GET' === method){
        res.end(
            JSON.stringify(resData)
        )
    }

    if('POST' === method){

        let postData = ""
        req.on('data', chunk=>{
          postData += chunk.toString()
        });

        req.on('end', ()=>{
          resData.postData = postData
          res.end(
            JSON.stringify(resData)
          );   // 在这里返回，因为是异步
        });
    }
});

server.listen(8000)
console.log('OK. Please vist: http://127.0.0.1:8000?username=guxiaobai');