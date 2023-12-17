import { Controller, Get, View } from "noka";

@Controller("/write")
export class WriteController {
  constructor() {}

  @Get("/")
  @View("write")
  async index() {
    return Controller.Result({});
  }
}
