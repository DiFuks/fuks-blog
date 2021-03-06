import { CONFIG } from '@difuks/common';
import { NestFactory } from '@nestjs/core';
import cookieParser from 'cookie-parser';
import path from 'node:path';
import { NestExpressApplication } from '@nestjs/platform-express';

import { ConfigGetter } from 'blog-frontend/server/Config/services/ConfigGetter';
import { AppModule } from 'blog-frontend/server/AppModule';

(async () => {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
  });
  const configGetter = await app.resolve<ConfigGetter>(CONFIG);

  app.use(cookieParser());

  app.useStaticAssets(path.join(process.cwd(), 'public'));

  await app.listen(configGetter.getApiPort());
})();
