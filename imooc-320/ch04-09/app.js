const getPostData = (req) => {
  const promise = new Promise((resolve, reject)=>{
    if(req.method !== 'POST'){
      resolve({})
      return
    }

    if(req.headers['content-type'] !== 'application/json'){
      resolve({})
      return
    }

    let postData = ''
    req.on('data', chunk=>{
      postData += chunk.toString()
    })

    req.on('end', ()=>{
        if(!postData){
            resolve({})
            return
          }
        resolve(
          JSON.parse(postData)
        )
    })
  })
  return promise
}

getPostData(req).then(postData=>{
  req.body = postData
})