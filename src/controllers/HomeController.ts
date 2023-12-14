import { Controller, Get, HttpRequest, Req, View } from "noka";

@Controller("/")
export class HomeController {
  constructor() {}

  @Get("/")
  @View("index")
  async index(@Req() req: HttpRequest) {
    return Controller.Result({
      URL: req.URL,
      posts: new Array(10).fill(1),
    });
  }
}
