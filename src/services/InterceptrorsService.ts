import Axios from "axios";
import { AppConfig } from "../models/AppConfig";
import { LocalStorageService } from './LocalStorageService';

export class InterceptorService {
  public static init(appConfig: AppConfig): void {
    Axios.defaults.baseURL = appConfig.baseUrl;

    InterceptorService.addAuthInterceptor();
  }

  private static addAuthInterceptor(): void {
    Axios.interceptors.request.use(
      (config) => {
        const token = LocalStorageService.getToken();

        return {
          ...config,
          headers: {
            ...config.headers,
            authorization: `Bearer ${token}`,
          },
        };
      },
      (err) => {
        Promise.reject(err);
      }
    );
  }
}
