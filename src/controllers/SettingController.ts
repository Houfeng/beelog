import { Controller, Get, View } from "noka";

@Controller("/setting")
export class SettingController {
  constructor() {}

  @Get("/")
  @View("setting")
  async index() {
    return Controller.Result({});
  }
}
