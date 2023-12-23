import { Provider, Inject } from "noka";
import { InjectEntityRepository, Repository } from "noka-orm";
import { HashService } from "./HashService";
import { Setting } from "../entities/Setting";

@Provider()
export class SettingService {
  @InjectEntityRepository(Setting)
  private repo!: Repository<Setting>;

  @Inject()
  private hash!: HashService;

  async auth(account: string, password: string) {
    return this.repo?.findOne({
      where: {
        account: account,
        password: this.hash.fromText(password),
      },
    });
  }

  async isEmpty() {
    return (await this.repo?.count()) < 1;
  }

  async update(item: Partial<Setting>) {
    if (item.password) {
      item.password = this.hash.fromText(item.password || "");
    } else {
      delete item.password;
    }
    return this.repo.save(item);
  }

  async get() {
    return this.repo
      ?.createQueryBuilder("item")
      .orderBy("item.id", "DESC")
      .skip(0)
      .limit(1)
      .getOne();
  }
}
