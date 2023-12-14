import { Controller, Get, HttpRequest, Req, View } from "noka";

@Controller("/post")
export class PostController {
  constructor() {}

  @Get("/:id")
  @View("post")
  async index(@Req() req: HttpRequest) {
    return Controller.Result({ URL: req.URL });
  }
}
