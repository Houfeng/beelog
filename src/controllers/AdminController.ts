import { Controller, Get, View } from "noka";

@Controller("/admin")
export class AdminController {
  constructor() {}

  @Get("/")
  @View("admin")
  async index() {
    return Controller.Result({});
  }
}
