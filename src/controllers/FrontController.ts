import { Controller, Get, View } from "noka";

@Controller("/")
export class HomeController {
  constructor() {}

  @Get("/")
  @View("front/index")
  async index() {
    return Controller.Result({
      posts: new Array(10).fill(1),
    });
  }

  @Get("/post/:id")
  @View("front/post")
  async post() {
    return Controller.Result({});
  }

  @Get("/about")
  @View("front/about")
  async about() {
    return Controller.Result({});
  }
}
