const port = process.env.PORT || 3000;

module.exports = {
    swaggerDefinition: {
        swagger: "2.0",
        info: {
            "title": "API de ejemplo",
            "description": "esta es una api de ejemplo",
            "version": "1.0.0",
            "servers": ['http://localhost:' + port]
        }
    },
    apis: ['index.js', 'src/rutas/*.js']
}