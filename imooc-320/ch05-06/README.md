# 5-6 API对接mysql（博客列表）

|本期版本| 上期版本
|:---:|:---:
`Tue May 10 13:38:54 CST 2022` | `-`


```js
let sql = `select * from blogs where 1 =1 `
if(author) {
	sql += `and author=`${author}``
}
sql += `order by createtime desc;`
```