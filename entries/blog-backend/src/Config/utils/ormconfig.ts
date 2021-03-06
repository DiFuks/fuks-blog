import { isDevelopment } from '@difuks/common/dist/constants';
import { DataSource, DataSourceOptions } from 'typeorm';

const rootDir = isDevelopment ? 'src' : 'dist/build';

/**
 * Prod конфиг БД.
 */
export const ormConfig: DataSourceOptions = {
  type: 'postgres',
  host: process.env.FUKS_BLOG_BACKEND_POSTGRES_HOST,
  port: 5_432,
  synchronize: false,
  database: 'blog',
  username: process.env.FUKS_BLOG_BACKEND_POSTGRES_USER,
  password: process.env.FUKS_BLOG_BACKEND_POSTGRES_PASSWORD,
  entities: [`${rootDir}/**/entities/*.{ts,js}`],
  migrationsTableName: 'migration',
  migrations: [`${rootDir}/__migration__/*.{ts,js}`],
};

const devDataSource = new DataSource(ormConfig);

/**
 * Конфиг, описывающий схему БД для миграций.
 */
export default devDataSource;
