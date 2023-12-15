import { Controller, Get, View } from "noka";

@Controller("/")
export class HomeController {
  constructor() {}

  @Get("/")
  @View("index")
  async index() {
    return Controller.Result({
      posts: new Array(10).fill(1),
    });
  }
}
