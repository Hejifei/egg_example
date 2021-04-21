'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async list() {
    // const dataList = {
    //   list: [
    //     { id: 1, title: 'this is news 1', url: '/news/666' },
    //     { id: 2, title: 'this is news 2', url: '/news/888' }
    //   ]
    // };
    // await this.ctx.render('news/list.tpl', dataList);
    const ctx = this.ctx;
    const page = ctx.query.page || 1;
    const newsList = await ctx.service.news.list(page);
    console.log({
      newsList
    })
    await ctx.render('news/list.tpl', { list: newsList });
  }

  async detail() {

    const {ctx} = this
    console.log({
      ctx,
      req: ctx.params,
    }, 'xxxxxxxxxxxx')
    ctx.body = `Hi, query = ${JSON.stringify(ctx.params)}`
  }
}

module.exports = NewsController;
