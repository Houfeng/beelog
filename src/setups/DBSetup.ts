import { Inject, Setup } from "noka";
import { SettingService } from "../services/SettingService";
import { Setting } from "../entities/Setting";

@Setup("db")
export class DBSetup {
  @Inject()
  settingService!: SettingService;

  async handle() {
    if (await this.settingService.isEmpty()) {
      const setting = new Setting();
      setting.account = "Beelog";
      setting.password = "Beelog123";
      this.settingService.update(setting);
    }
  }
}
