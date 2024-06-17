import axios, { AxiosInstance } from "axios";

import { ApiError, EApiErrorType, IAPIErrorResponse } from "../../shared/models/Api";

export interface ApiClientConfig {
  baseURL: string;
  timeout?: number;
  accessKey: string;
}

interface HTTPHeaders {
  "Content-Type"?: string;
  Authorization?: string;
  timeout?: number;
  [key: string]: string | number | undefined;
}

interface ApiReqConfig<T = object> {
  params?: object;
  data?: T;
  headers?: HTTPHeaders;
}

type EMethod = "get" | "post" | "put" | "patch" | "delete";

/**
 * Api Class
 * Replace axios if needed
 */
export class Api {
  private axiosInstance: AxiosInstance;
  private accessKey: string;

  public constructor(config: ApiClientConfig) {
    this.axiosInstance = axios.create({
      baseURL: config.baseURL,
      timeout: config.timeout,
    });
    this.accessKey = config.accessKey;
  }

  protected async sendRequest<T>(
    method: EMethod,
    url: string,
    config: ApiReqConfig,
  ): Promise<T> {
    try {
      const resp = await this.axiosInstance<T>({
        method,
        url,
        params: { ...config.params, client_id: this.accessKey },
        headers: config.headers,
        data: config.data,
      });
      return resp.data;
    } catch (error) {
      // Handling error cases
      if (axios.isCancel(error)) {
        throw new ApiError({ errorType: EApiErrorType.CANCELED });
      } else if (
        axios.isAxiosError(error) &&
        error.response !== undefined &&
        error.response.data !== undefined
      ) {
        const errorResp: IAPIErrorResponse = error.response.data;
        throw new ApiError({
          errorType: EApiErrorType.CONTROLLED_ERROR,
          data: errorResp,
        });
      } else {
        throw new ApiError({
          errorType: EApiErrorType.NETWORK_ERROR,
          message: `${error}` ?? "network error",
        });
      }
    }
  }

  protected async get<T>(url: string, config?: ApiReqConfig): Promise<T> {
    return await this.sendRequest("get", url, config ?? {});
  }
  protected async post<T>(url: string, config: ApiReqConfig): Promise<T> {
    return await this.sendRequest("post", url, config);
  }
  protected async put<T>(url: string, config: ApiReqConfig): Promise<T> {
    return await this.sendRequest("put", url, config);
  }
  protected async patch<T>(url: string, config: ApiReqConfig): Promise<T> {
    return await this.sendRequest("patch", url, config);
  }
  protected async delete<T>(url: string, config: ApiReqConfig): Promise<T> {
    return await this.sendRequest("delete", url, config);
  }
}
