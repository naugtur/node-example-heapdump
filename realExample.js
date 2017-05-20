require('heapdump')
const express = require('express')
const session = require('express-session')
const app = express()

app.use(session({
  secret: 'secret goes here'
}))

app.get('/', (req, res) => {
  res.send(`
    <h2>Take a look at the network tab in devtools</h2>
    <script>
        function loops(func) {
          return func().then(_ => setTimeout(loops, 10, func))
        }

        loops(_ => fetch('api/tick'))
    </script>
    `)
})

app.get('/api/tick', (req, res) => {
  res.send('seems legit')
})

app.listen(8080)
