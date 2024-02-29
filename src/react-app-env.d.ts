/// <reference types="react-scripts" />

declare global {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface Window {
    __POWERED_BY_QIANKUN__?: boolean;
    __INJECTED_PUBLIC_PATH_BY_QIANKUN__?: string;
  }
}
declare module "case-sensitive-paths-webpack-plugin";

declare module "circular-dependency-plugin";
