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
import { Setting } from "../entities/Setting";

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
    const setting = await this.settingService.auth(account, password);
    if (setting) {
      context.session.logged = 1;
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
  @View("admin/setting")
  async setting() {
    const setting = await this.settingService.get();
    return Result({ setting });
  }

  @Post("/setting")
  @View("admin/setting")
  async setting_save(
    @Form("name") name: string,
    @Form("description") description: string,
    @Form("pageHead") pageHead: string,
    @Form("pageBody") pageBody: string,
  ) {
    const setting = (await this.settingService.get()) || new Setting();
    Object.assign(setting, { name, description, pageHead, pageBody });
    await this.settingService.update(setting);
    return Result({ setting });
  }

  @Get("/posts")
  @Post("/posts")
  @View("admin/posts")
  async posts() {
    const setting = await this.settingService.get();
    return Result({ setting });
  }
}
