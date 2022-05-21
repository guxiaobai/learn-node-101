const http = require('http');

const slice = Array.prototype.slice

class LikeExpress {
  constructor(){
    this.routes = {
      all: [],
      get: [],
      post: []
    }
  }

  register(path){

    const info = {}
    if(typeof path === 'string'){
      info.path = path
      // 从第二个参数开始，转换为数组
      info.stack = slice.call(arguments, 1)
    }else{
      info.path = '/'
      info.stack = slice.call(arguments, 0)
    }
    return info;

  }

  use() {

    const info = this.register.apply(this, arguments)
    this.routes.all.push(info)

  }

  get() {

    const info = this.register.apply(this, arguments)
    this.routes.get.push(info)

  }

  post() {
    this.routes.post.push(info)
  }

  callback(){
      return (req, res) => {

        res.json = () => {
          res.setHeader('Content-type', 'application/json')
          res.end(JSON.stringify(data))

        }

      }
  }

  listen(...args){
      const server = http.createServer(this.callback())
      server.listen(...args)
  }
}

// 工厂函数
module.exports = () => {
  return new LikeExpress();
}