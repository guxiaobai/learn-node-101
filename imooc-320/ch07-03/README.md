# 7-3 stream 介绍

|本期版本| 上期版本
|:---:|:---:
`Sat May 14 18:06:29 CST 2022` | `-`

```js
// process.stdin 获取数据，直接通过管道传递给 process.stdout
process.stdin.pipe(process.stdout)
```