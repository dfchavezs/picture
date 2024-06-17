import { ApiError, EApiErrorType } from "../../shared/models/Api";

export class Mock {
  public timeout: number;
  public hasError: boolean;
  public nRows: number;

  // Edit these parameters if you are in mock mode
  public constructor() {
    this.timeout = 300;
    this.hasError = false;
    this.nRows = 61;
  }

  /**
   * Returns a value, except if the "hasError" value is true.
   * Notice that return this value after waiting a certain time (timeout)
   * @param fn function to be executed
   * @returns expected value T
   */
  public async _executor<T>(fn: () => T): Promise<T> {
    if (this.hasError)
      throw new ApiError({
        errorType: EApiErrorType.NETWORK_ERROR,
        message: "",
      });
    return await new Promise<T>(resolve => {
      setTimeout(() => {
        resolve(fn());
      }, this.timeout);
    });
  }
}
