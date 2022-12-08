import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import { isNeisAPIError, isNeisAPIErrorResponse, NeisAPIError } from './exceptions';
import { NeisConfig } from './types';

export class Neis {
  public type: string;
  public key: string;
  readonly endpoint: string;
  private instance: AxiosInstance;

  constructor({ type, key }: NeisConfig) {
    this.type = type;
    this.key = key;
    this.endpoint = 'https://open.neis.go.kr/hub';

    this.instance = axios.create({ baseURL: this.endpoint });
    this.instance.interceptors.response.use(
      (response) => {
        if (isNeisAPIErrorResponse(response.data))
          return Promise.reject(new NeisAPIError(response.data.RESULT.CODE));
        return response;
      },
      (error) => Promise.reject(error)
    );
  }

  public async request<T>(url: string, options?: AxiosRequestConfig<any>) {
    try {
      const requiredParams = { KEY: this.key, Type: this.type };
      const response = await this.instance.get<T>(url, { params: requiredParams, ...options });

      return response;
    } catch (error) {
      if (!isNeisAPIError(error)) throw error;
      throw error;
    }
  }
}
