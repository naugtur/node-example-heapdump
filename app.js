const express = require('express')
const blowingUp = []

const app = express()
app.get('/', _=> setInterval(_ => blowingUp.push(`
    Ok, so that's a pretty obvious memory leak.
    The goal here is to implement saving a heapdump in an environment
     where you can't just connect a debugger.
    `), 100))
