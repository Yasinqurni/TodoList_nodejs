const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const {AuthRoute, TitleRoute, ActivityRoute} = require('./app/routes')
app.use(bodyParser.json())

const swaggerUi = require(`swagger-ui-express`)
const YAML = require('yamljs');
const swaggerDocument = YAML.load(`./swagger.yaml`);
// Router
app.use('/v1', AuthRoute)
app.use('/v1', TitleRoute)
app.use('/v1', ActivityRoute)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.use((err, req, res, next) => {
    console.log(err)

    const status = err.status || 500
    const error = err.error || err.message || 'Internal server error'

    return res.status(status).json({
        status: false,
        data: {},
        error: error
    })
})

module.exports = app