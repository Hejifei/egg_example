'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/info', controller.home.info);
  router.get('/news', controller.news.list);
  router.get('/news/:id', controller.news.detail);
};
