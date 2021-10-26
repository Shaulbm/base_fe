export interface IEnvironment {
  production: boolean;
  hmr: boolean;
  version: string;
  local_environment?: {
    displayName: string;
    type: string;
  };
}
