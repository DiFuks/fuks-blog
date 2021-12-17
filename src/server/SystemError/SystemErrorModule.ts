import { Global, Module } from '@nestjs/common';

import { SystemErrorFactory } from '@server/SystemError/services/SystemErrorFactory';

@Global()
@Module({
  providers: [SystemErrorFactory],
  exports: [SystemErrorFactory],
})
export class SystemErrorModule {}
