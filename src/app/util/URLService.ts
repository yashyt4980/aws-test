import { URL } from "url";
import axios from "axios";
export default class URLService {
  public static ValidateURLS(urls: string[]): string[] {
    const unique = new Set(urls);
    urls = [];
    urls = Array.from(unique);
    try {
      urls.filter((url) => {
        return this.validate(url);
      });
      return urls;
    } catch (error) {
      return [];
    }
  }

  private static validate(url: string): boolean {
    try {
      new URL(url);
      return true;
    } catch (error) {
      return false;
    }
  }

  public static async getData(urls: string[]): Promise<number[]> {
    let set = new Set<number>();
    try {
      for(let url of urls) {
        const response = await axios.get(url, {timeout:450});
        if(response?.data) {
          for(let num of response.data) set.add(num);
        }
      }
    } catch (error: any) {
      throw new Error(error.message);
    }
    return Array.from(set);
  }
}
