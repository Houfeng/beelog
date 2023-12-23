import { Controller, Form, Get, Post, View } from "noka";

@Controller("/admin")
export class AdminController {
  constructor() {}

  @Get("/login")
  @Post("/login")
  @View("admin/login")
  async login(
    @Form("account") account: string,
    @Form("password") password: string,
  ) {
    return Controller.Result({
      account,
      password,
    });
  }

  @Get("/setting")
  @Post("/setting")
  @View("admin/setting")
  async setting() {
    return Controller.Result({});
  }

  @Get("/posts")
  @Post("/posts")
  @View("admin/posts")
  async posts() {
    return Controller.Result({});
  }
}
