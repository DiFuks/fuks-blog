import { Module } from '@nestjs/common';

import { BasicAuthController } from 'auth-backend/BasicAuth/controllers/BasicAuthController';
import { BasicAuthService } from 'auth-backend/BasicAuth/services/BasicAuthService';
import { BasicAuthStrategy } from 'auth-backend/BasicAuth/strategies/BasicAuthStrategy';
import { EncodingModule } from 'auth-backend/Encoding/EncodingModule';
import { LoginModule } from 'auth-backend/Login/LoginModule';
import { UserModule } from 'auth-backend/User/UserModule';

@Module({
  imports: [UserModule, EncodingModule, LoginModule],
  providers: [BasicAuthService, BasicAuthStrategy],
  controllers: [BasicAuthController],
})
export class BasicAuthModule {}