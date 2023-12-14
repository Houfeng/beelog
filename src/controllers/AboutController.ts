import { Controller, Get, HttpRequest, Req, View } from "noka";

@Controller("/about")
export class AboutController {
  constructor() {}

  @Get("/")
  @View("about")
  async index(@Req() req: HttpRequest) {
    return Controller.Result({ URL: req.URL });
  }
}
