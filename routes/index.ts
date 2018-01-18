import Router from "koa-router";

const router = new Router();

router.get("/", async context => {
  context.body = "Hello, World";
  return context;
});

export default router;
