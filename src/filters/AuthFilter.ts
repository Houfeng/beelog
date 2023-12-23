import { HttpContext, Filter } from "noka";

@Filter("/admin/(.*)")
export class AuthFilter {
  async handle(ctx: HttpContext, next: () => Promise<any>) {
    if (ctx.path.startsWith("/admin/login")) return next();
    if (ctx.session?.userId) return next();
    ctx.redirect("/admin/login");
  }
}
