import { AxiosError, AxiosResponse } from 'axios';

export interface CustomAxiosResult<T = any> {
  data?: T;
  response: AxiosResponse<T>;
  error: AxiosError;
  loading: boolean;
}
