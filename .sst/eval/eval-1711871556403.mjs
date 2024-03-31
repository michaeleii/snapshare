
import { createRequire as topLevelCreateRequire } from 'module';
const require = topLevelCreateRequire(import.meta.url);
import { fileURLToPath as topLevelFileUrlToPath, URL as topLevelURL } from "url"
const __dirname = topLevelFileUrlToPath(new topLevelURL(".", import.meta.url))

      function $config(input) { return input }
      
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// <define:$input>
var define_input_default;
var init_define_input = __esm({
  "<define:$input>"() {
    define_input_default = { stage: "michael" };
  }
});

// node_modules/.pnpm/dotenv@16.4.5/node_modules/dotenv/package.json
var require_package = __commonJS({
  "node_modules/.pnpm/dotenv@16.4.5/node_modules/dotenv/package.json"(exports, module) {
    module.exports = {
      name: "dotenv",
      version: "16.4.5",
      description: "Loads environment variables from .env file",
      main: "lib/main.js",
      types: "lib/main.d.ts",
      exports: {
        ".": {
          types: "./lib/main.d.ts",
          require: "./lib/main.js",
          default: "./lib/main.js"
        },
        "./config": "./config.js",
        "./config.js": "./config.js",
        "./lib/env-options": "./lib/env-options.js",
        "./lib/env-options.js": "./lib/env-options.js",
        "./lib/cli-options": "./lib/cli-options.js",
        "./lib/cli-options.js": "./lib/cli-options.js",
        "./package.json": "./package.json"
      },
      scripts: {
        "dts-check": "tsc --project tests/types/tsconfig.json",
        lint: "standard",
        "lint-readme": "standard-markdown",
        pretest: "npm run lint && npm run dts-check",
        test: "tap tests/*.js --100 -Rspec",
        "test:coverage": "tap --coverage-report=lcov",
        prerelease: "npm test",
        release: "standard-version"
      },
      repository: {
        type: "git",
        url: "git://github.com/motdotla/dotenv.git"
      },
      funding: "https://dotenvx.com",
      keywords: [
        "dotenv",
        "env",
        ".env",
        "environment",
        "variables",
        "config",
        "settings"
      ],
      readmeFilename: "README.md",
      license: "BSD-2-Clause",
      devDependencies: {
        "@definitelytyped/dtslint": "^0.0.133",
        "@types/node": "^18.11.3",
        decache: "^4.6.1",
        sinon: "^14.0.1",
        standard: "^17.0.0",
        "standard-markdown": "^7.1.0",
        "standard-version": "^9.5.0",
        tap: "^16.3.0",
        tar: "^6.1.11",
        typescript: "^4.8.4"
      },
      engines: {
        node: ">=12"
      },
      browser: {
        fs: false
      }
    };
  }
});

