import { Controller, Get, View } from "noka";

@Controller("/about")
export class AboutController {
  constructor() {}

  @Get("/")
  @View("about")
  async index() {
    return Controller.Result({});
  }
}
