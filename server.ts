import Koa from "koa";
import Routes from "./routes";

const app = new Koa();

app.use(Routes.routes());
app.use(Routes.allowedMethods());
app.listen(process.env.PORT);

export default app;
