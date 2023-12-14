import { Controller, Get, HttpRequest, Req, View } from "noka";

@Controller("/tags")
export class HomeController {
  constructor() {}

  @Get("/")
  @View("tags")
  async index(@Req() req: HttpRequest) {
    return Controller.Result({
      URL: req.URL,
      posts: new Array(10).fill(1),
    });
  }
}
