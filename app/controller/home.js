'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async info() {

    const {ctx} = this
    console.log({
      ctx,
      req: ctx.request.query,
    }, 'xxxxxxxxxxxx')
    ctx.body = `Hi, query = ${JSON.stringify(ctx.request.query)}`
  }
}

module.exports = HomeController;
