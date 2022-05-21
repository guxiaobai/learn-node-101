# Debugging Guide

```bash
node --inspect-brk=0.0.0.0:9229 app.js
chrome://inspect
```

```javascript
(function(exports, require, module, __filename, __dirname) {
  console.log("Hello World!");
});
```

## Ref

* [https://nodejs.org/en/docs/guides/debugging-getting-started/](https://nodejs.org/en/docs/guides/debugging-getting-started/)
* [Nodejs 之 exports, require, module, \_\_filename, \_\_dirname](https://juejin.cn/post/6844903551534104590)
* [Modules: CommonJS modules](https://nodejs.org/api/modules.html#modules_the_module_wrapper)
* [Modules: ECMAScript modules](https://nodejs.org/api/esm.html)
* [Node 调试工具入门教程](http://www.ruanyifeng.com/blog/2018/03/node-debugger.html)