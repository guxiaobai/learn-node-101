# 6-15 nginx配置

|本期版本| 上期版本
|:---:|:---:
`Wed May 11 11:38:07 CST 2022` | `-`

```
location / {
  proxy_pass http://localhost:8001;
}

location /api/ {
  proxy_pass http://localhost:8000;
  proxy_set_header Host $host;
}
```