// node_modules/.pnpm/dotenv@16.4.5/node_modules/dotenv/lib/main.js
var require_main = __commonJS({
  "node_modules/.pnpm/dotenv@16.4.5/node_modules/dotenv/lib/main.js"(exports, module) {
    init_define_input();
    var fs = __require("fs");
    var path = __require("path");
    var os = __require("os");
    var crypto = __require("crypto");
    var packageJson = require_package();
    var version = packageJson.version;
    var LINE = /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;
    function parse(src) {
      const obj = {};
      let lines = src.toString();
      lines = lines.replace(/\r\n?/mg, "\n");
      let match;
      while ((match = LINE.exec(lines)) != null) {
        const key = match[1];
        let value = match[2] || "";
        value = value.trim();
        const maybeQuote = value[0];
        value = value.replace(/^(['"`])([\s\S]*)\1$/mg, "$2");
        if (maybeQuote === '"') {
          value = value.replace(/\\n/g, "\n");
          value = value.replace(/\\r/g, "\r");
        }
        obj[key] = value;
      }
      return obj;
    }
    function _parseVault(options) {
      const vaultPath = _vaultPath(options);
      const result = DotenvModule.configDotenv({ path: vaultPath });
      if (!result.parsed) {
        const err = new Error(`MISSING_DATA: Cannot parse ${vaultPath} for an unknown reason`);
        err.code = "MISSING_DATA";
        throw err;
      }
      const keys = _dotenvKey(options).split(",");
      const length = keys.length;
      let decrypted;
      for (let i = 0; i < length; i++) {
        try {
          const key = keys[i].trim();
          const attrs = _instructions(result, key);
          decrypted = DotenvModule.decrypt(attrs.ciphertext, attrs.key);
          break;
        } catch (error) {
          if (i + 1 >= length) {
            throw error;
          }
        }
      }
      return DotenvModule.parse(decrypted);
    }
    function _log(message) {
      console.log(`[dotenv@${version}][INFO] ${message}`);
    }
    function _warn(message) {
      console.log(`[dotenv@${version}][WARN] ${message}`);
    }
    function _debug(message) {
      console.log(`[dotenv@${version}][DEBUG] ${message}`);
    }
    function _dotenvKey(options) {
      if (options && options.DOTENV_KEY && options.DOTENV_KEY.length > 0) {
        return options.DOTENV_KEY;
      }
      if (process.env.DOTENV_KEY && process.env.DOTENV_KEY.length > 0) {
        return process.env.DOTENV_KEY;
      }
      return "";
    }
    function _instructions(result, dotenvKey) {
      let uri;
      try {
        uri = new URL(dotenvKey);
      } catch (error) {
        if (error.code === "ERR_INVALID_URL") {
          const err = new Error("INVALID_DOTENV_KEY: Wrong format. Must be in valid uri format like dotenv://:key_1234@dotenvx.com/vault/.env.vault?environment=development");
          err.code = "INVALID_DOTENV_KEY";
          throw err;
        }
        throw error;
      }
      const key = uri.password;
      if (!key) {
        const err = new Error("INVALID_DOTENV_KEY: Missing key part");
        err.code = "INVALID_DOTENV_KEY";
        throw err;
      }
      const environment = uri.searchParams.get("environment");
      if (!environment) {
        const err = new Error("INVALID_DOTENV_KEY: Missing environment part");
        err.code = "INVALID_DOTENV_KEY";
        throw err;
      }
      const environmentKey = `DOTENV_VAULT_${environment.toUpperCase()}`;
      const ciphertext = result.parsed[environmentKey];
      if (!ciphertext) {
        const err = new Error(`NOT_FOUND_DOTENV_ENVIRONMENT: Cannot locate environment ${environmentKey} in your .env.vault file.`);
        err.code = "NOT_FOUND_DOTENV_ENVIRONMENT";
        throw err;
      }
      return { ciphertext, key };
    }
    function _vaultPath(options) {
      let possibleVaultPath = null;
      if (options && options.path && options.path.length > 0) {
        if (Array.isArray(options.path)) {
          for (const filepath of options.path) {
            if (fs.existsSync(filepath)) {
              possibleVaultPath = filepath.endsWith(".vault") ? filepath : `${filepath}.vault`;
            }
          }
        } else {
          possibleVaultPath = options.path.endsWith(".vault") ? options.path : `${options.path}.vault`;
        }
      } else {
        possibleVaultPath = path.resolve(process.cwd(), ".env.vault");
      }
      if (fs.existsSync(possibleVaultPath)) {
        return possibleVaultPath;
      }
      return null;
    }
    function _resolveHome(envPath) {
      return envPath[0] === "~" ? path.join(os.homedir(), envPath.slice(1)) : envPath;
    }
    function _configVault(options) {
      _log("Loading env from encrypted .env.vault");
      const parsed = DotenvModule._parseVault(options);
      let processEnv = process.env;
      if (options && options.processEnv != null) {
        processEnv = options.processEnv;
      }
      DotenvModule.populate(processEnv, parsed, options);
      return { parsed };
    }
    function configDotenv(options) {
      const dotenvPath = path.resolve(process.cwd(), ".env");
      let encoding = "utf8";
      const debug = Boolean(options && options.debug);
      if (options && options.encoding) {
        encoding = options.encoding;
      } else {
        if (debug) {
          _debug("No encoding is specified. UTF-8 is used by default");
        }
      }
      let optionPaths = [dotenvPath];
      if (options && options.path) {
        if (!Array.isArray(options.path)) {
          optionPaths = [_resolveHome(options.path)];
        } else {
          optionPaths = [];
          for (const filepath of options.path) {
            optionPaths.push(_resolveHome(filepath));
          }
        }
      }
      let lastError;
      const parsedAll = {};
      for (const path2 of optionPaths) {
        try {
          const parsed = DotenvModule.parse(fs.readFileSync(path2, { encoding }));
          DotenvModule.populate(parsedAll, parsed, options);
        } catch (e) {
          if (debug) {
            _debug(`Failed to load ${path2} ${e.message}`);
          }
          lastError = e;
        }
      }
      let processEnv = process.env;
      if (options && options.processEnv != null) {
        processEnv = options.processEnv;
      }
      DotenvModule.populate(processEnv, parsedAll, options);
      if (lastError) {
        return { parsed: parsedAll, error: lastError };
      } else {
        return { parsed: parsedAll };
      }
    }
    function config(options) {
      if (_dotenvKey(options).length === 0) {
        return DotenvModule.configDotenv(options);
      }
      const vaultPath = _vaultPath(options);
      if (!vaultPath) {
        _warn(`You set DOTENV_KEY but you are missing a .env.vault file at ${vaultPath}. Did you forget to build it?`);
        return DotenvModule.configDotenv(options);
      }
      return DotenvModule._configVault(options);
    }
    function decrypt(encrypted, keyStr) {
      const key = Buffer.from(keyStr.slice(-64), "hex");
      let ciphertext = Buffer.from(encrypted, "base64");
      const nonce = ciphertext.subarray(0, 12);
      const authTag = ciphertext.subarray(-16);
      ciphertext = ciphertext.subarray(12, -16);
      try {
        const aesgcm = crypto.createDecipheriv("aes-256-gcm", key, nonce);
        aesgcm.setAuthTag(authTag);
        return `${aesgcm.update(ciphertext)}${aesgcm.final()}`;
      } catch (error) {
        const isRange = error instanceof RangeError;
        const invalidKeyLength = error.message === "Invalid key length";
        const decryptionFailed = error.message === "Unsupported state or unable to authenticate data";
        if (isRange || invalidKeyLength) {
          const err = new Error("INVALID_DOTENV_KEY: It must be 64 characters long (or more)");
          err.code = "INVALID_DOTENV_KEY";
          throw err;
        } else if (decryptionFailed) {
          const err = new Error("DECRYPTION_FAILED: Please check your DOTENV_KEY");
          err.code = "DECRYPTION_FAILED";
          throw err;
        } else {
          throw error;
        }
      }
    }
    function populate(processEnv, parsed, options = {}) {
      const debug = Boolean(options && options.debug);
      const override = Boolean(options && options.override);
      if (typeof parsed !== "object") {
        const err = new Error("OBJECT_REQUIRED: Please check the processEnv argument being passed to populate");
        err.code = "OBJECT_REQUIRED";
        throw err;
      }
      for (const key of Object.keys(parsed)) {
        if (Object.prototype.hasOwnProperty.call(processEnv, key)) {
          if (override === true) {
            processEnv[key] = parsed[key];
          }
          if (debug) {
            if (override === true) {
              _debug(`"${key}" is already defined and WAS overwritten`);
            } else {
              _debug(`"${key}" is already defined and was NOT overwritten`);
            }
          }
        } else {
          processEnv[key] = parsed[key];
        }
      }
    }
    var DotenvModule = {
      configDotenv,
      _configVault,
      _parseVault,
      config,
      decrypt,
      parse,
      populate
    };
    module.exports.configDotenv = DotenvModule.configDotenv;
    module.exports._configVault = DotenvModule._configVault;
    module.exports._parseVault = DotenvModule._parseVault;
    module.exports.config = DotenvModule.config;
    module.exports.decrypt = DotenvModule.decrypt;
    module.exports.parse = DotenvModule.parse;
    module.exports.populate = DotenvModule.populate;
    module.exports = DotenvModule;
  }
});

// .sst/eval.ts
init_define_input();

// sst.config.ts
init_define_input();
var import_dotenv = __toESM(require_main(), 1);
import_dotenv.default.config();
var sst_config_default = $config({
  app(input) {
    return {
      name: "snapshare",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
      providers: {
        aws: {
          region: "us-west-2"
        }
      }
    };
  },
  async run() {
    const KindeAudience = `snapshare-api-${$app.stage}`;
    const environment = {
      TURSO_CONNECTION_URL: process.env.TURSO_CONNECTION_URL
    };
    const routeArgs = {
      auth: {
        jwt: {
          issuer: "https://snapshare.kinde.com",
          audiences: [KindeAudience]
        }
      }
    };
    const postHandler = "packages/functions/src/posts.handler";
    const authHandler = "packages/functions/src/auth.handler";
    const s3Handler = "packages/functions/src/s3.handler";
    const assetsBucket = new sst.aws.Bucket("SnapshareAssets");
    const api = new sst.aws.ApiGatewayV2("SnapShareApi");
    api.route("GET /posts", { handler: postHandler, environment });
    api.route("GET /posts/{id}", { handler: postHandler, environment });
    api.route("POST /posts", { handler: postHandler, environment }, routeArgs);
    api.route(
      "DELETE /posts/{id}",
      { handler: postHandler, environment },
      routeArgs
    );
    api.route("POST /register", {
      handler: authHandler,
      environment
    });
    api.route(
      "POST /signed-url",
      {
        handler: s3Handler,
        environment: {
          TURSO_CONNECTION_URL: process.env.TURSO_CONNECTION_URL,
          BUCKET_NAME: assetsBucket.name
        },
        link: [assetsBucket]
      },
      routeArgs
    );
    new sst.aws.StaticSite("SnapshareWeb", {
      build: {
        command: "npm run build",
        output: "dist"
      },
      environment: {
        VITE_API_URL: api.url,
        VITE_KINDE_AUDIENCE: KindeAudience
      }
    });
  }
});

// .sst/eval.ts
if (sst_config_default.stacks || sst_config_default.config) {
  console.log("~v2");
  process.exit(0);
}
console.log("~j" + JSON.stringify(sst_config_default.app({
  stage: define_input_default.stage || void 0
})));
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiPGRlZmluZTokaW5wdXQ+IiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9kb3RlbnZAMTYuNC41L25vZGVfbW9kdWxlcy9kb3RlbnYvcGFja2FnZS5qc29uIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9kb3RlbnZAMTYuNC41L25vZGVfbW9kdWxlcy9kb3RlbnYvbGliL21haW4uanMiLCAiLi4vZXZhbC50cyIsICIuLi8uLi9zc3QuY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIiLCAie1xuICBcIm5hbWVcIjogXCJkb3RlbnZcIixcbiAgXCJ2ZXJzaW9uXCI6IFwiMTYuNC41XCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJMb2FkcyBlbnZpcm9ubWVudCB2YXJpYWJsZXMgZnJvbSAuZW52IGZpbGVcIixcbiAgXCJtYWluXCI6IFwibGliL21haW4uanNcIixcbiAgXCJ0eXBlc1wiOiBcImxpYi9tYWluLmQudHNcIixcbiAgXCJleHBvcnRzXCI6IHtcbiAgICBcIi5cIjoge1xuICAgICAgXCJ0eXBlc1wiOiBcIi4vbGliL21haW4uZC50c1wiLFxuICAgICAgXCJyZXF1aXJlXCI6IFwiLi9saWIvbWFpbi5qc1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiLi9saWIvbWFpbi5qc1wiXG4gICAgfSxcbiAgICBcIi4vY29uZmlnXCI6IFwiLi9jb25maWcuanNcIixcbiAgICBcIi4vY29uZmlnLmpzXCI6IFwiLi9jb25maWcuanNcIixcbiAgICBcIi4vbGliL2Vudi1vcHRpb25zXCI6IFwiLi9saWIvZW52LW9wdGlvbnMuanNcIixcbiAgICBcIi4vbGliL2Vudi1vcHRpb25zLmpzXCI6IFwiLi9saWIvZW52LW9wdGlvbnMuanNcIixcbiAgICBcIi4vbGliL2NsaS1vcHRpb25zXCI6IFwiLi9saWIvY2xpLW9wdGlvbnMuanNcIixcbiAgICBcIi4vbGliL2NsaS1vcHRpb25zLmpzXCI6IFwiLi9saWIvY2xpLW9wdGlvbnMuanNcIixcbiAgICBcIi4vcGFja2FnZS5qc29uXCI6IFwiLi9wYWNrYWdlLmpzb25cIlxuICB9LFxuICBcInNjcmlwdHNcIjoge1xuICAgIFwiZHRzLWNoZWNrXCI6IFwidHNjIC0tcHJvamVjdCB0ZXN0cy90eXBlcy90c2NvbmZpZy5qc29uXCIsXG4gICAgXCJsaW50XCI6IFwic3RhbmRhcmRcIixcbiAgICBcImxpbnQtcmVhZG1lXCI6IFwic3RhbmRhcmQtbWFya2Rvd25cIixcbiAgICBcInByZXRlc3RcIjogXCJucG0gcnVuIGxpbnQgJiYgbnBtIHJ1biBkdHMtY2hlY2tcIixcbiAgICBcInRlc3RcIjogXCJ0YXAgdGVzdHMvKi5qcyAtLTEwMCAtUnNwZWNcIixcbiAgICBcInRlc3Q6Y292ZXJhZ2VcIjogXCJ0YXAgLS1jb3ZlcmFnZS1yZXBvcnQ9bGNvdlwiLFxuICAgIFwicHJlcmVsZWFzZVwiOiBcIm5wbSB0ZXN0XCIsXG4gICAgXCJyZWxlYXNlXCI6IFwic3RhbmRhcmQtdmVyc2lvblwiXG4gIH0sXG4gIFwicmVwb3NpdG9yeVwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiZ2l0XCIsXG4gICAgXCJ1cmxcIjogXCJnaXQ6Ly9naXRodWIuY29tL21vdGRvdGxhL2RvdGVudi5naXRcIlxuICB9LFxuICBcImZ1bmRpbmdcIjogXCJodHRwczovL2RvdGVudnguY29tXCIsXG4gIFwia2V5d29yZHNcIjogW1xuICAgIFwiZG90ZW52XCIsXG4gICAgXCJlbnZcIixcbiAgICBcIi5lbnZcIixcbiAgICBcImVudmlyb25tZW50XCIsXG4gICAgXCJ2YXJpYWJsZXNcIixcbiAgICBcImNvbmZpZ1wiLFxuICAgIFwic2V0dGluZ3NcIlxuICBdLFxuICBcInJlYWRtZUZpbGVuYW1lXCI6IFwiUkVBRE1FLm1kXCIsXG4gIFwibGljZW5zZVwiOiBcIkJTRC0yLUNsYXVzZVwiLFxuICBcImRldkRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJAZGVmaW5pdGVseXR5cGVkL2R0c2xpbnRcIjogXCJeMC4wLjEzM1wiLFxuICAgIFwiQHR5cGVzL25vZGVcIjogXCJeMTguMTEuM1wiLFxuICAgIFwiZGVjYWNoZVwiOiBcIl40LjYuMVwiLFxuICAgIFwic2lub25cIjogXCJeMTQuMC4xXCIsXG4gICAgXCJzdGFuZGFyZFwiOiBcIl4xNy4wLjBcIixcbiAgICBcInN0YW5kYXJkLW1hcmtkb3duXCI6IFwiXjcuMS4wXCIsXG4gICAgXCJzdGFuZGFyZC12ZXJzaW9uXCI6IFwiXjkuNS4wXCIsXG4gICAgXCJ0YXBcIjogXCJeMTYuMy4wXCIsXG4gICAgXCJ0YXJcIjogXCJeNi4xLjExXCIsXG4gICAgXCJ0eXBlc2NyaXB0XCI6IFwiXjQuOC40XCJcbiAgfSxcbiAgXCJlbmdpbmVzXCI6IHtcbiAgICBcIm5vZGVcIjogXCI+PTEyXCJcbiAgfSxcbiAgXCJicm93c2VyXCI6IHtcbiAgICBcImZzXCI6IGZhbHNlXG4gIH1cbn1cbiIsICJjb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJylcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJylcbmNvbnN0IG9zID0gcmVxdWlyZSgnb3MnKVxuY29uc3QgY3J5cHRvID0gcmVxdWlyZSgnY3J5cHRvJylcbmNvbnN0IHBhY2thZ2VKc29uID0gcmVxdWlyZSgnLi4vcGFja2FnZS5qc29uJylcblxuY29uc3QgdmVyc2lvbiA9IHBhY2thZ2VKc29uLnZlcnNpb25cblxuY29uc3QgTElORSA9IC8oPzpefF4pXFxzKig/OmV4cG9ydFxccyspPyhbXFx3Li1dKykoPzpcXHMqPVxccyo/fDpcXHMrPykoXFxzKicoPzpcXFxcJ3xbXiddKSonfFxccypcIig/OlxcXFxcInxbXlwiXSkqXCJ8XFxzKmAoPzpcXFxcYHxbXmBdKSpgfFteI1xcclxcbl0rKT9cXHMqKD86Iy4qKT8oPzokfCQpL21nXG5cbi8vIFBhcnNlIHNyYyBpbnRvIGFuIE9iamVjdFxuZnVuY3Rpb24gcGFyc2UgKHNyYykge1xuICBjb25zdCBvYmogPSB7fVxuXG4gIC8vIENvbnZlcnQgYnVmZmVyIHRvIHN0cmluZ1xuICBsZXQgbGluZXMgPSBzcmMudG9TdHJpbmcoKVxuXG4gIC8vIENvbnZlcnQgbGluZSBicmVha3MgdG8gc2FtZSBmb3JtYXRcbiAgbGluZXMgPSBsaW5lcy5yZXBsYWNlKC9cXHJcXG4/L21nLCAnXFxuJylcblxuICBsZXQgbWF0Y2hcbiAgd2hpbGUgKChtYXRjaCA9IExJTkUuZXhlYyhsaW5lcykpICE9IG51bGwpIHtcbiAgICBjb25zdCBrZXkgPSBtYXRjaFsxXVxuXG4gICAgLy8gRGVmYXVsdCB1bmRlZmluZWQgb3IgbnVsbCB0byBlbXB0eSBzdHJpbmdcbiAgICBsZXQgdmFsdWUgPSAobWF0Y2hbMl0gfHwgJycpXG5cbiAgICAvLyBSZW1vdmUgd2hpdGVzcGFjZVxuICAgIHZhbHVlID0gdmFsdWUudHJpbSgpXG5cbiAgICAvLyBDaGVjayBpZiBkb3VibGUgcXVvdGVkXG4gICAgY29uc3QgbWF5YmVRdW90ZSA9IHZhbHVlWzBdXG5cbiAgICAvLyBSZW1vdmUgc3Vycm91bmRpbmcgcXVvdGVzXG4gICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9eKFsnXCJgXSkoW1xcc1xcU10qKVxcMSQvbWcsICckMicpXG5cbiAgICAvLyBFeHBhbmQgbmV3bGluZXMgaWYgZG91YmxlIHF1b3RlZFxuICAgIGlmIChtYXliZVF1b3RlID09PSAnXCInKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1xcXFxuL2csICdcXG4nKVxuICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9cXFxcci9nLCAnXFxyJylcbiAgICB9XG5cbiAgICAvLyBBZGQgdG8gb2JqZWN0XG4gICAgb2JqW2tleV0gPSB2YWx1ZVxuICB9XG5cbiAgcmV0dXJuIG9ialxufVxuXG5mdW5jdGlvbiBfcGFyc2VWYXVsdCAob3B0aW9ucykge1xuICBjb25zdCB2YXVsdFBhdGggPSBfdmF1bHRQYXRoKG9wdGlvbnMpXG5cbiAgLy8gUGFyc2UgLmVudi52YXVsdFxuICBjb25zdCByZXN1bHQgPSBEb3RlbnZNb2R1bGUuY29uZmlnRG90ZW52KHsgcGF0aDogdmF1bHRQYXRoIH0pXG4gIGlmICghcmVzdWx0LnBhcnNlZCkge1xuICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcihgTUlTU0lOR19EQVRBOiBDYW5ub3QgcGFyc2UgJHt2YXVsdFBhdGh9IGZvciBhbiB1bmtub3duIHJlYXNvbmApXG4gICAgZXJyLmNvZGUgPSAnTUlTU0lOR19EQVRBJ1xuICAgIHRocm93IGVyclxuICB9XG5cbiAgLy8gaGFuZGxlIHNjZW5hcmlvIGZvciBjb21tYSBzZXBhcmF0ZWQga2V5cyAtIGZvciB1c2Ugd2l0aCBrZXkgcm90YXRpb25cbiAgLy8gZXhhbXBsZTogRE9URU5WX0tFWT1cImRvdGVudjovLzprZXlfMTIzNEBkb3RlbnZ4LmNvbS92YXVsdC8uZW52LnZhdWx0P2Vudmlyb25tZW50PXByb2QsZG90ZW52Oi8vOmtleV83ODkwQGRvdGVudnguY29tL3ZhdWx0Ly5lbnYudmF1bHQ/ZW52aXJvbm1lbnQ9cHJvZFwiXG4gIGNvbnN0IGtleXMgPSBfZG90ZW52S2V5KG9wdGlvbnMpLnNwbGl0KCcsJylcbiAgY29uc3QgbGVuZ3RoID0ga2V5cy5sZW5ndGhcblxuICBsZXQgZGVjcnlwdGVkXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICB0cnkge1xuICAgICAgLy8gR2V0IGZ1bGwga2V5XG4gICAgICBjb25zdCBrZXkgPSBrZXlzW2ldLnRyaW0oKVxuXG4gICAgICAvLyBHZXQgaW5zdHJ1Y3Rpb25zIGZvciBkZWNyeXB0XG4gICAgICBjb25zdCBhdHRycyA9IF9pbnN0cnVjdGlvbnMocmVzdWx0LCBrZXkpXG5cbiAgICAgIC8vIERlY3J5cHRcbiAgICAgIGRlY3J5cHRlZCA9IERvdGVudk1vZHVsZS5kZWNyeXB0KGF0dHJzLmNpcGhlcnRleHQsIGF0dHJzLmtleSlcblxuICAgICAgYnJlYWtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gbGFzdCBrZXlcbiAgICAgIGlmIChpICsgMSA+PSBsZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cbiAgICAgIC8vIHRyeSBuZXh0IGtleVxuICAgIH1cbiAgfVxuXG4gIC8vIFBhcnNlIGRlY3J5cHRlZCAuZW52IHN0cmluZ1xuICByZXR1cm4gRG90ZW52TW9kdWxlLnBhcnNlKGRlY3J5cHRlZClcbn1cblxuZnVuY3Rpb24gX2xvZyAobWVzc2FnZSkge1xuICBjb25zb2xlLmxvZyhgW2RvdGVudkAke3ZlcnNpb259XVtJTkZPXSAke21lc3NhZ2V9YClcbn1cblxuZnVuY3Rpb24gX3dhcm4gKG1lc3NhZ2UpIHtcbiAgY29uc29sZS5sb2coYFtkb3RlbnZAJHt2ZXJzaW9ufV1bV0FSTl0gJHttZXNzYWdlfWApXG59XG5cbmZ1bmN0aW9uIF9kZWJ1ZyAobWVzc2FnZSkge1xuICBjb25zb2xlLmxvZyhgW2RvdGVudkAke3ZlcnNpb259XVtERUJVR10gJHttZXNzYWdlfWApXG59XG5cbmZ1bmN0aW9uIF9kb3RlbnZLZXkgKG9wdGlvbnMpIHtcbiAgLy8gcHJpb3JpdGl6ZSBkZXZlbG9wZXIgZGlyZWN0bHkgc2V0dGluZyBvcHRpb25zLkRPVEVOVl9LRVlcbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5ET1RFTlZfS0VZICYmIG9wdGlvbnMuRE9URU5WX0tFWS5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMuRE9URU5WX0tFWVxuICB9XG5cbiAgLy8gc2Vjb25kYXJ5IGluZnJhIGFscmVhZHkgY29udGFpbnMgYSBET1RFTlZfS0VZIGVudmlyb25tZW50IHZhcmlhYmxlXG4gIGlmIChwcm9jZXNzLmVudi5ET1RFTlZfS0VZICYmIHByb2Nlc3MuZW52LkRPVEVOVl9LRVkubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBwcm9jZXNzLmVudi5ET1RFTlZfS0VZXG4gIH1cblxuICAvLyBmYWxsYmFjayB0byBlbXB0eSBzdHJpbmdcbiAgcmV0dXJuICcnXG59XG5cbmZ1bmN0aW9uIF9pbnN0cnVjdGlvbnMgKHJlc3VsdCwgZG90ZW52S2V5KSB7XG4gIC8vIFBhcnNlIERPVEVOVl9LRVkuIEZvcm1hdCBpcyBhIFVSSVxuICBsZXQgdXJpXG4gIHRyeSB7XG4gICAgdXJpID0gbmV3IFVSTChkb3RlbnZLZXkpXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgaWYgKGVycm9yLmNvZGUgPT09ICdFUlJfSU5WQUxJRF9VUkwnKSB7XG4gICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoJ0lOVkFMSURfRE9URU5WX0tFWTogV3JvbmcgZm9ybWF0LiBNdXN0IGJlIGluIHZhbGlkIHVyaSBmb3JtYXQgbGlrZSBkb3RlbnY6Ly86a2V5XzEyMzRAZG90ZW52eC5jb20vdmF1bHQvLmVudi52YXVsdD9lbnZpcm9ubWVudD1kZXZlbG9wbWVudCcpXG4gICAgICBlcnIuY29kZSA9ICdJTlZBTElEX0RPVEVOVl9LRVknXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICB0aHJvdyBlcnJvclxuICB9XG5cbiAgLy8gR2V0IGRlY3J5cHQga2V5XG4gIGNvbnN0IGtleSA9IHVyaS5wYXNzd29yZFxuICBpZiAoIWtleSkge1xuICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcignSU5WQUxJRF9ET1RFTlZfS0VZOiBNaXNzaW5nIGtleSBwYXJ0JylcbiAgICBlcnIuY29kZSA9ICdJTlZBTElEX0RPVEVOVl9LRVknXG4gICAgdGhyb3cgZXJyXG4gIH1cblxuICAvLyBHZXQgZW52aXJvbm1lbnRcbiAgY29uc3QgZW52aXJvbm1lbnQgPSB1cmkuc2VhcmNoUGFyYW1zLmdldCgnZW52aXJvbm1lbnQnKVxuICBpZiAoIWVudmlyb25tZW50KSB7XG4gICAgY29uc3QgZXJyID0gbmV3IEVycm9yKCdJTlZBTElEX0RPVEVOVl9LRVk6IE1pc3NpbmcgZW52aXJvbm1lbnQgcGFydCcpXG4gICAgZXJyLmNvZGUgPSAnSU5WQUxJRF9ET1RFTlZfS0VZJ1xuICAgIHRocm93IGVyclxuICB9XG5cbiAgLy8gR2V0IGNpcGhlcnRleHQgcGF5bG9hZFxuICBjb25zdCBlbnZpcm9ubWVudEtleSA9IGBET1RFTlZfVkFVTFRfJHtlbnZpcm9ubWVudC50b1VwcGVyQ2FzZSgpfWBcbiAgY29uc3QgY2lwaGVydGV4dCA9IHJlc3VsdC5wYXJzZWRbZW52aXJvbm1lbnRLZXldIC8vIERPVEVOVl9WQVVMVF9QUk9EVUNUSU9OXG4gIGlmICghY2lwaGVydGV4dCkge1xuICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcihgTk9UX0ZPVU5EX0RPVEVOVl9FTlZJUk9OTUVOVDogQ2Fubm90IGxvY2F0ZSBlbnZpcm9ubWVudCAke2Vudmlyb25tZW50S2V5fSBpbiB5b3VyIC5lbnYudmF1bHQgZmlsZS5gKVxuICAgIGVyci5jb2RlID0gJ05PVF9GT1VORF9ET1RFTlZfRU5WSVJPTk1FTlQnXG4gICAgdGhyb3cgZXJyXG4gIH1cblxuICByZXR1cm4geyBjaXBoZXJ0ZXh0LCBrZXkgfVxufVxuXG5mdW5jdGlvbiBfdmF1bHRQYXRoIChvcHRpb25zKSB7XG4gIGxldCBwb3NzaWJsZVZhdWx0UGF0aCA9IG51bGxcblxuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLnBhdGggJiYgb3B0aW9ucy5wYXRoLmxlbmd0aCA+IDApIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShvcHRpb25zLnBhdGgpKSB7XG4gICAgICBmb3IgKGNvbnN0IGZpbGVwYXRoIG9mIG9wdGlvbnMucGF0aCkge1xuICAgICAgICBpZiAoZnMuZXhpc3RzU3luYyhmaWxlcGF0aCkpIHtcbiAgICAgICAgICBwb3NzaWJsZVZhdWx0UGF0aCA9IGZpbGVwYXRoLmVuZHNXaXRoKCcudmF1bHQnKSA/IGZpbGVwYXRoIDogYCR7ZmlsZXBhdGh9LnZhdWx0YFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBvc3NpYmxlVmF1bHRQYXRoID0gb3B0aW9ucy5wYXRoLmVuZHNXaXRoKCcudmF1bHQnKSA/IG9wdGlvbnMucGF0aCA6IGAke29wdGlvbnMucGF0aH0udmF1bHRgXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHBvc3NpYmxlVmF1bHRQYXRoID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksICcuZW52LnZhdWx0JylcbiAgfVxuXG4gIGlmIChmcy5leGlzdHNTeW5jKHBvc3NpYmxlVmF1bHRQYXRoKSkge1xuICAgIHJldHVybiBwb3NzaWJsZVZhdWx0UGF0aFxuICB9XG5cbiAgcmV0dXJuIG51bGxcbn1cblxuZnVuY3Rpb24gX3Jlc29sdmVIb21lIChlbnZQYXRoKSB7XG4gIHJldHVybiBlbnZQYXRoWzBdID09PSAnficgPyBwYXRoLmpvaW4ob3MuaG9tZWRpcigpLCBlbnZQYXRoLnNsaWNlKDEpKSA6IGVudlBhdGhcbn1cblxuZnVuY3Rpb24gX2NvbmZpZ1ZhdWx0IChvcHRpb25zKSB7XG4gIF9sb2coJ0xvYWRpbmcgZW52IGZyb20gZW5jcnlwdGVkIC5lbnYudmF1bHQnKVxuXG4gIGNvbnN0IHBhcnNlZCA9IERvdGVudk1vZHVsZS5fcGFyc2VWYXVsdChvcHRpb25zKVxuXG4gIGxldCBwcm9jZXNzRW52ID0gcHJvY2Vzcy5lbnZcbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5wcm9jZXNzRW52ICE9IG51bGwpIHtcbiAgICBwcm9jZXNzRW52ID0gb3B0aW9ucy5wcm9jZXNzRW52XG4gIH1cblxuICBEb3RlbnZNb2R1bGUucG9wdWxhdGUocHJvY2Vzc0VudiwgcGFyc2VkLCBvcHRpb25zKVxuXG4gIHJldHVybiB7IHBhcnNlZCB9XG59XG5cbmZ1bmN0aW9uIGNvbmZpZ0RvdGVudiAob3B0aW9ucykge1xuICBjb25zdCBkb3RlbnZQYXRoID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksICcuZW52JylcbiAgbGV0IGVuY29kaW5nID0gJ3V0ZjgnXG4gIGNvbnN0IGRlYnVnID0gQm9vbGVhbihvcHRpb25zICYmIG9wdGlvbnMuZGVidWcpXG5cbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5lbmNvZGluZykge1xuICAgIGVuY29kaW5nID0gb3B0aW9ucy5lbmNvZGluZ1xuICB9IGVsc2Uge1xuICAgIGlmIChkZWJ1Zykge1xuICAgICAgX2RlYnVnKCdObyBlbmNvZGluZyBpcyBzcGVjaWZpZWQuIFVURi04IGlzIHVzZWQgYnkgZGVmYXVsdCcpXG4gICAgfVxuICB9XG5cbiAgbGV0IG9wdGlvblBhdGhzID0gW2RvdGVudlBhdGhdIC8vIGRlZmF1bHQsIGxvb2sgZm9yIC5lbnZcbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5wYXRoKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG9wdGlvbnMucGF0aCkpIHtcbiAgICAgIG9wdGlvblBhdGhzID0gW19yZXNvbHZlSG9tZShvcHRpb25zLnBhdGgpXVxuICAgIH0gZWxzZSB7XG4gICAgICBvcHRpb25QYXRocyA9IFtdIC8vIHJlc2V0IGRlZmF1bHRcbiAgICAgIGZvciAoY29uc3QgZmlsZXBhdGggb2Ygb3B0aW9ucy5wYXRoKSB7XG4gICAgICAgIG9wdGlvblBhdGhzLnB1c2goX3Jlc29sdmVIb21lKGZpbGVwYXRoKSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBCdWlsZCB0aGUgcGFyc2VkIGRhdGEgaW4gYSB0ZW1wb3Jhcnkgb2JqZWN0IChiZWNhdXNlIHdlIG5lZWQgdG8gcmV0dXJuIGl0KS4gIE9uY2Ugd2UgaGF2ZSB0aGUgZmluYWxcbiAgLy8gcGFyc2VkIGRhdGEsIHdlIHdpbGwgY29tYmluZSBpdCB3aXRoIHByb2Nlc3MuZW52IChvciBvcHRpb25zLnByb2Nlc3NFbnYgaWYgcHJvdmlkZWQpLlxuICBsZXQgbGFzdEVycm9yXG4gIGNvbnN0IHBhcnNlZEFsbCA9IHt9XG4gIGZvciAoY29uc3QgcGF0aCBvZiBvcHRpb25QYXRocykge1xuICAgIHRyeSB7XG4gICAgICAvLyBTcGVjaWZ5aW5nIGFuIGVuY29kaW5nIHJldHVybnMgYSBzdHJpbmcgaW5zdGVhZCBvZiBhIGJ1ZmZlclxuICAgICAgY29uc3QgcGFyc2VkID0gRG90ZW52TW9kdWxlLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhwYXRoLCB7IGVuY29kaW5nIH0pKVxuXG4gICAgICBEb3RlbnZNb2R1bGUucG9wdWxhdGUocGFyc2VkQWxsLCBwYXJzZWQsIG9wdGlvbnMpXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKGRlYnVnKSB7XG4gICAgICAgIF9kZWJ1ZyhgRmFpbGVkIHRvIGxvYWQgJHtwYXRofSAke2UubWVzc2FnZX1gKVxuICAgICAgfVxuICAgICAgbGFzdEVycm9yID0gZVxuICAgIH1cbiAgfVxuXG4gIGxldCBwcm9jZXNzRW52ID0gcHJvY2Vzcy5lbnZcbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5wcm9jZXNzRW52ICE9IG51bGwpIHtcbiAgICBwcm9jZXNzRW52ID0gb3B0aW9ucy5wcm9jZXNzRW52XG4gIH1cblxuICBEb3RlbnZNb2R1bGUucG9wdWxhdGUocHJvY2Vzc0VudiwgcGFyc2VkQWxsLCBvcHRpb25zKVxuXG4gIGlmIChsYXN0RXJyb3IpIHtcbiAgICByZXR1cm4geyBwYXJzZWQ6IHBhcnNlZEFsbCwgZXJyb3I6IGxhc3RFcnJvciB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHsgcGFyc2VkOiBwYXJzZWRBbGwgfVxuICB9XG59XG5cbi8vIFBvcHVsYXRlcyBwcm9jZXNzLmVudiBmcm9tIC5lbnYgZmlsZVxuZnVuY3Rpb24gY29uZmlnIChvcHRpb25zKSB7XG4gIC8vIGZhbGxiYWNrIHRvIG9yaWdpbmFsIGRvdGVudiBpZiBET1RFTlZfS0VZIGlzIG5vdCBzZXRcbiAgaWYgKF9kb3RlbnZLZXkob3B0aW9ucykubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIERvdGVudk1vZHVsZS5jb25maWdEb3RlbnYob3B0aW9ucylcbiAgfVxuXG4gIGNvbnN0IHZhdWx0UGF0aCA9IF92YXVsdFBhdGgob3B0aW9ucylcblxuICAvLyBkb3RlbnZLZXkgZXhpc3RzIGJ1dCAuZW52LnZhdWx0IGZpbGUgZG9lcyBub3QgZXhpc3RcbiAgaWYgKCF2YXVsdFBhdGgpIHtcbiAgICBfd2FybihgWW91IHNldCBET1RFTlZfS0VZIGJ1dCB5b3UgYXJlIG1pc3NpbmcgYSAuZW52LnZhdWx0IGZpbGUgYXQgJHt2YXVsdFBhdGh9LiBEaWQgeW91IGZvcmdldCB0byBidWlsZCBpdD9gKVxuXG4gICAgcmV0dXJuIERvdGVudk1vZHVsZS5jb25maWdEb3RlbnYob3B0aW9ucylcbiAgfVxuXG4gIHJldHVybiBEb3RlbnZNb2R1bGUuX2NvbmZpZ1ZhdWx0KG9wdGlvbnMpXG59XG5cbmZ1bmN0aW9uIGRlY3J5cHQgKGVuY3J5cHRlZCwga2V5U3RyKSB7XG4gIGNvbnN0IGtleSA9IEJ1ZmZlci5mcm9tKGtleVN0ci5zbGljZSgtNjQpLCAnaGV4JylcbiAgbGV0IGNpcGhlcnRleHQgPSBCdWZmZXIuZnJvbShlbmNyeXB0ZWQsICdiYXNlNjQnKVxuXG4gIGNvbnN0IG5vbmNlID0gY2lwaGVydGV4dC5zdWJhcnJheSgwLCAxMilcbiAgY29uc3QgYXV0aFRhZyA9IGNpcGhlcnRleHQuc3ViYXJyYXkoLTE2KVxuICBjaXBoZXJ0ZXh0ID0gY2lwaGVydGV4dC5zdWJhcnJheSgxMiwgLTE2KVxuXG4gIHRyeSB7XG4gICAgY29uc3QgYWVzZ2NtID0gY3J5cHRvLmNyZWF0ZURlY2lwaGVyaXYoJ2Flcy0yNTYtZ2NtJywga2V5LCBub25jZSlcbiAgICBhZXNnY20uc2V0QXV0aFRhZyhhdXRoVGFnKVxuICAgIHJldHVybiBgJHthZXNnY20udXBkYXRlKGNpcGhlcnRleHQpfSR7YWVzZ2NtLmZpbmFsKCl9YFxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnN0IGlzUmFuZ2UgPSBlcnJvciBpbnN0YW5jZW9mIFJhbmdlRXJyb3JcbiAgICBjb25zdCBpbnZhbGlkS2V5TGVuZ3RoID0gZXJyb3IubWVzc2FnZSA9PT0gJ0ludmFsaWQga2V5IGxlbmd0aCdcbiAgICBjb25zdCBkZWNyeXB0aW9uRmFpbGVkID0gZXJyb3IubWVzc2FnZSA9PT0gJ1Vuc3VwcG9ydGVkIHN0YXRlIG9yIHVuYWJsZSB0byBhdXRoZW50aWNhdGUgZGF0YSdcblxuICAgIGlmIChpc1JhbmdlIHx8IGludmFsaWRLZXlMZW5ndGgpIHtcbiAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcignSU5WQUxJRF9ET1RFTlZfS0VZOiBJdCBtdXN0IGJlIDY0IGNoYXJhY3RlcnMgbG9uZyAob3IgbW9yZSknKVxuICAgICAgZXJyLmNvZGUgPSAnSU5WQUxJRF9ET1RFTlZfS0VZJ1xuICAgICAgdGhyb3cgZXJyXG4gICAgfSBlbHNlIGlmIChkZWNyeXB0aW9uRmFpbGVkKSB7XG4gICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoJ0RFQ1JZUFRJT05fRkFJTEVEOiBQbGVhc2UgY2hlY2sgeW91ciBET1RFTlZfS0VZJylcbiAgICAgIGVyci5jb2RlID0gJ0RFQ1JZUFRJT05fRkFJTEVEJ1xuICAgICAgdGhyb3cgZXJyXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuICB9XG59XG5cbi8vIFBvcHVsYXRlIHByb2Nlc3MuZW52IHdpdGggcGFyc2VkIHZhbHVlc1xuZnVuY3Rpb24gcG9wdWxhdGUgKHByb2Nlc3NFbnYsIHBhcnNlZCwgb3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IGRlYnVnID0gQm9vbGVhbihvcHRpb25zICYmIG9wdGlvbnMuZGVidWcpXG4gIGNvbnN0IG92ZXJyaWRlID0gQm9vbGVhbihvcHRpb25zICYmIG9wdGlvbnMub3ZlcnJpZGUpXG5cbiAgaWYgKHR5cGVvZiBwYXJzZWQgIT09ICdvYmplY3QnKSB7XG4gICAgY29uc3QgZXJyID0gbmV3IEVycm9yKCdPQkpFQ1RfUkVRVUlSRUQ6IFBsZWFzZSBjaGVjayB0aGUgcHJvY2Vzc0VudiBhcmd1bWVudCBiZWluZyBwYXNzZWQgdG8gcG9wdWxhdGUnKVxuICAgIGVyci5jb2RlID0gJ09CSkVDVF9SRVFVSVJFRCdcbiAgICB0aHJvdyBlcnJcbiAgfVxuXG4gIC8vIFNldCBwcm9jZXNzLmVudlxuICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhwYXJzZWQpKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwcm9jZXNzRW52LCBrZXkpKSB7XG4gICAgICBpZiAob3ZlcnJpZGUgPT09IHRydWUpIHtcbiAgICAgICAgcHJvY2Vzc0VudltrZXldID0gcGFyc2VkW2tleV1cbiAgICAgIH1cblxuICAgICAgaWYgKGRlYnVnKSB7XG4gICAgICAgIGlmIChvdmVycmlkZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIF9kZWJ1ZyhgXCIke2tleX1cIiBpcyBhbHJlYWR5IGRlZmluZWQgYW5kIFdBUyBvdmVyd3JpdHRlbmApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX2RlYnVnKGBcIiR7a2V5fVwiIGlzIGFscmVhZHkgZGVmaW5lZCBhbmQgd2FzIE5PVCBvdmVyd3JpdHRlbmApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcHJvY2Vzc0VudltrZXldID0gcGFyc2VkW2tleV1cbiAgICB9XG4gIH1cbn1cblxuY29uc3QgRG90ZW52TW9kdWxlID0ge1xuICBjb25maWdEb3RlbnYsXG4gIF9jb25maWdWYXVsdCxcbiAgX3BhcnNlVmF1bHQsXG4gIGNvbmZpZyxcbiAgZGVjcnlwdCxcbiAgcGFyc2UsXG4gIHBvcHVsYXRlXG59XG5cbm1vZHVsZS5leHBvcnRzLmNvbmZpZ0RvdGVudiA9IERvdGVudk1vZHVsZS5jb25maWdEb3RlbnZcbm1vZHVsZS5leHBvcnRzLl9jb25maWdWYXVsdCA9IERvdGVudk1vZHVsZS5fY29uZmlnVmF1bHRcbm1vZHVsZS5leHBvcnRzLl9wYXJzZVZhdWx0ID0gRG90ZW52TW9kdWxlLl9wYXJzZVZhdWx0XG5tb2R1bGUuZXhwb3J0cy5jb25maWcgPSBEb3RlbnZNb2R1bGUuY29uZmlnXG5tb2R1bGUuZXhwb3J0cy5kZWNyeXB0ID0gRG90ZW52TW9kdWxlLmRlY3J5cHRcbm1vZHVsZS5leHBvcnRzLnBhcnNlID0gRG90ZW52TW9kdWxlLnBhcnNlXG5tb2R1bGUuZXhwb3J0cy5wb3B1bGF0ZSA9IERvdGVudk1vZHVsZS5wb3B1bGF0ZVxuXG5tb2R1bGUuZXhwb3J0cyA9IERvdGVudk1vZHVsZVxuIiwgIlxuaW1wb3J0IG1vZCBmcm9tICcvaG9tZS9taWNoYWVsL0RvY3VtZW50cy9wcm9qZWN0cy9zbmFwc2hhcmUvc3N0LmNvbmZpZy50cyc7XG5pZiAobW9kLnN0YWNrcyB8fCBtb2QuY29uZmlnKSB7XG4gIGNvbnNvbGUubG9nKFwifnYyXCIpXG4gIHByb2Nlc3MuZXhpdCgwKVxufVxuY29uc29sZS5sb2coXCJ+alwiICsgSlNPTi5zdHJpbmdpZnkobW9kLmFwcCh7XG4gIHN0YWdlOiAkaW5wdXQuc3RhZ2UgfHwgdW5kZWZpbmVkLFxufSkpKSIsICIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi8uc3N0L3BsYXRmb3JtL2NvbmZpZy5kLnRzXCIgLz5cblxuaW1wb3J0IGRvdGVudiBmcm9tIFwiZG90ZW52XCI7XG5kb3RlbnYuY29uZmlnKCk7XG5cbmV4cG9ydCBkZWZhdWx0ICRjb25maWcoe1xuICBhcHAoaW5wdXQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogXCJzbmFwc2hhcmVcIixcbiAgICAgIHJlbW92YWw6IGlucHV0Py5zdGFnZSA9PT0gXCJwcm9kdWN0aW9uXCIgPyBcInJldGFpblwiIDogXCJyZW1vdmVcIixcbiAgICAgIGhvbWU6IFwiYXdzXCIsXG4gICAgICBwcm92aWRlcnM6IHtcbiAgICAgICAgYXdzOiB7XG4gICAgICAgICAgcmVnaW9uOiBcInVzLXdlc3QtMlwiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9O1xuICB9LFxuICBhc3luYyBydW4oKSB7XG4gICAgY29uc3QgS2luZGVBdWRpZW5jZSA9IGBzbmFwc2hhcmUtYXBpLSR7JGFwcC5zdGFnZX1gO1xuXG4gICAgY29uc3QgZW52aXJvbm1lbnQgPSB7XG4gICAgICBUVVJTT19DT05ORUNUSU9OX1VSTDogcHJvY2Vzcy5lbnYuVFVSU09fQ09OTkVDVElPTl9VUkwhLFxuICAgIH07XG5cbiAgICBjb25zdCByb3V0ZUFyZ3MgPSB7XG4gICAgICBhdXRoOiB7XG4gICAgICAgIGp3dDoge1xuICAgICAgICAgIGlzc3VlcjogXCJodHRwczovL3NuYXBzaGFyZS5raW5kZS5jb21cIixcbiAgICAgICAgICBhdWRpZW5jZXM6IFtLaW5kZUF1ZGllbmNlXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIGNvbnN0IHBvc3RIYW5kbGVyID0gXCJwYWNrYWdlcy9mdW5jdGlvbnMvc3JjL3Bvc3RzLmhhbmRsZXJcIjtcbiAgICBjb25zdCBhdXRoSGFuZGxlciA9IFwicGFja2FnZXMvZnVuY3Rpb25zL3NyYy9hdXRoLmhhbmRsZXJcIjtcbiAgICBjb25zdCBzM0hhbmRsZXIgPSBcInBhY2thZ2VzL2Z1bmN0aW9ucy9zcmMvczMuaGFuZGxlclwiO1xuXG4gICAgY29uc3QgYXNzZXRzQnVja2V0ID0gbmV3IHNzdC5hd3MuQnVja2V0KFwiU25hcHNoYXJlQXNzZXRzXCIpO1xuXG4gICAgY29uc3QgYXBpID0gbmV3IHNzdC5hd3MuQXBpR2F0ZXdheVYyKFwiU25hcFNoYXJlQXBpXCIpO1xuXG4gICAgYXBpLnJvdXRlKFwiR0VUIC9wb3N0c1wiLCB7IGhhbmRsZXI6IHBvc3RIYW5kbGVyLCBlbnZpcm9ubWVudCB9KTtcbiAgICBhcGkucm91dGUoXCJHRVQgL3Bvc3RzL3tpZH1cIiwgeyBoYW5kbGVyOiBwb3N0SGFuZGxlciwgZW52aXJvbm1lbnQgfSk7XG4gICAgYXBpLnJvdXRlKFwiUE9TVCAvcG9zdHNcIiwgeyBoYW5kbGVyOiBwb3N0SGFuZGxlciwgZW52aXJvbm1lbnQgfSwgcm91dGVBcmdzKTtcbiAgICBhcGkucm91dGUoXG4gICAgICBcIkRFTEVURSAvcG9zdHMve2lkfVwiLFxuICAgICAgeyBoYW5kbGVyOiBwb3N0SGFuZGxlciwgZW52aXJvbm1lbnQgfSxcbiAgICAgIHJvdXRlQXJnc1xuICAgICk7XG5cbiAgICBhcGkucm91dGUoXCJQT1NUIC9yZWdpc3RlclwiLCB7XG4gICAgICBoYW5kbGVyOiBhdXRoSGFuZGxlcixcbiAgICAgIGVudmlyb25tZW50LFxuICAgIH0pO1xuICAgIGFwaS5yb3V0ZShcbiAgICAgIFwiUE9TVCAvc2lnbmVkLXVybFwiLFxuICAgICAge1xuICAgICAgICBoYW5kbGVyOiBzM0hhbmRsZXIsXG4gICAgICAgIGVudmlyb25tZW50OiB7XG4gICAgICAgICAgVFVSU09fQ09OTkVDVElPTl9VUkw6IHByb2Nlc3MuZW52LlRVUlNPX0NPTk5FQ1RJT05fVVJMISxcbiAgICAgICAgICBCVUNLRVRfTkFNRTogYXNzZXRzQnVja2V0Lm5hbWUsXG4gICAgICAgIH0sXG4gICAgICAgIGxpbms6IFthc3NldHNCdWNrZXRdLFxuICAgICAgfSxcbiAgICAgIHJvdXRlQXJnc1xuICAgICk7XG5cbiAgICBuZXcgc3N0LmF3cy5TdGF0aWNTaXRlKFwiU25hcHNoYXJlV2ViXCIsIHtcbiAgICAgIGJ1aWxkOiB7XG4gICAgICAgIGNvbW1hbmQ6IFwibnBtIHJ1biBidWlsZFwiLFxuICAgICAgICBvdXRwdXQ6IFwiZGlzdFwiLFxuICAgICAgfSxcbiAgICAgIGVudmlyb25tZW50OiB7XG4gICAgICAgIFZJVEVfQVBJX1VSTDogYXBpLnVybCxcbiAgICAgICAgVklURV9LSU5ERV9BVURJRU5DRTogS2luZGVBdWRpZW5jZSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUFDLE9BQVEsVUFBUztBQUFBO0FBQUE7OztBQ0FsQjtBQUFBO0FBQUE7QUFBQSxNQUNFLE1BQVE7QUFBQSxNQUNSLFNBQVc7QUFBQSxNQUNYLGFBQWU7QUFBQSxNQUNmLE1BQVE7QUFBQSxNQUNSLE9BQVM7QUFBQSxNQUNULFNBQVc7QUFBQSxRQUNULEtBQUs7QUFBQSxVQUNILE9BQVM7QUFBQSxVQUNULFNBQVc7QUFBQSxVQUNYLFNBQVc7QUFBQSxRQUNiO0FBQUEsUUFDQSxZQUFZO0FBQUEsUUFDWixlQUFlO0FBQUEsUUFDZixxQkFBcUI7QUFBQSxRQUNyQix3QkFBd0I7QUFBQSxRQUN4QixxQkFBcUI7QUFBQSxRQUNyQix3QkFBd0I7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
