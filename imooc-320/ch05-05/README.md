# 5-5 nodejs 链接 mysql 做成工具 

|本期版本| 上期版本
|:---:|:---:
`Tue May 10 13:31:41 CST 2022` | `-`



链接对象: `db/mysql.js`

```js
function exec(sql) {
	const promise = new Promise((resolve, reject)=>{
		con.query(sql, (err, result)=>{
			if(err){
				reject(err)
				return
			}
			resolve(result)
		})
	})
	return promise
}
```