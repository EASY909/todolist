const Router = require('koa-router');
const router = new Router();
const routes = router.routes();

const all = [];
router.get('/getlist', async (ctx, next) => {
    ctx.status = 200;
    ctx.body = {
        msg: "success",
        data: all
   }
})

router.post('/addlist', async (ctx, next) => {
    const { list } = ctx.request.body;
    all.push(list);
    ctx.status = 200;
    ctx.body = {
        msg: "success",
        data:all
   }
})

router.post('/complish', async (ctx, next) => {
    const {list:{index,state}}= ctx.request.body;
    all[index].state = state;
    ctx.status = 200;
    ctx.body = {
        msg: "success",
        data:all
   }
})

router.post('/deletelist', async (ctx, next) => {
    const {list:{index}}= ctx.request.body;
    all.splice(index, 1);
    ctx.status = 200;
    ctx.body = {
        msg: "success",
        data:all
   }
})

router.post('/edit', async (ctx, next) => {
    const {list:{index,name}}= ctx.request.body;
    all[index].name = name;
    ctx.status = 200;
    ctx.body = {
        msg: "success",
        data:all
   }
})

module.exports = {
    router,
    routes
}