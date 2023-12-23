import {
  Context,
  Controller,
  Form,
  Get,
  HttpContext,
  Inject,
  Post,
  View,
} from "noka";
import { SettingService } from "../services/SettingService";

const { Result } = Controller;

@Controller("/admin")
export class AdminController {
  @Inject()
  settingService!: SettingService;

  @Get("/login")
  @Post("/login")
  @View("admin/login")
  async login(
    @Form("account") account: string,
    @Form("password") password: string,
    @Context() context: HttpContext,
  ) {
    const user = await this.settingService.auth(account, password);
    if (user) {
      context.session.userId = user?.id;
      context.redirect("/admin/posts");
    } else {
      return Result({ error: "Login failed" });
    }
  }

  @Get("/login")
  @Post("/login")
  async logout(@Context() context: HttpContext) {
    context.session.userId = null;
    context.redirect("/");
  }

  @Get("/setting")
  @Post("/setting")
  @View("admin/setting")
  async setting() {
    return Result({});
  }

  @Get("/posts")
  @Post("/posts")
  @View("admin/posts")
  async posts() {
    return Result({});
  }
}
