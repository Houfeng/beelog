import { Controller, Get, View } from "noka";

@Controller("/admin")
export class AboutController {
  constructor() {}

  @Get("/")
  @View("admin")
  async index() {
    return Controller.Result({});
  }
}
