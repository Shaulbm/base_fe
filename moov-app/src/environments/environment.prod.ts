import { IEnvironment } from './environment.interface';
import { environment as baseEnvironment } from './environment.base';

export const environment: IEnvironment = {
  ...baseEnvironment,
  production: true,
};
