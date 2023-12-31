import { Controller, Get, Inject, Result, View } from "noka";
import { SettingService } from "../services/SettingService";

@Controller("/")
export class HomeController {
  @Inject()
  settingService!: SettingService;

  @Get("/")
  @View("front/index")
  async index() {
    const setting = await this.settingService.get();
    return Result.ok({
      setting,
      posts: new Array(10).fill(1),
    });
  }

  @Get("/post/:id")
  @View("front/post")
  async post() {
    const setting = await this.settingService.get();
    return Result.ok({ setting });
  }

  @Get("/about")
  @View("front/about")
  async about() {
    const setting = await this.settingService.get();
    return Result.ok({ setting });
  }
}
