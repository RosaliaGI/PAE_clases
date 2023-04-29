function middleware(req, res, next) {

    if (req.query.token === '123') {
        req.usuario = 'Rosalía';
        //console.log('pasé por aquí');
        next();
    } else
        res.status(401).send('usuario no autenticado');
}

module.exports = middleware;