import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import { isNeisAPIError, isNeisAPIErrorResponse, NeisAPIError } from './exceptions';
import {
  NeisConfig,
  NeisAPIResponse,
  NeisServicesWithRow,
  NeisClassInfoOptions,
  NeisSchoolAflcoInfoOptions,
  NeisSchoolInfoOptions,
  NeisSchoolMajorInfoOptions,
  NeisMealInfoOptions,
} from './types';

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

  public async request<ServiceName extends keyof NeisServicesWithRow>(
    url: ServiceName,
    options?: AxiosRequestConfig<any>
  ) {
    try {
      const requiredParams = { KEY: this.key, Type: this.type };
      const response = await this.instance.get<
        NeisAPIResponse<ServiceName, NeisServicesWithRow[ServiceName]>
      >(url, {
        ...options,
        params: Object.assign(options?.params || {}, requiredParams),
      });

      return response.data;
    } catch (error) {
      if (!isNeisAPIError(error)) throw error;
      throw error;
    }
  }

  public async getSchoolInfo(options?: NeisSchoolInfoOptions) {
    const { schoolInfo } = await this.request('schoolInfo', { params: options });
    return schoolInfo[1].row;
  }

  public async getClassInfo(options: NeisClassInfoOptions) {
    const { classInfo } = await this.request('classInfo', { params: options });
    return classInfo[1].row;
  }

  public async getSchoolMajorInfo(options: NeisSchoolMajorInfoOptions) {
    const { schoolMajorinfo } = await this.request('schoolMajorinfo', { params: options });
    return schoolMajorinfo[1].row;
  }

  public async getSchoolAflcoInfo(options: NeisSchoolAflcoInfoOptions) {
    const { schulAflcoinfo } = await this.request('schulAflcoinfo', { params: options });
    return schulAflcoinfo[1].row;
  }

  public async getMealInfo(options: NeisMealInfoOptions) {
    const { mealServiceDietInfo } = await this.request('mealServiceDietInfo', { params: options });
    return mealServiceDietInfo[1].row;
  }
}
