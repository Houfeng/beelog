import { HttpContext, Filter } from "noka";

@Filter("/admin/(.*)")
export class AuthFilter {
  async handle(ctx: HttpContext, next: () => Promise<any>) {
    ctx.logger?.debug(`Current request: ${ctx.URL}`);
    await next();
  }
}
