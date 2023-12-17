import { ApplicationLike, Setup } from "noka";

@Setup("db")
export class DBSetup {
  handle(app: ApplicationLike) {
    return `Current app root: ${app.rootDir}`;
  }
}
