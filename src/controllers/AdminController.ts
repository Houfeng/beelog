import { Controller, Get, View } from "noka";

@Controller("/admin")
export class AdminController {
  constructor() {}

  @Get("/")
  @View("admin/login")
  async login() {
    return Controller.Result({});
  }

  @Get("/setting")
  @View("admin/setting")
  async setting() {
    return Controller.Result({});
  }

  @Get("/posts")
  @View("admin/posts")
  async posts() {
    return Controller.Result({});
  }
}
