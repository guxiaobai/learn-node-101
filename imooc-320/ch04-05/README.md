# 4-5 搭建开发环境

|本期版本| 上期版本
|:---:|:---:
`Fri May 13 10:03:45 CST 2022` | `-`

> `bin/www.js`

```js
const serverHandle = require('../app.js')
const server = http.createServer(serverHandle)
```

> `app.js`

```js
const serverHandle = (req, res)=> {
	res.setHeader('Content-Type', 'application/json')
	const resData = {
		env: process.env.NODE_ENV
	}
	res.end(
		JSON.stringify(resData)
	)
}
module.exports = serverHandle
```