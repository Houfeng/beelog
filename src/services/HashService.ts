import crypto from "crypto";
import { createReadStream } from "fs";
import { Config, Provider } from "noka";

@Provider("HashService")
export class HashService {
  @Config("crypto.salt")
  protected salt?: string;

  /**
   * 计算指定文本 MD5 后的值
   * @param text 原始文本
   * @param salted 是否启用 salt
   * @returns
   */
  fromText(text: string, salted = true): string {
    const composeText = salted ? text + (this.salt || "") : text;
    return crypto.createHash("md5").update(composeText).digest("hex");
  }

  /**
   * 计算指定文件计算后的 MD5 值
   * @param filePath 文件路径
   * @returns
   */
  async fromFile(filePath: string): Promise<string> {
    return new Promise<string>((resolve) => {
      const stream = createReadStream(filePath);
      const hash = crypto.createHash("md5");
      stream.on("data", (chunk) => hash.update(chunk.toString()));
      stream.on("end", () => resolve(hash.digest("hex")));
    });
  }
}
