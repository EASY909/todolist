const Koa = require('koa');
const cors = require('koa2-cors');
const { router, routes } = require('./router');
const { error_handler } = require('./middleware/error-handler')
const bodyparser= require('koa-bodyparser');
const app = new Koa();
const CORS_CONFIG = {
    origin: () => 'http://localhost:3000',
    credentials:true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    exposeHeaders: ['Authorization'],
    allowHeaders:['Content-Type','Authorization','Accept']
}

app.use(bodyparser());

app.use(cors(CORS_CONFIG));

app.use(error_handler);

app.use(routes);
app.use(router.allowedMethods());

app.listen(8888, () => {
    console.log("服务开启")
});
