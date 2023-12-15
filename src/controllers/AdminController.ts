import { Controller, Get, HttpRequest, Req, View } from "noka";

@Controller("/admin")
export class AboutController {
  constructor() {}

  @Get("/")
  @View("admin")
  async index(@Req() req: HttpRequest) {
    return Controller.Result({ URL: req.URL });
  }
}
