import "./src/global.d.ts"
import "../types.generated"
import { AppInput, App, Config } from "./src/config"
import _aws, { ProviderArgs as _awsArgs } from "@pulumi/aws";


declare global {
  // @ts-expect-error
  export import aws = _aws
  interface Providers {
    providers?: {
      "aws"?:  (_awsArgs & { version?: string }) | boolean;
    }
  }
  export const $config: (
    input: Omit<Config, "app"> & {
      app(input: AppInput): Omit<App, "providers"> & Providers;
    },
  ) => Config;
}
