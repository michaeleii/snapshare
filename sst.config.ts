import { SSTConfig } from "sst";
import { API } from "./stacks/APIStack";

export default {
  config(_input) {
    return {
      name: "snapshare",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(API);
  },
} satisfies SSTConfig;
