import { Injectable } from '@nestjs/common';

import {
  IRedirectData,
  RedirectError,
} from 'common/modules/Redirect/dto/RedirectError';

@Injectable()
export class RedirectErrorFactory {
  /**
   * Создает объект ошибки для редиректа.
   */
  public create(data: IRedirectData): RedirectError {
    return new RedirectError(data);
  }
}
