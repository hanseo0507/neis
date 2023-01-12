import { NeisAPICode, neisApiCodeMessages, NeisAPIErrorResponse } from './types';
import { isObject } from './utils';

export class NeisAPIError extends Error {
  readonly code: NeisAPICode;
  readonly name = 'NeisAPIError';

  constructor(code: NeisAPICode) {
    super(`[${code}] ${neisApiCodeMessages[code]}`);
    this.code = code;
  }
}

export const isNeisAPIError = (error: unknown): error is NeisAPIError =>
  isObject(error) && error instanceof NeisAPIError;

export const isNeisAPIErrorResponse = (response: unknown): response is NeisAPIErrorResponse =>
  isObject(response) && 'RESULT' in response;
