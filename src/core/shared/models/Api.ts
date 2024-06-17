export enum EApiErrorType {
  CANCELED = "canceled",
  CONTROLLED_ERROR = "ctrl-error",
  NETWORK_ERROR = "ntw-error",
}

/*TODO: Change Error Schema */
export interface IAPIErrorResponse {
  details: object;
  error_code: string;
  error_message: string;
  status_code: number;
}

export type IApiError =
  | { errorType: EApiErrorType.CONTROLLED_ERROR; data: object }
  | { errorType: EApiErrorType.NETWORK_ERROR; message: string }
  | { errorType: EApiErrorType.CANCELED };

export class ApiError extends Error {
  public readonly details: IApiError;
  constructor(error: IApiError) {
    let message;
    switch (error.errorType) {
      case EApiErrorType.CONTROLLED_ERROR:
        message = error.data;
        break;
      case EApiErrorType.NETWORK_ERROR:
        message = error.message;
        break;
      case EApiErrorType.CANCELED:
        message = "Request Canceled";
        break;
    }
    super(JSON.stringify(message));
    this.details = error;
  }
}
