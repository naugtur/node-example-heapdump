const express = require('express')
const blowingUp = []

const app = express()
app.get('/', (req, res) => {
  res.send(`Let's pretend it's all fine.`)

  setInterval(_ => blowingUp.push(`
    Ok, so that's a pretty obvious memory leak.
    The goal here is to implement saving a heapdump in an environment
     where you can't just connect a debugger.
    `.repeat(100)), 10)
})

app.listen(8080)
