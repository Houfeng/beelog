import { Controller, Get, View } from "noka";

@Controller("/post")
export class PostController {
  constructor() {}

  @Get("/:id")
  @View("post")
  async index() {
    return Controller.Result({});
  }
}
