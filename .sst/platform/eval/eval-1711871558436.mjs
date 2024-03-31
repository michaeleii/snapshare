
import { createRequire as topLevelCreateRequire } from 'module';
const require = topLevelCreateRequire(import.meta.url);
import { fileURLToPath as topLevelFileUrlToPath, URL as topLevelURL } from "url"
const __dirname = topLevelFileUrlToPath(new topLevelURL(".", import.meta.url))

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
var __export = (target, all23) => {
  for (var name in all23)
    __defProp(target, name, { get: all23[name], enumerable: true });
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

// <define:$app>
var define_app_default;
var init_define_app = __esm({
  "<define:$app>"() {
    define_app_default = { name: "snapshare", stage: "michael", removal: "remove", providers: { aws: { defaultTags: { tags: { "sst:app": "snapshare", "sst:stage": "michael" } }, region: "us-west-2" } }, home: "aws", backend: "", removalPolicy: "" };
  }
});

// <define:$cli>
var define_cli_default;
var init_define_cli = __esm({
  "<define:$cli>"() {
    define_cli_default = { command: "up", dev: true, env: { AWS_ACCESS_KEY_ID: "AKIATXWDG3NKYUNW5L53", AWS_DEFAULT_REGION: "us-west-2", AWS_REGION: "us-west-2", AWS_SECRET_ACCESS_KEY: "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", AWS_SESSION_TOKEN: "", BUN_INSTALL: "/home/michael/.bun", CHROME_DESKTOP: "code-url-handler.desktop", COLORTERM: "truecolor", DBUS_SESSION_BUS_ADDRESS: "unix:path=/run/user/1000/bus,guid=5bfcf8f5a129b2bacb4a7b9a660910ad", DBUS_STARTER_ADDRESS: "unix:path=/run/user/1000/bus,guid=5bfcf8f5a129b2bacb4a7b9a660910ad", DBUS_STARTER_BUS_TYPE: "session", DESKTOP_SESSION: "ubuntu", DISPLAY: ":1", DOTNET_BUNDLE_EXTRACT_BASE_DIR: "/home/michael/.cache/dotnet_bundle_extract", DOTNET_ROOT: "/usr/share/dotnet", DOTNET_WATCH_RESTART_ON_RUDE_EDIT: "true", FNM_ARCH: "x64", FNM_COREPACK_ENABLED: "false", FNM_DIR: "/home/michael/.local/share/fnm", FNM_LOGLEVEL: "info", FNM_MULTISHELL_PATH: "/run/user/1000/fnm_multishells/4258_1711870181159", FNM_NODE_DIST_MIRROR: "https://nodejs.org/dist", FNM_RESOLVE_ENGINES: "false", FNM_VERSION_FILE_STRATEGY: "local", FPATH: "/home/michael/.oh-my-zsh/plugins/fnm:/home/michael/.oh-my-zsh/plugins/dotnet:/home/michael/.oh-my-zsh/plugins/web-search:/home/michael/.oh-my-zsh/custom/plugins/zsh-syntax-highlighting:/home/michael/.oh-my-zsh/custom/plugins/zsh-autosuggestions:/home/michael/.oh-my-zsh/plugins/git:/home/michael/.oh-my-zsh/functions:/home/michael/.oh-my-zsh/completions:/home/michael/.oh-my-zsh/cache/completions:/home/linuxbrew/.linuxbrew/share/zsh/site-functions:/home/michael/.oh-my-zsh/plugins/fnm:/home/michael/.oh-my-zsh/plugins/dotnet:/home/michael/.oh-my-zsh/plugins/web-search:/home/michael/.oh-my-zsh/custom/plugins/zsh-syntax-highlighting:/home/michael/.oh-my-zsh/custom/plugins/zsh-autosuggestions:/home/michael/.oh-my-zsh/plugins/git:/home/michael/.oh-my-zsh/functions:/home/michael/.oh-my-zsh/completions:/home/michael/.oh-my-zsh/cache/completions:/home/linuxbrew/.linuxbrew/share/zsh/site-functions:/usr/local/share/zsh/site-functions:/usr/share/zsh/vendor-functions:/usr/share/zsh/vendor-completions:/usr/share/zsh/functions/Calendar:/usr/share/zsh/functions/Chpwd:/usr/share/zsh/functions/Completion:/usr/share/zsh/functions/Completion/AIX:/usr/share/zsh/functions/Completion/BSD:/usr/share/zsh/functions/Completion/Base:/usr/share/zsh/functions/Completion/Cygwin:/usr/share/zsh/functions/Completion/Darwin:/usr/share/zsh/functions/Completion/Debian:/usr/share/zsh/functions/Completion/Linux:/usr/share/zsh/functions/Completion/Mandriva:/usr/share/zsh/functions/Completion/Redhat:/usr/share/zsh/functions/Completion/Solaris:/usr/share/zsh/functions/Completion/Unix:/usr/share/zsh/functions/Completion/X:/usr/share/zsh/functions/Completion/Zsh:/usr/share/zsh/functions/Completion/openSUSE:/usr/share/zsh/functions/Exceptions:/usr/share/zsh/functions/MIME:/usr/share/zsh/functions/Math:/usr/share/zsh/functions/Misc:/usr/share/zsh/functions/Newuser:/usr/share/zsh/functions/Prompts:/usr/share/zsh/functions/TCP:/usr/share/zsh/functions/VCS_Info:/usr/share/zsh/functions/VCS_Info/Backends:/usr/share/zsh/functions/Zftp:/usr/share/zsh/functions/Zle", FZF_ALT_C_OPTS: "--preview 'tree -C {}'", FZF_CTRL_T_OPTS: "\n  --preview 'batcat -n --color=always {}'\n  --bind 'ctrl-/:change-preview-window(down|hidden|)'", FZF_DEFAULT_OPTS: "--height 100% --border", GDK_BACKEND: "x11", GDMSESSION: "ubuntu", GIT_ASKPASS: "/usr/share/code/resources/app/extensions/git/dist/askpass.sh", GNOME_DESKTOP_SESSION_ID: "this-is-deprecated", GNOME_SHELL_SESSION_MODE: "ubuntu", GNOME_TERMINAL_SCREEN: "/org/gnome/Terminal/screen/18d9f1b2_754b_410c_9d27_64d84eae3408", GNOME_TERMINAL_SERVICE: ":1.89", GPG_AGENT_INFO: "/run/user/1000/gnupg/S.gpg-agent:0:1", GTK_IM_MODULE: "ibus", GTK_MODULES: "gail:atk-bridge", HOME: "/home/michael", HOMEBREW_CELLAR: "/home/linuxbrew/.linuxbrew/Cellar", HOMEBREW_PREFIX: "/home/linuxbrew/.linuxbrew", HOMEBREW_REPOSITORY: "/home/linuxbrew/.linuxbrew/Homebrew", INFOPATH: "/home/linuxbrew/.linuxbrew/share/info:/home/linuxbrew/.linuxbrew/share/info:", LANG: "en_CA.UTF-8", LANGUAGE: "en_CA:en", LESS: "-R", LOGNAME: "michael", LSCOLORS: "Gxfxcxdxbxegedabagacad", LS_COLORS: "rs=0:di=01;34:ln=01;36:mh=00:pi=40;33:so=01;35:do=01;35:bd=40;33;01:cd=40;33;01:or=40;31;01:mi=00:su=37;41:sg=30;43:ca=30;41:tw=30;42:ow=34;42:st=37;44:ex=01;32:*.tar=01;31:*.tgz=01;31:*.arc=01;31:*.arj=01;31:*.taz=01;31:*.lha=01;31:*.lz4=01;31:*.lzh=01;31:*.lzma=01;31:*.tlz=01;31:*.txz=01;31:*.tzo=01;31:*.t7z=01;31:*.zip=01;31:*.z=01;31:*.dz=01;31:*.gz=01;31:*.lrz=01;31:*.lz=01;31:*.lzo=01;31:*.xz=01;31:*.zst=01;31:*.tzst=01;31:*.bz2=01;31:*.bz=01;31:*.tbz=01;31:*.tbz2=01;31:*.tz=01;31:*.deb=01;31:*.rpm=01;31:*.jar=01;31:*.war=01;31:*.ear=01;31:*.sar=01;31:*.rar=01;31:*.alz=01;31:*.ace=01;31:*.zoo=01;31:*.cpio=01;31:*.7z=01;31:*.rz=01;31:*.cab=01;31:*.wim=01;31:*.swm=01;31:*.dwm=01;31:*.esd=01;31:*.jpg=01;35:*.jpeg=01;35:*.mjpg=01;35:*.mjpeg=01;35:*.gif=01;35:*.bmp=01;35:*.pbm=01;35:*.pgm=01;35:*.ppm=01;35:*.tga=01;35:*.xbm=01;35:*.xpm=01;35:*.tif=01;35:*.tiff=01;35:*.png=01;35:*.svg=01;35:*.svgz=01;35:*.mng=01;35:*.pcx=01;35:*.mov=01;35:*.mpg=01;35:*.mpeg=01;35:*.m2v=01;35:*.mkv=01;35:*.webm=01;35:*.webp=01;35:*.ogm=01;35:*.mp4=01;35:*.m4v=01;35:*.mp4v=01;35:*.vob=01;35:*.qt=01;35:*.nuv=01;35:*.wmv=01;35:*.asf=01;35:*.rm=01;35:*.rmvb=01;35:*.flc=01;35:*.avi=01;35:*.fli=01;35:*.flv=01;35:*.gl=01;35:*.dl=01;35:*.xcf=01;35:*.xwd=01;35:*.yuv=01;35:*.cgm=01;35:*.emf=01;35:*.ogv=01;35:*.ogx=01;35:*.aac=00;36:*.au=00;36:*.flac=00;36:*.m4a=00;36:*.mid=00;36:*.midi=00;36:*.mka=00;36:*.mp3=00;36:*.mpc=00;36:*.ogg=00;36:*.ra=00;36:*.wav=00;36:*.oga=00;36:*.opus=00;36:*.spx=00;36:*.xspf=00;36:", MANPATH: "/home/linuxbrew/.linuxbrew/share/man:/home/linuxbrew/.linuxbrew/share/man:::", OLDPWD: "/home/michael/Documents/projects/snapshare", ORIGINAL_XDG_CURRENT_DESKTOP: "ubuntu:GNOME", P9K_SSH: "0", P9K_TTY: "old", PAGER: "less", PATH: "/home/michael/.config/sst/bin:/home/michael/.config/sst/bin:/home/linuxbrew/.linuxbrew/bin:/home/linuxbrew/.linuxbrew/sbin:/home/michael/.bun/bin:/run/user/1000/fnm_multishells/4258_1711870181159/bin:/home/michael/.local/share/fnm:/home/michael/.local/share/pnpm:/home/linuxbrew/.linuxbrew/bin:/home/linuxbrew/.linuxbrew/sbin:/home/michael/.bun/bin:/run/user/1000/fnm_multishells/3885_1711870176093/bin:/home/michael/.local/share/fnm:/home/michael/.rye/shims:/home/michael/.local/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin:/snap/bin:/home/michael/.dotnet/tools:/home/michael/.config/composer/vendor/laravel/installer/bin:/home/linuxbrew/.linuxbrew/opt/fzf/bin:/home/michael/.config/composer/vendor/laravel/installer/bin", PNPM_HOME: "/home/michael/.local/share/pnpm", PULUMI_CONFIG_PASSPHRASE: "9Ff0PFjFonyua/1mD+qouAxPtHNlLmwlfsCPhWeb420=", PWD: "/home/michael/Documents/projects/snapshare", QT_ACCESSIBILITY: "1", QT_IM_MODULE: "ibus", SESSION_MANAGER: "local/michael-MS-7C95:@/tmp/.ICE-unix/2132,unix/michael-MS-7C95:/tmp/.ICE-unix/2132", SHELL: "/bin/zsh", SHLVL: "2", SSH_AGENT_LAUNCHER: "gnome-keyring", SSH_AUTH_SOCK: "/run/user/1000/keyring/ssh", SYSTEMD_EXEC_PID: "2132", TERM: "xterm-256color", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.87.2", TURSO_CONNECTION_URL: "http://127.0.0.1:8080", USER: "michael", USERNAME: "michael", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "/usr/share/code/resources/app/extensions/git/dist/askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "/usr/share/code/code", VSCODE_GIT_IPC_HANDLE: "/run/user/1000/vscode-git-91569f23d4.sock", VTE_VERSION: "6800", WINDOWPATH: "2", XAUTHORITY: "/run/user/1000/gdm/Xauthority", XDG_CONFIG_DIRS: "/etc/xdg/xdg-ubuntu:/etc/xdg", XDG_CURRENT_DESKTOP: "Unity", XDG_DATA_DIRS: "/usr/share/ubuntu:/usr/share/gnome:/usr/local/share/:/usr/share/:/var/lib/snapd/desktop", XDG_MENU_PREFIX: "gnome-", XDG_RUNTIME_DIR: "/run/user/1000", XDG_SESSION_CLASS: "user", XDG_SESSION_DESKTOP: "ubuntu", XDG_SESSION_TYPE: "x11", XMODIFIERS: "@im=ibus", ZSH: "/home/michael/.oh-my-zsh", _: "/home/linuxbrew/.linuxbrew/bin/sst", _P9K_SSH_TTY: "/dev/pts/1", _P9K_TTY: "/dev/pts/1" }, paths: { home: "/home/michael/.config/sst", platform: "/home/michael/Documents/projects/snapshare/.sst/platform", root: "/home/michael/Documents/projects/snapshare", work: "/home/michael/Documents/projects/snapshare/.sst" } };
  }
});

// .sst/platform/src/components/naming.ts
import crypto from "crypto";
function sanitizeToPascalCase(str) {
  const strNorm = str.replace(/[^a-zA-Z0-9]/g, "");
  return strNorm.charAt(0).toUpperCase() + strNorm.slice(1);
}
function prefixName(maxLength, name, suffix) {
  const suffixStr = suffix ?? "";
  const prefixedName = (() => {
    const L = maxLength - suffixStr.length;
    const appLen = define_app_default.name.length;
    const stageLen = define_app_default.stage.length;
    const nameLen = name.length;
    if (appLen + stageLen + nameLen + 2 <= L) {
      return `${define_app_default.name}-${define_app_default.stage}-${name}`;
    }
    if (stageLen + nameLen + 1 <= L) {
      const appTruncated = define_app_default.name.substring(0, L - stageLen - nameLen - 2);
      return appTruncated === "" ? `${define_app_default.stage}-${name}` : `${appTruncated}-${define_app_default.stage}-${name}`;
    }
    const stageTruncated = define_app_default.stage.substring(
      0,
      Math.max(8, L - nameLen - 1)
    );
    const nameTruncated = name.substring(0, L - stageTruncated.length - 1);
    return `${stageTruncated}-${nameTruncated}`;
  })();
  return `${prefixedName}${suffixStr}`;
}
function hashNumberToPrettyString(number, length) {
  const charLength = PRETTY_CHARS.length;
  let hash = "";
  while (number > 0) {
    hash = PRETTY_CHARS[number % charLength] + hash;
    number = Math.floor(number / charLength);
  }
  hash = hash.slice(0, length);
  while (hash.length < length) {
    hash = "s" + hash;
  }
  return hash;
}
function hashStringToPrettyString(str, length) {
  const hash = crypto.createHash("sha256");
  hash.update(str);
  const num = Number("0x" + hash.digest("hex").substring(0, 16));
  return hashNumberToPrettyString(num, length);
}
var PRETTY_CHARS;
var init_naming = __esm({
  ".sst/platform/src/components/naming.ts"() {
    "use strict";
    init_define_app();
    init_define_cli();
    init_run();
    PRETTY_CHARS = "abcdefhkmnorstuvwxz";
  }
});

// .sst/platform/src/components/error.ts
var VisibleError;
var init_error = __esm({
  ".sst/platform/src/components/error.ts"() {
    "use strict";
    init_define_app();
    init_define_cli();
    init_run();
    VisibleError = class extends Error {
      constructor(...message) {
        super(message.join("\n"));
      }
    };
  }
});

// .sst/platform/src/components/component.ts
import {
  ComponentResource,
  output as output2
} from "@pulumi/pulumi";
function transform(transform3, args) {
  if (typeof transform3 === "function") {
    const ret = transform3(args);
    return ret ?? args;
  }
  return { ...args, ...transform3 };
}
var Component;
var init_component = __esm({
  ".sst/platform/src/components/component.ts"() {
    "use strict";
    init_define_app();
    init_define_cli();
    init_run();
    init_naming();
    init_error();
    Component = class extends ComponentResource {
      constructor(type, name, args, opts) {
        super(type, name, args, {
          transformations: [
            (args2) => {
              if (args2.type !== type && // @ts-expect-error
              !args2.name.startsWith(args2.opts.parent.__name)) {
                throw new Error(
                  `In "${name}" component, the name of "${args2.name}" (${args2.type}) is not prefixed with parent's name`
                );
              }
              if (args2.type.startsWith("sst:"))
                return void 0;
              if (args2.type === "pulumi-nodejs:dynamic:Resource")
                return void 0;
              if (args2.type === "random:index/randomId:RandomId")
                return void 0;
              let overrides;
              switch (args2.type) {
                case "aws:cloudwatch/eventRule:EventRule":
                case "aws:iam/user:User":
                case "aws:lambda/function:Function":
                  overrides = { name: prefixName(64, args2.name) };
                  break;
                case "aws:apigatewayv2/api:Api":
                case "aws:apigatewayv2/authorizer:Authorizer":
                  overrides = { name: prefixName(128, args2.name) };
                  break;
                case "aws:dynamodb/table:Table":
                  overrides = { name: prefixName(255, args2.name) };
                  break;
                case "aws:sns/topic:Topic":
                  overrides = {
                    name: output2(args2.props.fifoTopic).apply(
                      (fifo) => prefixName(256, args2.name, fifo ? ".fifo" : void 0)
                    )
                  };
                  break;
                case "cloudflare:index/r2Bucket:R2Bucket":
                case "cloudflare:index/workerScript:WorkerScript":
                  overrides = {
                    name: prefixName(64, args2.name).toLowerCase()
                  };
                  break;
                case "cloudflare:index/workersKvNamespace:WorkersKvNamespace":
                  overrides = {
                    title: prefixName(64, args2.name).toLowerCase()
                  };
                  break;
                case "aws:rds/cluster:Cluster":
                  overrides = {
                    clusterIdentifier: prefixName(63, args2.name).toLowerCase()
                  };
                  break;
                case "aws:rds/clusterInstance:ClusterInstance":
                  overrides = {
                    identifier: prefixName(63, args2.name).toLowerCase()
                  };
                  break;
                case "aws:sqs/queue:Queue":
                  overrides = {
                    name: output2(args2.props.fifoQueue).apply(
                      (fifo) => prefixName(80, args2.name, fifo ? ".fifo" : void 0)
                    )
                  };
                  break;
                case "aws:iam/role:Role":
                case "aws:s3/bucketV2:BucketV2":
                  break;
                case "aws:apigatewayv2/apiMapping:ApiMapping":
                case "aws:apigatewayv2/domainName:DomainName":
                case "aws:apigatewayv2/integration:Integration":
                case "aws:apigatewayv2/route:Route":
                case "aws:apigatewayv2/stage:Stage":
                case "aws:acm/certificate:Certificate":
                case "aws:acm/certificateValidation:CertificateValidation":
                case "aws:iam/accessKey:AccessKey":
                case "aws:iam/policy:Policy":
                case "aws:iam/rolePolicyAttachment:RolePolicyAttachment":
                case "aws:iam/userPolicy:UserPolicy":
                case "aws:cloudfront/cachePolicy:CachePolicy":
                case "aws:cloudfront/distribution:Distribution":
                case "aws:cloudfront/function:Function":
                case "aws:cloudfront/originAccessIdentity:OriginAccessIdentity":
                case "aws:cloudwatch/eventRule:EventRule":
                case "aws:cloudwatch/eventTarget:EventTarget":
                case "aws:cloudwatch/logGroup:LogGroup":
                case "aws:lambda/eventSourceMapping:EventSourceMapping":
                case "aws:lambda/functionUrl:FunctionUrl":
                case "aws:lambda/invocation:Invocation":
                case "aws:lambda/permission:Permission":
                case "aws:route53/record:Record":
                case "aws:s3/bucketCorsConfigurationV2:BucketCorsConfigurationV2":
                case "aws:s3/bucketNotification:BucketNotification":
                case "aws:s3/bucketObject:BucketObject":
                case "aws:s3/bucketObjectv2:BucketObjectv2":
                case "aws:s3/bucketPolicy:BucketPolicy":
                case "aws:s3/bucketPublicAccessBlock:BucketPublicAccessBlock":
                case "aws:s3/bucketWebsiteConfigurationV2:BucketWebsiteConfigurationV2":
                case "aws:sns/topicSubscription:TopicSubscription":
                case "cloudflare:index/workerDomain:WorkerDomain":
                  break;
                default:
                  throw new VisibleError(
                    `In "${name}" component, the physical name of "${args2.name}" (${args2.type}) is not prefixed`
                  );
              }
              return {
                props: { ...args2.props, ...overrides },
                opts: args2.opts
              };
            }
          ],
          ...opts
        });
      }
    };
  }
});

// .sst/platform/src/util/fs.ts
import fs from "fs/promises";
import path from "path";
async function findAbove(dir, target) {
  if (dir === "/")
    return void 0;
  if (await existsAsync(path.join(dir, target)))
    return dir;
  return findAbove(path.resolve(path.join(dir, "..")), target);
}
async function existsAsync(input) {
  return fs.access(input).then(() => true).catch(() => false);
}
var init_fs = __esm({
  ".sst/platform/src/util/fs.ts"() {
    "use strict";
    init_define_app();
    init_define_cli();
    init_run();
  }
});

// .sst/platform/src/runtime/node.ts
import path2 from "path";
import fs2 from "fs/promises";
import { exec } from "child_process";
import esbuild from "esbuild";
import fsSync from "fs";
async function build(name, input) {
  const out = path2.join(define_cli_default.paths.work, "artifacts", `${name}-src`);
  const sourcemapOut = path2.join(define_cli_default.paths.work, "artifacts", `${name}-map`);
  await fs2.rm(out, { recursive: true, force: true });
  await fs2.mkdir(out, { recursive: true });
  await fs2.mkdir(sourcemapOut, { recursive: true });
  const parsed = path2.parse(input.handler);
  const file = [".ts", ".tsx", ".mts", ".cts", ".js", ".jsx", ".mjs", ".cjs"].map((ext) => path2.join(parsed.dir, parsed.name + ext)).find((file2) => fsSync.existsSync(file2));
  if (!file)
    return {
      type: "error",
      errors: [`Could not find file for handler "${input.handler}"`]
    };
  const nodejs = input.nodejs || {};
  const isESM = (nodejs.format || "esm") === "esm";
  const relative = path2.relative(define_cli_default.paths.root, path2.resolve(parsed.dir));
  const extension = isESM ? ".mjs" : ".cjs";
  const target = path2.join(
    out,
    !relative.startsWith("..") && !path2.isAbsolute(input.handler) ? relative : "",
    // Lambda handler can only contain 1 dot separating the file name and function name
    parsed.name.replace(".", "-") + extension
  );
  const handler = path2.relative(out, target.replace(extension, parsed.ext)).split(path2.sep).join(path2.posix.sep);
  const forceExternal = ["sharp", "pg-native"];
  const { external, ...override } = nodejs.esbuild || {};
  const links = Object.fromEntries(
    input.links?.map((item) => [item.name, item.properties]) || []
  );
  const options = {
    entryPoints: [path2.resolve(file)],
    platform: "node",
    external: [
      ...forceExternal,
      ...nodejs.install || [],
      ...external || []
    ],
    loader: nodejs.loader,
    keepNames: true,
    bundle: true,
    logLevel: "silent",
    splitting: nodejs.splitting,
    metafile: true,
    outExtension: nodejs.splitting ? { ".js": ".mjs" } : void 0,
    ...isESM ? {
      format: "esm",
      target: "esnext",
      mainFields: ["module", "main"],
      banner: {
        js: [
          `import { createRequire as topLevelCreateRequire } from 'module';`,
          `const require = topLevelCreateRequire(import.meta.url);`,
          `import { fileURLToPath as topLevelFileUrlToPath, URL as topLevelURL } from "url"`,
          `const __dirname = topLevelFileUrlToPath(new topLevelURL(".", import.meta.url))`,
          `globalThis.$SST_LINKS = ${JSON.stringify(links)};`,
          nodejs.banner || ""
        ].join("\n")
      }
    } : {
      format: "cjs",
      target: "node14",
      banner: {
        js: [
          `globalThis.$SST_LINKS = ${JSON.stringify(links)};`,
          nodejs.banner || ""
        ].join("\n")
      }
    },
    outfile: !nodejs.splitting ? target : void 0,
    outdir: nodejs.splitting ? path2.dirname(target) : void 0,
    // always generate sourcemaps in local
    // never generate sourcemaps if explicitly false
    // otherwise generate sourcemaps
    sourcemap: nodejs.sourcemap === false ? false : true,
    minify: nodejs.minify,
    ...override
  };
  try {
    const result2 = await esbuild.build(options);
    const installPackages = [
      ...nodejs.install || [],
      ...forceExternal.filter((pkg) => !external?.includes(pkg)).filter(
        (pkg) => Object.values(result2.metafile?.inputs || {}).some(
          ({ imports }) => imports.some(({ path: path17 }) => path17 === pkg)
        )
      )
    ];
    const warnings = [];
    Object.entries(result2.metafile?.inputs || {}).forEach(
      ([inputPath, { imports }]) => imports.filter(({ path: path17 }) => path17.includes("sst/constructs")).forEach(({ path: path17 }) => {
        warnings.push(
          `You are importing from "${path17}" in "${inputPath}". Did you mean to import from "sst/node"?`
        );
      })
    );
    if (installPackages.length) {
      const src = await findAbove(parsed.dir, "package.json");
      if (!src) {
        return {
          type: "error",
          errors: [
            `Could not find package.json for handler "${input.handler}"`
          ]
        };
      }
      const json = JSON.parse(
        await fs2.readFile(path2.join(src, "package.json")).then((x) => x.toString())
      );
      await fs2.writeFile(
        path2.join(out, "package.json"),
        JSON.stringify({
          dependencies: Object.fromEntries(
            installPackages.map((x) => [x, json.dependencies?.[x] || "*"])
          )
        })
      );
      const cmd = ["npm install"];
      if (installPackages.includes("sharp")) {
        cmd.push(
          "--platform=linux",
          input.architecture === "arm64" ? "--arch=arm64" : "--arch=x64"
        );
      }
      await new Promise((resolve, reject) => {
        exec(cmd.join(" "), { cwd: out }, (error) => {
          if (error) {
            reject(error);
          }
          resolve();
        });
      });
    }
    const moveSourcemap = async () => {
      if (nodejs.sourcemap)
        return;
      const map = Object.keys(result2.metafile?.outputs || {}).find(
        (item) => item.endsWith(".map")
      );
      if (!map)
        return;
      const oldPath = path2.resolve(out, map);
      const newPath = path2.join(sourcemapOut, path2.basename(map));
      await fs2.rename(oldPath, newPath);
      return newPath;
    };
    return {
      type: "success",
      out,
      handler,
      sourcemap: await moveSourcemap()
    };
  } catch (ex) {
    const result2 = ex;
    if ("errors" in result2) {
      return {
        type: "error",
        errors: result2.errors.flatMap((x) => [x.text]).filter(Boolean)
      };
    }
    return {
      type: "error",
      errors: [ex.toString()]
    };
  }
}
var init_node = __esm({
  ".sst/platform/src/runtime/node.ts"() {
    "use strict";
    init_define_app();
    init_define_cli();
    init_run();
    init_fs();
  }
});

// .sst/platform/src/util/lazy.ts
function lazy(callback) {
  let loaded = false;
  let result2;
  return () => {
    if (!loaded) {
      result2 = callback();
      loaded = true;
    }
    return result2;
  };
}
var init_lazy = __esm({
  ".sst/platform/src/util/lazy.ts"() {
    "use strict";
    init_define_app();
    init_define_cli();
    init_run();
  }
});

// .sst/platform/src/components/aws/helpers/client.ts
import { StandardRetryStrategy } from "@aws-sdk/middleware-retry";
var useClientCache, useClient;
var init_client = __esm({
  ".sst/platform/src/components/aws/helpers/client.ts"() {
    "use strict";
    init_define_app();
    init_define_cli();
    init_run();
    init_lazy();
    useClientCache = lazy(() => /* @__PURE__ */ new Map());
    useClient = (client, opts) => {
      const cache = useClientCache();
      const existing = cache.get(client.name);
      if (existing)
        return existing;
      const printNoInternet = /* @__PURE__ */ (() => {
        let lastPrinted = 0;
        return () => {
          const now = Date.now();
          if (now - lastPrinted > 5e3) {
            console.log("Waiting for internet connection...");
            lastPrinted = now;
          }
        };
      })();
      const result2 = new client({
        region: opts?.region,
        retryStrategy: new StandardRetryStrategy(async () => 1e4, {
          retryDecider: (e) => {
            if (e.code === "ENOTFOUND") {
              printNoInternet();
              return true;
            }
            if ([
              "ThrottlingException",
              "Throttling",
              "TooManyRequestsException",
              "OperationAbortedException",
              "TimeoutError",
              "NetworkingError",
              ...opts?.retrableErrors ?? []
            ].includes(e.name)) {
              return true;
            }
            return false;
          },
          delayDecider: (_, attempts) => {
            return Math.min(1.5 ** attempts * 100, 5e3);
          },
          // AWS SDK v3 has an idea of "retry tokens" which are used to
          // prevent multiple retries from happening at the same time.
          // This is a workaround to disable that.
          retryQuota: {
            hasRetryTokens: () => true,
            releaseRetryTokens: () => {
            },
            retrieveRetryTokens: () => 1
          }
        })
      });
      cache.set(client.name, result2);
      return result2;
    };
  }
});

// .sst/platform/src/components/aws/providers/function-code-updater.ts
import { dynamic } from "@pulumi/pulumi";
import {
  LambdaClient,
  UpdateFunctionCodeCommand,
  GetFunctionCommand
} from "@aws-sdk/client-lambda";
var Provider, FunctionCodeUpdater;
var init_function_code_updater = __esm({
  ".sst/platform/src/components/aws/providers/function-code-updater.ts"() {
    "use strict";
    init_define_app();
    init_define_cli();
    init_run();
    init_client();
    Provider = class {
      async create(inputs) {
        const version = await this.updateCode(inputs);
        await this.waitForUpdate(inputs);
        return {
          id: inputs.functionName,
          outs: { version }
        };
      }
      async update(id, olds, news) {
        const version = await this.updateCode(news);
        await this.waitForUpdate(news);
        return { outs: { version } };
      }
      async updateCode(inputs) {
        const client = useClient(LambdaClient, {
          region: inputs.region,
          retrableErrors: [
            // Lambda is not ready to accept updates right after creation
            "ServiceException"
          ]
        });
        const ret = await client.send(
          new UpdateFunctionCodeCommand({
            FunctionName: inputs.functionName,
            S3Bucket: inputs.s3Bucket,
            S3Key: inputs.s3Key
          })
        );
        return ret.Version ?? "unknown";
      }
      async waitForUpdate(inputs) {
        const client = useClient(LambdaClient, {
          region: inputs.region,
          retrableErrors: [
            // Lambda is not ready to accept updates right after creation
            "ServiceException"
          ]
        });
        const ret = await client.send(
          new GetFunctionCommand({
            FunctionName: inputs.functionName
          })
        );
        if (ret.Configuration?.LastUpdateStatus === "Successful")
          return;
        if (ret.Configuration?.LastUpdateStatus === "Failed") {
          throw new Error(
            `Failed to update function ${ret.Configuration.LastUpdateStatusReasonCode}: ${ret.Configuration.LastUpdateStatusReason}`
          );
        }
        await new Promise((resolve) => setTimeout(resolve, 300));
        return this.waitForUpdate(inputs);
      }
    };
    FunctionCodeUpdater = class extends dynamic.Resource {
      constructor(name, args, opts) {
        super(
          new Provider(),
          `${name}.sst.aws.FunctionCodeUpdater`,
          { ...args, version: void 0 },
          opts
        );
      }
    };
  }
});

// .sst/platform/src/components/aws/helpers/bootstrap.ts
import {
  SSMClient,
  GetParameterCommand,
  ParameterNotFound,
  PutParameterCommand
} from "@aws-sdk/client-ssm";
import {
  S3Client,
  CreateBucketCommand,
  PutBucketVersioningCommand
} from "@aws-sdk/client-s3";
var VERSION, bootstrapBuckets, bootstrap;
var init_bootstrap = __esm({
  ".sst/platform/src/components/aws/helpers/bootstrap.ts"() {
    "use strict";
    init_define_app();
    init_define_cli();
    init_run();
    init_naming();
    VERSION = 1;
    bootstrapBuckets = {};
    bootstrap = {
      forRegion(region) {
        if (region in bootstrapBuckets) {
          return bootstrapBuckets[region];
        }
        const ssm = new SSMClient({
          // credentials: {
          //   accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
          //   sessionToken: process.env.AWS_SESSION_TOKEN!,
          //   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
          // },
          region
        });
        const s34 = new S3Client({
          region
          // credentials: {
          //   accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
          //   sessionToken: process.env.AWS_SESSION_TOKEN!,
          //   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
          // },
        });
        try {
          const bucket = (async () => {
            const result2 = await ssm.send(
              new GetParameterCommand({
                Name: `/sst/bootstrap`
              })
            ).catch((err) => {
              if (err instanceof ParameterNotFound)
                return;
              throw err;
            });
            if (result2?.Parameter?.Value) {
              try {
                const parsed = JSON.parse(result2.Parameter.Value);
                return parsed;
              } catch (ex) {
              }
            }
            const suffixLength = 12;
            const minNumber = Math.pow(PRETTY_CHARS.length, suffixLength);
            const numberSuffix = Math.floor(Math.random() * minNumber) + minNumber;
            const rand = hashNumberToPrettyString(numberSuffix, suffixLength);
            const asset2 = `sst-asset-${rand}`;
            const state = `sst-state-${rand}`;
            const data = {
              asset: asset2,
              state,
              version: VERSION
            };
            await s34.send(
              new CreateBucketCommand({
                Bucket: asset2
              })
            );
            await s34.send(
              new CreateBucketCommand({
                Bucket: state
              })
            );
            await s34.send(
              new PutBucketVersioningCommand({
                Bucket: asset2,
                VersioningConfiguration: {
                  Status: "Enabled"
                }
              })
            );
            await ssm.send(
              new PutParameterCommand({
                Name: `/sst/bootstrap`,
                Value: JSON.stringify(data),
                Type: "String"
              })
            );
            return asset2;
          })();
          return bootstrapBuckets[region] = bucket;
        } finally {
          s34.destroy();
          ssm.destroy();
        }
      }
    };
  }
});

// .sst/platform/src/components/duration.ts
function toSeconds(duration) {
  const [count, unit] = duration.split(" ");
  const countNum = parseInt(count);
  const unitLower = unit.toLowerCase();
  if (unitLower.startsWith("second")) {
    return countNum;
  } else if (unitLower.startsWith("minute")) {
    return countNum * 60;
  } else if (unitLower.startsWith("hour")) {
    return countNum * 3600;
  } else if (unitLower.startsWith("day")) {
    return countNum * 86400;
  }
  throw new Error(`Invalid duration ${duration}`);
}
var init_duration = __esm({
  ".sst/platform/src/components/duration.ts"() {
    "use strict";
    init_define_app();
    init_define_cli();
    init_run();
  }
});

// .sst/platform/src/components/size.ts
function toMBs(size) {
  const [count, unit] = size.split(" ");
  const countNum = parseInt(count);
  if (unit === "MB") {
    return countNum;
  } else if (unit === "GB") {
    return countNum * 1024;
  }
  throw new Error(`Invalid size ${size}`);
}
var init_size = __esm({
  ".sst/platform/src/components/size.ts"() {
    "use strict";
    init_define_app();
    init_define_cli();
    init_run();
  }
});

// .sst/platform/src/components/link.ts
import { runtime, output as output3, all as all2 } from "@pulumi/pulumi";
var Link;
var init_link = __esm({
  ".sst/platform/src/components/link.ts"() {
    "use strict";
    init_define_app();
    init_define_cli();
    init_run();
    init_error();
    ((Link2) => {
      let links = {};
      function reset() {
        links = {};
        runtime.registerStackTransformation((args) => {
          const resource = args.resource;
          process.nextTick(() => {
            if (Link2.isLinkable(resource) && !args.opts.parent) {
              if (links[args.name]) {
                throw new Error(`Component name ${args.name} is not unique`);
              }
              const link = resource.getSSTLink();
              links[args.name] = output3(link.properties).apply((props) => ({
                type: args.type.replaceAll(":", "."),
                ...props
              }));
            }
          });
          return {
            opts: args.opts,
            props: args.props
          };
        });
      }
      Link2.reset = reset;
      function isLinkable(obj) {
        return "getSSTLink" in obj;
      }
      Link2.isLinkable = isLinkable;
      function build3(links2) {
        return links2.map((l) => {
          if (isLinkable(l)) {
            const link = l.getSSTLink();
            return all2([l.urn, link.properties]).apply(([urn, properties]) => ({
              name: urn.split("::").at(-1),
              properties: {
                ...properties,
                type: urn.split("::").at(-2)
              }
            }));
          }
          throw new VisibleError(`${l} is not a linkable component`);
        });
      }
      Link2.build = build3;
      function makeLinkable2(obj, cb) {
        obj.prototype.getSSTLink = cb;
      }
      Link2.makeLinkable = makeLinkable2;
      function list() {
        return links;
      }
      Link2.list = list;
      let AWS;
      ((AWS2) => {
        function isLinkable2(obj) {
          return "getSSTAWSPermissions" in obj;
        }
        AWS2.isLinkable = isLinkable2;
        function makeLinkable3(obj, cb) {
          obj.prototype.getSSTAWSPermissions = cb;
        }
        AWS2.makeLinkable = makeLinkable3;
      })(AWS = Link2.AWS || (Link2.AWS = {}));
      let Receiver;
      ((Receiver2) => {
        let receivers = {};
        function register(directory, links2, environment) {
          receivers[directory] = {
            links: links2,
            environment
          };
        }
        Receiver2.register = register;
        function list2() {
          return receivers;
        }
        Receiver2.list = list2;
      })(Receiver = Link2.Receiver || (Link2.Receiver = {}));
    })(Link || (Link = {}));
  }
});

// .sst/platform/src/components/warp.ts
var Warp;
var init_warp = __esm({
  ".sst/platform/src/components/warp.ts"() {
    "use strict";
    init_define_app();
    init_define_cli();
    init_run();
    ((Warp2) => {
      let warps = {};
      function reset() {
        warps = {};
      }
      Warp2.reset = reset;
      function list() {
        return warps;
      }
      Warp2.list = list;
      function register(functionID, definition) {
        warps[functionID] = definition;
      }
      Warp2.register = register;
    })(Warp || (Warp = {}));
  }
});

// .sst/platform/src/components/aws/logging.ts
var RETENTION;
var init_logging = __esm({
  ".sst/platform/src/components/aws/logging.ts"() {
    "use strict";
    init_define_app();
    init_define_cli();
    init_run();
    RETENTION = {
      "1 day": 1,
      "3 days": 3,
      "5 days": 5,
      "1 week": 7,
      "2 weeks": 14,
      "1 month": 30,
      "2 months": 60,
      "3 months": 90,
      "4 months": 120,
      "5 months": 150,
      "6 months": 180,
      "1 year": 365,
      "13 months": 400,
      "18 months": 545,
      "2 years": 731,
      "3 years": 1096,
      "5 years": 1827,
      "6 years": 2192,
      "7 years": 2557,
      "8 years": 2922,
      "9 years": 3288,
      "10 years": 3653,
      forever: 0
    };
  }
});

// .sst/platform/src/components/aws/function.ts
import fs3 from "fs";
import path3 from "path";
import crypto2 from "crypto";
import archiver from "archiver";
import {
  asset,
  output as output4,
  all as all3,
  interpolate as interpolate3
} from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
var Function;
var init_function = __esm({
  ".sst/platform/src/components/aws/function.ts"() {
    "use strict";
    init_define_app();
    init_define_cli();
    init_run();
    init_node();
    init_function_code_updater();
    init_bootstrap();
    init_duration();
    init_size();
    init_component();
    init_link();
    init_error();
    init_warp();
    init_naming();
    init_logging();
    Function = class _Function extends Component {
      function;
      role;
      logGroup;
      fnUrl;
      missingSourcemap;
      constructor(name, args, opts) {
        super("sst:aws:Function", name, args, opts);
        const parent = this;
        const dev = output4(args.live).apply((v) => v !== false);
        const region = normalizeRegion();
        const injections = normalizeInjections();
        const runtime3 = normalizeRuntime();
        const timeout = normalizeTimeout();
        const memory = normalizeMemory();
        const architectures = normalizeArchitectures();
        const environment = normalizeEnvironment();
        const streaming = normalizeStreaming();
        const logging = normalizeLogging();
        const url = normalizeUrl();
        const copyFiles = normalizeCopyFiles();
        const linkData = buildLinkData();
        const linkPermissions = buildLinkPermissions();
        const { bundle, handler: handler0 } = buildHandler();
        const { handler, wrapper } = buildHandlerWrapper();
        const role = createRole();
        const zipPath = zipBundleFolder();
        const bundleHash = calculateHash();
        const file = createBucketObject();
        const logGroup = createLogGroup();
        const fn = createFunction();
        const codeUpdater = updateFunctionCode();
        const fnUrl = createUrl();
        const links = output4(linkData).apply(
          (input) => input.map((item) => item.name)
        );
        this.function = codeUpdater.version.apply(() => fn);
        this.role = role;
        this.logGroup = logGroup;
        this.fnUrl = fnUrl;
        Warp.register(
          name,
          all3([
            dev,
            name,
            links,
            args.handler,
            args.bundle,
            args.runtime,
            args.nodejs
          ]).apply(([dev2, name2, links2, handler2, bundle2, runtime4, nodejs]) => {
            if (!dev2)
              return void 0;
            return {
              functionID: name2,
              links: links2,
              handler: handler2,
              bundle: bundle2,
              runtime: runtime4 || "nodejs20.x",
              properties: nodejs
            };
          })
        );
        all3([args.bundle, args.handler]).apply(([bundle2, handler2]) => {
          Link.Receiver.register(bundle2 || handler2, links, environment);
        });
        this.registerOutputs({
          _metadata: {
            handler: args.handler,
            internal: args._skipMetadata
          }
        });
        function normalizeRegion() {
          return aws.getRegionOutput(void 0, { provider: opts?.provider }).name;
        }
        function normalizeInjections() {
          return output4(args.injections).apply((injections2) => injections2 ?? []);
        }
        function normalizeRuntime() {
          return all3([args.runtime, dev]).apply(
            ([v, dev2]) => dev2 ? "provided.al2023" : v ?? "nodejs20.x"
          );
        }
        function normalizeTimeout() {
          return output4(args.timeout).apply((timeout2) => timeout2 ?? "20 seconds");
        }
        function normalizeMemory() {
          return output4(args.memory).apply((memory2) => memory2 ?? "1024 MB");
        }
        function normalizeArchitectures() {
          return output4(args.architecture).apply(
            (arc) => arc === "arm64" ? ["arm64"] : ["x86_64"]
          );
        }
        function normalizeEnvironment() {
          return all3([args.environment, dev]).apply(([environment2, dev2]) => {
            const result2 = environment2 ?? {};
            if (dev2) {
              result2.SST_FUNCTION_ID = name;
              result2.SST_APP = define_app_default.name;
              result2.SST_STAGE = define_app_default.stage;
            }
            return result2;
          });
        }
        function normalizeStreaming() {
          return output4(args.streaming).apply((streaming2) => streaming2 ?? false);
        }
        function normalizeLogging() {
          return output4(args.logging).apply((logging2) => ({
            ...logging2,
            retention: logging2?.retention ?? "forever"
          }));
        }
        function normalizeUrl() {
          return output4(args.url).apply((url2) => {
            if (url2 === false || url2 === void 0)
              return;
            if (url2 === true) {
              url2 = {};
            }
            const defaultAuthorization = "none";
            const authorization = url2.authorization ?? defaultAuthorization;
            const defaultCors = {
              allowHeaders: ["*"],
              allowMethods: ["*"],
              allowOrigins: ["*"]
            };
            const cors = url2.cors === false ? {} : url2.cors === true || url2.cors === void 0 ? defaultCors : {
              ...defaultCors,
              ...url2.cors,
              maxAge: url2.cors.maxAge && toSeconds(url2.cors.maxAge)
            };
            return { authorization, cors };
          });
        }
        function normalizeCopyFiles() {
          return output4(args.copyFiles ?? []).apply(
            (copyFiles2) => Promise.all(
              copyFiles2.map(async (entry) => {
                const from = path3.join(define_cli_default.paths.root, entry.from);
                const to = entry.to || entry.from;
                if (path3.isAbsolute(to))
                  throw new VisibleError(
                    `Copy destination path "${to}" must be relative`
                  );
                const stats = await fs3.promises.stat(from);
                const isDir = stats.isDirectory();
                return { from, to, isDir };
              })
            )
          );
        }
        function calculateHash() {
          return zipPath.apply(async (zipPath2) => {
            const hash = crypto2.createHash("sha256");
            hash.update(await fs3.promises.readFile(zipPath2));
            return hash.digest("hex");
          });
        }
        function buildLinkData() {
          if (!args.link)
            return output4([]);
          return output4(args.link).apply((links2) => {
            const linkData2 = Link.build(links2);
            return linkData2;
          });
        }
        function buildLinkPermissions() {
          return output4(args.link ?? []).apply(
            (links2) => links2.flatMap((l) => {
              if (!Link.AWS.isLinkable(l))
                return [];
              return l.getSSTAWSPermissions();
            })
          );
        }
        function buildHandler() {
          return dev.apply((dev2) => {
            if (args._ignoreCodeChanges) {
              return {
                bundle: path3.join(
                  define_cli_default.paths.platform,
                  "functions",
                  "empty-function"
                ),
                handler: "index.handler"
              };
            }
            if (dev2) {
              return {
                handler: "bootstrap",
                bundle: path3.join(define_cli_default.paths.platform, "dist", "bridge")
              };
            }
            if (args.bundle) {
              return {
                bundle: output4(args.bundle),
                handler: output4(args.handler)
              };
            }
            const buildResult = all3([args, linkData]).apply(
              async ([args2, linkData2]) => {
                const result2 = await build(name, {
                  ...args2,
                  links: linkData2
                });
                if (result2.type === "error") {
                  throw new Error(
                    "Failed to build function: " + result2.errors.join("\n").trim()
                  );
                }
                return result2;
              }
            );
            return {
              handler: buildResult.handler,
              bundle: buildResult.out
            };
          });
        }
        function buildHandlerWrapper() {
          const ret = all3([
            dev,
            bundle,
            handler0,
            linkData,
            streaming,
            injections
          ]).apply(
            async ([dev2, bundle2, handler2, linkData2, streaming2, injections2]) => {
              if (dev2)
                return { handler: handler2 };
              const hasUserInjections = injections2.length > 0;
              const hasLinkInjections = args.bundle && linkData2.length > 0;
              if (!hasUserInjections && !hasLinkInjections)
                return { handler: handler2 };
              const linkInjection = hasLinkInjections ? linkData2.map((item) => [
                `process.env.SST_RESOURCE_${item.name} = ${JSON.stringify(
                  JSON.stringify(item.properties)
                )};
`
              ]).join("") : "";
              const parsed = path3.posix.parse(handler2);
              const handlerDir = parsed.dir;
              const oldHandlerFileName = parsed.name;
              const oldHandlerFunction = parsed.ext.replace(/^\./, "");
              const newHandlerFileName = "server-index";
              const newHandlerFunction = "handler";
              const newHandlerFileExt = [".js", ".mjs", ".cjs"].find(
                (ext) => fs3.existsSync(
                  path3.join(bundle2, handlerDir, oldHandlerFileName + ext)
                )
              );
              if (!newHandlerFileExt)
                throw new VisibleError(
                  `Could not find handler file "${handler2}" for function "${name}"`
                );
              return {
                handler: path3.posix.join(
                  handlerDir,
                  `${newHandlerFileName}.${newHandlerFunction}`
                ),
                wrapper: {
                  dir: handlerDir,
                  name: `${newHandlerFileName}.mjs`,
                  content: streaming2 ? [
                    linkInjection,
                    `export const ${newHandlerFunction} = awslambda.streamifyResponse(async (event, context) => {`,
                    ...injections2,
                    `  const { ${oldHandlerFunction}: rawHandler} = await import("./${oldHandlerFileName}${newHandlerFileExt}");`,
                    `  return rawHandler(event, context);`,
                    `});`
                  ].join("\n") : [
                    linkInjection,
                    `export const ${newHandlerFunction} = async (event, context) => {`,
                    ...injections2,
                    `  const { ${oldHandlerFunction}: rawHandler} = await import("./${oldHandlerFileName}${newHandlerFileExt}");`,
                    `  return rawHandler(event, context);`,
                    `};`
                  ].join("\n")
                }
              };
            }
          );
          return {
            handler: ret.handler,
            wrapper: ret.wrapper
          };
        }
        function createRole() {
          if (args.role)
            return;
          const policy = all3([args.permissions || [], linkPermissions, dev]).apply(
            ([argsPermissions, linkPermissions2, dev2]) => aws.iam.getPolicyDocumentOutput({
              statements: [
                ...argsPermissions,
                ...linkPermissions2,
                ...dev2 ? [
                  {
                    actions: ["iot:*"],
                    resources: ["*"]
                  }
                ] : []
              ]
            })
          );
          return new aws.iam.Role(
            `${name}Role`,
            transform(args.transform?.role, {
              name: region.apply(
                (region2) => prefixName(
                  64,
                  `${name}Role`,
                  `-${region2.toLowerCase().replace(/-/g, "")}`
                )
              ),
              assumeRolePolicy: aws.iam.assumeRolePolicyForPrincipal({
                Service: "lambda.amazonaws.com"
              }),
              // if there are no statements, do not add an inline policy.
              // adding an inline policy with no statements will cause an error.
              inlinePolicies: policy.apply(
                ({ statements }) => statements ? [
                  {
                    name: "inline",
                    policy: policy.json
                  }
                ] : []
              ),
              managedPolicyArns: [
                "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole",
                ...args.vpc ? [
                  "arn:aws:iam::aws:policy/service-role/AWSLambdaVPCAccessExecutionRole"
                ] : []
              ]
            }),
            { parent }
          );
        }
        function zipBundleFolder() {
          return all3([bundle, wrapper, copyFiles]).apply(
            async ([bundle2, wrapper2, copyFiles2]) => {
              const zipPath2 = path3.resolve(
                define_cli_default.paths.work,
                "artifacts",
                name,
                "code.zip"
              );
              await fs3.promises.mkdir(path3.dirname(zipPath2), {
                recursive: true
              });
              await new Promise(async (resolve, reject) => {
                const ws = fs3.createWriteStream(zipPath2);
                const archive = archiver("zip", {
                  // Ensure deterministic zip file hashes
                  // https://github.com/archiverjs/node-archiver/issues/397#issuecomment-554327338
                  statConcurrency: 1
                });
                archive.on("warning", reject);
                archive.on("error", reject);
                ws.once("close", () => {
                  resolve(zipPath2);
                });
                archive.pipe(ws);
                archive.glob(
                  "**",
                  { cwd: bundle2, dot: true },
                  { date: /* @__PURE__ */ new Date(0), mode: 511 }
                );
                if (wrapper2) {
                  archive.append(wrapper2.content, {
                    name: wrapper2.name,
                    date: /* @__PURE__ */ new Date(0)
                  });
                }
                copyFiles2.forEach(async (entry) => {
                  entry.isDir ? archive.directory(entry.from, entry.to, { date: /* @__PURE__ */ new Date(0) }) : archive.file(entry.from, {
                    name: entry.to,
                    date: /* @__PURE__ */ new Date(0)
                  });
                });
                await archive.finalize();
              });
              return zipPath2;
            }
          );
        }
        function createBucketObject() {
          return new aws.s3.BucketObjectv2(
            `${name}Code`,
            {
              key: interpolate3`assets/${name}-code-${bundleHash}.zip`,
              bucket: region.apply(
                (region2) => bootstrap.forRegion(region2).then((d) => d.asset)
              ),
              source: zipPath.apply((zipPath2) => new asset.FileArchive(zipPath2))
            },
            {
              parent,
              ignoreChanges: args._ignoreCodeChanges ? ["key", "source"] : void 0,
              retainOnDelete: true
            }
          );
        }
        function createLogGroup() {
          return new aws.cloudwatch.LogGroup(
            `${name}LogGroup`,
            transform(args.transform?.logGroup, {
              name: `/aws/lambda/${prefixName(64, `${name}Function`)}`,
              retentionInDays: logging.apply(
                (logging2) => RETENTION[logging2.retention]
              )
            }),
            { parent }
          );
        }
        function createFunction() {
          return new aws.lambda.Function(
            `${name}Function`,
            transform(args.transform?.function, {
              description: all3([args.description, dev]).apply(
                ([description, dev2]) => dev2 ? description ? `${description.substring(0, 240)} (live)` : "live" : `${description ?? ""}`
              ),
              code: new asset.FileArchive(
                path3.join(define_cli_default.paths.platform, "functions", "empty-function")
              ),
              handler,
              role: args.role ?? role.arn,
              runtime: runtime3,
              timeout: timeout.apply((timeout2) => toSeconds(timeout2)),
              memorySize: memory.apply((memory2) => toMBs(memory2)),
              environment: {
                variables: environment
              },
              architectures,
              loggingConfig: {
                logFormat: "Text",
                logGroup: logGroup.name
              },
              vpcConfig: args.vpc && {
                securityGroupIds: output4(args.vpc).securityGroups,
                subnetIds: output4(args.vpc).subnets
              },
              layers: args.layers
            }),
            {
              parent,
              ignoreChanges: args._ignoreCodeChanges ? ["code", "handler"] : void 0
            }
          );
        }
        function createUrl() {
          return url.apply((url2) => {
            if (url2 === void 0)
              return;
            return new aws.lambda.FunctionUrl(
              `${name}Url`,
              {
                functionName: fn.name,
                authorizationType: url2.authorization.toUpperCase(),
                invokeMode: streaming.apply(
                  (streaming2) => streaming2 ? "RESPONSE_STREAM" : "BUFFERED"
                ),
                cors: url2.cors
              },
              { parent }
            );
          });
        }
        function updateFunctionCode() {
          return new FunctionCodeUpdater(
            `${name}CodeUpdater`,
            {
              functionName: fn.name,
              s3Bucket: file.bucket,
              s3Key: file.key,
              functionLastModified: fn.lastModified,
              region
            },
            { parent }
          );
        }
      }
      /**
       * The underlying [resources](/docs/components/#nodes) this component creates.
       */
      get nodes() {
        return {
          /**
           * The IAM Role the function will use.
           */
          role: this.role,
          /**
           * The AWS Lambda function.
           */
          function: this.function,
          /**
           * The CloudWatch Log Group the function logs are stored.
           */
          logGroup: this.logGroup
        };
      }
      /**
       * The Lambda function URL if `url` is enabled.
       */
      get url() {
        return this.fnUrl.apply((url) => {
          if (!url)
            throw new Error("Function URL is not enabled");
          return url.functionUrl;
        });
      }
      /**
       * The name of the Lambda function.
       */
      get name() {
        return this.function.name;
      }
      /**
       * The ARN of the Lambda function.
       */
      get arn() {
        return this.function.arn;
      }
      /** @internal */
      static fromDefinition(parent, name, definition, override) {
        return output4(definition).apply((definition2) => {
          if (typeof definition2 === "string") {
            return new _Function(
              name,
              { handler: definition2, ...override },
              { parent }
            );
          } else if (definition2.handler) {
            return new _Function(
              name,
              {
                ...definition2,
                ...override,
                permissions: all3([
                  definition2.permissions,
                  override?.permissions
                ]).apply(([permissions, overridePermissions]) => [
                  ...permissions ?? [],
                  ...overridePermissions ?? []
                ])
              },
              { parent }
            );
          }
          throw new Error(`Invalid function definition for the "${name}" Function`);
        });
      }
      /** @internal */
      getSSTLink() {
        return {
          properties: {
            name: this.name
          }
        };
      }
      /** @internal */
      getSSTAWSPermissions() {
        return [
          {
            actions: ["lambda:InvokeFunction"],
            resources: [this.function.arn]
          }
        ];
      }
    };
  }
});

// .sst/platform/src/components/aws/providers/hosted-zone-lookup.ts
import { dynamic as dynamic2 } from "@pulumi/pulumi";
import {
  Route53Client,
  ListHostedZonesCommand
} from "@aws-sdk/client-route-53";
var Provider2, HostedZoneLookup;
var init_hosted_zone_lookup = __esm({
  ".sst/platform/src/components/aws/providers/hosted-zone-lookup.ts"() {
    "use strict";
    init_define_app();
    init_define_cli();
    init_run();
    init_client();
    Provider2 = class {
      async create(inputs) {
        const zoneId = await this.lookup(inputs.domain);
        return { id: zoneId, outs: { zoneId } };
      }
      async update(id, olds, news) {
        const zoneId = await this.lookup(news.domain);
        return { outs: { zoneId } };
      }
      async lookup(domain) {
        const client = useClient(Route53Client);
        const zones = [];
        let nextMarker;
        do {
          const res = await client.send(
            new ListHostedZonesCommand({ Marker: nextMarker })
          );
          zones.push(...res.HostedZones || []);
          nextMarker = res.NextMarker;
        } while (nextMarker);
        const parts = domain.split(".");
        for (let i = 0; i <= parts.length - 2; i++) {
          const zone = zones.find((z) => z.Name === parts.slice(i).join(".") + ".");
          if (zone?.Id) {
            return zone.Id.replace("/hostedzone/", "");
          }
        }
        throw new Error(`Could not find hosted zone for domain ${domain}`);
      }
    };
    HostedZoneLookup = class extends dynamic2.Resource {
      constructor(name, args, opts) {
        super(
          new Provider2(),
          `${name}.sst.aws.HostedZoneLookup`,
          { ...args, zoneId: void 0 },
          opts
        );
      }
    };
  }
});

// .sst/platform/src/components/aws/dns-validated-certificate.ts
import { output as output5 } from "@pulumi/pulumi";
import * as aws2 from "@pulumi/aws";
var DnsValidatedCertificate;
var init_dns_validated_certificate = __esm({
  ".sst/platform/src/components/aws/dns-validated-certificate.ts"() {
    "use strict";
    init_define_app();
    init_define_cli();
    init_run();
    init_component();
    init_naming();
    DnsValidatedCertificate = class extends Component {
      certificateValidation;
      constructor(name, args, opts) {
        super("sst:aws:Certificate", name, args, opts);
        const parent = this;
        const { domainName, alternativeNames, zoneId } = args;
        const certificate = output5(zoneId).apply((zoneId2) => {
          return new aws2.acm.Certificate(
            `${name}Certificate`,
            {
              domainName,
              validationMethod: "DNS",
              subjectAlternativeNames: alternativeNames ?? []
            },
            { parent }
          );
        });
        const records = certificate.domainValidationOptions.apply(
          (options) => options.map((option) => {
            return new aws2.route53.Record(
              `${name}Record${sanitizeToPascalCase(option.resourceRecordName)}`,
              {
                name: option.resourceRecordName,
                zoneId,
                type: option.resourceRecordType,
                records: [option.resourceRecordValue],
                ttl: 60
              },
              { parent }
            );
          })
        );
        const certificateValidation = new aws2.acm.CertificateValidation(
          `${name}Validation`,
          {
            certificateArn: certificate.arn,
            validationRecordFqdns: records.apply(
              (records2) => records2.map((record) => record.fqdn)
            )
          },
          { parent }
        );
        this.certificateValidation = certificateValidation;
      }
      get arn() {
        return this.certificateValidation.certificateArn;
      }
    };
  }
});

// .sst/platform/src/components/hint.ts
import { all as all4 } from "@pulumi/pulumi";
var Hint;
var init_hint = __esm({
  ".sst/platform/src/components/hint.ts"() {
    "use strict";
    init_define_app();
    init_define_cli();
    init_run();
    ((Hint7) => {
      let hints = {};
      function reset() {
        hints = {};
      }
      Hint7.reset = reset;
      function register(name, hint) {
        all4([name]).apply(([name2]) => {
          hints[name2] = hint;
        });
      }
      Hint7.register = register;
      function list() {
        return hints;
      }
      Hint7.list = list;
    })(Hint || (Hint = {}));
  }
});

// .sst/platform/src/components/aws/apigatewayv2.ts
import {
  all as all5,
  interpolate as interpolate4,
  output as output6
} from "@pulumi/pulumi";
import * as aws3 from "@pulumi/aws";
var ApiGatewayV2;
var init_apigatewayv2 = __esm({
  ".sst/platform/src/components/aws/apigatewayv2.ts"() {
    "use strict";
    init_define_app();
    init_define_cli();
    init_run();
    init_component();
    init_function();
    init_naming();
    init_error();
    init_hosted_zone_lookup();
    init_dns_validated_certificate();
    init_hint();
    init_logging();
    ApiGatewayV2 = class extends Component {
      constructorName;
      api;
      apigDomain;
      apiMapping;
      authorizers = {};
      logGroup;
      constructor(name, args = {}, opts = {}) {
        super("sst:aws:ApiGatewayV2", name, args, opts);
        const parent = this;
        const accessLog = normalizeAccessLog();
        const domain = normalizeDomain();
        const api = createApi();
        const logGroup = createLogGroup();
        createStage();
        const zoneId = lookupHostedZoneId();
        const certificate = createSsl();
        const apigDomain = createDomainName();
        createRoute53Records();
        const apiMapping = createDomainMapping();
        this.constructorName = name;
        this.api = api;
        this.apigDomain = apigDomain;
        this.apiMapping = apiMapping;
        this.logGroup = logGroup;
        Hint.register(this.urn, this.url);
        function normalizeAccessLog() {
          return output6(args.accessLog).apply((accessLog2) => ({
            ...accessLog2,
            retention: accessLog2?.retention ?? "forever"
          }));
        }
        function normalizeDomain() {
          if (!args.domain)
            return;
          return output6(args.domain).apply((domain2) => {
            if (typeof domain2 === "string") {
              return { domainName: domain2 };
            }
            if (!domain2.domainName) {
              throw new Error(`Missing "domainName" for domain.`);
            }
            if (domain2.hostedZone && domain2.hostedZoneId) {
              throw new Error(`Do not set both "hostedZone" and "hostedZoneId".`);
            }
            return domain2;
          });
        }
        function createApi() {
          return new aws3.apigatewayv2.Api(
            `${name}Api`,
            transform(args.transform?.api, {
              protocolType: "HTTP",
              corsConfiguration: {
                allowCredentials: false,
                allowHeaders: ["*"],
                allowMethods: ["*"],
                allowOrigins: ["*"]
              }
            }),
            { parent }
          );
        }
        function createLogGroup() {
          return new aws3.cloudwatch.LogGroup(
            `${name}AccessLog`,
            transform(args.transform?.accessLog, {
              name: `/aws/vendedlogs/apis/${prefixName(64, name)}`,
              retentionInDays: accessLog.apply(
                (accessLog2) => RETENTION[accessLog2.retention]
              )
            }),
            { parent }
          );
        }
        function createStage() {
          new aws3.apigatewayv2.Stage(
            `${name}Stage`,
            transform(args.transform?.stage, {
              apiId: api.id,
              autoDeploy: true,
              name: "$default",
              accessLogSettings: {
                destinationArn: logGroup.arn,
                format: JSON.stringify({
                  // request info
                  requestTime: `"$context.requestTime"`,
                  requestId: `"$context.requestId"`,
                  httpMethod: `"$context.httpMethod"`,
                  path: `"$context.path"`,
                  routeKey: `"$context.routeKey"`,
                  status: `$context.status`,
                  // integer value, do not wrap in quotes
                  responseLatency: `$context.responseLatency`,
                  // integer value, do not wrap in quotes
                  // integration info
                  integrationRequestId: `"$context.integration.requestId"`,
                  integrationStatus: `"$context.integration.status"`,
                  integrationLatency: `"$context.integration.latency"`,
                  integrationServiceStatus: `"$context.integration.integrationStatus"`,
                  // caller info
                  ip: `"$context.identity.sourceIp"`,
                  userAgent: `"$context.identity.userAgent"`
                  //cognitoIdentityId:`"$context.identity.cognitoIdentityId"`, // not supported in us-west-2 region
                })
              }
            }),
            { parent }
          );
        }
        function lookupHostedZoneId() {
          if (!domain)
            return;
          return domain.apply((domain2) => {
            if (domain2.hostedZoneId)
              return output6(domain2.hostedZoneId);
            return new HostedZoneLookup(
              `${name}HostedZoneLookup`,
              {
                domain: domain2.hostedZone ?? domain2.domainName
              },
              { parent }
            ).zoneId;
          });
        }
        function createSsl() {
          if (!domain || !zoneId)
            return;
          return new DnsValidatedCertificate(
            `${name}Ssl`,
            {
              domainName: domain.domainName,
              zoneId
            },
            { parent }
          );
        }
        function createDomainName() {
          if (!domain || !certificate)
            return;
          return new aws3.apigatewayv2.DomainName(
            `${name}DomainName`,
            transform(args.transform?.domainName, {
              domainName: domain?.domainName,
              domainNameConfiguration: {
                certificateArn: certificate.arn,
                endpointType: "REGIONAL",
                securityPolicy: "TLS_1_2"
              }
            }),
            { parent }
          );
        }
        function createRoute53Records() {
          if (!domain || !zoneId || !apigDomain) {
            return;
          }
          domain.domainName.apply((domainName) => {
            for (const type of ["A", "AAAA"]) {
              new aws3.route53.Record(
                `${name}${type}Record${sanitizeToPascalCase(domainName)}`,
                {
                  name: domain.domainName,
                  zoneId,
                  type,
                  aliases: [
                    {
                      name: apigDomain.domainNameConfiguration.targetDomainName,
                      zoneId: apigDomain.domainNameConfiguration.hostedZoneId,
                      evaluateTargetHealth: true
                    }
                  ]
                },
                { parent }
              );
            }
          });
        }
        function createDomainMapping() {
          if (!domain || !apigDomain)
            return;
          return domain.path?.apply(
            (path17) => new aws3.apigatewayv2.ApiMapping(
              `${name}DomainMapping`,
              {
                apiId: api.id,
                domainName: apigDomain.id,
                stage: "$default",
                apiMappingKey: path17
              },
              { parent }
            )
          );
        }
      }
      /**
       * The URL of the API.
       *
       * If the `domain` is set, this is the URL with the custom domain.
       * Otherwise, it's the autogenerated API Gateway URL.
       */
      get url() {
        return this.apigDomain && this.apiMapping ? all5([this.apigDomain.domainName, this.apiMapping.apiMappingKey]).apply(
          ([domain, key]) => key ? `https://${domain}/${key}/` : `https://${domain}`
        ) : this.api.apiEndpoint;
      }
      /**
       * The underlying [resources](/docs/components/#nodes) this component creates.
       */
      get nodes() {
        return {
          /**
           * The Amazon API Gateway HTTP API
           */
          api: this.api
        };
      }
      /**
       * Add a route to the API Gateway HTTP API. The route is a combination of
       * - An HTTP method and a path, `{METHOD} /{path}`.
       * - Or a `$default` route.
       *
       * :::tip
       * The `$default` route is a default or catch-all route. It'll match if no other route matches.
       * :::
       *
       * A method could be one of `GET`, `POST`, `PUT`, `DELETE`, `PATCH`, `HEAD`, `OPTIONS`, or `ANY`. Here `ANY` matches any HTTP method.
       *
       * The path can be a combination of
       * - Literal segments, `/notes`, `/notes/new`, etc.
       * - Parameter segments, `/notes/{noteId}`, `/notes/{noteId}/attachments/{attachmentId}`, etc.
       * - Greedy segments, `/{proxy+}`, `/notes/{proxy+}`,  etc. The `{proxy+}` segment is a greedy segment that matches all child paths. It needs to be at the end of the path.
       *
       * :::tip
       * The `{proxy+}` is a greedy segment, it matches all its child paths.
       * :::
       *
       * The `$default` is a reserved keyword for the default route. It'll be matched if no other route matches.
       *
       * :::note
       * You cannot have duplicate routes.
       * :::
       *
       * When a request comes in, the API Gateway will look for the most specific match. If no route matches, the `$default` route will be invoked.
       *
       * @param route The path for the route.
       * @param handler The function that'll be invoked.
       * @param args Configure the route.
       *
       * @example
       * Here's how you add a simple route.
       *
       * ```js
       * api.route("GET /", "src/get.handler");
       * ```
       *
       * Add multiple routes.
       *
       * ```js
       * api
       *   .route("GET /", "src/get.handler")
       *   .route("POST /", "src/post.handler");
       * ```
       *
       * Match any HTTP method.
       *
       * ```js
       * api.route("ANY /", "src/route.handler");
       * ```
       *
       * Add a default route.
       *
       * ```js
       * api
       *   .route("GET /", "src/get.handler")
       *   .route($default, "src/default.handler");
       * ```
       *
       * Add a parameterized route.
       *
       * ```js
       * api.route("GET /notes/{id}", "src/get.handler");
       * ```
       *
       * Add a greedy route.
       *
       * ```js
       * api.route("GET /notes/{proxy+}", "src/greedy.handler");
       * ```
       *
       * Enable auth for a route.
       *
       * ```js
       * api
       *   .route("GET /", "src/get.handler")
       *   .route("POST /", "src/post.handler", {
       *     auth: {
       *       iam: true
       *     }
       *   });
       * ```
       *
       * Customize the route handler.
       *
       * ```js
       * api.route("GET /", {
       *   handler: "src/get.handler",
       *   memory: "2048 MB"
       * });
       * ```
       */
      route(route, handler, args = {}) {
        const parent = this;
        const parentName = this.constructorName;
        const routeKey = parseRoute();
        const id = sanitizeToPascalCase(hashStringToPrettyString(routeKey, 4));
        const fn = Function.fromDefinition(
          parent,
          `${parentName}Handler${id}`,
          handler,
          {
            description: `${parentName} route ${routeKey}`
          }
        );
        const permission = new aws3.lambda.Permission(
          `${parentName}Handler${id}Permissions`,
          {
            action: "lambda:InvokeFunction",
            function: fn.arn,
            principal: "apigateway.amazonaws.com",
            sourceArn: interpolate4`${this.nodes.api.executionArn}/*`
          },
          { parent }
        );
        const integration = new aws3.apigatewayv2.Integration(
          `${parentName}Integration${id}`,
          transform(args.transform?.integration, {
            apiId: this.api.id,
            integrationType: "AWS_PROXY",
            integrationUri: fn.arn,
            payloadFormatVersion: "2.0"
          }),
          { parent, dependsOn: [permission] }
        );
        const authArgs = createAuthorizer();
        authArgs.apply(
          (authArgs2) => new aws3.apigatewayv2.Route(
            `${parentName}Route${id}`,
            transform(args.transform?.route, {
              apiId: this.api.id,
              routeKey,
              target: interpolate4`integrations/${integration.id}`,
              ...authArgs2
            }),
            { parent }
          )
        );
        return this;
        function parseRoute() {
          if (route.toLowerCase() === "$default")
            return "$default";
          const parts = route.split(" ");
          if (parts.length !== 2) {
            throw new VisibleError(
              `Invalid route ${route}. A route must be in the format "METHOD /path".`
            );
          }
          const [methodRaw, path17] = route.split(" ");
          const method = methodRaw.toUpperCase();
          if (![
            "ANY",
            "DELETE",
            "GET",
            "HEAD",
            "OPTIONS",
            "PATCH",
            "POST",
            "PUT"
          ].includes(method))
            throw new VisibleError(`Invalid method ${methodRaw} in route ${route}`);
          if (!path17.startsWith("/"))
            throw new VisibleError(
              `Invalid path ${path17} in route ${route}. Path must start with "/".`
            );
          return `${method} ${path17}`;
        }
        function createAuthorizer() {
          return output6(args.auth).apply((auth) => {
            if (auth?.iam)
              return { authorizationType: "AWS_IAM" };
            if (auth?.jwt) {
              const id2 = sanitizeToPascalCase(
                hashStringToPrettyString(
                  [
                    auth.jwt.issuer,
                    ...auth.jwt.audiences.sort(),
                    auth.jwt.identitySource ?? ""
                  ].join(""),
                  4
                )
              );
              const authorizer = parent.authorizers[id2] ?? new aws3.apigatewayv2.Authorizer(
                `${parentName}Authorizer${id2}`,
                transform(args.transform?.authorizer, {
                  apiId: parent.api.id,
                  authorizerType: "JWT",
                  identitySources: [
                    auth.jwt.identitySource ?? "$request.header.Authorization"
                  ],
                  jwtConfiguration: {
                    audiences: auth.jwt.audiences,
                    issuer: auth.jwt.issuer
                  }
                }),
                { parent }
              );
              parent.authorizers[id2] = authorizer;
              return {
                authorizationType: "JWT",
                authorizationScopes: auth.jwt.scopes,
                authorizerId: authorizer.id
              };
            }
            return {
              authorizationType: "NONE"
            };
          });
        }
      }
      /** @internal */
      getSSTLink() {
        return {
          properties: {
            url: this.url
          }
        };
      }
    };
  }
});

// .sst/platform/src/components/aws/auth.ts
import {
  output as output7,
  secret
} from "@pulumi/pulumi";
import { PrivateKey } from "@pulumi/tls";
var Auth;
var init_auth = __esm({
  ".sst/platform/src/components/aws/auth.ts"() {
    "use strict";
    init_define_app();
    init_define_cli();
    init_run();
    init_component();
    init_function();
    Auth = class extends Component {
      _key;
      _authenticator;
      constructor(name, args, opts) {
        super("sst:aws:Auth", name, args, opts);
        this._key = new PrivateKey(`${name}Keypair`, {
          algorithm: "RSA"
        });
        this._authenticator = output7(args.authenticator).apply((args2) => {
          return new Function(`${name}Authenticator`, {
            ...args2,
            url: true,
            environment: {
              ...args2.environment,
              AUTH_PRIVATE_KEY: secret(this.key.privateKeyPemPkcs8),
              AUTH_PUBLIC_KEY: secret(this.key.publicKeyPem)
            }
          });
        });
      }
      get key() {
        return this._key;
      }
      get authenticator() {
        return this._authenticator;
      }
      get url() {
        return this._authenticator.url;
      }
      /** @internal */
      getSSTLink() {
        return {
          properties: {
            publicKey: secret(this.key.publicKeyPem)
          }
        };
      }
      /** @internal */
      getSSTAWSPermissions() {
        return [];
      }
    };
  }
});

// .sst/platform/src/components/aws/bucket.ts
import {
  output as output8,
  interpolate as interpolate5,
  all as all6
} from "@pulumi/pulumi";
import * as aws4 from "@pulumi/aws";
import { RandomId } from "@pulumi/random";
var Bucket;
var init_bucket = __esm({
  ".sst/platform/src/components/aws/bucket.ts"() {
    "use strict";
    init_define_app();
    init_define_cli();
    init_run();
    init_naming();
    init_component();
    init_function();
    init_duration();
    Bucket = class extends Component {
      constructorName;
      bucket;
      constructor(name, args, opts) {
        super("sst:aws:Bucket", name, args, opts);
        const parent = this;
        const publicAccess = normalizePublicAccess();
        const bucket = createBucket2();
        const publicAccessBlock = createPublicAccess();
        const policy = createBucketPolicy();
        createCorsRule();
        this.constructorName = name;
        this.bucket = policy.apply(() => bucket);
        function createBucket2() {
          const input = transform(args?.transform?.bucket, {
            forceDestroy: true
          });
          if (!input.bucket) {
            const randomId = new RandomId(
              `${name}Id`,
              { byteLength: 6 },
              { parent }
            );
            input.bucket = randomId.dec.apply(
              (dec) => prefixName(
                63,
                name,
                `-${hashNumberToPrettyString(parseInt(dec), 8)}`
              ).toLowerCase()
            );
          }
          return new aws4.s3.BucketV2(`${name}Bucket`, input, { parent });
        }
        function createPublicAccess() {
          return publicAccess.apply((publicAccess2) => {
            return new aws4.s3.BucketPublicAccessBlock(
              `${name}PublicAccessBlock`,
              transform(args?.transform?.publicAccessBlock, {
                bucket: bucket.bucket,
                blockPublicAcls: true,
                blockPublicPolicy: !publicAccess2,
                ignorePublicAcls: true,
                restrictPublicBuckets: !publicAccess2
              }),
              { parent }
            );
          });
        }
        function createBucketPolicy() {
          return publicAccess.apply((publicAccess2) => {
            const statements = [];
            if (publicAccess2) {
              statements.push({
                principals: [{ type: "*", identifiers: ["*"] }],
                actions: ["s3:GetObject"],
                resources: [interpolate5`${bucket.arn}/*`]
              });
            }
            statements.push({
              effect: "Deny",
              principals: [{ type: "*", identifiers: ["*"] }],
              actions: ["s3:*"],
              resources: [bucket.arn, interpolate5`${bucket.arn}/*`],
              conditions: [
                {
                  test: "Bool",
                  variable: "aws:SecureTransport",
                  values: ["false"]
                }
              ]
            });
            return new aws4.s3.BucketPolicy(
              `${name}Policy`,
              transform(args?.transform?.policy, {
                bucket: bucket.bucket,
                policy: aws4.iam.getPolicyDocumentOutput({ statements }).json
              }),
              {
                parent,
                dependsOn: publicAccessBlock
              }
            );
          });
        }
        function createCorsRule() {
          return output8(args?.cors).apply((cors) => {
            if (cors === false)
              return;
            return new aws4.s3.BucketCorsConfigurationV2(
              `${name}Cors`,
              transform(args?.transform?.cors, {
                bucket: bucket.bucket,
                corsRules: [
                  {
                    allowedHeaders: cors?.allowHeaders ?? ["*"],
                    allowedMethods: cors?.allowMethods ?? [
                      "DELETE",
                      "GET",
                      "HEAD",
                      "POST",
                      "PUT"
                    ],
                    allowedOrigins: cors?.allowOrigins ?? ["*"],
                    exposeHeaders: cors?.exposeHeaders,
                    maxAgeSeconds: toSeconds(cors?.maxAge ?? "0 seconds")
                  }
                ]
              }),
              { parent }
            );
          });
        }
        function normalizePublicAccess() {
          return output8(args?.public).apply((v) => v ?? false);
        }
      }
      /**
       * The generated name of the S3 Bucket.
       */
      get name() {
        return this.bucket.bucket;
      }
      /**
       * The ARN of the S3 Bucket.
       */
      get arn() {
        return this.bucket.arn;
      }
      /**
       * The underlying [resources](/docs/components/#nodes) this component creates.
       */
      get nodes() {
        return {
          /**
           * The Amazon S3 bucket.
           */
          bucket: this.bucket
        };
      }
      /**
       * Subscribes to events from this bucket.
       *
       * @param subscriber The function that'll be notified.
       * @param args Configure the subscription.
       *
       * @example
       *
       * ```js
       * bucket.subscribe("src/subscriber.handler");
       * ```
       *
       * Add multiple subscribers.
       *
       * ```js
       * bucket
       *   .subscribe("src/subscriber1.handler")
       *   .subscribe("src/subscriber2.handler");
       * ```
       *
       * Subscribe to specific S3 events.
       *
       * ```js
       * bucket.subscribe("src/subscriber.handler", {
       *   events: ["s3:ObjectCreated:*", "s3:ObjectRemoved:*"]
       * });
       * ```
       *
       * Subscribe to specific S3 events from a specific folder.
       *
       * ```js
       * bucket.subscribe("src/subscriber.handler", {
       *   filterPrefix: "images/",
       *   events: ["s3:ObjectCreated:*", "s3:ObjectRemoved:*"]
       * });
       * ```
       *
       * Customize the subscriber function.
       *
       * ```js
       * bucket.subscribe({
       *   handler: "src/subscriber.handler",
       *   timeout: "60 seconds",
       * });
       * ```
       */
      subscribe(subscriber, args) {
        const parent = this;
        const parentName = this.constructorName;
        all6([subscriber, args]).apply(([subscriber2, args2]) => {
          const events = args2?.events ?? [
            "s3:ObjectCreated:*",
            "s3:ObjectRemoved:*",
            "s3:ObjectRestore:*",
            "s3:ReducedRedundancyLostObject",
            "s3:Replication:*",
            "s3:LifecycleExpiration:*",
            "s3:LifecycleTransition",
            "s3:IntelligentTiering",
            "s3:ObjectTagging:*",
            "s3:ObjectAcl:Put"
          ];
          const id = sanitizeToPascalCase(
            hashStringToPrettyString(
              [
                ...events,
                args2?.filterPrefix ?? "",
                args2?.filterSuffix ?? "",
                typeof subscriber2 === "string" ? subscriber2 : subscriber2.handler
              ].join(""),
              4
            )
          );
          const fn = Function.fromDefinition(
            parent,
            `${parentName}Subscriber${id}`,
            subscriber2,
            {
              description: events.length < 5 ? `Subscribed to ${parentName} on ${events.join(", ")}` : `Subscribed to ${parentName} on ${events.slice(0, 3).join(", ")}, and ${events.length - 3} more events`
            }
          );
          const permission = new aws4.lambda.Permission(
            `${parentName}Subscriber${id}Permissions`,
            {
              action: "lambda:InvokeFunction",
              function: fn.arn,
              principal: "s3.amazonaws.com",
              sourceArn: this.arn
            },
            { parent }
          );
          new aws4.s3.BucketNotification(
            `${parentName}Notification${id}`,
            transform(args2?.transform?.notification, {
              bucket: this.bucket.bucket,
              lambdaFunctions: [
                {
                  id: `Notification${id}`,
                  lambdaFunctionArn: fn.arn,
                  events,
                  filterPrefix: args2?.filterPrefix,
                  filterSuffix: args2?.filterSuffix
                }
              ]
            }),
            { parent, dependsOn: [permission] }
          );
        });
        return this;
      }
      /** @internal */
      getSSTLink() {
        return {
          properties: {
            name: this.name
          }
        };
      }
      /** @internal */
      getSSTAWSPermissions() {
        return [
          {
            actions: ["s3:*"],
            resources: [this.arn, interpolate5`${this.arn}/*`]
          }
        ];
      }
    };
  }
});

// .sst/platform/src/components/aws/cron.ts
import { output as output9 } from "@pulumi/pulumi";
import * as aws5 from "@pulumi/aws";
var Cron;
var init_cron = __esm({
  ".sst/platform/src/components/aws/cron.ts"() {
    "use strict";
    init_define_app();
    init_define_cli();
    init_run();
    init_component();
    init_function();
    Cron = class extends Component {
      fn;
      rule;
      target;
      constructor(name, args, opts) {
        super("sst:aws:Cron", name, args, opts);
        const parent = this;
        const fn = createFunction();
        const rule = createRule();
        const target = createTarget();
        createPermission();
        this.fn = fn;
        this.rule = rule;
        this.target = target;
        function createFunction() {
          return output9(args.job).apply(
            (job) => Function.fromDefinition(parent, `${name}Handler`, job)
          );
        }
        function createRule() {
          return new aws5.cloudwatch.EventRule(
            `${name}Rule`,
            transform(args.transform?.rule, {
              scheduleExpression: args.schedule
            }),
            { parent }
          );
        }
        function createTarget() {
          return new aws5.cloudwatch.EventTarget(
            `${name}Target`,
            transform(args.transform?.target, {
              arn: fn.arn,
              rule: rule.name
            }),
            { parent }
          );
        }
        function createPermission() {
          return new aws5.lambda.Permission(
            `${name}Permission`,
            {
              action: "lambda:InvokeFunction",
              function: fn.arn,
              principal: "events.amazonaws.com",
              sourceArn: rule.arn
            },
            { parent }
          );
        }
      }
      /**
       * The underlying [resources](/docs/components/#nodes) this component creates.
       */
      get nodes() {
        return {
          /**
           * The AWS Lambda Function that's invoked when the cron job runs.
           */
          job: this.fn,
          /**
           * The EventBridge Rule resource.
           */
          rule: this.rule,
          /**
           * The EventBridge Target resource.
           */
          target: this.target
        };
      }
    };
  }
});

// .sst/platform/src/components/aws/dynamo.ts
import {
  all as all7,
  interpolate as interpolate6,
  output as output10
} from "@pulumi/pulumi";
import * as aws6 from "@pulumi/aws";
var Dynamo;
var init_dynamo = __esm({
  ".sst/platform/src/components/aws/dynamo.ts"() {
    "use strict";
    init_define_app();
    init_define_cli();
    init_run();
    init_component();
    init_function();
    init_naming();
    Dynamo = class extends Component {
      constructorName;
      table;
      isStreamEnabled = false;
      constructor(name, args, opts = {}) {
        super("sst:aws:Dynamo", name, args, opts);
        const parent = this;
        const table = createTable();
        this.constructorName = name;
        this.table = table;
        this.isStreamEnabled = Boolean(args.stream);
        function createTable() {
          return all7([
            args.fields,
            args.primaryIndex,
            args.globalIndexes,
            args.localIndexes,
            args.stream
          ]).apply(
            ([fields, primaryIndex, globalIndexes, localIndexes, stream]) => new aws6.dynamodb.Table(
              `${name}Table`,
              transform(args.transform?.table, {
                attributes: Object.entries(fields).map(([name2, type]) => ({
                  name: name2,
                  type: type === "string" ? "S" : type === "number" ? "N" : "B"
                })),
                billingMode: "PAY_PER_REQUEST",
                hashKey: primaryIndex.hashKey,
                rangeKey: primaryIndex.rangeKey,
                streamEnabled: Boolean(stream),
                streamViewType: stream ? stream.toUpperCase().replaceAll("-", "_") : void 0,
                pointInTimeRecovery: {
                  enabled: true
                },
                globalSecondaryIndexes: Object.entries(globalIndexes ?? {}).map(
                  ([name2, index]) => ({
                    name: name2,
                    hashKey: index.hashKey,
                    rangeKey: index.rangeKey,
                    projectionType: "ALL"
                  })
                ),
                localSecondaryIndexes: Object.entries(localIndexes ?? {}).map(
                  ([name2, index]) => ({
                    name: name2,
                    rangeKey: index.rangeKey,
                    projectionType: "ALL"
                  })
                )
              }),
              { parent }
            )
          );
        }
      }
      /**
       * The ARN of the DynamoDB Table.
       */
      get arn() {
        return this.table.arn;
      }
      /**
       * The name of the DynamoDB Table.
       */
      get name() {
        return this.table.name;
      }
      /**
       * The underlying [resources](/docs/components/#nodes) this component creates.
       */
      get nodes() {
        return {
          /**
           * The Amazon DynamoDB Table.
           */
          table: this.table
        };
      }
      /**
       * Subscribe to this table's DynamoDB Stream.
       *
       * :::note
       * You'll first need to enable the `stream` before subscribing to it.
       * :::
       *
       * @param subscriber The function that'll be notified.
       * @param args Configure the subscription.
       *
       * @example
       *
       * ```js
       * table.subscribe("src/subscriber.handler");
       * ```
       *
       * Add multiple subscribers.
       *
       * ```js
       * table
       *   .subscribe("src/subscriber1.handler")
       *   .subscribe("src/subscriber2.handler");
       * ```
       *
       * Add a filter to the subscription.
       *
       * ```js
       * table.subscribe("src/subscriber.handler", {
       *   filters: [
       *     {
       *       dynamodb: {
       *         Keys: {
       *           CustomerName: {
       *             S: ["AnyCompany Industries"]
       *           }
       *         }
       *       }
       *     }
       *   ]
       * });
       * ```
       *
       * Customize the subscriber function.
       *
       * ```js
       * table.subscribe({
       *   handler: "src/subscriber.handler",
       *   timeout: "60 seconds"
       * });
       * ```
       */
      subscribe(subscriber, args = {}) {
        const parent = this;
        const parentName = this.constructorName;
        if (!this.isStreamEnabled)
          throw new Error(
            `Cannot subscribe to "${parentName}" because stream is not enabled.`
          );
        const id = sanitizeToPascalCase(
          hashStringToPrettyString(JSON.stringify(args.filters ?? {}), 4)
        );
        const fn = Function.fromDefinition(
          parent,
          `${parentName}Subscriber${id}`,
          subscriber,
          {
            description: `Subscribed to ${parentName}`,
            permissions: [
              {
                actions: [
                  "dynamodb:DescribeStream",
                  "dynamodb:GetRecords",
                  "dynamodb:GetShardIterator",
                  "dynamodb:ListStreams"
                ],
                resources: [this.nodes.table.streamArn]
              }
            ]
          }
        );
        new aws6.lambda.EventSourceMapping(
          `${parentName}EventSourceMapping${id}`,
          transform(args?.transform?.eventSourceMapping, {
            eventSourceArn: this.nodes.table.streamArn,
            functionName: fn.name,
            filterCriteria: args?.filters && {
              filters: output10(args.filters).apply(
                (filters) => filters.map((filter) => ({
                  pattern: JSON.stringify(filter)
                }))
              )
            },
            startingPosition: "LATEST"
          }),
          { parent }
        );
        return this;
      }
      /** @internal */
      getSSTLink() {
        return {
          properties: {
            name: this.name
          }
        };
      }
      /** @internal */
      getSSTAWSPermissions() {
        return [
          {
            actions: ["dynamodb:*"],
            resources: [this.arn, interpolate6`${this.arn}/*`]
          }
        ];
      }
    };
  }
});

// .sst/platform/src/components/aws/postgres.ts
import { output as output11 } from "@pulumi/pulumi";
import * as aws7 from "@pulumi/aws";
function parseACU(acu) {
  const result2 = parseFloat(acu.split(" ")[0]);
  return result2;
}
var Postgres;
var init_postgres = __esm({
  ".sst/platform/src/components/aws/postgres.ts"() {
    "use strict";
    init_define_app();
    init_define_cli();
    init_run();
    init_component();
    Postgres = class extends Component {
      cluster;
      instance;
      databaseName;
      constructor(name, args, opts) {
        super("sst:aws:Postgres", name, args, opts);
        const parent = this;
        const scaling = normalizeScaling();
        const version = normalizeVersion();
        const databaseName = normalizeDatabaseName();
        const cluster = createCluster();
        const instance = createInstance();
        this.cluster = cluster;
        this.instance = instance;
        this.databaseName = databaseName;
        function normalizeScaling() {
          return output11(args?.scaling).apply((scaling2) => ({
            minCapacity: parseACU(scaling2?.min ?? "0.5 ACU"),
            maxCapacity: parseACU(scaling2?.max ?? "4 ACU")
          }));
        }
        function normalizeVersion() {
          return output11(args?.version).apply((version2) => version2 ?? "15.5");
        }
        function normalizeDatabaseName() {
          return output11(args?.databaseName).apply(
            (name2) => name2 ?? define_app_default.name.replaceAll("-", "_")
          );
        }
        function createCluster() {
          return new aws7.rds.Cluster(
            `${name}Cluster`,
            transform(args?.transform?.cluster, {
              engine: aws7.rds.EngineType.AuroraPostgresql,
              engineMode: "provisioned",
              engineVersion: version,
              databaseName,
              masterUsername: "postgres",
              manageMasterUserPassword: true,
              serverlessv2ScalingConfiguration: scaling,
              skipFinalSnapshot: true,
              enableHttpEndpoint: true
            }),
            {
              parent
            }
          );
        }
        function createInstance() {
          return new aws7.rds.ClusterInstance(
            `${name}Instance`,
            transform(args?.transform?.instance, {
              clusterIdentifier: cluster.id,
              instanceClass: "db.serverless",
              engine: aws7.rds.EngineType.AuroraPostgresql,
              engineVersion: cluster.engineVersion
            }),
            {
              parent
            }
          );
        }
      }
      /**
       * The ARN of the RDS Cluster.
       */
      get clusterArn() {
        return this.cluster.arn;
      }
      /**
       * The ARN of the master user secret.
       */
      get secretArn() {
        return this.cluster.masterUserSecrets[0].secretArn;
      }
      /**
       * The name of the database.
       */
      get database() {
        return this.databaseName;
      }
      get nodes() {
        return {
          cluster: this.cluster,
          instance: this.instance
        };
      }
      /** @internal */
      getSSTLink() {
        return {
          properties: {
            clusterArn: this.clusterArn,
            secretArn: this.secretArn,
            database: this.database
          }
        };
      }
      /** @internal */
      getSSTAWSPermissions() {
        return [
          {
            actions: ["secretsmanager:GetSecretValue"],
            resources: [this.cluster.masterUserSecrets[0].secretArn]
          },
          {
            actions: [
              "rds-data:BatchExecuteStatement",
              "rds-data:BeginTransaction",
              "rds-data:CommitTransaction",
              "rds-data:ExecuteStatement",
              "rds-data:RollbackTransaction"
            ],
            resources: [this.cluster.arn]
          }
        ];
      }
    };
  }
});

// .sst/platform/src/components/aws/queue.ts
import { output as output12 } from "@pulumi/pulumi";
import * as aws8 from "@pulumi/aws";
var Queue;
var init_queue = __esm({
  ".sst/platform/src/components/aws/queue.ts"() {
    "use strict";
    init_define_app();
    init_define_cli();
    init_run();
    init_component();
    init_function();
    init_error();
    Queue = class extends Component {
      constructorName;
      queue;
      isSubscribed = false;
      constructor(name, args, opts) {
        super("sst:aws:Queue", name, args, opts);
        const parent = this;
        const fifo = normalizeFifo();
        const queue = createQueue();
        this.constructorName = name;
        this.queue = queue;
        function normalizeFifo() {
          return output12(args?.fifo).apply((v) => v ?? false);
        }
        function createQueue() {
          return new aws8.sqs.Queue(
            `${name}Queue`,
            transform(args?.transform?.queue, {
              fifoQueue: fifo
            }),
            { parent }
          );
        }
      }
      /**
       * The ARN of the SQS Queue.
       */
      get arn() {
        return this.queue.arn;
      }
      /**
       * The SQS Queue URL.
       */
      get url() {
        return this.queue.url;
      }
      /**
       * The underlying [resources](/docs/components/#nodes) this component creates.
       */
      get nodes() {
        return {
          /**
           * The Amazon SQS Queue.
           */
          queue: this.queue
        };
      }
      /**
       * Subscribe to this queue.
       *
       * @param subscriber The function that'll be notified.
       * @param args Configure the subscription.
       *
       * @example
       *
       * ```js
       * queue.subscribe("src/subscriber.handler");
       * ```
       *
       * Add multiple subscribers.
       *
       * ```js
       * queue
       *   .subscribe("src/subscriber1.handler")
       *   .subscribe("src/subscriber2.handler");
       * ```
       *
       * Add a filter to the subscription.
       *
       * ```js
       * queue.subscribe("src/subscriber.handler", {
       *   filters: [
       *     {
       *       body: {
       *         RequestCode: ["BBBB"]
       *       }
       *     }
       *   ]
       * });
       * ```
       *
       * Customize the subscriber function.
       *
       * ```js
       * queue.subscribe({
       *   handler: "src/subscriber.handler",
       *   timeout: "60 seconds"
       * });
       * ```
       */
      subscribe(subscriber, args) {
        const parent = this;
        const parentName = this.constructorName;
        if (this.isSubscribed)
          throw new VisibleError(
            `Cannot subscribe to the "${parentName}" queue multiple times. An AWS SQS queue can only have one subscriber.`
          );
        this.isSubscribed = true;
        const fn = Function.fromDefinition(
          parent,
          `${parentName}Subscriber`,
          subscriber,
          {
            description: `Subscribed to ${parentName}`,
            permissions: [
              {
                actions: [
                  "sqs:ChangeMessageVisibility",
                  "sqs:DeleteMessage",
                  "sqs:GetQueueAttributes",
                  "sqs:GetQueueUrl",
                  "sqs:ReceiveMessage"
                ],
                resources: [this.arn]
              }
            ]
          }
        );
        new aws8.lambda.EventSourceMapping(
          `${parentName}EventSourceMapping`,
          transform(args?.transform?.eventSourceMapping, {
            eventSourceArn: this.arn,
            functionName: fn.name,
            filterCriteria: args?.filters && {
              filters: output12(args.filters).apply(
                (filters) => filters.map((filter) => ({
                  pattern: JSON.stringify(filter)
                }))
              )
            }
          }),
          { parent }
        );
        return this;
      }
      /** @internal */
      getSSTLink() {
        return {
          properties: {
            url: this.url
          }
        };
      }
      /** @internal */
      getSSTAWSPermissions() {
        return [
          {
            actions: ["sqs:*"],
            resources: [this.arn]
          }
        ];
      }
    };
  }
});

// .sst/platform/src/components/aws/helpers/provider.ts
import { output as output13 } from "@pulumi/pulumi";
import * as aws9 from "@pulumi/aws";
var useProviderCache, useProvider;
var init_provider = __esm({
  ".sst/platform/src/components/aws/helpers/provider.ts"() {
    "use strict";
    init_define_app();
    init_define_cli();
    init_run();
    init_lazy();
    useProviderCache = lazy(() => /* @__PURE__ */ new Map());
    useProvider = (region) => {
      const cache = useProviderCache();
      const existing = cache.get(region);
      if (existing)
        return existing;
      const provider = new aws9.Provider(`AwsProvider.sst.${region}`, {
        region,
        defaultTags: {
          tags: output13(aws9.getDefaultTags()).apply((result2) => result2.tags)
        }
      });
      cache.set(region, provider);
      return provider;
    };
  }
});

// .sst/platform/src/components/aws/https-redirect.ts
import { all as all8, output as output14 } from "@pulumi/pulumi";
import * as aws10 from "@pulumi/aws";
var HttpsRedirect;
var init_https_redirect = __esm({
  ".sst/platform/src/components/aws/https-redirect.ts"() {
    "use strict";
    init_define_app();
    init_define_cli();
    init_run();
    init_dns_validated_certificate();
    init_bucket();
    init_component();
    init_naming();
    init_provider();
    HttpsRedirect = class extends Component {
      constructor(name, args, opts) {
        super("sst:aws:HttpsRedirect", name, args, opts);
        const parent = this;
        const certificate = new DnsValidatedCertificate(
          `${name}Ssl`,
          {
            domainName: output14(args.sourceDomains).apply((domains) => domains[0]),
            alternativeNames: output14(args.sourceDomains).apply(
              (domains) => domains.slice(1)
            ),
            zoneId: args.zoneId
          },
          { parent, provider: useProvider("us-east-1") }
        );
        const bucket = new Bucket(`${name}Bucket`, {}, { parent });
        const bucketWebsite = new aws10.s3.BucketWebsiteConfigurationV2(
          `${name}BucketWebsite`,
          {
            bucket: bucket.name,
            redirectAllRequestsTo: {
              hostName: args.targetDomain,
              protocol: "https"
            }
          },
          { parent }
        );
        const distribution = new aws10.cloudfront.Distribution(
          `${name}Distribution`,
          {
            enabled: true,
            waitForDeployment: false,
            aliases: args.sourceDomains,
            restrictions: {
              geoRestriction: {
                restrictionType: "none"
              }
            },
            comment: all8([args.targetDomain, args.sourceDomains]).apply(
              ([targetDomain, sourceDomains]) => `Redirect to ${targetDomain} from ${sourceDomains.join(", ")}`
            ),
            priceClass: "PriceClass_All",
            viewerCertificate: {
              acmCertificateArn: certificate.arn,
              sslSupportMethod: "sni-only"
            },
            defaultCacheBehavior: {
              allowedMethods: ["GET", "HEAD", "OPTIONS"],
              targetOriginId: "s3Origin",
              viewerProtocolPolicy: "redirect-to-https",
              cachedMethods: ["GET", "HEAD"],
              forwardedValues: {
                cookies: { forward: "none" },
                queryString: false
              }
            },
            origins: [
              {
                originId: "s3Origin",
                domainName: bucketWebsite.websiteEndpoint,
                customOriginConfig: {
                  httpPort: 80,
                  httpsPort: 443,
                  originProtocolPolicy: "http-only",
                  originSslProtocols: ["TLSv1.2"]
                }
              }
            ]
          },
          { parent }
        );
        output14(args.sourceDomains).apply((sourceDomains) => {
          for (const recordName of sourceDomains) {
            for (const type of ["A", "AAAA"]) {
              new aws10.route53.Record(
                `${name}${type}Record${sanitizeToPascalCase(recordName)}`,
                {
                  name: recordName,
                  zoneId: args.zoneId,
                  type,
                  aliases: [
                    {
                      name: distribution.domainName,
                      zoneId: distribution.hostedZoneId,
                      evaluateTargetHealth: true
                    }
                  ]
                },
                { parent }
              );
            }
          }
        });
      }
    };
  }
});

// .sst/platform/src/components/aws/providers/distribution-deployment-waiter.ts
import { dynamic as dynamic3 } from "@pulumi/pulumi";
import {
  CloudFrontClient,
  GetDistributionCommand
} from "@aws-sdk/client-cloudfront";
var Provider4, DistributionDeploymentWaiter;
var init_distribution_deployment_waiter = __esm({
  ".sst/platform/src/components/aws/providers/distribution-deployment-waiter.ts"() {
    "use strict";
    init_define_app();
    init_define_cli();
    init_run();
    init_client();
    Provider4 = class {
      async create(inputs) {
        await this.handle(inputs);
        return { id: "waiter", outs: { isDone: true } };
      }
      async update(id, olds, news) {
        await this.handle(news);
        return { outs: { isDone: true } };
      }
      async handle(inputs) {
        if (!inputs.wait)
          return;
        const { distributionId } = inputs;
        const client = useClient(CloudFrontClient);
        const start = Date.now();
        do {
          const result2 = await client.send(
            new GetDistributionCommand({
              Id: distributionId
            })
          );
          if (result2.Distribution?.Status === "Deployed")
            return;
          await new Promise((resolve) => setTimeout(resolve, 5e3));
        } while (Date.now() - start < 3e5);
      }
    };
    DistributionDeploymentWaiter = class extends dynamic3.Resource {
      constructor(name, args, opts) {
        super(
          new Provider4(),
          `${name}.sst.aws.DistributionDeploymentWaiter`,
          args,
          opts
        );
      }
    };
  }
});

// .sst/platform/src/components/aws/cdn.ts
import {
  output as output15,
  interpolate as interpolate7
} from "@pulumi/pulumi";
import * as aws11 from "@pulumi/aws";
var Cdn;
var init_cdn = __esm({
  ".sst/platform/src/components/aws/cdn.ts"() {
    "use strict";
    init_define_app();
    init_define_cli();
    init_run();
    init_dns_validated_certificate();
    init_https_redirect();
    init_provider();
    init_component();
    init_naming();
    init_hosted_zone_lookup();
    init_distribution_deployment_waiter();
    Cdn = class extends Component {
      distribution;
      _domainUrl;
      constructor(name, args, opts) {
        super("sst:aws:CDN", name, args, opts);
        const parent = this;
        const domain = normalizeDomain();
        const zoneId = lookupHostedZoneId();
        const certificate = createSsl();
        const distribution = createDistribution();
        const waiter = createDistributionDeploymentWaiter();
        createRoute53Records();
        createRedirects();
        this.distribution = waiter.isDone.apply(() => distribution);
        this._domainUrl = domain?.domainName ? interpolate7`https://${domain.domainName}` : void 0;
        function normalizeDomain() {
          if (!args.domain)
            return;
          return output15(args.domain).apply((domain2) => {
            if (typeof domain2 === "string") {
              return { domainName: domain2, aliases: [], redirects: [] };
            }
            if (!domain2.domainName) {
              throw new Error(`Missing "domainName" for domain.`);
            }
            if (domain2.hostedZone && domain2.hostedZoneId) {
              throw new Error(`Do not set both "hostedZone" and "hostedZoneId".`);
            }
            return { aliases: [], redirects: [], ...domain2 };
          });
        }
        function lookupHostedZoneId() {
          if (!domain)
            return;
          return domain.apply((domain2) => {
            if (domain2.hostedZoneId)
              return output15(domain2.hostedZoneId);
            return new HostedZoneLookup(
              `${name}HostedZoneLookup`,
              {
                domain: domain2.hostedZone ?? domain2.domainName
              },
              { parent }
            ).zoneId;
          });
        }
        function createSsl() {
          if (!domain || !zoneId)
            return;
          return new DnsValidatedCertificate(
            `${name}Ssl`,
            {
              domainName: domain.domainName,
              alternativeNames: domain.aliases,
              zoneId
            },
            { parent, provider: useProvider("us-east-1") }
          );
        }
        function createDistribution() {
          return new aws11.cloudfront.Distribution(
            `${name}Distribution`,
            transform(args.transform.distribution, {
              defaultCacheBehavior: {
                allowedMethods: [],
                cachedMethods: [],
                targetOriginId: "placeholder",
                viewerProtocolPolicy: "redirect-to-https"
              },
              enabled: true,
              origins: [],
              restrictions: {
                geoRestriction: {
                  restrictionType: "none"
                }
              },
              aliases: domain ? output15(domain).apply((domain2) => [
                domain2.domainName,
                ...domain2.aliases
              ]) : [],
              viewerCertificate: certificate ? {
                acmCertificateArn: certificate.arn,
                sslSupportMethod: "sni-only",
                minimumProtocolVersion: "TLSv1.2_2021"
              } : {
                cloudfrontDefaultCertificate: true
              },
              waitForDeployment: false
            }),
            {
              parent
            }
          );
        }
        function createDistributionDeploymentWaiter() {
          return output15(args.wait).apply((wait) => {
            return new DistributionDeploymentWaiter(
              `${name}Waiter`,
              {
                distributionId: distribution.id,
                etag: distribution.etag,
                wait: wait ?? true
              },
              { parent, ignoreChanges: wait ? void 0 : ["*"] }
            );
          });
        }
        function createRoute53Records() {
          if (!domain || !zoneId) {
            return;
          }
          output15(domain).apply((domain2) => {
            for (const recordName of [domain2.domainName, ...domain2.aliases]) {
              for (const type of ["A", "AAAA"]) {
                new aws11.route53.Record(
                  `${name}${type}Record${sanitizeToPascalCase(recordName)}`,
                  {
                    name: recordName,
                    zoneId,
                    type,
                    aliases: [
                      {
                        name: distribution.domainName,
                        zoneId: distribution.hostedZoneId,
                        evaluateTargetHealth: true
                      }
                    ]
                  },
                  { parent }
                );
              }
            }
          });
        }
        function createRedirects() {
          if (!zoneId || !domain) {
            return;
          }
          output15(domain).apply((domain2) => {
            if (domain2.redirects.length === 0)
              return;
            new HttpsRedirect(
              `${name}Redirect`,
              {
                zoneId,
                sourceDomains: domain2.redirects,
                targetDomain: domain2.domainName
              },
              { parent }
            );
          });
        }
      }
      /**
       * The CloudFront URL of the website.
       */
      get url() {
        return interpolate7`https://${this.distribution.domainName}`;
      }
      /**
       * If the custom domain is enabled, this is the URL of the website with the
       * custom domain.
       */
      get domainUrl() {
        return this._domainUrl;
      }
      get nodes() {
        return {
          distribution: this.distribution
        };
      }
    };
  }
});

// .sst/platform/src/components/aws/router.ts
import { all as all9, output as output16 } from "@pulumi/pulumi";
import * as aws12 from "@pulumi/aws";
var Router;
var init_router = __esm({
  ".sst/platform/src/components/aws/router.ts"() {
    "use strict";
    init_define_app();
    init_define_cli();
    init_run();
    init_component();
    init_cdn();
    Router = class extends Component {
      cdn;
      cachePolicy;
      constructor(name, args, opts = {}) {
        super("sst:aws:Router", name, args, opts);
        const parent = this;
        validateRoutes();
        const cachePolicy = createCachePolicy();
        const cdn = createCdn();
        this.cachePolicy = cachePolicy;
        this.cdn = cdn;
        function validateRoutes() {
          output16(args.routes).apply((routes) => {
            Object.keys(routes).map((path17) => {
              if (!path17.startsWith("/")) {
                throw new Error(
                  `In "${name}" Router, the route path "${path17}" must start with a "/"`
                );
              }
            });
          });
        }
        function createCachePolicy() {
          return new aws12.cloudfront.CachePolicy(
            `${name}CachePolicy`,
            transform(args.transform?.cachePolicy, {
              comment: `${name} router cache policy`,
              defaultTtl: 0,
              maxTtl: 31536e3,
              // 1 year
              minTtl: 0,
              parametersInCacheKeyAndForwardedToOrigin: {
                cookiesConfig: {
                  cookieBehavior: "none"
                },
                headersConfig: {
                  headerBehavior: "none"
                },
                queryStringsConfig: {
                  queryStringBehavior: "all"
                },
                enableAcceptEncodingBrotli: true,
                enableAcceptEncodingGzip: true
              }
            }),
            { parent }
          );
        }
        function createCdn() {
          const origins = buildOrigins();
          const behaviors = buildBehaviors();
          return new Cdn(
            `${name}Cdn`,
            {
              domain: args.domain,
              wait: true,
              transform: {
                distribution: (distribution) => ({
                  ...distribution,
                  comment: `${name} router`,
                  origins,
                  defaultCacheBehavior: behaviors.apply(
                    (behaviors2) => behaviors2.find((b) => !b.pathPattern)
                  ),
                  orderedCacheBehaviors: behaviors.apply(
                    (behaviors2) => behaviors2.filter(
                      (b) => b.pathPattern
                    )
                  )
                })
              }
            },
            { parent }
          );
        }
        function buildOrigins() {
          const defaultConfig = {
            customOriginConfig: {
              httpPort: 80,
              httpsPort: 443,
              originProtocolPolicy: "https-only",
              originReadTimeout: 20,
              originSslProtocols: ["TLSv1.2"]
            }
          };
          return output16(args.routes).apply((routes) => {
            const origins = Object.entries(routes).map(([path17, url]) => ({
              originId: path17,
              domainName: new URL(url).host,
              ...defaultConfig
            }));
            if (!routes["/*"]) {
              origins.push({
                originId: "/*",
                domainName: "do-not-exist",
                ...defaultConfig
              });
            }
            return origins;
          });
        }
        function buildBehaviors() {
          const defaultConfig = {
            viewerProtocolPolicy: "redirect-to-https",
            allowedMethods: [
              "DELETE",
              "GET",
              "HEAD",
              "OPTIONS",
              "PATCH",
              "POST",
              "PUT"
            ],
            cachedMethods: ["GET", "HEAD"],
            defaultTtl: 0,
            compress: true,
            // CloudFront's Managed-AllViewerExceptHostHeader policy
            cachePolicyId: cachePolicy.id,
            originRequestPolicyId: "b689b0a8-53d0-40ab-baf2-68738e2966ac"
          };
          return output16(args.routes).apply((routes) => {
            const behaviors = Object.entries(routes).map(([path17]) => ({
              ...path17 === "/*" ? {} : { pathPattern: path17 },
              targetOriginId: path17,
              ...defaultConfig
            }));
            if (!routes["/*"]) {
              behaviors.push({
                targetOriginId: "/*",
                ...defaultConfig
              });
            }
            return behaviors;
          });
        }
      }
      /**
       * The URL of the Router.
       *
       * If the `domain` is set, this is the URL with the custom domain.
       * Otherwise, it's the autogenerated CloudFront URL.
       */
      get url() {
        return all9([this.cdn.domainUrl, this.cdn.url]).apply(
          ([domainUrl, url]) => domainUrl ?? url
        );
      }
      /** @internal */
      getSSTLink() {
        return {
          properties: {
            url: this.url
          }
        };
      }
    };
  }
});

// .sst/platform/src/components/aws/sns-topic.ts
import { output as output17 } from "@pulumi/pulumi";
import * as aws13 from "@pulumi/aws";
var SnsTopic;
var init_sns_topic = __esm({
  ".sst/platform/src/components/aws/sns-topic.ts"() {
    "use strict";
    init_define_app();
    init_define_cli();
    init_run();
    init_component();
    init_function();
    init_naming();
    SnsTopic = class extends Component {
      constructorName;
      topic;
      constructor(name, args = {}, opts = {}) {
        super("sst:aws:SnsTopic", name, args, opts);
        const parent = this;
        const fifo = normalizeFifo();
        const topic = createTopic();
        this.constructorName = name;
        this.topic = topic;
        function normalizeFifo() {
          return output17(args.fifo).apply((v) => v ?? false);
        }
        function createTopic() {
          return new aws13.sns.Topic(
            `${name}Topic`,
            transform(args.transform?.topic, {
              fifoTopic: fifo
            }),
            { parent }
          );
        }
      }
      /**
       * The ARN of the SNS Topic.
       */
      get arn() {
        return this.topic.arn;
      }
      /**
       * The name of the SNS Topic.
       */
      get name() {
        return this.topic.name;
      }
      /**
       * The underlying [resources](/docs/components/#nodes) this component creates.
       */
      get nodes() {
        return {
          /**
           * The Amazon SNS Topic.
           */
          topic: this.topic
        };
      }
      /**
       * Subscribes to this SNS Topic.
       *
       * @param subscriber The function that'll be notified.
       * @param args Configure the subscription.
       *
       * @example
       *
       * ```js
       * topic.subscribe("src/subscriber.handler");
       * ```
       *
       * Add multiple subscribers.
       *
       * ```js
       * topic
       *   .subscribe("src/subscriber1.handler")
       *   .subscribe("src/subscriber2.handler");
       * ```
       *
       * Add a filter to the subscription.
       *
       * ```js
       * topic.subscribe("src/subscriber.handler", {
       *   filter: {
       *     price_usd: [{numeric: [">=", 100]}]
       *   }
       * });
       * ```
       *
       * Customize the subscriber function.
       *
       * ```js
       * topic.subscribe({
       *   handler: "src/subscriber.handler",
       *   timeout: "60 seconds"
       * });
       * ```
       */
      subscribe(subscriber, args = {}) {
        const parent = this;
        const parentName = this.constructorName;
        const id = sanitizeToPascalCase(
          hashStringToPrettyString(JSON.stringify(args.filter ?? {}), 4)
        );
        const fn = Function.fromDefinition(
          parent,
          `${parentName}Subscriber${id}`,
          subscriber,
          {
            description: `Subscribed to ${parentName}`
          }
        );
        const permission = new aws13.lambda.Permission(
          `${parentName}Subscriber${id}Permissions`,
          {
            action: "lambda:InvokeFunction",
            function: fn.arn,
            principal: "sns.amazonaws.com",
            sourceArn: this.arn
          },
          { parent }
        );
        new aws13.sns.TopicSubscription(
          `${parentName}Subscription${id}`,
          transform(args?.transform?.subscription, {
            topic: this.topic.arn,
            protocol: "lambda",
            endpoint: fn.arn,
            filterPolicy: JSON.stringify(args.filter ?? {})
          }),
          { parent, dependsOn: [permission] }
        );
        return this;
      }
      /** @internal */
      getSSTLink() {
        return {
          properties: {
            arn: this.arn
          }
        };
      }
      /** @internal */
      getSSTAWSPermissions() {
        return [
          {
            actions: ["sns:*"],
            resources: [this.arn]
          }
        ];
      }
    };
  }
});

// .sst/platform/src/components/aws/providers/bucket-files.ts
import fs4 from "fs";
import { dynamic as dynamic4 } from "@pulumi/pulumi";
import { S3Client as S3Client2, PutObjectCommand } from "@aws-sdk/client-s3";
var Provider5, BucketFiles;
var init_bucket_files = __esm({
  ".sst/platform/src/components/aws/providers/bucket-files.ts"() {
    "use strict";
    init_define_app();
    init_define_cli();
    init_run();
    init_client();
    Provider5 = class {
      async create(inputs) {
        await this.upload(inputs.bucketName, inputs.files, []);
        return { id: "files" };
      }
      async update(id, olds, news) {
        await this.upload(
          news.bucketName,
          news.files,
          news.bucketName === olds.bucketName ? olds.files : []
        );
        return {};
      }
      async upload(bucketName, files, oldFiles) {
        const oldFilesMap = new Map(oldFiles.map((f) => [f.key, f]));
        const s34 = useClient(S3Client2);
        await Promise.all(
          files.map(async (file) => {
            const oldFile = oldFilesMap.get(file.key);
            if (oldFile && oldFile.hash === file.hash && oldFile.cacheControl === file.cacheControl && oldFile.contentType === file.contentType) {
              return;
            }
            await s34.send(
              new PutObjectCommand({
                Bucket: bucketName,
                Key: file.key,
                Body: await fs4.promises.readFile(file.source),
                CacheControl: file.cacheControl,
                ContentType: file.contentType
              })
            );
          })
        );
      }
    };
    BucketFiles = class extends dynamic4.Resource {
      constructor(name, args, opts) {
        super(new Provider5(), `${name}.sst.aws.BucketFiles`, args, opts);
      }
    };
  }
});

// .sst/platform/src/components/aws/providers/distribution-invalidation.ts
import { dynamic as dynamic5 } from "@pulumi/pulumi";
import {
  CloudFrontClient as CloudFrontClient2,
  CreateInvalidationCommand,
  waitUntilInvalidationCompleted
} from "@aws-sdk/client-cloudfront";
var FILE_LIMIT, WILDCARD_LIMIT, Provider6, DistributionInvalidation;
var init_distribution_invalidation = __esm({
  ".sst/platform/src/components/aws/providers/distribution-invalidation.ts"() {
    "use strict";
    init_define_app();
    init_define_cli();
    init_run();
    init_client();
    FILE_LIMIT = 3e3;
    WILDCARD_LIMIT = 15;
    Provider6 = class {
      async create(inputs) {
        await this.handle(inputs);
        return { id: "invalidation" };
      }
      async update(id, olds, news) {
        await this.handle(news);
        return {};
      }
      async handle(inputs) {
        const client = useClient(CloudFrontClient2);
        const ids = await this.invalidate(client, inputs);
        if (inputs.wait) {
          await this.waitForInvalidation(client, inputs, ids);
        }
      }
      async invalidate(client, inputs) {
        const { distributionId, paths } = inputs;
        const pathsFile = [];
        const pathsWildcard = [];
        for (const path17 of paths) {
          if (path17.trim().endsWith("*")) {
            pathsWildcard.push(path17);
          } else {
            pathsFile.push(path17);
          }
        }
        const stepsCount = Math.max(
          Math.ceil(pathsFile.length / FILE_LIMIT),
          Math.ceil(pathsWildcard.length / WILDCARD_LIMIT)
        );
        const invalidationIds = [];
        for (let i = 0; i < stepsCount; i++) {
          const stepPaths = [
            ...pathsFile.slice(i * FILE_LIMIT, (i + 1) * FILE_LIMIT),
            ...pathsWildcard.slice(i * WILDCARD_LIMIT, (i + 1) * WILDCARD_LIMIT)
          ];
          invalidationIds.push(
            await this.invalidateChunk(client, distributionId, stepPaths)
          );
        }
        return invalidationIds;
      }
      async invalidateChunk(client, distributionId, paths) {
        const result2 = await client.send(
          new CreateInvalidationCommand({
            DistributionId: distributionId,
            InvalidationBatch: {
              CallerReference: Date.now().toString(),
              Paths: {
                Quantity: paths.length,
                Items: paths
              }
            }
          })
        );
        const invalidationId = result2.Invalidation?.Id;
        if (!invalidationId) {
          throw new Error("Invalidation ID not found");
        }
        return invalidationId;
      }
      async waitForInvalidation(client, inputs, invalidationIds) {
        const { distributionId } = inputs;
        for (const invalidationId of invalidationIds) {
          try {
            await waitUntilInvalidationCompleted(
              {
                client,
                maxWaitTime: 600
              },
              {
                DistributionId: distributionId,
                Id: invalidationId
              }
            );
          } catch (e) {
          }
        }
      }
    };
    DistributionInvalidation = class extends dynamic5.Resource {
      constructor(name, args, opts) {
        super(
          new Provider6(),
          `${name}.sst.aws.DistributionInvalidation`,
          args,
          opts
        );
      }
    };
  }
});

// .sst/platform/src/components/base/base-static-site.ts
import fs5 from "fs";
import path4 from "path";
import { execSync } from "child_process";
import { all as all10, output as output19 } from "@pulumi/pulumi";
function prepare(args) {
  const sitePath = normalizeSitePath();
  const environment = normalizeEnvironment();
  const indexPage = normalizeIndexPage();
  generateViteTypes();
  return {
    sitePath,
    environment,
    indexPage
  };
  function normalizeSitePath() {
    return output19(args.path).apply((sitePath2) => {
      if (!sitePath2)
        return ".";
      if (!fs5.existsSync(sitePath2)) {
        throw new VisibleError(`No site found at "${path4.resolve(sitePath2)}".`);
      }
      return sitePath2;
    });
  }
  function normalizeEnvironment() {
    return output19(args.environment).apply((environment2) => environment2 ?? {});
  }
  function normalizeIndexPage() {
    return output19(args.indexPage).apply(
      (indexPage2) => indexPage2 ?? "index.html"
    );
  }
  function generateViteTypes() {
    return all10([sitePath, args.vite, environment]).apply(
      ([sitePath2, vite, environment2]) => {
        let typesPath = vite?.types;
        if (!typesPath) {
          if (fs5.existsSync(path4.join(sitePath2, "vite.config.js")) || fs5.existsSync(path4.join(sitePath2, "vite.config.ts"))) {
            typesPath = "src/sst-env.d.ts";
          }
        }
        if (!typesPath) {
          return;
        }
        const filePath = path4.resolve(path4.join(sitePath2, typesPath));
        const content = `/// <reference types="vite/client" />
  interface ImportMetaEnv {
  ${Object.keys(environment2).map((key) => `  readonly ${key}: string`).join("\n")}
  }
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }`;
        const fileDir = path4.dirname(filePath);
        fs5.mkdirSync(fileDir, { recursive: true });
        fs5.writeFileSync(filePath, content);
      }
    );
  }
}
function buildApp(name, build3, sitePath, environment) {
  return all10([build3, sitePath, environment]).apply(
    ([build4, sitePath2, environment2]) => {
      if (true)
        return path4.join(define_cli_default.paths.platform, "functions", "empty-site");
      if (!build4)
        return sitePath2;
      if (!process.env.SKIP) {
        console.debug(`Running "${build4.command}" script`);
        try {
          execSync(build4.command, {
            cwd: sitePath2,
            stdio: "inherit",
            env: {
              ...process.env,
              ...environment2
            }
          });
        } catch (e) {
          throw new VisibleError(`There was a problem building "${name}".`);
        }
      }
      if (!fs5.existsSync(build4.output)) {
        throw new VisibleError(
          `No build output found at "${path4.resolve(build4.output)}".`
        );
      }
      return build4.output;
    }
  );
}
function cleanup(urn, url, sitePath, environment) {
  all10([sitePath, environment]).apply(([sitepath, environment2]) => {
    Link.Receiver.register(sitepath, [], environment2);
  });
  Hint.register(urn, url);
}
var init_base_static_site = __esm({
  ".sst/platform/src/components/base/base-static-site.ts"() {
    "use strict";
    init_define_app();
    init_define_cli();
    init_run();
    init_hint();
    init_link();
    init_error();
  }
});

// .sst/platform/src/components/aws/static-site.ts
import fs6 from "fs";
import path5 from "path";
import crypto3 from "crypto";
import * as aws14 from "@pulumi/aws";
import {
  all as all11,
  interpolate as interpolate8,
  output as output20
} from "@pulumi/pulumi";
import { globSync } from "glob";
var StaticSite;
var init_static_site = __esm({
  ".sst/platform/src/components/aws/static-site.ts"() {
    "use strict";
    init_define_app();
    init_define_cli();
    init_run();
    init_cdn();
    init_bucket();
    init_component();
    init_bucket_files();
    init_distribution_invalidation();
    init_base_static_site();
    StaticSite = class extends Component {
      cdn;
      assets;
      constructor(name, args = {}, opts = {}) {
        super("sst:aws:StaticSite", name, args, opts);
        const parent = this;
        const { sitePath, environment, indexPage } = prepare(args);
        const outputPath = buildApp(name, args.build, sitePath, environment);
        const access = createCloudFrontOriginAccessIdentity();
        const bucket = createS3Bucket();
        const bucketFile = uploadAssets();
        const distribution = createDistribution();
        createDistributionInvalidation();
        this.assets = bucket;
        this.cdn = distribution;
        cleanup(this.urn, this.url, sitePath, environment);
        this.registerOutputs({
          _metadata: {
            path: sitePath,
            environment,
            url: this.url
          }
        });
        function createCloudFrontOriginAccessIdentity() {
          return new aws14.cloudfront.OriginAccessIdentity(
            `${name}OriginAccessIdentity`,
            {},
            { parent }
          );
        }
        function createS3Bucket() {
          return new Bucket(
            `${name}Assets`,
            transform(args.transform?.assets, {
              transform: {
                policy: (policyArgs) => {
                  const newPolicy = aws14.iam.getPolicyDocumentOutput({
                    statements: [
                      {
                        principals: [
                          {
                            type: "AWS",
                            identifiers: [access.iamArn]
                          }
                        ],
                        actions: ["s3:GetObject"],
                        resources: [interpolate8`${bucket.arn}/*`]
                      }
                    ]
                  }).json;
                  policyArgs.policy = output20([policyArgs.policy, newPolicy]).apply(
                    ([policy, newPolicy2]) => {
                      const policyJson = JSON.parse(policy);
                      const newPolicyJson = JSON.parse(newPolicy2);
                      policyJson.Statement.push(...newPolicyJson.Statement);
                      return JSON.stringify(policyJson);
                    }
                  );
                }
              }
            }),
            { parent, retainOnDelete: false }
          );
        }
        function uploadAssets() {
          return all11([outputPath, args.assets]).apply(
            async ([outputPath2, assets]) => {
              const bucketFiles = [];
              const fileOptions = assets?.fileOptions ?? [
                {
                  files: "**",
                  cacheControl: "max-age=0,no-cache,no-store,must-revalidate"
                },
                {
                  files: ["**/*.js", "**/*.css"],
                  cacheControl: "max-age=31536000,public,immutable"
                }
              ];
              const filesProcessed = [];
              for (const fileOption of fileOptions.reverse()) {
                const files = globSync(fileOption.files, {
                  cwd: path5.resolve(outputPath2),
                  nodir: true,
                  dot: true,
                  ignore: [
                    ".sst/**",
                    ...typeof fileOption.ignore === "string" ? [fileOption.ignore] : fileOption.ignore ?? []
                  ]
                }).filter((file) => !filesProcessed.includes(file));
                bucketFiles.push(
                  ...await Promise.all(
                    files.map(async (file) => {
                      const source = path5.resolve(outputPath2, file);
                      const content = await fs6.promises.readFile(source);
                      const hash = crypto3.createHash("sha256").update(content).digest("hex");
                      return {
                        source,
                        key: file,
                        hash,
                        cacheControl: fileOption.cacheControl,
                        contentType: getContentType(file, "UTF-8")
                      };
                    })
                  )
                );
                filesProcessed.push(...files);
              }
              return new BucketFiles(
                `${name}AssetFiles`,
                {
                  bucketName: bucket.name,
                  files: bucketFiles
                },
                { parent, ignoreChanges: true ? ["*"] : void 0 }
              );
            }
          );
        }
        function getContentType(filename, textEncoding) {
          const ext = filename.endsWith(".well-known/site-association-json") ? ".json" : path5.extname(filename);
          const extensions = {
            [".txt"]: { mime: "text/plain", isText: true },
            [".htm"]: { mime: "text/html", isText: true },
            [".html"]: { mime: "text/html", isText: true },
            [".xhtml"]: { mime: "application/xhtml+xml", isText: true },
            [".css"]: { mime: "text/css", isText: true },
            [".js"]: { mime: "text/javascript", isText: true },
            [".mjs"]: { mime: "text/javascript", isText: true },
            [".apng"]: { mime: "image/apng", isText: false },
            [".avif"]: { mime: "image/avif", isText: false },
            [".gif"]: { mime: "image/gif", isText: false },
            [".jpeg"]: { mime: "image/jpeg", isText: false },
            [".jpg"]: { mime: "image/jpeg", isText: false },
            [".png"]: { mime: "image/png", isText: false },
            [".svg"]: { mime: "image/svg+xml", isText: true },
            [".bmp"]: { mime: "image/bmp", isText: false },
            [".tiff"]: { mime: "image/tiff", isText: false },
            [".webp"]: { mime: "image/webp", isText: false },
            [".ico"]: { mime: "image/vnd.microsoft.icon", isText: false },
            [".eot"]: { mime: "application/vnd.ms-fontobject", isText: false },
            [".ttf"]: { mime: "font/ttf", isText: false },
            [".otf"]: { mime: "font/otf", isText: false },
            [".woff"]: { mime: "font/woff", isText: false },
            [".woff2"]: { mime: "font/woff2", isText: false },
            [".json"]: { mime: "application/json", isText: true },
            [".jsonld"]: { mime: "application/ld+json", isText: true },
            [".xml"]: { mime: "application/xml", isText: true },
            [".pdf"]: { mime: "application/pdf", isText: false },
            [".zip"]: { mime: "application/zip", isText: false },
            [".wasm"]: { mime: "application/wasm", isText: false }
          };
          const extensionData = extensions[ext];
          const mime = extensionData?.mime ?? "application/octet-stream";
          const charset = extensionData?.isText && textEncoding !== "none" ? `;charset=${textEncoding}` : "";
          return `${mime}${charset}`;
        }
        function createDistribution() {
          return new Cdn(
            `${name}Cdn`,
            {
              domain: args.domain,
              wait: false,
              transform: {
                distribution: (distribution2) => ({
                  ...distribution2,
                  comment: `${name} site`,
                  origins: [
                    {
                      originId: "s3",
                      domainName: bucket.nodes.bucket.bucketRegionalDomainName,
                      originPath: "",
                      s3OriginConfig: {
                        originAccessIdentity: access.cloudfrontAccessIdentityPath
                      }
                    }
                  ],
                  defaultRootObject: indexPage,
                  customErrorResponses: args.errorPage ? [
                    {
                      errorCode: 403,
                      responsePagePath: interpolate8`/${args.errorPage}`
                    },
                    {
                      errorCode: 404,
                      responsePagePath: interpolate8`/${args.errorPage}`
                    }
                  ] : [
                    {
                      errorCode: 403,
                      responsePagePath: interpolate8`/${indexPage}`,
                      responseCode: 200
                    },
                    {
                      errorCode: 404,
                      responsePagePath: interpolate8`/${indexPage}`,
                      responseCode: 200
                    }
                  ],
                  defaultCacheBehavior: {
                    targetOriginId: "s3",
                    viewerProtocolPolicy: "redirect-to-https",
                    allowedMethods: ["GET", "HEAD", "OPTIONS"],
                    cachedMethods: ["GET", "HEAD"],
                    compress: true,
                    // CloudFront's managed CachingOptimized policy
                    cachePolicyId: "658327ea-f89d-4fab-a63d-7e88639e58f6"
                  }
                })
              }
            },
            // create distribution after s3 upload finishes
            { dependsOn: bucketFile, parent }
          );
        }
        function createDistributionInvalidation() {
          all11([outputPath, args.invalidation]).apply(
            ([outputPath2, invalidationRaw]) => {
              if (invalidationRaw === false)
                return;
              const invalidation = {
                wait: false,
                paths: "all",
                ...invalidationRaw
              };
              const invalidationPaths = invalidation.paths === "all" ? ["/*"] : invalidation.paths;
              if (invalidationPaths.length === 0)
                return;
              const hash = crypto3.createHash("md5");
              globSync("**", {
                dot: true,
                nodir: true,
                follow: true,
                cwd: path5.resolve(outputPath2)
              }).forEach(
                (filePath) => hash.update(fs6.readFileSync(path5.resolve(outputPath2, filePath)))
              );
              new DistributionInvalidation(
                `${name}Invalidation`,
                {
                  distributionId: distribution.nodes.distribution.id,
                  paths: invalidationPaths,
                  version: hash.digest("hex"),
                  wait: invalidation.wait
                },
                {
                  parent,
                  ignoreChanges: true ? ["*"] : void 0
                }
              );
            }
          );
        }
      }
      /**
       * The URL of the website.
       *
       * If the `domain` is set, this is the URL with the custom domain.
       * Otherwise, it's the autogenerated CloudFront URL.
       */
      get url() {
        return all11([this.cdn.domainUrl, this.cdn.url]).apply(
          ([domainUrl, url]) => domainUrl ?? url
        );
      }
      /**
       * The underlying [resources](/docs/components/#nodes) this component creates.
       */
      get nodes() {
        return {
          /**
           * The Amazon S3 Bucket that stores the assets.
           */
          assets: this.assets
        };
      }
      /** @internal */
      getSSTLink() {
        return {
          properties: {
            url: this.url
          }
        };
      }
    };
  }
});

// .sst/platform/src/components/aws/providers/embeddings-table.ts
import { dynamic as dynamic6 } from "@pulumi/pulumi";
import {
  RDSDataClient,
  ExecuteStatementCommand
} from "@aws-sdk/client-rds-data";
var Provider7, EmbeddingsTable;
var init_embeddings_table = __esm({
  ".sst/platform/src/components/aws/providers/embeddings-table.ts"() {
    "use strict";
    init_define_app();
    init_define_cli();
    init_run();
    init_client();
    Provider7 = class {
      async create(inputs) {
        await this.createDatabase(inputs);
        await this.enablePgvectorExtension(inputs);
        await this.enablePgtrgmExtension(inputs);
        await this.createTable(inputs);
        await this.createEmbeddingIndex(inputs);
        await this.createMetadataIndex(inputs);
        return {
          id: inputs.tableName,
          outs: { vectorSize: inputs.vectorSize }
        };
      }
      async update(id, olds, news) {
        await this.createDatabase(news);
        await this.enablePgvectorExtension(news);
        await this.enablePgtrgmExtension(news);
        if (olds.vectorSize !== news.vectorSize) {
          await this.removeTable(news);
        }
        await this.createTable(news);
        await this.createEmbeddingIndex(news);
        await this.createMetadataIndex(news);
        return {
          outs: { vectorSize: news.vectorSize }
        };
      }
      async createDatabase(inputs) {
        const client = useClient(RDSDataClient);
        try {
          await client.send(
            new ExecuteStatementCommand({
              resourceArn: inputs.clusterArn,
              secretArn: inputs.secretArn,
              sql: `create database ${inputs.databaseName}`
            })
          );
        } catch (error) {
          if (error.message.endsWith("SQLState: 42P04"))
            return;
          throw error;
        }
      }
      async enablePgvectorExtension(inputs) {
        const client = useClient(RDSDataClient);
        try {
          await client.send(
            new ExecuteStatementCommand({
              resourceArn: inputs.clusterArn,
              secretArn: inputs.secretArn,
              database: inputs.databaseName,
              sql: `create extension vector;`
            })
          );
        } catch (error) {
          if (error.message.endsWith("SQLState: 42710"))
            return;
          throw error;
        }
      }
      async enablePgtrgmExtension(inputs) {
        const client = useClient(RDSDataClient);
        try {
          await client.send(
            new ExecuteStatementCommand({
              resourceArn: inputs.clusterArn,
              secretArn: inputs.secretArn,
              database: inputs.databaseName,
              sql: `create extension pg_trgm;`
            })
          );
        } catch (error) {
          if (error.message.endsWith("SQLState: 42710"))
            return;
          throw error;
        }
      }
      async createTable(inputs) {
        const client = useClient(RDSDataClient);
        try {
          await client.send(
            new ExecuteStatementCommand({
              resourceArn: inputs.clusterArn,
              secretArn: inputs.secretArn,
              database: inputs.databaseName,
              sql: `create table ${inputs.tableName} (
            id bigserial primary key,
            embedding vector(${inputs.vectorSize}),
            metadata jsonb
          );`
            })
          );
        } catch (error) {
          if (error.message.endsWith("SQLState: 42P07"))
            return;
          throw error;
        }
      }
      async removeTable(inputs) {
        await useClient(RDSDataClient).send(
          new ExecuteStatementCommand({
            resourceArn: inputs.clusterArn,
            secretArn: inputs.secretArn,
            database: inputs.databaseName,
            sql: `drop table if exists ${inputs.tableName};`
          })
        );
      }
      async createEmbeddingIndex(inputs) {
        try {
          await useClient(RDSDataClient).send(
            new ExecuteStatementCommand({
              resourceArn: inputs.clusterArn,
              secretArn: inputs.secretArn,
              database: inputs.databaseName,
              sql: `create index on ${inputs.tableName} using hnsw (embedding vector_cosine_ops);`
            })
          );
        } catch (error) {
          if (error.message.endsWith("SQLState: 42P07"))
            return;
          throw error;
        }
      }
      async createMetadataIndex(inputs) {
        try {
          await useClient(RDSDataClient).send(
            new ExecuteStatementCommand({
              resourceArn: inputs.clusterArn,
              secretArn: inputs.secretArn,
              database: inputs.databaseName,
              sql: `create index on ${inputs.tableName} using gin (metadata);`
            })
          );
        } catch (error) {
          if (error.message.endsWith("SQLState: 42P07"))
            return;
          throw error;
        }
      }
    };
    EmbeddingsTable = class extends dynamic6.Resource {
      constructor(name, args, opts) {
        super(new Provider7(), `${name}.sst.aws.EmbeddingsTable`, args, opts);
      }
    };
  }
});

// .sst/platform/src/components/aws/vector.ts
import path6 from "path";
import {
  all as all12,
  interpolate as interpolate9,
  output as output21
} from "@pulumi/pulumi";
var ModelInfo, Vector;
var init_vector = __esm({
  ".sst/platform/src/components/aws/vector.ts"() {
    "use strict";
    init_define_app();
    init_define_cli();
    init_run();
    init_component();
    init_postgres();
    init_embeddings_table();
    init_function();
    init_error();
    ModelInfo = {
      "amazon.titan-embed-text-v1": { provider: "bedrock", size: 1536 },
      "amazon.titan-embed-image-v1": { provider: "bedrock", size: 1024 },
      "text-embedding-ada-002": { provider: "openai", size: 1536 },
      "text-embedding-3-small": { provider: "openai", size: 1536 },
      "text-embedding-3-large": { provider: "openai", size: 2e3 }
    };
    Vector = class extends Component {
      ingestHandler;
      retrieveHandler;
      removeHandler;
      constructor(name, args, opts) {
        super("sst:aws:Vector", name, args, opts);
        const parent = this;
        const model = normalizeModel();
        const vectorSize = normalizeVectorSize();
        const openAiApiKey = normalizeOpenAiApiKey();
        const databaseName = normalizeDatabaseName();
        const tableName = normalizeTableName();
        const postgres = createDB();
        createDBTable();
        const ingestHandler = createIngestHandler();
        const retrieveHandler = createRetrieveHandler();
        const removeHandler = createRemoveHandler();
        this.ingestHandler = ingestHandler;
        this.retrieveHandler = retrieveHandler;
        this.removeHandler = removeHandler;
        function normalizeModel() {
          return output21(args?.model).apply((model2) => {
            if (model2 && !ModelInfo[model2])
              throw new Error(`Invalid model: ${model2}`);
            return model2 ?? "amazon.titan-embed-image-v1";
          });
        }
        function normalizeOpenAiApiKey() {
          return all12([model, args?.openAiApiKey]).apply(([model2, openAiApiKey2]) => {
            if (ModelInfo[model2].provider === "openai" && !openAiApiKey2) {
              throw new VisibleError(
                `Please pass in the OPENAI_API_KEY via environment variable to use the ${model2} model. You can get your API keys here: https://platform.openai.com/api-keys`
              );
            }
            return openAiApiKey2;
          });
        }
        function normalizeVectorSize() {
          return model.apply((model2) => ModelInfo[model2].size);
        }
        function normalizeDatabaseName() {
          return define_app_default.stage;
        }
        function normalizeTableName() {
          return "embeddings";
        }
        function createDB() {
          return new Postgres(
            `${name}Database`,
            transform(args?.transform?.postgres, {}),
            { parent }
          );
        }
        function createDBTable() {
          new EmbeddingsTable(
            `${name}Table`,
            {
              clusterArn: postgres.nodes.cluster.arn,
              secretArn: postgres.nodes.cluster.masterUserSecrets[0].secretArn,
              databaseName,
              tableName,
              vectorSize
            },
            { parent, dependsOn: postgres.nodes.instance }
          );
        }
        function createIngestHandler() {
          return new Function(
            `${name}Ingestor`,
            {
              description: `${name} ingest handler`,
              bundle: buildBundlePath(),
              handler: "index.ingest",
              environment: buildHandlerEnvironment(),
              permissions: buildHandlerPermissions()
            },
            { parent }
          );
        }
        function createRetrieveHandler() {
          return new Function(
            `${name}Retriever`,
            {
              description: `${name} retrieve handler`,
              bundle: buildBundlePath(),
              handler: "index.retrieve",
              environment: buildHandlerEnvironment(),
              permissions: buildHandlerPermissions()
            },
            { parent }
          );
        }
        function createRemoveHandler() {
          return new Function(
            `${name}Remover`,
            {
              description: `${name} remove handler`,
              bundle: buildBundlePath(),
              handler: "index.remove",
              environment: buildHandlerEnvironment(),
              permissions: buildHandlerPermissions()
            },
            { parent }
          );
        }
        function buildBundlePath() {
          return path6.join(define_cli_default.paths.platform, "dist", "vector-handler");
        }
        function buildHandlerEnvironment() {
          return all12([model, openAiApiKey]).apply(([model2, openAiApiKey2]) => ({
            CLUSTER_ARN: postgres.nodes.cluster.arn,
            SECRET_ARN: postgres.nodes.cluster.masterUserSecrets[0].secretArn,
            DATABASE_NAME: databaseName,
            TABLE_NAME: tableName,
            MODEL: model2,
            MODEL_PROVIDER: ModelInfo[model2].provider,
            ...openAiApiKey2 ? {
              OPENAI_API_KEY: openAiApiKey2,
              OPENAI_MODEL_DIMENSIONS: ModelInfo[model2].size.toString()
            } : {}
          }));
        }
        function buildHandlerPermissions() {
          return [
            {
              actions: ["bedrock:InvokeModel"],
              resources: [
                interpolate9`arn:aws:bedrock:us-east-1::foundation-model/*`
              ]
            },
            {
              actions: ["secretsmanager:GetSecretValue"],
              resources: [postgres.nodes.cluster.masterUserSecrets[0].secretArn]
            },
            {
              actions: ["rds-data:ExecuteStatement"],
              resources: [postgres.nodes.cluster.arn]
            }
          ];
        }
      }
      /**
       * The name of the ingestor Lambda function.
       */
      get ingestor() {
        return this.ingestHandler.name;
      }
      /**
       * The name of the retriever Lambda function.
       */
      get retriever() {
        return this.retrieveHandler.name;
      }
      /**
       * The name of the remover Lambda function.
       */
      get remover() {
        return this.removeHandler.name;
      }
      /** @internal */
      getSSTLink() {
        return {
          properties: {
            ingestor: this.ingestor,
            retriever: this.retriever,
            remover: this.remover
          }
        };
      }
      /** @internal */
      getSSTAWSPermissions() {
        return [
          {
            actions: ["lambda:InvokeFunction"],
            resources: [
              this.ingestHandler.nodes.function.arn,
              this.retrieveHandler.nodes.function.arn,
              this.removeHandler.nodes.function.arn
            ]
          }
        ];
      }
    };
  }
});

// .sst/platform/src/components/aws/providers/origin-access-identity.ts
import { dynamic as dynamic7 } from "@pulumi/pulumi";
import {
  CloudFrontClient as CloudFrontClient3,
  GetCloudFrontOriginAccessIdentityCommand,
  CreateCloudFrontOriginAccessIdentityCommand,
  DeleteCloudFrontOriginAccessIdentityCommand
} from "@aws-sdk/client-cloudfront";
var Provider8, OriginAccessIdentity;
var init_origin_access_identity = __esm({
  ".sst/platform/src/components/aws/providers/origin-access-identity.ts"() {
    "use strict";
    init_define_app();
    init_define_cli();
    init_run();
    init_client();
    Provider8 = class {
      async create(inputs) {
        const client = useClient(CloudFrontClient3);
        const ret = await client.send(
          new CreateCloudFrontOriginAccessIdentityCommand({
            CloudFrontOriginAccessIdentityConfig: {
              CallerReference: Date.now().toString(),
              Comment: "Created by SST"
            }
          })
        );
        const id = ret.CloudFrontOriginAccessIdentity?.Id;
        return { id, outs: {} };
      }
      async delete(id, outs) {
        const client = useClient(CloudFrontClient3);
        const ret = await client.send(
          new GetCloudFrontOriginAccessIdentityCommand({ Id: id })
        );
        await client.send(
          new DeleteCloudFrontOriginAccessIdentityCommand({
            Id: id,
            IfMatch: ret.ETag
          })
        );
      }
    };
    OriginAccessIdentity = class extends dynamic7.Resource {
      constructor(name, args, opts) {
        super(new Provider8(), `${name}.sst.aws.OriginAccessIdentity`, args, opts);
      }
    };
  }
});

// .sst/platform/src/components/aws/ssr-site.ts
import path7 from "path";
import fs7 from "fs";
import { globSync as globSync2 } from "glob";
import crypto4 from "crypto";
import {
  output as output22,
  all as all13,
  interpolate as interpolate10
} from "@pulumi/pulumi";
import * as aws15 from "@pulumi/aws";
function prepare2(args, opts) {
  const sitePath = normalizeSitePath();
  const partition = normalizePartition();
  const region = normalizeRegion();
  checkSupportedRegion();
  return {
    sitePath,
    partition,
    region
  };
  function normalizeSitePath() {
    return output22(args.path).apply((sitePath2) => {
      if (!sitePath2)
        return ".";
      if (!fs7.existsSync(sitePath2)) {
        throw new VisibleError(`No site found at "${path7.resolve(sitePath2)}"`);
      }
      return sitePath2;
    });
  }
  function normalizePartition() {
    return aws15.getPartitionOutput(void 0, { provider: opts?.provider }).partition;
  }
  function normalizeRegion() {
    return aws15.getRegionOutput(void 0, { provider: opts?.provider }).name;
  }
  function checkSupportedRegion() {
    region.apply((region2) => {
      if (![
        "ap-south-2",
        "ap-southeast-4",
        "eu-south-2",
        "eu-central-2",
        "il-central-1",
        "me-central-1"
      ].includes(region2))
        return;
      throw new VisibleError(
        `Region ${region2} is not currently supported. Please use a different region.`
      );
    });
  }
}
function createBucket(parent, name, partition, args) {
  const access = createCloudFrontOriginAccessIdentity();
  const bucket = createS3Bucket();
  return { access, bucket };
  function createCloudFrontOriginAccessIdentity() {
    return new OriginAccessIdentity(
      `${name}OriginAccessIdentity`,
      {},
      { parent }
    );
  }
  function createS3Bucket() {
    return new Bucket(
      `${name}Assets`,
      transform(args.transform?.assets, {
        transform: {
          policy: (policyArgs) => {
            const newPolicy = aws15.iam.getPolicyDocumentOutput({
              statements: [
                {
                  principals: [
                    {
                      type: "AWS",
                      identifiers: [
                        interpolate10`arn:${partition}:iam::cloudfront:user/CloudFront Origin Access Identity ${access.id}`
                      ]
                    }
                  ],
                  actions: ["s3:GetObject"],
                  resources: [interpolate10`${bucket.arn}/*`]
                }
              ]
            }).json;
            policyArgs.policy = output22([policyArgs.policy, newPolicy]).apply(
              ([policy, newPolicy2]) => {
                const policyJson = JSON.parse(policy);
                const newPolicyJson = JSON.parse(newPolicy2);
                policyJson.Statement.push(...newPolicyJson.Statement);
                return JSON.stringify(policyJson);
              }
            );
          }
        }
      }),
      { parent, retainOnDelete: false }
    );
  }
}
function createServersAndDistribution(parent, name, args, outputPath, access, bucket, plan) {
  return all13([outputPath, plan]).apply(([outputPath2, plan2]) => {
    const ssrFunctions = [];
    let singletonCachePolicy;
    const bucketFile = uploadAssets();
    const cfFunctions = createCloudFrontFunctions();
    const edgeFunctions = createEdgeFunctions();
    const origins = buildOrigins();
    const originGroups = buildOriginGroups();
    const distribution = createDistribution();
    allowServerFunctionInvalidateDistribution();
    createDistributionInvalidation();
    createWarmer();
    return {
      distribution,
      ssrFunctions,
      edgeFunctions
    };
    function uploadAssets() {
      return output22(args.assets).apply(async (assets) => {
        const versionedFilesTTL = 31536e3;
        const nonVersionedFilesTTL = 86400;
        const bucketFiles = [];
        for (const origin of Object.values(plan2.origins)) {
          if (!origin.s3)
            continue;
          for (const copy of origin.s3.copy) {
            const fileOptions = [
              // unversioned files
              {
                files: "**",
                ignore: copy.versionedSubDir ? path7.posix.join(copy.versionedSubDir, "**") : void 0,
                cacheControl: assets?.nonVersionedFilesCacheHeader ?? `public,max-age=0,s-maxage=${nonVersionedFilesTTL},stale-while-revalidate=${nonVersionedFilesTTL}`
              },
              // versioned files
              ...copy.versionedSubDir ? [
                {
                  files: path7.posix.join(copy.versionedSubDir, "**"),
                  cacheControl: assets?.versionedFilesCacheHeader ?? `public,max-age=${versionedFilesTTL},immutable`
                }
              ] : [],
              ...assets?.fileOptions ?? []
            ];
            const filesUploaded = [];
            for (const fileOption of fileOptions.reverse()) {
              const files = globSync2(fileOption.files, {
                cwd: path7.resolve(outputPath2, copy.from),
                nodir: true,
                dot: true,
                ignore: fileOption.ignore
              }).filter((file) => !filesUploaded.includes(file));
              bucketFiles.push(
                ...await Promise.all(
                  files.map(async (file) => {
                    const source = path7.resolve(outputPath2, copy.from, file);
                    const content = await fs7.promises.readFile(source);
                    const hash = crypto4.createHash("sha256").update(content).digest("hex");
                    return {
                      source,
                      key: path7.posix.join(copy.to, file),
                      hash,
                      cacheControl: fileOption.cacheControl,
                      contentType: getContentType(file, "UTF-8")
                    };
                  })
                )
              );
              filesUploaded.push(...files);
            }
          }
        }
        return new BucketFiles(
          `${name}AssetFiles`,
          {
            bucketName: bucket.name,
            files: bucketFiles
          },
          { parent, ignoreChanges: true ? ["*"] : void 0 }
        );
      });
    }
    function getContentType(filename, textEncoding) {
      const ext = filename.endsWith(".well-known/site-association-json") ? ".json" : path7.extname(filename);
      const extensions = {
        [".txt"]: { mime: "text/plain", isText: true },
        [".htm"]: { mime: "text/html", isText: true },
        [".html"]: { mime: "text/html", isText: true },
        [".xhtml"]: { mime: "application/xhtml+xml", isText: true },
        [".css"]: { mime: "text/css", isText: true },
        [".js"]: { mime: "text/javascript", isText: true },
        [".mjs"]: { mime: "text/javascript", isText: true },
        [".apng"]: { mime: "image/apng", isText: false },
        [".avif"]: { mime: "image/avif", isText: false },
        [".gif"]: { mime: "image/gif", isText: false },
        [".jpeg"]: { mime: "image/jpeg", isText: false },
        [".jpg"]: { mime: "image/jpeg", isText: false },
        [".png"]: { mime: "image/png", isText: false },
        [".svg"]: { mime: "image/svg+xml", isText: true },
        [".bmp"]: { mime: "image/bmp", isText: false },
        [".tiff"]: { mime: "image/tiff", isText: false },
        [".webp"]: { mime: "image/webp", isText: false },
        [".ico"]: { mime: "image/vnd.microsoft.icon", isText: false },
        [".eot"]: { mime: "application/vnd.ms-fontobject", isText: false },
        [".ttf"]: { mime: "font/ttf", isText: false },
        [".otf"]: { mime: "font/otf", isText: false },
        [".woff"]: { mime: "font/woff", isText: false },
        [".woff2"]: { mime: "font/woff2", isText: false },
        [".json"]: { mime: "application/json", isText: true },
        [".jsonld"]: { mime: "application/ld+json", isText: true },
        [".xml"]: { mime: "application/xml", isText: true },
        [".pdf"]: { mime: "application/pdf", isText: false },
        [".zip"]: { mime: "application/zip", isText: false },
        [".wasm"]: { mime: "application/wasm", isText: false }
      };
      const extensionData = extensions[ext];
      const mime = extensionData?.mime ?? "application/octet-stream";
      const charset = extensionData?.isText && textEncoding !== "none" ? `;charset=${textEncoding}` : "";
      return `${mime}${charset}`;
    }
    function createCloudFrontFunctions() {
      const functions = {};
      Object.entries(plan2.cloudFrontFunctions ?? {}).forEach(
        ([fnName, { injections }]) => {
          functions[fnName] = new aws15.cloudfront.Function(
            `${name}CloudfrontFunction${sanitizeToPascalCase(fnName)}`,
            {
              runtime: "cloudfront-js-1.0",
              code: `
function handler(event) {
  var request = event.request;
  ${injections.join("\n")}
  return request;
}`
            },
            { parent }
          );
        }
      );
      return functions;
    }
    function createEdgeFunctions() {
      const functions = {};
      Object.entries(plan2.edgeFunctions ?? {}).forEach(
        ([fnName, { function: props }]) => {
          output22(args.link).apply((link) => {
            if (link?.length)
              throw new VisibleError(
                `Resource linking is not currently supported when deploying to the edge.`
              );
          });
          const fn = new Function(
            `${name}Edge${sanitizeToPascalCase(fnName)}`,
            {
              runtime: "nodejs20.x",
              timeout: "20 seconds",
              memory: "1024 MB",
              ...props,
              nodejs: {
                format: "esm",
                ...props.nodejs
              },
              environment: output22(args.environment).apply((environment) => ({
                ...environment,
                ...props.environment
              })),
              link: output22(args.link).apply((link) => [
                ...props.link ?? [],
                ...link ?? []
              ]),
              transform: {
                function: (args2) => ({ ...args2, publish: true })
              },
              live: false,
              _ignoreCodeChanges: true
            },
            { provider: useProvider("us-east-1"), parent }
          );
          functions[fnName] = fn;
        }
      );
      return functions;
    }
    function buildOrigins() {
      const origins2 = {};
      Object.entries(plan2.origins ?? {}).forEach(([name2, props]) => {
        if (props.s3) {
          origins2[name2] = buildS3Origin(name2, props.s3);
        } else if (props.server) {
          origins2[name2] = buildServerOrigin(name2, props.server);
        } else if (props.imageOptimization) {
          origins2[name2] = buildImageOptimizationOrigin(
            name2,
            props.imageOptimization
          );
        }
      });
      return origins2;
    }
    function buildOriginGroups() {
      const originGroups2 = {};
      Object.entries(plan2.origins ?? {}).forEach(([name2, props]) => {
        if (props.group) {
          originGroups2[name2] = {
            originId: name2,
            failoverCriteria: {
              statusCodes: props.group.fallbackStatusCodes
            },
            members: [
              { originId: props.group.primaryOriginName },
              { originId: props.group.fallbackOriginName }
            ]
          };
        }
      });
      return originGroups2;
    }
    function buildS3Origin(name2, props) {
      return {
        originId: name2,
        domainName: bucket.nodes.bucket.bucketRegionalDomainName,
        originPath: props.originPath ? `/${props.originPath}` : "",
        s3OriginConfig: {
          originAccessIdentity: interpolate10`origin-access-identity/cloudfront/${access.id}`
        }
      };
    }
    function buildServerOrigin(fnName, props) {
      const fn = new Function(
        `${name}${sanitizeToPascalCase(fnName)}`,
        transform(args.transform?.server, {
          description: `${name} server`,
          runtime: "nodejs20.x",
          timeout: "20 seconds",
          memory: "1024 MB",
          ...props.function,
          nodejs: {
            format: "esm",
            ...props.function.nodejs
          },
          environment: output22(args.environment).apply((environment) => ({
            ...environment,
            ...props.function.environment
          })),
          streaming: props.streaming,
          injections: args.warm ? [useServerFunctionWarmingInjection(props.streaming)] : [],
          link: output22(args.link).apply((link) => [
            ...props.function.link ?? [],
            ...link ?? []
          ]),
          url: true,
          live: false,
          _ignoreCodeChanges: true
        }),
        { parent }
      );
      ssrFunctions.push(fn);
      return {
        originId: fnName,
        domainName: fn.url.apply((url) => new URL(url).host),
        customOriginConfig: {
          httpPort: 80,
          httpsPort: 443,
          originProtocolPolicy: "https-only",
          originReadTimeout: 20,
          originSslProtocols: ["TLSv1.2"]
        }
      };
    }
    function buildImageOptimizationOrigin(fnName, props) {
      const fn = new Function(
        `${name}${sanitizeToPascalCase(fnName)}`,
        {
          timeout: "25 seconds",
          logging: {
            retention: "3 days"
          },
          permissions: [
            {
              actions: ["s3:GetObject"],
              resources: [interpolate10`${bucket.arn}/*`]
            }
          ],
          ...props.function,
          url: true,
          live: false,
          _ignoreCodeChanges: true,
          _skipMetadata: true
        },
        { parent }
      );
      return {
        originId: fnName,
        domainName: fn.url.apply((url) => new URL(url).host),
        customOriginConfig: {
          httpPort: 80,
          httpsPort: 443,
          originProtocolPolicy: "https-only",
          originReadTimeout: 20,
          originSslProtocols: ["TLSv1.2"]
        }
      };
    }
    function buildBehavior(behavior) {
      const edgeFunction = edgeFunctions[behavior.edgeFunction || ""];
      const cfFunction = cfFunctions[behavior.cfFunction || ""];
      if (behavior.cacheType === "static") {
        return {
          targetOriginId: behavior.origin,
          viewerProtocolPolicy: "redirect-to-https",
          allowedMethods: behavior.allowedMethods ?? ["GET", "HEAD", "OPTIONS"],
          cachedMethods: ["GET", "HEAD"],
          compress: true,
          // CloudFront's managed CachingOptimized policy
          cachePolicyId: "658327ea-f89d-4fab-a63d-7e88639e58f6",
          functionAssociations: cfFunction ? [
            {
              eventType: "viewer-request",
              functionArn: cfFunction.arn
            }
          ] : []
        };
      } else if (behavior.cacheType === "server") {
        return {
          targetOriginId: behavior.origin,
          viewerProtocolPolicy: "redirect-to-https",
          allowedMethods: behavior.allowedMethods ?? [
            "DELETE",
            "GET",
            "HEAD",
            "OPTIONS",
            "PATCH",
            "POST",
            "PUT"
          ],
          cachedMethods: ["GET", "HEAD"],
          compress: true,
          cachePolicyId: useServerBehaviorCachePolicy().id,
          // CloudFront's Managed-AllViewerExceptHostHeader policy
          originRequestPolicyId: "b689b0a8-53d0-40ab-baf2-68738e2966ac",
          functionAssociations: cfFunction ? [
            {
              eventType: "viewer-request",
              functionArn: cfFunction.arn
            }
          ] : [],
          lambdaFunctionAssociations: edgeFunction ? [
            {
              includeBody: true,
              eventType: "origin-request",
              lambdaArn: edgeFunction.nodes.function.qualifiedArn
            }
          ] : []
        };
      }
      throw new VisibleError(`Invalid behavior type in the "${name}" site.`);
    }
    function useServerBehaviorCachePolicy() {
      singletonCachePolicy = singletonCachePolicy ?? new aws15.cloudfront.CachePolicy(
        `${name}ServerCachePolicy`,
        {
          comment: "SST server response cache policy",
          defaultTtl: 0,
          maxTtl: 365,
          minTtl: 0,
          parametersInCacheKeyAndForwardedToOrigin: {
            cookiesConfig: {
              cookieBehavior: "none"
            },
            headersConfig: (plan2.serverCachePolicy?.allowedHeaders ?? []).length > 0 ? {
              headerBehavior: "whitelist",
              headers: {
                items: plan2.serverCachePolicy?.allowedHeaders
              }
            } : {
              headerBehavior: "none"
            },
            queryStringsConfig: {
              queryStringBehavior: "all"
            },
            enableAcceptEncodingBrotli: true,
            enableAcceptEncodingGzip: true
          }
        },
        { parent }
      );
      return singletonCachePolicy;
    }
    function useServerFunctionWarmingInjection(streaming) {
      return [
        `if (event.type === "warmer") {`,
        `  const p = new Promise((resolve) => {`,
        `    setTimeout(() => {`,
        `      resolve({ serverId: "server-" + Math.random().toString(36).slice(2, 8) });`,
        `    }, event.delay);`,
        `  });`,
        ...streaming ? [
          `  const response = await p;`,
          `  responseStream.write(JSON.stringify(response));`,
          `  responseStream.end();`,
          `  return;`
        ] : [`  return p;`],
        `}`
      ].join("\n");
    }
    function createDistribution() {
      return new Cdn(
        `${name}Cdn`,
        {
          domain: args.domain,
          wait: false,
          transform: {
            distribution: (distribution2) => ({
              ...distribution2,
              comment: `${name} app`,
              origins: Object.values(origins),
              originGroups: Object.values(originGroups),
              defaultRootObject: "",
              defaultCacheBehavior: buildBehavior(
                plan2.behaviors.find((behavior) => !behavior.pattern)
              ),
              orderedCacheBehaviors: plan2.behaviors.filter((behavior) => behavior.pattern).map((behavior) => ({
                pathPattern: behavior.pattern,
                ...buildBehavior(behavior)
              })),
              customErrorResponses: plan2.errorResponses
            })
          }
        },
        // create distribution after assets are uploaded
        { dependsOn: bucketFile, parent }
      );
    }
    function allowServerFunctionInvalidateDistribution() {
      const policy = new aws15.iam.Policy(
        `${name}InvalidationPolicy`,
        {
          policy: interpolate10`{
            "Version": "2012-10-17",
            "Statement": [
              {
                "Action": "cloudfront:CreateInvalidation",
                "Effect": "Allow",
                "Resource": "${distribution.nodes.distribution.arn}"
              }
            ]
          }`
        },
        { parent }
      );
      for (const fn of [...ssrFunctions, ...Object.values(edgeFunctions)]) {
        fn.nodes.function.name.apply((functionName) => {
          const uniqueHash = crypto4.createHash("md5").update(functionName).digest("hex").substring(0, 4);
          new aws15.iam.RolePolicyAttachment(
            `${name}InvalidationPolicyAttachment${uniqueHash}`,
            {
              policyArn: policy.arn,
              role: fn.nodes.role.name
            },
            { parent }
          );
        });
      }
    }
    function createWarmer() {
      if (!args.warm)
        return;
      if (args.warm && plan2.edge) {
        throw new VisibleError(
          `In the "${name}" Site, warming is currently supported only for the regional mode.`
        );
      }
      if (ssrFunctions.length === 0)
        return;
      const cron = new Cron(
        `${name}Warmer`,
        {
          schedule: "rate(5 minutes)",
          job: {
            description: `${name} warmer`,
            bundle: path7.join(define_cli_default.paths.platform, "dist", "ssr-warmer"),
            runtime: "nodejs20.x",
            handler: "index.handler",
            timeout: "900 seconds",
            memory: "128 MB",
            live: false,
            environment: {
              FUNCTION_NAME: ssrFunctions[0].nodes.function.name,
              CONCURRENCY: output22(args.warm).apply((warm) => warm.toString())
            },
            link: [ssrFunctions[0]],
            _skipMetadata: true
          },
          transform: {
            target: (targetArgs) => {
              targetArgs.retryPolicy = {
                maximumRetryAttempts: 0,
                maximumEventAgeInSeconds: 60
              };
            }
          }
        },
        { parent }
      );
      new aws15.lambda.Invocation(
        `${name}Prewarm`,
        {
          functionName: cron.nodes.job.name,
          triggers: {
            version: Date.now().toString()
          },
          input: JSON.stringify({})
        },
        { parent }
      );
    }
    function createDistributionInvalidation() {
      all13([outputPath2, args.invalidation]).apply(
        ([outputPath3, invalidationRaw]) => {
          if (invalidationRaw === false)
            return;
          const invalidation = {
            wait: false,
            paths: "all",
            ...invalidationRaw
          };
          const s3Origin = Object.values(plan2.origins).find(
            (origin) => origin.s3
          )?.s3;
          if (!s3Origin)
            return;
          const cachedS3Files = s3Origin.copy.filter((file) => file.cached);
          if (cachedS3Files.length === 0)
            return;
          const invalidationPaths = [];
          if (invalidation.paths === "all") {
            invalidationPaths.push("/*");
          } else if (invalidation.paths === "versioned") {
            cachedS3Files.forEach((item) => {
              if (!item.versionedSubDir)
                return;
              invalidationPaths.push(
                path7.posix.join("/", item.to, item.versionedSubDir, "*")
              );
            });
          } else {
            invalidationPaths.push(...invalidation?.paths || []);
          }
          if (invalidationPaths.length === 0)
            return;
          let invalidationBuildId;
          if (plan2.buildId) {
            invalidationBuildId = plan2.buildId;
          } else {
            const hash = crypto4.createHash("md5");
            cachedS3Files.forEach((item) => {
              if (item.versionedSubDir) {
                globSync2("**", {
                  dot: true,
                  nodir: true,
                  follow: true,
                  cwd: path7.resolve(
                    outputPath3,
                    item.from,
                    item.versionedSubDir
                  )
                }).forEach((filePath) => hash.update(filePath));
              }
              if (invalidation.paths !== "versioned") {
                globSync2("**", {
                  ignore: item.versionedSubDir ? [path7.posix.join(item.versionedSubDir, "**")] : void 0,
                  dot: true,
                  nodir: true,
                  follow: true,
                  cwd: path7.resolve(outputPath3, item.from)
                }).forEach(
                  (filePath) => hash.update(
                    fs7.readFileSync(
                      path7.resolve(outputPath3, item.from, filePath)
                    )
                  )
                );
              }
            });
            invalidationBuildId = hash.digest("hex");
          }
          new DistributionInvalidation(
            `${name}Invalidation`,
            {
              distributionId: distribution.nodes.distribution.id,
              paths: invalidationPaths,
              version: invalidationBuildId,
              wait: invalidation.wait
            },
            {
              parent,
              ignoreChanges: true ? ["*"] : void 0
            }
          );
        }
      );
    }
  });
}
function useCloudFrontFunctionHostHeaderInjection() {
  return `request.headers["x-forwarded-host"] = request.headers.host;`;
}
function validatePlan(input) {
  Object.entries(input.origins).forEach(([originName, origin]) => {
    if (!origin.s3 && !origin.server && !origin.imageOptimization && !origin.group) {
      throw new VisibleError(
        `Invalid origin "${originName}" definition. Each origin must be an S3, server, image optimization, or group origin.`
      );
    }
  });
  return input;
}
var init_ssr_site = __esm({
  ".sst/platform/src/components/aws/ssr-site.ts"() {
    "use strict";
    init_define_app();
    init_define_cli();
    init_run();
    init_cdn();
    init_function();
    init_distribution_invalidation();
    init_provider();
    init_bucket();
    init_bucket_files();
    init_naming();
    init_component();
    init_error();
    init_cron();
    init_origin_access_identity();
  }
});

// .sst/platform/src/components/aws/providers/cache.ts
import { dynamic as dynamic8 } from "@pulumi/pulumi";
var Provider9, Cache;
var init_cache = __esm({
  ".sst/platform/src/components/aws/providers/cache.ts"() {
    "use strict";
    init_define_app();
    init_define_cli();
    init_run();
    Provider9 = class {
      async create(inputs) {
        return {
          id: "cache",
          outs: {
            data: inputs.data
          }
        };
      }
      async update(id, olds, news) {
        return {
          outs: {
            data: news.data
          }
        };
      }
    };
    Cache = class extends dynamic8.Resource {
      constructor(name, args, opts) {
        super(new Provider9(), `${name}.sst.aws.Cache`, args, opts);
      }
    };
  }
});

// .sst/platform/src/components/base/base-ssr-site.ts
import path8 from "path";
import fs8 from "fs";
import { execSync as execSync2 } from "child_process";
import { all as all14, output as output23 } from "@pulumi/pulumi";
function buildApp2(name, args, sitePath, buildCommand) {
  return all14([
    sitePath,
    buildCommand ?? args.buildCommand,
    args.link,
    args.environment
  ]).apply(([sitePath2, userCommand, links, environment]) => {
    if (process.env.SKIP)
      return output23(sitePath2);
    if (true)
      return output23(sitePath2);
    const cmd = resolveBuildCommand();
    return runBuild();
    function resolveBuildCommand() {
      if (userCommand)
        return userCommand;
      if (!userCommand) {
        if (!fs8.existsSync(path8.join(sitePath2, "package.json"))) {
          throw new VisibleError(`No package.json found at "${sitePath2}".`);
        }
        const packageJson = JSON.parse(
          fs8.readFileSync(path8.join(sitePath2, "package.json")).toString()
        );
        if (!packageJson.scripts || !packageJson.scripts.build) {
          throw new VisibleError(
            `No "build" script found within package.json in "${sitePath2}".`
          );
        }
      }
      if (fs8.existsSync(path8.join(sitePath2, "yarn.lock")) || fs8.existsSync(path8.join(define_cli_default.paths.root, "yarn.lock")))
        return "yarn run build";
      if (fs8.existsSync(path8.join(sitePath2, "pnpm-lock.yaml")) || fs8.existsSync(path8.join(define_cli_default.paths.root, "pnpm-lock.yaml")))
        return "pnpm run build";
      if (fs8.existsSync(path8.join(sitePath2, "bun.lockb")) || fs8.existsSync(path8.join(define_cli_default.paths.root, "bun.lockb")))
        return "bun run build";
      return "npm run build";
    }
    function runBuild() {
      const linkData = Link.build(links || []);
      const linkEnvs = output23(linkData).apply((linkData2) => {
        const envs = {};
        for (const datum of linkData2) {
          envs[`SST_RESOURCE_${datum.name}`] = JSON.stringify(datum.properties);
        }
        return envs;
      });
      return linkEnvs.apply((linkEnvs2) => {
        console.debug(`Running "${cmd}" script`);
        try {
          execSync2(cmd, {
            cwd: sitePath2,
            stdio: "inherit",
            env: {
              ...process.env,
              ...environment,
              ...linkEnvs2
            }
          });
        } catch (e) {
          throw new VisibleError(`There was a problem building "${name}".`);
        }
        return sitePath2;
      });
    }
  });
}
var init_base_ssr_site = __esm({
  ".sst/platform/src/components/base/base-ssr-site.ts"() {
    "use strict";
    init_define_app();
    init_define_cli();
    init_run();
    init_link();
    init_error();
  }
});

// .sst/platform/src/components/aws/solid-start.ts
import fs9 from "fs";
import path9 from "path";
import { all as all15 } from "@pulumi/pulumi";
var SolidStart;
var init_solid_start = __esm({
  ".sst/platform/src/components/aws/solid-start.ts"() {
    "use strict";
    init_define_app();
    init_define_cli();
    init_run();
    init_ssr_site();
    init_component();
    init_hint();
    init_cache();
    init_base_ssr_site();
    SolidStart = class extends Component {
      cdn;
      assets;
      server;
      constructor(name, args = {}, opts = {}) {
        super("sst:aws:SolidStart", name, args, opts);
        const parent = this;
        const { sitePath, partition } = prepare2(args, opts);
        const { access, bucket } = createBucket(parent, name, partition, args);
        const outputPath = buildApp2(name, args, sitePath);
        const { buildMeta } = loadBuildOutput();
        const plan = buildPlan();
        const { distribution, ssrFunctions, edgeFunctions } = createServersAndDistribution(
          parent,
          name,
          args,
          outputPath,
          access,
          bucket,
          plan
        );
        const serverFunction = ssrFunctions[0] ?? Object.values(edgeFunctions)[0];
        this.assets = bucket;
        this.cdn = distribution;
        this.server = serverFunction;
        if (false) {
          Hint2.register(
            this.urn,
            all15([this.cdn.domainUrl, this.cdn.url]).apply(
              ([domainUrl, url]) => domainUrl ?? url
            )
          );
        }
        this.registerOutputs({
          _metadata: {
            mode: true ? "placeholder" : "deployed",
            path: sitePath,
            url: distribution.apply((d) => d.domainUrl ?? d.url),
            server: serverFunction.arn
          }
        });
        function loadBuildOutput() {
          const cache = new Cache(
            `${name}BuildOutput`,
            {
              data: true ? loadBuildMetadataPlaceholder() : loadBuildMetadata()
            },
            {
              parent,
              ignoreChanges: true ? ["*"] : void 0
            }
          );
          return {
            buildMeta: cache.data
          };
        }
        function loadBuildMetadata() {
          return outputPath.apply((outputPath2) => {
            const assetsPath = path9.join(".output", "public");
            return {
              assetsPath,
              // create 1 behaviour for each top level asset file/folder
              staticRoutes: fs9.readdirSync(path9.join(outputPath2, assetsPath)).map(
                (item) => fs9.statSync(path9.join(outputPath2, assetsPath, item)).isDirectory() ? `${item}/*` : item
              )
            };
          });
        }
        function loadBuildMetadataPlaceholder() {
          return {
            assetsPath: "placeholder",
            staticRoutes: ["_build/*", "_server/*", "assets/*", "favicon.ico"]
          };
        }
        function buildPlan() {
          return all15([outputPath, buildMeta]).apply(([outputPath2, buildMeta2]) => {
            const serverConfig = {
              description: "Server handler for Solid",
              handler: path9.join(outputPath2, ".output", "server", "index.handler")
            };
            return validatePlan({
              edge: false,
              cloudFrontFunctions: {
                serverCfFunction: {
                  injections: [useCloudFrontFunctionHostHeaderInjection()]
                }
              },
              origins: {
                server: {
                  server: {
                    function: serverConfig
                  }
                },
                s3: {
                  s3: {
                    copy: [
                      {
                        from: buildMeta2.assetsPath,
                        to: "",
                        cached: true
                      }
                    ]
                  }
                }
              },
              behaviors: [
                {
                  cacheType: "server",
                  cfFunction: "serverCfFunction",
                  origin: "server"
                },
                {
                  pattern: "_server/",
                  cacheType: "server",
                  cfFunction: "serverCfFunction",
                  origin: "server"
                },
                ...buildMeta2.staticRoutes.map(
                  (route) => ({
                    cacheType: "static",
                    pattern: route,
                    origin: "s3"
                  })
                )
              ]
            });
          });
        }
      }
      /**
       * The URL of the SolidStart app.
       *
       * If the `domain` is set, this is the URL with the custom domain.
       * Otherwise, it's the autogenerated CloudFront URL.
       */
      get url() {
        return all15([this.cdn.domainUrl, this.cdn.url]).apply(
          ([domainUrl, url]) => domainUrl ?? url
        );
      }
      /**
       * The underlying [resources](/docs/components/#nodes) this component creates.
       */
      get nodes() {
        return {
          /**
           * The AWS Lambda server function that renders the site.
           */
          server: this.server,
          /**
           * The Amazon S3 Bucket that stores the assets.
           */
          assets: this.assets
        };
      }
      /** @internal */
      getSSTLink() {
        return {
          properties: {
            url: this.url
          }
        };
      }
    };
  }
});

// .sst/platform/src/components/aws/astro.ts
import fs10 from "fs";
import path10 from "path";
import { all as all16 } from "@pulumi/pulumi";
function useCloudFrontRoutingInjection(buildMetadata) {
  const tree = buildRouteTree(buildMetadata.routes);
  const flatTree = flattenRouteTree(tree);
  const stringifiedTree = stringifyFlattenedRouteTree(flatTree);
  return `
    var routeData = ${stringifiedTree};
    var findFirstMatch = (matches) => Array.isArray(matches[0]) ? findFirstMatch(matches[0]) : matches;
    var findMatches = (path, routeData) => routeData.map((route) => route[0].test(path) ? Array.isArray(route[1]) ? findMatches(path, route[1]) : route : null).filter(route => route !== null && route.length > 0);
    var matchedRoute = findFirstMatch(findMatches(request.uri, routeData));
    if (matchedRoute[0]) {
      if (!matchedRoute[1] && !/^.*\\.[^\\/]+$/.test(request.uri)) {
        ${buildMetadata.pageResolution === "file" ? `request.uri = request.uri === "/" ? "/index.html" : request.uri.replace(/\\/?$/, ".html");` : `request.uri = request.uri.replace(/\\/?$/, "/index.html");`}
      } else if (matchedRoute[1] === 2) {
        var redirectPath = matchedRoute[2];
        matchedRoute[0].exec(request.uri).forEach((match, index) => {
          redirectPath = redirectPath.replace(\`\\\${\${index}}\`, match);
        });
        return {
          statusCode: matchedRoute[3] || 308,
          headers: { location: { value: redirectPath } },
        };
      }
    }`;
}
function buildRouteTree(routes, level = 0) {
  const routeTree = routes.reduce(
    (tree, route) => {
      const routePatternWithoutCaptureGroups = route.pattern.replace(/\((?:\?:)?(.*?[^\\])\)/g, (_, content) => content.trim()).replace(/\/\^/g, "").replace(/\$\//g, "");
      const routeParts = routePatternWithoutCaptureGroups.split(/(?=\\\/)/g).filter((part) => part !== "/^" && part !== "/$/");
      tree.branches[routeParts[level]] = tree.branches[routeParts[level]] || {
        branches: {},
        nodes: []
      };
      tree.branches[routeParts[level]].nodes.push(route);
      return tree;
    },
    { branches: {}, nodes: [] }
  );
  for (const [key, branch] of Object.entries(routeTree.branches)) {
    if (!branch.nodes.some((node) => node.prerender || node.type === "redirect")) {
      delete routeTree.branches[key];
    } else if (branch.nodes.length > 1) {
      const deduplicatedNodes = branch.nodes.filter(
        (node, index, arr) => arr.findIndex((n) => n.pattern === node.pattern) === index
      );
      routeTree.branches[key] = buildRouteTree(deduplicatedNodes, level + 1);
      branch.nodes = [];
    }
  }
  return routeTree;
}
function flattenRouteTree(tree, parentKey = "") {
  const flatTree = [];
  for (const [key, branch] of Object.entries(tree.branches)) {
    if (branch.nodes.length === 1) {
      const node = branch.nodes[0];
      if (node.type === "page") {
        flatTree.push([node.pattern]);
      }
      if (node.type === "endpoint") {
        flatTree.push([node.pattern, 1]);
      } else if (node.type === "redirect") {
        flatTree.push([
          node.pattern,
          2,
          node.redirectPath,
          node.redirectStatus
        ]);
      }
    } else {
      const flatKey = parentKey + key;
      flatTree.push([flatKey, flattenRouteTree(branch, flatKey)]);
    }
  }
  return flatTree;
}
function stringifyFlattenedRouteTree(tree) {
  return `[${tree.map((tuple) => {
    if (Array.isArray(tuple[1])) {
      return `[/^${tuple[0]}/,${stringifyFlattenedRouteTree(tuple[1])}]`;
    }
    if (typeof tuple[1] === "undefined") {
      return `[${tuple[0]}]`;
    } else if (tuple[1] === 1) {
      return `[${tuple[0]},1]`;
    }
    return `[${tuple[0]},2,"${tuple[2]}"${tuple[3] ? `,${tuple[3]}` : ""}]`;
  }).join(",")}]`;
}
var BUILD_META_FILE_NAME, Astro;
var init_astro = __esm({
  ".sst/platform/src/components/aws/astro.ts"() {
    "use strict";
    init_define_app();
    init_define_cli();
    init_run();
    init_ssr_site();
    init_component();
    init_hint();
    init_cache();
    init_base_ssr_site();
    BUILD_META_FILE_NAME = "sst.buildMeta.json";
    Astro = class extends Component {
      cdn;
      assets;
      server;
      constructor(name, args = {}, opts = {}) {
        super("sst:aws:Astro", name, args, opts);
        const parent = this;
        const { sitePath, partition, region } = prepare2(args, opts);
        const { access, bucket } = createBucket(parent, name, partition, args);
        const outputPath = buildApp2(name, args, sitePath);
        const { buildMeta } = loadBuildOutput();
        const plan = buildPlan();
        const { distribution, ssrFunctions, edgeFunctions } = createServersAndDistribution(
          parent,
          name,
          args,
          outputPath,
          access,
          bucket,
          plan
        );
        const serverFunction = ssrFunctions[0] ?? Object.values(edgeFunctions)[0];
        this.assets = bucket;
        this.cdn = distribution;
        this.server = serverFunction;
        if (false) {
          Hint3.register(
            this.urn,
            all16([this.cdn.domainUrl, this.cdn.url]).apply(
              ([domainUrl, url]) => domainUrl ?? url
            )
          );
        }
        this.registerOutputs({
          _metadata: {
            mode: true ? "placeholder" : "deployed",
            path: sitePath,
            url: distribution.apply((d) => d.domainUrl ?? d.url),
            edge: plan.edge,
            server: serverFunction.arn
          }
        });
        function loadBuildOutput() {
          const cache = new Cache(
            `${name}BuildOutput`,
            {
              data: true ? loadBuildMetadataPlaceholder() : loadBuildMetadata()
            },
            {
              parent,
              ignoreChanges: true ? ["*"] : void 0
            }
          );
          return {
            buildMeta: cache.data
          };
        }
        function loadBuildMetadata() {
          return outputPath.apply((outputPath2) => {
            const filePath = path10.join(outputPath2, "dist", BUILD_META_FILE_NAME);
            if (!fs10.existsSync(filePath)) {
              throw new Error(
                `Could not find build meta file at ${filePath}. Update your 'astro-sst' package version and rebuild your Astro site.`
              );
            }
            return JSON.parse(
              fs10.readFileSync(filePath, "utf-8")
            );
          });
        }
        function loadBuildMetadataPlaceholder() {
          return {
            deploymentStrategy: "regional",
            responseMode: "buffer",
            outputMode: "server",
            pageResolution: "directory",
            trailingSlash: "ignore",
            serverBuildOutputFile: "dist/server/entry.mjs",
            clientBuildOutputDir: "dist/client",
            clientBuildVersionedSubDir: "_astro",
            routes: [
              {
                route: "/_image",
                type: "endpoint",
                pattern: "/^\\/_image$/",
                prerender: false
              },
              {
                route: "/",
                type: "page",
                pattern: "/^\\/$/",
                prerender: false
              }
            ],
            serverRoutes: []
          };
        }
        function buildPlan() {
          return all16([outputPath, buildMeta]).apply(([outputPath2, buildMeta2]) => {
            const isStatic = buildMeta2.outputMode === "static";
            const edge = buildMeta2.deploymentStrategy === "edge";
            const serverConfig = {
              handler: path10.join(outputPath2, "dist", "server", "entry.handler")
            };
            const plan2 = {
              edge,
              cloudFrontFunctions: {
                serverCfFunction: {
                  injections: [
                    useCloudFrontFunctionHostHeaderInjection(),
                    useCloudFrontRoutingInjection(buildMeta2)
                  ]
                },
                serverCfFunctionHostOnly: {
                  injections: [useCloudFrontFunctionHostHeaderInjection()]
                }
              },
              origins: {
                staticsServer: {
                  s3: {
                    copy: [
                      {
                        from: buildMeta2.clientBuildOutputDir,
                        to: "",
                        cached: true,
                        versionedSubDir: buildMeta2.clientBuildVersionedSubDir
                      }
                    ]
                  }
                }
              },
              behaviors: [],
              errorResponses: []
            };
            if (edge) {
              plan2.edgeFunctions = {
                edgeServer: {
                  function: serverConfig
                }
              };
              plan2.behaviors.push(
                {
                  cacheType: "server",
                  cfFunction: "serverCfFunction",
                  edgeFunction: "edgeServer",
                  origin: "staticsServer"
                },
                ...fs10.readdirSync(
                  path10.join(outputPath2, buildMeta2.clientBuildOutputDir)
                ).map(
                  (item) => ({
                    cacheType: "static",
                    pattern: fs10.statSync(
                      path10.join(
                        outputPath2,
                        buildMeta2.clientBuildOutputDir,
                        item
                      )
                    ).isDirectory() ? `${item}/*` : item,
                    origin: "staticsServer"
                  })
                )
              );
            } else {
              if (isStatic) {
                plan2.behaviors.push({
                  cacheType: "static",
                  cfFunction: "serverCfFunction",
                  origin: "staticsServer"
                });
              } else {
                plan2.cloudFrontFunctions.imageServiceCfFunction = {
                  injections: [useCloudFrontFunctionHostHeaderInjection()]
                };
                plan2.origins.regionalServer = {
                  server: {
                    function: serverConfig,
                    streaming: buildMeta2.responseMode === "stream"
                  }
                };
                plan2.origins.fallthroughServer = {
                  group: {
                    primaryOriginName: "staticsServer",
                    fallbackOriginName: "regionalServer",
                    fallbackStatusCodes: [403, 404]
                  }
                };
                plan2.behaviors.push(
                  {
                    cacheType: "server",
                    cfFunction: "serverCfFunction",
                    origin: "fallthroughServer",
                    allowedMethods: ["GET", "HEAD", "OPTIONS"]
                  },
                  {
                    cacheType: "static",
                    pattern: `${buildMeta2.clientBuildVersionedSubDir}/*`,
                    origin: "staticsServer"
                  },
                  {
                    cacheType: "server",
                    pattern: "_image",
                    cfFunction: "imageServiceCfFunction",
                    origin: "regionalServer",
                    allowedMethods: ["GET", "HEAD", "OPTIONS"]
                  },
                  ...buildMeta2.serverRoutes?.map(
                    (route) => ({
                      cacheType: "server",
                      cfFunction: "serverCfFunctionHostOnly",
                      pattern: route,
                      origin: "regionalServer"
                    })
                  )
                );
              }
              buildMeta2.routes.filter(
                ({ type, route }) => type === "page" && /^\/\d{3}\/?$/.test(route)
              ).forEach(({ route, prerender }) => {
                switch (route) {
                  case "/404":
                  case "/404/":
                    plan2.errorResponses?.push({
                      errorCode: 404,
                      responsePagePath: prerender ? "/404.html" : "/404",
                      responseCode: 404
                    });
                    if (isStatic) {
                      plan2.errorResponses?.push({
                        errorCode: 403,
                        responsePagePath: "/404.html",
                        responseCode: 404
                      });
                    }
                    break;
                  case "/500":
                  case "/500/":
                    plan2.errorResponses?.push({
                      errorCode: 500,
                      responsePagePath: prerender ? "/500.html" : "/500",
                      responseCode: 500
                    });
                    break;
                }
              });
            }
            return validatePlan(plan2);
          });
        }
      }
      /**
       * The URL of the Astro site.
       *
       * If the `domain` is set, this is the URL with the custom domain.
       * Otherwise, it's the autogenerated CloudFront URL.
       */
      get url() {
        return all16([this.cdn.domainUrl, this.cdn.url]).apply(
          ([domainUrl, url]) => domainUrl ?? url
        );
      }
      /**
       * The underlying [resources](/docs/components/#nodes) this component creates.
       */
      get nodes() {
        return {
          /**
           * The AWS Lambda server function that renders the site.
           */
          server: this.server,
          /**
           * The Amazon S3 Bucket that stores the assets.
           */
          assets: this.assets
        };
      }
      /** @internal */
      getSSTLink() {
        return {
          properties: {
            url: this.url
          }
        };
      }
    };
  }
});

// .sst/platform/src/components/aws/nextjs.ts
import fs11 from "fs";
import path11 from "path";
import crypto5 from "crypto";
import { globSync as globSync3 } from "glob";
import { all as all17 } from "@pulumi/pulumi";
import * as aws16 from "@pulumi/aws";
var DEFAULT_OPEN_NEXT_VERSION, DEFAULT_CACHE_POLICY_ALLOWED_HEADERS, Nextjs;
var init_nextjs = __esm({
  ".sst/platform/src/components/aws/nextjs.ts"() {
    "use strict";
    init_define_app();
    init_define_cli();
    init_run();
    init_function();
    init_ssr_site();
    init_component();
    init_hint();
    init_error();
    init_cache();
    init_queue();
    init_base_ssr_site();
    DEFAULT_OPEN_NEXT_VERSION = "3.0.0-rc.11";
    DEFAULT_CACHE_POLICY_ALLOWED_HEADERS = [
      "accept",
      "x-prerender-revalidate",
      "x-prerender-bypass",
      "rsc",
      "next-router-prefetch",
      "next-router-state-tree",
      "next-url"
    ];
    Nextjs = class extends Component {
      cdn;
      assets;
      server;
      constructor(name, args = {}, opts = {}) {
        super("sst:aws:Nextjs", name, args, opts);
        let _routes;
        const parent = this;
        const buildCommand = normalizeBuildCommand();
        const { sitePath, partition, region } = prepare2(args, opts);
        const { access, bucket } = createBucket(parent, name, partition, args);
        const outputPath = buildApp2(name, args, sitePath, buildCommand);
        const {
          openNextOutput,
          buildId,
          routesManifest,
          appPathRoutesManifest,
          appPathsManifest,
          pagesManifest,
          prerenderManifest
        } = loadBuildOutput();
        const revalidationQueue = createRevalidationQueue();
        const revalidationTable = createRevalidationTable();
        createRevalidationTableSeeder();
        const plan = buildPlan();
        removeSourcemaps();
        const { distribution, ssrFunctions, edgeFunctions } = createServersAndDistribution(
          parent,
          name,
          args,
          outputPath,
          access,
          bucket,
          plan
        );
        const serverFunction = ssrFunctions[0] ?? Object.values(edgeFunctions)[0];
        handleMissingSourcemap();
        this.assets = bucket;
        this.cdn = distribution;
        this.server = serverFunction;
        if (false) {
          Hint4.register(
            this.urn,
            all17([this.cdn.domainUrl, this.cdn.url]).apply(
              ([domainUrl, url]) => domainUrl ?? url
            )
          );
        }
        this.registerOutputs({
          _metadata: {
            mode: true ? "placeholder" : "deployed",
            path: sitePath,
            url: distribution.apply((d) => d.domainUrl ?? d.url),
            edge: plan.edge,
            server: serverFunction.arn
          }
        });
        function normalizeBuildCommand() {
          return all17([args?.buildCommand, args?.openNextVersion]).apply(
            ([buildCommand2, openNextVersion]) => buildCommand2 ?? [
              "npx",
              "--yes",
              `open-next@${openNextVersion ?? DEFAULT_OPEN_NEXT_VERSION}`,
              "build"
            ].join(" ")
          );
        }
        function loadBuildOutput() {
          const cache = new Cache(
            `${name}OpenNextOutput`,
            {
              data: true ? loadOpenNextOutputPlaceholder() : loadOpenNextOutput()
            },
            {
              parent,
              ignoreChanges: true ? ["*"] : void 0
            }
          );
          return {
            openNextOutput: cache.data,
            buildId: loadBuildId(),
            routesManifest: loadRoutesManifest(),
            appPathRoutesManifest: loadAppPathRoutesManifest(),
            appPathsManifest: loadAppPathsManifest(),
            pagesManifest: loadPagesManifest(),
            prerenderManifest: loadPrerenderManifest()
          };
        }
        function loadOpenNextOutput() {
          return outputPath.apply((outputPath2) => {
            const openNextOutputPath = path11.join(
              outputPath2,
              ".open-next",
              "open-next.output.json"
            );
            if (!fs11.existsSync(openNextOutputPath)) {
              throw new VisibleError(
                `Failed to load open-next.output.json from "${openNextOutputPath}".`
              );
            }
            const content = fs11.readFileSync(openNextOutputPath).toString();
            const json = JSON.parse(content);
            if (json.additionalProps?.initializationFunction) {
              json.additionalProps.initializationFunction = {
                handler: "index.handler",
                bundle: ".open-next/dynamodb-provider"
              };
            }
            return json;
          });
        }
        function loadOpenNextOutputPlaceholder() {
          return outputPath.apply((outputPath2) => ({
            edgeFunctions: {},
            origins: {
              s3: {
                type: "s3",
                originPath: "_assets",
                // do not upload anything
                copy: []
              },
              imageOptimizer: {
                type: "function",
                handler: "index.handler",
                bundle: path11.join(
                  outputPath2,
                  ".open-next/image-optimization-function"
                ),
                streaming: false
              },
              default: {
                type: "function",
                handler: "index.handler",
                bundle: path11.join(
                  outputPath2,
                  ".open-next/server-functions/default"
                ),
                streaming: false
              }
            },
            behaviors: [
              { pattern: "_next/image*", origin: "imageOptimizer" },
              { pattern: "_next/data/*", origin: "default" },
              { pattern: "*", origin: "default" },
              { pattern: "BUILD_ID", origin: "s3" },
              { pattern: "_next/*", origin: "s3" },
              { pattern: "favicon.ico", origin: "s3" },
              { pattern: "next.svg", origin: "s3" },
              { pattern: "vercel.svg", origin: "s3" }
            ],
            additionalProps: {
              // skip creating revalidation queue
              disableIncrementalCache: true,
              // skip creating revalidation table
              disableTagCache: true
            }
          }));
        }
        function loadBuildId() {
          return outputPath.apply((outputPath2) => {
            if (true)
              return "mock-build-id";
            try {
              return fs11.readFileSync(path11.join(outputPath2, ".next/BUILD_ID")).toString();
            } catch (e) {
              console.error(e);
              throw new VisibleError(
                `Failed to read build id from ".next/BUILD_ID" for the "${name}" site.`
              );
            }
          });
        }
        function loadRoutesManifest() {
          return outputPath.apply((outputPath2) => {
            if (true)
              return { dynamicRoutes: [], staticRoutes: [] };
            try {
              const content = fs11.readFileSync(path11.join(outputPath2, ".next/routes-manifest.json")).toString();
              return JSON.parse(content);
            } catch (e) {
              console.error(e);
              throw new VisibleError(
                `Failed to read routes data from ".next/routes-manifest.json" for the "${name}" site.`
              );
            }
          });
        }
        function loadAppPathRoutesManifest() {
          return outputPath.apply((outputPath2) => {
            if (true)
              return {};
            try {
              const content = fs11.readFileSync(
                path11.join(outputPath2, ".next/app-path-routes-manifest.json")
              ).toString();
              return JSON.parse(content);
            } catch (e) {
              return {};
            }
          });
        }
        function loadAppPathsManifest() {
          return outputPath.apply((outputPath2) => {
            if (true)
              return {};
            try {
              const content = fs11.readFileSync(
                path11.join(outputPath2, ".next/server/app-paths-manifest.json")
              ).toString();
              return JSON.parse(content);
            } catch (e) {
              return {};
            }
          });
        }
        function loadPagesManifest() {
          return outputPath.apply((outputPath2) => {
            if (true)
              return {};
            try {
              const content = fs11.readFileSync(
                path11.join(outputPath2, ".next/server/pages-manifest.json")
              ).toString();
              return JSON.parse(content);
            } catch (e) {
              return {};
            }
          });
        }
        function loadPrerenderManifest() {
          return outputPath.apply((outputPath2) => {
            if (true)
              return { version: 0, routes: {} };
            try {
              const content = fs11.readFileSync(
                path11.join(outputPath2, ".next/prerender-manifest.json")
              ).toString();
              return JSON.parse(content);
            } catch (e) {
              console.debug("Failed to load prerender-manifest.json", e);
            }
          });
        }
        function buildPlan() {
          return all17([
            [region, outputPath],
            buildId,
            openNextOutput,
            args?.imageOptimization,
            [bucket.arn, bucket.name],
            revalidationQueue.apply((q) => ({ url: q?.url, arn: q?.arn })),
            revalidationTable.apply((t) => ({ name: t?.name, arn: t?.arn }))
          ]).apply(
            ([
              [region2, outputPath2],
              buildId2,
              openNextOutput2,
              imageOptimization,
              [bucketArn, bucketName],
              { url: revalidationQueueUrl, arn: revalidationQueueArn },
              { name: revalidationTableName, arn: revalidationTableArn }
            ]) => {
              const defaultFunctionProps = {
                runtime: "nodejs20.x",
                environment: {
                  CACHE_BUCKET_NAME: bucketName,
                  CACHE_BUCKET_KEY_PREFIX: "_cache",
                  CACHE_BUCKET_REGION: region2,
                  ...revalidationQueueUrl && {
                    REVALIDATION_QUEUE_URL: revalidationQueueUrl,
                    REVALIDATION_QUEUE_REGION: region2
                  },
                  ...revalidationTableName && {
                    CACHE_DYNAMO_TABLE: revalidationTableName
                  }
                },
                permissions: [
                  // access to the cache data
                  {
                    actions: ["s3:GetObject", "s3:PutObject"],
                    resources: [`${bucketArn}/*`]
                  },
                  ...revalidationQueueArn ? [
                    {
                      actions: [
                        "sqs:SendMessage",
                        "sqs:GetQueueAttributes",
                        "sqs:GetQueueUrl"
                      ],
                      resources: [revalidationQueueArn]
                    }
                  ] : [],
                  ...revalidationTableArn ? [
                    {
                      actions: [
                        "dynamodb:BatchGetItem",
                        "dynamodb:GetRecords",
                        "dynamodb:GetShardIterator",
                        "dynamodb:Query",
                        "dynamodb:GetItem",
                        "dynamodb:Scan",
                        "dynamodb:ConditionCheckItem",
                        "dynamodb:BatchWriteItem",
                        "dynamodb:PutItem",
                        "dynamodb:UpdateItem",
                        "dynamodb:DeleteItem",
                        "dynamodb:DescribeTable"
                      ],
                      resources: [
                        revalidationTableArn,
                        `${revalidationTableArn}/*`
                      ]
                    }
                  ] : []
                ]
              };
              return validatePlan({
                edge: false,
                cloudFrontFunctions: {
                  serverCfFunction: {
                    injections: [
                      useCloudFrontFunctionHostHeaderInjection(),
                      useCloudFrontFunctionPrerenderBypassHeaderInjection()
                    ]
                  }
                },
                edgeFunctions: Object.fromEntries(
                  Object.entries(openNextOutput2.edgeFunctions).map(
                    ([key, value]) => [
                      key,
                      {
                        function: {
                          description: `${name} server`,
                          bundle: path11.join(outputPath2, value.bundle),
                          handler: value.handler,
                          ...defaultFunctionProps
                        }
                      }
                    ]
                  )
                ),
                origins: Object.fromEntries(
                  Object.entries(openNextOutput2.origins).map(([key, value]) => {
                    if (key === "s3") {
                      value = value;
                      return [
                        key,
                        {
                          s3: {
                            originPath: value.originPath,
                            copy: value.copy
                          }
                        }
                      ];
                    }
                    if (key === "imageOptimizer") {
                      value = value;
                      return [
                        key,
                        {
                          imageOptimization: {
                            function: {
                              description: `${name} image optimizer`,
                              handler: value.handler,
                              bundle: path11.join(outputPath2, value.bundle),
                              runtime: "nodejs20.x",
                              architecture: "arm64",
                              environment: {
                                BUCKET_NAME: bucketName,
                                BUCKET_KEY_PREFIX: "_assets"
                              },
                              memory: imageOptimization?.memory ?? "1536 MB"
                            }
                          }
                        }
                      ];
                    }
                    value = value;
                    return [
                      key,
                      {
                        server: {
                          function: {
                            description: `${name} server`,
                            bundle: path11.join(outputPath2, value.bundle),
                            handler: value.handler,
                            ...defaultFunctionProps
                          },
                          streaming: value.streaming
                        }
                      }
                    ];
                  })
                ),
                behaviors: openNextOutput2.behaviors.map((behavior) => {
                  return {
                    pattern: behavior.pattern === "*" ? void 0 : behavior.pattern,
                    origin: behavior.origin ?? "",
                    cacheType: behavior.origin === "s3" ? "static" : "server",
                    cfFunction: "serverCfFunction",
                    edgeFunction: behavior.edgeFunction ?? ""
                  };
                }),
                serverCachePolicy: {
                  allowedHeaders: DEFAULT_CACHE_POLICY_ALLOWED_HEADERS
                },
                buildId: buildId2
              });
            }
          );
        }
        function createRevalidationQueue() {
          return all17([outputPath, openNextOutput]).apply(
            ([outputPath2, openNextOutput2]) => {
              if (openNextOutput2.additionalProps?.disableIncrementalCache)
                return;
              const revalidationFunction = openNextOutput2.additionalProps?.revalidationFunction;
              if (!revalidationFunction)
                return;
              const queue = new Queue(
                `${name}RevalidationQueue`,
                {
                  fifo: true,
                  transform: {
                    queue: (args2) => {
                      args2.receiveWaitTimeSeconds = 20;
                    }
                  }
                },
                { parent }
              );
              queue.subscribe(
                {
                  description: `${name} ISR revalidator`,
                  handler: revalidationFunction.handler,
                  bundle: path11.join(outputPath2, revalidationFunction.bundle),
                  runtime: "nodejs20.x",
                  timeout: "30 seconds",
                  permissions: [
                    {
                      actions: [
                        "sqs:ChangeMessageVisibility",
                        "sqs:DeleteMessage",
                        "sqs:GetQueueAttributes",
                        "sqs:GetQueueUrl",
                        "sqs:ReceiveMessage"
                      ],
                      resources: [queue.arn]
                    }
                  ],
                  live: false,
                  _ignoreCodeChanges: true
                },
                {
                  transform: {
                    eventSourceMapping: (args2) => {
                      args2.batchSize = 5;
                    }
                  }
                }
              );
              return queue;
            }
          );
        }
        function createRevalidationTable() {
          return openNextOutput.apply((openNextOutput2) => {
            if (openNextOutput2.additionalProps?.disableTagCache)
              return;
            return new aws16.dynamodb.Table(
              `${name}RevalidationTable`,
              {
                attributes: [
                  { name: "tag", type: "S" },
                  { name: "path", type: "S" },
                  { name: "revalidatedAt", type: "N" }
                ],
                hashKey: "tag",
                rangeKey: "path",
                pointInTimeRecovery: {
                  enabled: true
                },
                billingMode: "PAY_PER_REQUEST",
                globalSecondaryIndexes: [
                  {
                    name: "revalidate",
                    hashKey: "path",
                    rangeKey: "revalidatedAt",
                    projectionType: "ALL"
                  }
                ]
              },
              { parent }
            );
          });
        }
        function createRevalidationTableSeeder() {
          return all17([
            revalidationTable,
            outputPath,
            openNextOutput,
            prerenderManifest
          ]).apply(
            ([
              revalidationTable2,
              outputPath2,
              openNextOutput2,
              prerenderManifest2
            ]) => {
              if (openNextOutput2.additionalProps?.disableTagCache)
                return;
              if (!openNextOutput2.additionalProps?.initializationFunction)
                return;
              const prerenderedRouteCount = Object.keys(
                prerenderManifest2?.routes ?? {}
              ).length;
              const seedFn = new Function(
                `${name}RevalidationSeeder`,
                {
                  description: `${name} ISR revalidation data seeder`,
                  handler: openNextOutput2.additionalProps.initializationFunction.handler,
                  bundle: path11.join(
                    outputPath2,
                    openNextOutput2.additionalProps.initializationFunction.bundle
                  ),
                  runtime: "nodejs20.x",
                  timeout: "900 seconds",
                  memory: `${Math.min(
                    10240,
                    Math.max(128, Math.ceil(prerenderedRouteCount / 4e3) * 128)
                  )} MB`,
                  permissions: [
                    {
                      actions: [
                        "dynamodb:BatchWriteItem",
                        "dynamodb:PutItem",
                        "dynamodb:DescribeTable"
                      ],
                      resources: [revalidationTable2.arn]
                    }
                  ],
                  environment: {
                    CACHE_DYNAMO_TABLE: revalidationTable2.name
                  },
                  live: false,
                  _ignoreCodeChanges: true,
                  _skipMetadata: true
                },
                { parent }
              );
              new aws16.lambda.Invocation(
                `${name}RevalidationSeed`,
                {
                  functionName: seedFn.nodes.function.name,
                  triggers: {
                    version: Date.now().toString()
                  },
                  input: JSON.stringify({
                    RequestType: "Create"
                  })
                },
                { parent, ignoreChanges: true ? ["*"] : void 0 }
              );
            }
          );
        }
        function removeSourcemaps() {
          return;
          return outputPath.apply((outputPath2) => {
            const files = globSync3("**/*.js.map", {
              cwd: path11.join(outputPath2, ".open-next", "server-function"),
              nodir: true,
              dot: true
            });
            for (const file of files) {
              fs11.rmSync(
                path11.join(outputPath2, ".open-next", "server-function", file)
              );
            }
          });
        }
        function useRoutes() {
          if (_routes)
            return _routes;
          _routes = all17([
            outputPath,
            routesManifest,
            appPathRoutesManifest,
            appPathsManifest,
            pagesManifest
          ]).apply(
            ([
              outputPath2,
              routesManifest2,
              appPathRoutesManifest2,
              appPathsManifest2,
              pagesManifest2
            ]) => {
              const dynamicAndStaticRoutes = [
                ...routesManifest2.dynamicRoutes,
                ...routesManifest2.staticRoutes
              ].map(({ page, regex }) => {
                const cwRoute = buildCloudWatchRouteName(page);
                const cwHash = buildCloudWatchRouteHash(page);
                const sourcemapPath = getSourcemapForAppRoute(page) || getSourcemapForPagesRoute(page);
                return {
                  route: page,
                  regexMatch: regex,
                  logGroupPath: `/${cwHash}${cwRoute}`,
                  sourcemapPath,
                  sourcemapKey: cwHash
                };
              });
              const appRoutes = Object.values(appPathRoutesManifest2).filter(
                (page) => routesManifest2.dynamicRoutes.every(
                  (route) => route.page !== page
                ) && routesManifest2.staticRoutes.every(
                  (route) => route.page !== page
                )
              ).map((page) => {
                const cwRoute = buildCloudWatchRouteName(page);
                const cwHash = buildCloudWatchRouteHash(page);
                const sourcemapPath = getSourcemapForAppRoute(page);
                return {
                  route: page,
                  prefixMatch: page,
                  logGroupPath: `/${cwHash}${cwRoute}`,
                  sourcemapPath,
                  sourcemapKey: cwHash
                };
              });
              const dataRoutes = (routesManifest2.dataRoutes || []).map(
                ({ page, dataRouteRegex }) => {
                  const routeDisplayName = page.endsWith("/") ? `/_next/data/BUILD_ID${page}index.json` : `/_next/data/BUILD_ID${page}.json`;
                  const cwRoute = buildCloudWatchRouteName(routeDisplayName);
                  const cwHash = buildCloudWatchRouteHash(page);
                  return {
                    route: routeDisplayName,
                    regexMatch: dataRouteRegex,
                    logGroupPath: `/${cwHash}${cwRoute}`
                  };
                }
              );
              return [
                ...[...dynamicAndStaticRoutes, ...appRoutes].sort(
                  (a, b) => a.route.localeCompare(b.route)
                ),
                ...dataRoutes.sort((a, b) => a.route.localeCompare(b.route))
              ];
              function getSourcemapForAppRoute(page) {
                const appPathRoute = Object.keys(appPathRoutesManifest2).find(
                  (key) => appPathRoutesManifest2[key] === page
                );
                if (!appPathRoute)
                  return;
                const filePath = appPathsManifest2[appPathRoute];
                if (!filePath)
                  return;
                const sourcemapPath = path11.join(
                  outputPath2,
                  ".next",
                  "server",
                  `${filePath}.map`
                );
                if (!fs11.existsSync(sourcemapPath))
                  return;
                return sourcemapPath;
              }
              function getSourcemapForPagesRoute(page) {
                const filePath = pagesManifest2[page];
                if (!filePath)
                  return;
                const sourcemapPath = path11.join(
                  outputPath2,
                  ".next",
                  "server",
                  `${filePath}.map`
                );
                if (!fs11.existsSync(sourcemapPath))
                  return;
                return sourcemapPath;
              }
            }
          );
          return _routes;
        }
        function useCloudFrontFunctionPrerenderBypassHeaderInjection() {
          return `
  if (request.cookies["__prerender_bypass"]) { 
    request.headers["x-prerender-bypass"] = { value: "true" }; 
  }`;
        }
        function handleMissingSourcemap() {
          return;
        }
        function buildCloudWatchRouteName(route) {
          return route.replace(/[^a-zA-Z0-9_\-/.#]/g, "");
        }
        function buildCloudWatchRouteHash(route) {
          const hash = crypto5.createHash("sha256");
          hash.update(route);
          return hash.digest("hex").substring(0, 8);
        }
      }
      /**
       * The URL of the Next.js app.
       *
       * If the `domain` is set, this is the URL with the custom domain.
       * Otherwise, it's the autogenerated CloudFront URL.
       */
      get url() {
        return all17([this.cdn.domainUrl, this.cdn.url]).apply(
          ([domainUrl, url]) => domainUrl ?? url
        );
      }
      /**
       * The underlying [resources](/docs/components/#nodes) this component creates.
       */
      get nodes() {
        return {
          /**
           * The AWS Lambda server function that renders the app.
           */
          server: this.server,
          /**
           * The Amazon S3 Bucket that stores the assets.
           */
          assets: this.assets
        };
      }
      /** @internal */
      getSSTLink() {
        return {
          properties: {
            url: this.url
          }
        };
      }
    };
  }
});

// .sst/platform/src/components/aws/remix.ts
import fs12 from "fs";
import path12 from "path";
import { all as all18, output as output25 } from "@pulumi/pulumi";
var Remix;
var init_remix = __esm({
  ".sst/platform/src/components/aws/remix.ts"() {
    "use strict";
    init_define_app();
    init_define_cli();
    init_run();
    init_ssr_site();
    init_component();
    init_hint();
    init_cache();
    init_base_ssr_site();
    Remix = class extends Component {
      cdn;
      assets;
      server;
      constructor(name, args = {}, opts = {}) {
        super("sst:aws:Remix", name, args, opts);
        const parent = this;
        const edge = normalizeEdge();
        const { sitePath, partition, region } = prepare2(args, opts);
        const isUsingVite = checkIsUsingVite();
        const { access, bucket } = createBucket(parent, name, partition, args);
        const outputPath = buildApp2(name, args, sitePath);
        const { buildMeta } = loadBuildOutput();
        const plan = buildPlan();
        const { distribution, ssrFunctions, edgeFunctions } = createServersAndDistribution(
          parent,
          name,
          args,
          outputPath,
          access,
          bucket,
          plan
        );
        const serverFunction = ssrFunctions[0] ?? Object.values(edgeFunctions)[0];
        this.assets = bucket;
        this.cdn = distribution;
        this.server = serverFunction;
        if (false) {
          Hint5.register(
            this.urn,
            all18([this.cdn.domainUrl, this.cdn.url]).apply(
              ([domainUrl, url]) => domainUrl ?? url
            )
          );
        }
        this.registerOutputs({
          _metadata: {
            mode: true ? "placeholder" : "deployed",
            path: sitePath,
            url: distribution.apply((d) => d.domainUrl ?? d.url),
            edge,
            server: serverFunction.arn
          }
        });
        function normalizeEdge() {
          return output25(args?.edge).apply((edge2) => edge2 ?? false);
        }
        function checkIsUsingVite() {
          return sitePath.apply(
            (sitePath2) => fs12.existsSync(path12.join(sitePath2, "vite.config.ts")) || fs12.existsSync(path12.join(sitePath2, "vite.config.js"))
          );
        }
        function loadBuildOutput() {
          const cache = new Cache(
            `${name}BuildOutput`,
            {
              data: true ? loadBuildMetadataPlaceholder() : loadBuildMetadata()
            },
            {
              parent,
              ignoreChanges: true ? ["*"] : void 0
            }
          );
          return {
            buildMeta: cache.data
          };
        }
        function loadBuildMetadata() {
          return all18([outputPath, isUsingVite]).apply(
            ([outputPath2, isUsingVite2]) => {
              const assetsPath = isUsingVite2 ? path12.join("build", "client") : "public";
              const assetsVersionedSubDir = isUsingVite2 ? void 0 : "build";
              return {
                assetsPath,
                assetsVersionedSubDir,
                // create 1 behaviour for each top level asset file/folder
                staticRoutes: fs12.readdirSync(path12.join(outputPath2, assetsPath)).map(
                  (item) => fs12.statSync(path12.join(outputPath2, assetsPath, item)).isDirectory() ? `${item}/*` : item
                )
              };
            }
          );
        }
        function loadBuildMetadataPlaceholder() {
          return {
            assetsPath: "placeholder",
            assetsVersionedSubDir: void 0,
            staticRoutes: ["assets/*", "favicon.ico"]
          };
        }
        function buildPlan() {
          return all18([isUsingVite, outputPath, edge, buildMeta]).apply(
            ([isUsingVite2, outputPath2, edge2, buildMeta2]) => {
              const serverConfig = createServerLambdaBundle(
                isUsingVite2,
                outputPath2,
                edge2 ? "edge-server.mjs" : "regional-server.mjs"
              );
              return validatePlan({
                edge: edge2,
                cloudFrontFunctions: {
                  serverCfFunction: {
                    injections: [useCloudFrontFunctionHostHeaderInjection()]
                  },
                  staticCfFunction: {
                    injections: [
                      // Note: When using libraries like remix-flat-routes the file can
                      // contains special characters like "+". It needs to be encoded.
                      `request.uri = request.uri.split('/').map(encodeURIComponent).join('/');`
                    ]
                  }
                },
                edgeFunctions: edge2 ? {
                  server: {
                    function: serverConfig
                  }
                } : void 0,
                origins: {
                  ...edge2 ? {} : {
                    server: {
                      server: {
                        function: serverConfig
                      }
                    }
                  },
                  s3: {
                    s3: {
                      copy: [
                        {
                          from: buildMeta2.assetsPath,
                          to: "",
                          cached: true,
                          versionedSubDir: buildMeta2.assetsVersionedSubDir
                        }
                      ]
                    }
                  }
                },
                behaviors: [
                  edge2 ? {
                    cacheType: "server",
                    cfFunction: "serverCfFunction",
                    edgeFunction: "server",
                    origin: "s3"
                  } : {
                    cacheType: "server",
                    cfFunction: "serverCfFunction",
                    origin: "server"
                  },
                  ...buildMeta2.staticRoutes.map(
                    (route) => ({
                      cacheType: "static",
                      pattern: route,
                      cfFunction: "staticCfFunction",
                      origin: "s3"
                    })
                  )
                ]
              });
            }
          );
        }
        function createServerLambdaBundle(isUsingVite2, outputPath2, wrapperFile) {
          const buildPath = path12.join(outputPath2, "build");
          fs12.mkdirSync(buildPath, { recursive: true });
          const content = [
            // When using Vite config, the output build will be "server/index.js"
            // and when using Remix config it will be `server.js`.
            `// Import the server build that was produced by 'remix build'`,
            isUsingVite2 ? `import * as remixServerBuild from "./server/index.js";` : `import * as remixServerBuild from "./index.js";`,
            ``,
            fs12.readFileSync(
              path12.join(
                define_cli_default.paths.platform,
                "functions",
                "remix-server",
                wrapperFile
              )
            )
          ].join("\n");
          fs12.writeFileSync(path12.join(buildPath, "server.mjs"), content);
          const polyfillDest = path12.join(buildPath, "polyfill.mjs");
          fs12.copyFileSync(
            path12.join(
              define_cli_default.paths.platform,
              "functions",
              "remix-server",
              "polyfill.mjs"
            ),
            polyfillDest
          );
          return {
            handler: path12.join(buildPath, "server.handler"),
            nodejs: {
              esbuild: {
                inject: [path12.resolve(polyfillDest)]
              }
            }
          };
        }
      }
      /**
       * The URL of the Remix app.
       *
       * If the `domain` is set, this is the URL with the custom domain.
       * Otherwise, it's the autogenerated CloudFront URL.
       */
      get url() {
        return all18([this.cdn.domainUrl, this.cdn.url]).apply(
          ([domainUrl, url]) => domainUrl ?? url
        );
      }
      /**
       * The underlying [resources](/docs/components/#nodes) this component creates.
       */
      get nodes() {
        return {
          /**
           * The AWS Lambda server function that renders the site.
           */
          server: this.server,
          /**
           * The Amazon S3 Bucket that stores the assets.
           */
          assets: this.assets
        };
      }
      /** @internal */
      getSSTLink() {
        return {
          properties: {
            url: this.url
          }
        };
      }
    };
  }
});

// .sst/platform/src/components/aws/index.ts
var aws_exports = {};
__export(aws_exports, {
  ApiGatewayV2: () => ApiGatewayV2,
  Astro: () => Astro,
  Auth: () => Auth,
  Bucket: () => Bucket,
  Cron: () => Cron,
  Dynamo: () => Dynamo,
  Function: () => Function,
  Nextjs: () => Nextjs,
  Postgres: () => Postgres,
  Queue: () => Queue,
  Remix: () => Remix,
  Router: () => Router,
  SnsTopic: () => SnsTopic,
  SolidStart: () => SolidStart,
  StaticSite: () => StaticSite,
  Vector: () => Vector
});
var init_aws = __esm({
  ".sst/platform/src/components/aws/index.ts"() {
    "use strict";
    init_define_app();
    init_define_cli();
    init_run();
    init_apigatewayv2();
    init_auth();
    init_bucket();
    init_cron();
    init_dynamo();
    init_function();
    init_postgres();
    init_queue();
    init_router();
    init_sns_topic();
    init_static_site();
    init_vector();
    init_solid_start();
    init_astro();
    init_nextjs();
    init_remix();
  }
});

// .sst/platform/src/components/cloudflare/bucket.ts
import * as cloudflare from "@pulumi/cloudflare";
var Bucket2;
var init_bucket2 = __esm({
  ".sst/platform/src/components/cloudflare/bucket.ts"() {
    "use strict";
    init_define_app();
    init_define_cli();
    init_run();
    init_component();
    Bucket2 = class extends Component {
      bucket;
      constructor(name, args, opts) {
        super("sst:cloudflare:Bucket", name, args, opts);
        const parent = this;
        const bucket = createBucket2();
        this.bucket = bucket;
        function createBucket2() {
          return new cloudflare.R2Bucket(
            `${name}Bucket`,
            transform(args?.transform?.bucket, {
              name,
              accountId: components_exports.cloudflare.DEFAULT_ACCOUNT_ID
            }),
            { parent }
          );
        }
      }
      /**
       * The generated name of the R2 Bucket.
       */
      get name() {
        return this.bucket.name;
      }
      /**
       * The underlying [resources](/docs/components/#nodes) this component creates.
       */
      get nodes() {
        return {
          /**
           * The Cloudflare R2 Bucket.
           */
          bucket: this.bucket
        };
      }
    };
  }
});

// .sst/platform/src/components/cloudflare/kv.ts
import * as cloudflare2 from "@pulumi/cloudflare";
var Kv;
var init_kv = __esm({
  ".sst/platform/src/components/cloudflare/kv.ts"() {
    "use strict";
    init_define_app();
    init_define_cli();
    init_run();
    init_component();
    Kv = class extends Component {
      namespace;
      constructor(name, args, opts) {
        super("sst:cloudflare:Kv", name, args, opts);
        const parent = this;
        const namespace = createNamespace();
        this.namespace = namespace;
        function createNamespace() {
          return new cloudflare2.WorkersKvNamespace(
            `${name}Namespace`,
            transform(args?.transform?.namespace, {
              title: name,
              accountId: components_exports.cloudflare.DEFAULT_ACCOUNT_ID
            }),
            { parent }
          );
        }
      }
      /**
       * The generated id of the KV namespace.
       */
      get id() {
        return this.namespace.id;
      }
      /**
       * The underlying [resources](/docs/components/#nodes) this component creates.
       */
      get nodes() {
        return {
          /**
           * The Cloudflare KV namespace.
           */
          namespace: this.namespace
        };
      }
    };
  }
});

// .sst/platform/src/components/cloudflare/helpers/fetch.ts
async function cfFetch(resource, init = {}) {
  const ret = await fetch(`${CLOUDFLARE_API_BASE_URL}${resource}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${CLOUDFLARE_API_TOKEN}`,
      ...init.headers
    }
  });
  const json = await ret.json();
  if (json.success) {
    return json;
  }
  const error = new Error(
    `A request to the Cloudflare API (${resource}) failed.`
  );
  error.errors = json.errors;
  error.messages = json.messages;
  throw error;
}
var CLOUDFLARE_API_BASE_URL, CLOUDFLARE_API_TOKEN;
var init_fetch = __esm({
  ".sst/platform/src/components/cloudflare/helpers/fetch.ts"() {
    "use strict";
    init_define_app();
    init_define_cli();
    init_run();
    CLOUDFLARE_API_BASE_URL = process.env.CLOUDFLARE_API_BASE_URL ?? "https://api.cloudflare.com/client/v4";
    CLOUDFLARE_API_TOKEN = process.env.CLOUDFLARE_API_TOKEN;
  }
});

// .sst/platform/src/components/cloudflare/providers/kv-data.ts
import fs13 from "fs";
import { dynamic as dynamic9 } from "@pulumi/pulumi";
var Provider10, KvData;
var init_kv_data = __esm({
  ".sst/platform/src/components/cloudflare/providers/kv-data.ts"() {
    "use strict";
    init_define_app();
    init_define_cli();
    init_run();
    init_fetch();
    Provider10 = class {
      async create(inputs) {
        await this.upload(inputs.accountId, inputs.namespaceId, inputs.entries, []);
        return { id: "data" };
      }
      async update(id, olds, news) {
        await this.upload(
          news.accountId,
          news.namespaceId,
          news.entries,
          news.namespaceId === olds.namespaceId ? olds.entries : []
        );
        return {};
      }
      async upload(accountId, namespaceId, entries, oldEntries) {
        const oldFilesMap = new Map(oldEntries.map((f) => [f.key, f]));
        await Promise.all(
          entries.filter((entry) => {
            const old = oldFilesMap.get(entry.key);
            return old?.hash !== entry.hash || old?.contentType !== entry.contentType || old?.cacheControl !== entry.cacheControl;
          }).map(async (entry) => {
            const formData = new FormData();
            formData.append(
              "metadata",
              JSON.stringify({
                contentType: entry.contentType,
                cacheControl: entry.cacheControl
              })
            );
            formData.append("value", await fs13.promises.readFile(entry.source));
            try {
              await cfFetch(
                `/accounts/${accountId}/storage/kv/namespaces/${namespaceId}/values/${entry.key}`,
                {
                  method: "PUT",
                  body: formData
                }
              );
            } catch (error) {
              console.log(error);
              throw error;
            }
          })
        );
      }
    };
    KvData = class extends dynamic9.Resource {
      constructor(name, args, opts) {
        super(new Provider10(), `${name}.sst.cloudflare.KvPairs`, args, opts);
      }
    };
  }
});

// .sst/platform/src/runtime/cloudflare.ts
import path13 from "path";
import fs14 from "fs/promises";
import esbuild2 from "esbuild";
async function build2(name, input) {
  const out = path13.join(define_cli_default.paths.work, "artifacts", `${name}-src`);
  await fs14.rm(out, { recursive: true, force: true });
  await fs14.mkdir(out, { recursive: true });
  if (!await existsAsync(input.handler))
    return {
      type: "error",
      errors: [`Could not find file for handler "${input.handler}"`]
    };
  const build3 = input.build || {};
  const relative = path13.relative(define_cli_default.paths.root, path13.resolve(input.handler));
  const target = path13.join(
    out,
    !relative.startsWith("..") && !path13.isAbsolute(input.handler) ? relative : "",
    "index.mjs"
  );
  const links = Object.fromEntries(
    input.links?.map((item) => [item.name, item.properties]) || []
  );
  const options = {
    entryPoints: [path13.resolve(input.handler)],
    platform: "node",
    loader: build3.loader,
    keepNames: true,
    bundle: true,
    logLevel: "silent",
    metafile: true,
    format: "esm",
    target: "esnext",
    mainFields: ["module", "main"],
    outfile: target,
    sourcemap: false,
    minify: build3.minify,
    ...build3.esbuild,
    define: {
      $SST_LINKS: JSON.stringify({}),
      ...build3.esbuild?.define
    },
    banner: {
      js: [
        `globalThis.$SST_LINKS = ${JSON.stringify(links)};`,
        build3.banner || "",
        build3.esbuild?.banner || ""
      ].join("\n")
    }
  };
  const ctx = await esbuild2.context(options);
  try {
    const result2 = await ctx.rebuild();
    ctx.dispose();
    return {
      type: "success",
      handler: target
    };
  } catch (ex) {
    const result2 = ex;
    if ("errors" in result2) {
      return {
        type: "error",
        errors: result2.errors.flatMap((x) => [
          console.log(x.text),
          x.location?.file || "",
          console.log(x.location?.line, "\u2502", x.location?.lineText)
        ])
      };
    }
    return {
      type: "error",
      errors: [ex.toString()]
    };
  }
}
var init_cloudflare = __esm({
  ".sst/platform/src/runtime/cloudflare.ts"() {
    "use strict";
    init_define_app();
    init_define_cli();
    init_run();
    init_fs();
  }
});

// .sst/platform/src/components/cloudflare/providers/worker-url.ts
import { dynamic as dynamic10 } from "@pulumi/pulumi";
var Provider11, WorkerUrl;
var init_worker_url = __esm({
  ".sst/platform/src/components/cloudflare/providers/worker-url.ts"() {
    "use strict";
    init_define_app();
    init_define_cli();
    init_run();
    init_fetch();
    Provider11 = class {
      async create(inputs) {
        const url = await this.process(inputs);
        return {
          id: inputs.scriptName,
          outs: url ? { url } : {}
        };
      }
      async update(id, olds, news) {
        const url = await this.process(news);
        return {
          outs: url ? { url } : {}
        };
      }
      async process(inputs) {
        if (inputs.enabled === false) {
          await this.setEnabledFlag(inputs);
          return void 0;
        }
        const [userSubdomain] = await Promise.all([
          this.getWorkerDevSubdomain(inputs),
          this.setEnabledFlag(inputs)
        ]);
        return `${inputs.scriptName}.${userSubdomain}.workers.dev`;
      }
      async getWorkerDevSubdomain(inputs) {
        try {
          const ret = await cfFetch(
            `/accounts/${inputs.accountId}/workers/subdomain`,
            {
              headers: { "Content-Type": "application/json" }
            }
          );
          return ret.result.subdomain;
        } catch (error) {
          console.log(error);
          throw error;
        }
      }
      async setEnabledFlag(inputs) {
        try {
          await cfFetch(
            `/accounts/${inputs.accountId}/workers/scripts/${inputs.scriptName}/subdomain`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ enabled: inputs.enabled })
            }
          );
          await new Promise((resolve) => setTimeout(resolve, 3e3));
        } catch (error) {
          console.log(error);
          throw error;
        }
      }
    };
    WorkerUrl = class extends dynamic10.Resource {
      constructor(name, args, opts) {
        super(
          new Provider11(),
          `${name}.sst.cloudflare.WorkerUrl`,
          { ...args, url: void 0 },
          opts
        );
      }
    };
  }
});

// .sst/platform/src/components/cloudflare/providers/zone-lookup.ts
import { dynamic as dynamic11 } from "@pulumi/pulumi";
var Provider12, ZoneLookup;
var init_zone_lookup = __esm({
  ".sst/platform/src/components/cloudflare/providers/zone-lookup.ts"() {
    "use strict";
    init_define_app();
    init_define_cli();
    init_run();
    init_fetch();
    Provider12 = class {
      async create(inputs) {
        const zoneId = await this.lookup(inputs);
        return { id: zoneId, outs: { zoneId } };
      }
      async update(id, olds, news) {
        const zoneId = await this.lookup(news);
        return { outs: { zoneId } };
      }
      async lookup(inputs, page = 1) {
        try {
          const qs = new URLSearchParams({
            per_page: "50",
            "account.id": inputs.accountId
          }).toString();
          const ret = await cfFetch(
            `/zones?${qs}`,
            { headers: { "Content-Type": "application/json" } }
          );
          const zone = ret.result.find((z) => inputs.domain.endsWith(z.name));
          if (zone)
            return zone.id;
          if (ret.result.length < ret.result_info.per_page)
            throw new Error(
              `Could not find hosted zone for domain ${inputs.domain}`
            );
          return this.lookup(inputs, page + 1);
        } catch (error) {
          console.log(error);
          throw error;
        }
      }
    };
    ZoneLookup = class extends dynamic11.Resource {
      constructor(name, args, opts) {
        super(
          new Provider12(),
          `${name}.sst.cloudflare.ZoneLookup`,
          { ...args, zoneId: void 0 },
          opts
        );
      }
    };
  }
});

// .sst/platform/src/components/cloudflare/worker.ts
import fs15 from "fs/promises";
import {
  output as output26,
  all as all19,
  jsonStringify as jsonStringify2,
  interpolate as interpolate11
} from "@pulumi/pulumi";
import * as aws17 from "@pulumi/aws";
import * as cf from "@pulumi/cloudflare";
var Worker;
var init_worker = __esm({
  ".sst/platform/src/components/cloudflare/worker.ts"() {
    "use strict";
    init_define_app();
    init_define_cli();
    init_run();
    init_cloudflare();
    init_component();
    init_worker_url();
    init_link();
    init_zone_lookup();
    Worker = class extends Component {
      script;
      workerUrl;
      workerDomain;
      constructor(name, args, opts) {
        super("sst:cloudflare:Worker", name, args, opts);
        const parent = this;
        const urlEnabled = normalizeUrl();
        const linkData = buildLinkData();
        const iamCredentials = createAwsCredentials();
        const handler = buildHandler();
        const script = createScript();
        const workerUrl = createWorkersUrl();
        const workerDomain = createWorkersDomain();
        this.script = script;
        this.workerUrl = workerUrl;
        this.workerDomain = workerDomain;
        function normalizeUrl() {
          return output26(args.url).apply((v) => v ?? false);
        }
        function buildLinkData() {
          if (!args.link)
            return [];
          return output26(args.link).apply((links) => {
            const linkData2 = Link.build(links);
            return linkData2;
          });
        }
        function createAwsCredentials() {
          return output26(args.link ?? []).apply((links) => {
            const permissions = links.flatMap((l) => {
              if (!Link.AWS.isLinkable(l))
                return [];
              return l.getSSTAWSPermissions();
            });
            if (permissions.length === 0)
              return;
            const user = new aws17.iam.User(
              `${name}AwsUser`,
              { forceDestroy: true },
              { parent }
            );
            new aws17.iam.UserPolicy(
              `${name}AwsPolicy`,
              {
                user: user.name,
                policy: jsonStringify2({
                  Statement: permissions.map((p) => ({
                    Effect: "Allow",
                    Action: p.actions,
                    Resource: p.resources
                  }))
                })
              },
              { parent }
            );
            const keys = new aws17.iam.AccessKey(
              `${name}AwsCredentials`,
              { user: user.name },
              { parent }
            );
            return keys;
          });
        }
        function buildHandler() {
          const buildResult = all19([args, linkData]).apply(
            async ([args2, linkData2]) => {
              const result2 = await build2(name, { ...args2, links: linkData2 });
              if (result2.type === "error") {
                throw new Error(result2.errors.join("\n"));
              }
              return result2;
            }
          );
          return buildResult.handler;
        }
        function createScript() {
          return all19([handler, args.environment, iamCredentials]).apply(
            async ([handler2, environment, iamCredentials2]) => new cf.WorkerScript(
              `${name}Script`,
              transform(args.transform?.worker, {
                name,
                accountId: components_exports.cloudflare.DEFAULT_ACCOUNT_ID,
                content: (await fs15.readFile(handler2)).toString(),
                module: true,
                compatibilityDate: "2024-01-01",
                compatibilityFlags: ["nodejs_compat"],
                plainTextBindings: [
                  ...iamCredentials2 ? [
                    {
                      name: "AWS_ACCESS_KEY_ID",
                      text: iamCredentials2.id
                    }
                  ] : [],
                  ...Object.entries(environment ?? {}).map(([key, value]) => ({
                    name: key,
                    text: value
                  }))
                ],
                secretTextBindings: iamCredentials2 ? [
                  {
                    name: "AWS_SECRET_ACCESS_KEY",
                    text: iamCredentials2.secret
                  }
                ] : []
              }),
              { parent }
            )
          );
        }
        function createWorkersUrl() {
          return new WorkerUrl(
            `${name}Url`,
            {
              accountId: components_exports.cloudflare.DEFAULT_ACCOUNT_ID,
              scriptName: script.name,
              enabled: urlEnabled
            },
            { parent }
          );
        }
        function createWorkersDomain() {
          if (!args.domain)
            return;
          const zone = new ZoneLookup(
            `${name}ZoneLookup`,
            {
              accountId: components_exports.cloudflare.DEFAULT_ACCOUNT_ID,
              domain: args.domain
            },
            { parent }
          );
          return new cf.WorkerDomain(
            `${name}Domain`,
            {
              accountId: components_exports.cloudflare.DEFAULT_ACCOUNT_ID,
              service: script.name,
              hostname: args.domain,
              zoneId: zone.id
            },
            { parent }
          );
        }
      }
      /**
       * The Worker URL if `url` is enabled.
       */
      get url() {
        return this.workerDomain ? interpolate11`https://${this.workerDomain.hostname}` : this.workerUrl.url.apply((url) => url ? `https://${url}` : url);
      }
      /**
       * The underlying [resources](/docs/components/#nodes) this component creates.
       */
      get nodes() {
        return {
          /**
           * The Cloudflare Worker script.
           */
          worker: this.script
        };
      }
    };
  }
});

// .sst/platform/src/components/cloudflare/static-site.ts
import fs16 from "fs";
import path14 from "path";
import crypto6 from "crypto";
import { all as all20 } from "@pulumi/pulumi";
import { globSync as globSync4 } from "glob";
var StaticSite2;
var init_static_site2 = __esm({
  ".sst/platform/src/components/cloudflare/static-site.ts"() {
    "use strict";
    init_define_app();
    init_define_cli();
    init_run();
    init_kv();
    init_component();
    init_kv_data();
    init_worker();
    init_base_static_site();
    StaticSite2 = class extends Component {
      assets;
      router;
      constructor(name, args = {}, opts = {}) {
        super("sst:cloudflare:StaticSite", name, args, opts);
        const parent = this;
        const { sitePath, environment, indexPage } = prepare(args);
        const outputPath = buildApp(name, args.build, sitePath, environment);
        const storage = createKvStorage2();
        const assetManifest = generateAssetManifest();
        const kvData = uploadAssets();
        const worker = createRouter2();
        this.assets = storage;
        this.router = worker;
        cleanup(this.urn, this.url, sitePath, environment);
        this.registerOutputs({
          _metadata: {
            path: sitePath,
            environment,
            url: this.url
          }
        });
        function createKvStorage2() {
          return new Kv(`${name}Assets`, transform(args.transform?.assets, {}), {
            parent,
            retainOnDelete: false
          });
        }
        function generateAssetManifest() {
          return all20([outputPath, args.assets]).apply(
            async ([outputPath2, assets]) => {
              const fileOptions = assets?.fileOptions ?? [
                {
                  files: "**",
                  cacheControl: "max-age=0,no-cache,no-store,must-revalidate"
                },
                {
                  files: ["**/*.js", "**/*.css"],
                  cacheControl: "max-age=31536000,public,immutable"
                }
              ];
              const manifest = [];
              const filesProcessed = [];
              for (const fileOption of fileOptions.reverse()) {
                const files = globSync4(fileOption.files, {
                  cwd: path14.resolve(outputPath2),
                  nodir: true,
                  dot: true,
                  ignore: [
                    ".sst/**",
                    ...typeof fileOption.ignore === "string" ? [fileOption.ignore] : fileOption.ignore ?? []
                  ]
                }).filter((file) => !filesProcessed.includes(file));
                filesProcessed.push(...files);
                manifest.push(
                  ...await Promise.all(
                    files.map(async (file) => {
                      const source = path14.resolve(outputPath2, file);
                      const content = await fs16.promises.readFile(source);
                      const hash = crypto6.createHash("sha256").update(content).digest("hex");
                      return {
                        source,
                        key: file,
                        hash,
                        cacheControl: fileOption.cacheControl,
                        contentType: getContentType(file, "UTF-8")
                      };
                    })
                  )
                );
              }
              return manifest;
            }
          );
        }
        function uploadAssets() {
          return new KvData(
            `${name}AssetFiles`,
            {
              accountId: components_exports.cloudflare.DEFAULT_ACCOUNT_ID,
              namespaceId: storage.id,
              entries: assetManifest.apply(
                (manifest) => manifest.map((m) => ({
                  source: m.source,
                  key: m.key,
                  hash: m.hash,
                  cacheControl: m.cacheControl,
                  contentType: m.contentType
                }))
              )
            },
            { parent, ignoreChanges: true ? ["*"] : void 0 }
          );
        }
        function getContentType(filename, textEncoding) {
          const ext = filename.endsWith(".well-known/site-association-json") ? ".json" : path14.extname(filename);
          const extensions = {
            [".txt"]: { mime: "text/plain", isText: true },
            [".htm"]: { mime: "text/html", isText: true },
            [".html"]: { mime: "text/html", isText: true },
            [".xhtml"]: { mime: "application/xhtml+xml", isText: true },
            [".css"]: { mime: "text/css", isText: true },
            [".js"]: { mime: "text/javascript", isText: true },
            [".mjs"]: { mime: "text/javascript", isText: true },
            [".apng"]: { mime: "image/apng", isText: false },
            [".avif"]: { mime: "image/avif", isText: false },
            [".gif"]: { mime: "image/gif", isText: false },
            [".jpeg"]: { mime: "image/jpeg", isText: false },
            [".jpg"]: { mime: "image/jpeg", isText: false },
            [".png"]: { mime: "image/png", isText: false },
            [".svg"]: { mime: "image/svg+xml", isText: true },
            [".bmp"]: { mime: "image/bmp", isText: false },
            [".tiff"]: { mime: "image/tiff", isText: false },
            [".webp"]: { mime: "image/webp", isText: false },
            [".ico"]: { mime: "image/vnd.microsoft.icon", isText: false },
            [".eot"]: { mime: "application/vnd.ms-fontobject", isText: false },
            [".ttf"]: { mime: "font/ttf", isText: false },
            [".otf"]: { mime: "font/otf", isText: false },
            [".woff"]: { mime: "font/woff", isText: false },
            [".woff2"]: { mime: "font/woff2", isText: false },
            [".json"]: { mime: "application/json", isText: true },
            [".jsonld"]: { mime: "application/ld+json", isText: true },
            [".xml"]: { mime: "application/xml", isText: true },
            [".pdf"]: { mime: "application/pdf", isText: false },
            [".zip"]: { mime: "application/zip", isText: false },
            [".wasm"]: { mime: "application/wasm", isText: false }
          };
          const extensionData = extensions[ext];
          const mime = extensionData?.mime ?? "application/octet-stream";
          const charset = extensionData?.isText && textEncoding !== "none" ? `;charset=${textEncoding}` : "";
          return `${mime}${charset}`;
        }
        function createRouter2() {
          return new Worker(
            `${name}Router`,
            {
              handler: path14.join(
                define_cli_default.paths.platform,
                "functions",
                "cf-static-site-router-worker"
              ),
              url: true,
              domain: args.domain,
              environment: {
                INDEX_PAGE: indexPage,
                ...args.errorPage ? { ERROR_PAGE: args.errorPage } : {}
              },
              build: {
                esbuild: assetManifest.apply((assetManifest2) => ({
                  define: {
                    SST_ASSET_MANIFEST: JSON.stringify(
                      Object.fromEntries(assetManifest2.map((e) => [e.key, e.hash]))
                    )
                  }
                }))
              },
              transform: {
                worker: (workerArgs) => {
                  workerArgs.kvNamespaceBindings = [
                    {
                      name: "ASSETS",
                      namespaceId: storage.id
                    }
                  ];
                }
              }
            },
            // create distribution after s3 upload finishes
            { dependsOn: kvData, parent }
          );
        }
      }
      /**
       * The URL of the website.
       *
       * If the `domain` is set, this is the URL with the custom domain.
       * Otherwise, it's the autogenerated CloudFront URL.
       */
      get url() {
        return this.router.url;
      }
      /**
       * The underlying [resources](/docs/components/#nodes) this component creates.
       */
      get nodes() {
        return {
          /**
           * The Amazon S3 Bucket that stores the assets.
           */
          assets: this.assets
        };
      }
      /** @internal */
      getSSTLink() {
        return {
          properties: {
            url: this.url
          }
        };
      }
    };
  }
});

// .sst/platform/node_modules/path-to-regexp/dist.es2015/index.js
function lexer(str) {
  var tokens = [];
  var i = 0;
  while (i < str.length) {
    var char = str[i];
    if (char === "*" || char === "+" || char === "?") {
      tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
      continue;
    }
    if (char === "\\") {
      tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
      continue;
    }
    if (char === "{") {
      tokens.push({ type: "OPEN", index: i, value: str[i++] });
      continue;
    }
    if (char === "}") {
      tokens.push({ type: "CLOSE", index: i, value: str[i++] });
      continue;
    }
    if (char === ":") {
      var name = "";
      var j = i + 1;
      while (j < str.length) {
        var code = str.charCodeAt(j);
        if (
          // `0-9`
          code >= 48 && code <= 57 || // `A-Z`
          code >= 65 && code <= 90 || // `a-z`
          code >= 97 && code <= 122 || // `_`
          code === 95
        ) {
          name += str[j++];
          continue;
        }
        break;
      }
      if (!name)
        throw new TypeError("Missing parameter name at ".concat(i));
      tokens.push({ type: "NAME", index: i, value: name });
      i = j;
      continue;
    }
    if (char === "(") {
      var count = 1;
      var pattern = "";
      var j = i + 1;
      if (str[j] === "?") {
        throw new TypeError('Pattern cannot start with "?" at '.concat(j));
      }
      while (j < str.length) {
        if (str[j] === "\\") {
          pattern += str[j++] + str[j++];
          continue;
        }
        if (str[j] === ")") {
          count--;
          if (count === 0) {
            j++;
            break;
          }
        } else if (str[j] === "(") {
          count++;
          if (str[j + 1] !== "?") {
            throw new TypeError("Capturing groups are not allowed at ".concat(j));
          }
        }
        pattern += str[j++];
      }
      if (count)
        throw new TypeError("Unbalanced pattern at ".concat(i));
      if (!pattern)
        throw new TypeError("Missing pattern at ".concat(i));
      tokens.push({ type: "PATTERN", index: i, value: pattern });
      i = j;
      continue;
    }
    tokens.push({ type: "CHAR", index: i, value: str[i++] });
  }
  tokens.push({ type: "END", index: i, value: "" });
  return tokens;
}
function parse(str, options) {
  if (options === void 0) {
    options = {};
  }
  var tokens = lexer(str);
  var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
  var defaultPattern = "[^".concat(escapeString(options.delimiter || "/#?"), "]+?");
  var result2 = [];
  var key = 0;
  var i = 0;
  var path17 = "";
  var tryConsume = function(type) {
    if (i < tokens.length && tokens[i].type === type)
      return tokens[i++].value;
  };
  var mustConsume = function(type) {
    var value2 = tryConsume(type);
    if (value2 !== void 0)
      return value2;
    var _a2 = tokens[i], nextType = _a2.type, index = _a2.index;
    throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
  };
  var consumeText = function() {
    var result3 = "";
    var value2;
    while (value2 = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) {
      result3 += value2;
    }
    return result3;
  };
  while (i < tokens.length) {
    var char = tryConsume("CHAR");
    var name = tryConsume("NAME");
    var pattern = tryConsume("PATTERN");
    if (name || pattern) {
      var prefix = char || "";
      if (prefixes.indexOf(prefix) === -1) {
        path17 += prefix;
        prefix = "";
      }
      if (path17) {
        result2.push(path17);
        path17 = "";
      }
      result2.push({
        name: name || key++,
        prefix,
        suffix: "",
        pattern: pattern || defaultPattern,
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    var value = char || tryConsume("ESCAPED_CHAR");
    if (value) {
      path17 += value;
      continue;
    }
    if (path17) {
      result2.push(path17);
      path17 = "";
    }
    var open = tryConsume("OPEN");
    if (open) {
      var prefix = consumeText();
      var name_1 = tryConsume("NAME") || "";
      var pattern_1 = tryConsume("PATTERN") || "";
      var suffix = consumeText();
      mustConsume("CLOSE");
      result2.push({
        name: name_1 || (pattern_1 ? key++ : ""),
        pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
        prefix,
        suffix,
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    mustConsume("END");
  }
  return result2;
}
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
function flags(options) {
  return options && options.sensitive ? "" : "i";
}
function regexpToRegexp(path17, keys) {
  if (!keys)
    return path17;
  var groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
  var index = 0;
  var execResult = groupsRegex.exec(path17.source);
  while (execResult) {
    keys.push({
      // Use parenthesized substring match if available, index otherwise
      name: execResult[1] || index++,
      prefix: "",
      suffix: "",
      modifier: "",
      pattern: ""
    });
    execResult = groupsRegex.exec(path17.source);
  }
  return path17;
}
function arrayToRegexp(paths, keys, options) {
  var parts = paths.map(function(path17) {
    return pathToRegexp(path17, keys, options).source;
  });
  return new RegExp("(?:".concat(parts.join("|"), ")"), flags(options));
}
function stringToRegexp(path17, keys, options) {
  return tokensToRegexp(parse(path17, options), keys, options);
}
function tokensToRegexp(tokens, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function(x) {
    return x;
  } : _d, _e = options.delimiter, delimiter = _e === void 0 ? "/#?" : _e, _f = options.endsWith, endsWith = _f === void 0 ? "" : _f;
  var endsWithRe = "[".concat(escapeString(endsWith), "]|$");
  var delimiterRe = "[".concat(escapeString(delimiter), "]");
  var route = start ? "^" : "";
  for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
    var token = tokens_1[_i];
    if (typeof token === "string") {
      route += escapeString(encode(token));
    } else {
      var prefix = escapeString(encode(token.prefix));
      var suffix = escapeString(encode(token.suffix));
      if (token.pattern) {
        if (keys)
          keys.push(token);
        if (prefix || suffix) {
          if (token.modifier === "+" || token.modifier === "*") {
            var mod = token.modifier === "*" ? "?" : "";
            route += "(?:".concat(prefix, "((?:").concat(token.pattern, ")(?:").concat(suffix).concat(prefix, "(?:").concat(token.pattern, "))*)").concat(suffix, ")").concat(mod);
          } else {
            route += "(?:".concat(prefix, "(").concat(token.pattern, ")").concat(suffix, ")").concat(token.modifier);
          }
        } else {
          if (token.modifier === "+" || token.modifier === "*") {
            route += "((?:".concat(token.pattern, ")").concat(token.modifier, ")");
          } else {
            route += "(".concat(token.pattern, ")").concat(token.modifier);
          }
        }
      } else {
        route += "(?:".concat(prefix).concat(suffix, ")").concat(token.modifier);
      }
    }
  }
  if (end) {
    if (!strict)
      route += "".concat(delimiterRe, "?");
    route += !options.endsWith ? "$" : "(?=".concat(endsWithRe, ")");
  } else {
    var endToken = tokens[tokens.length - 1];
    var isEndDelimited = typeof endToken === "string" ? delimiterRe.indexOf(endToken[endToken.length - 1]) > -1 : endToken === void 0;
    if (!strict) {
      route += "(?:".concat(delimiterRe, "(?=").concat(endsWithRe, "))?");
    }
    if (!isEndDelimited) {
      route += "(?=".concat(delimiterRe, "|").concat(endsWithRe, ")");
    }
  }
  return new RegExp(route, flags(options));
}
function pathToRegexp(path17, keys, options) {
  if (path17 instanceof RegExp)
    return regexpToRegexp(path17, keys);
  if (Array.isArray(path17))
    return arrayToRegexp(path17, keys, options);
  return stringToRegexp(path17, keys, options);
}
var init_dist = __esm({
  ".sst/platform/node_modules/path-to-regexp/dist.es2015/index.js"() {
    init_define_app();
    init_define_cli();
    init_run();
  }
});

// .sst/platform/src/components/cloudflare/ssr-site.ts
import path15 from "path";
import fs17 from "fs";
import { globSync as globSync5 } from "glob";
import crypto7 from "crypto";
import { output as output27, all as all21 } from "@pulumi/pulumi";
function prepare3(args) {
  const sitePath = normalizeSitePath();
  return {
    sitePath
  };
  function normalizeSitePath() {
    return output27(args.path).apply((sitePath2) => {
      if (!sitePath2)
        return ".";
      if (!fs17.existsSync(sitePath2)) {
        throw new VisibleError(`No site found at "${path15.resolve(sitePath2)}"`);
      }
      return sitePath2;
    });
  }
}
function createKvStorage(parent, name, args) {
  return new Kv(`${name}Assets`, transform(args.transform?.assets, {}), {
    parent,
    retainOnDelete: false
  });
}
function createRouter(parent, name, args, outputPath, storage, plan) {
  return all21([outputPath, plan]).apply(([outputPath2, plan2]) => {
    const assetManifest = generateAssetManifest();
    const kvData = uploadAssets();
    const server = createServerWorker();
    const router = createRouterWorker();
    return { server, router };
    function generateAssetManifest() {
      return output27(args.assets).apply(async (assets) => {
        const versionedFilesTTL = 31536e3;
        const nonVersionedFilesTTL = 86400;
        const manifest = [];
        for (const copy of plan2.assets.copy) {
          const fileOptions = [
            // unversioned files
            {
              files: "**",
              ignore: copy.versionedSubDir ? path15.posix.join(copy.versionedSubDir, "**") : void 0,
              cacheControl: assets?.nonVersionedFilesCacheHeader ?? `public,max-age=0,s-maxage=${nonVersionedFilesTTL},stale-while-revalidate=${nonVersionedFilesTTL}`
            },
            // versioned files
            ...copy.versionedSubDir ? [
              {
                files: path15.posix.join(copy.versionedSubDir, "**"),
                cacheControl: assets?.versionedFilesCacheHeader ?? `public,max-age=${versionedFilesTTL},immutable`
              }
            ] : [],
            ...assets?.fileOptions ?? []
          ];
          const filesProcessed = [];
          for (const fileOption of fileOptions.reverse()) {
            const files = globSync5(fileOption.files, {
              cwd: path15.resolve(outputPath2, copy.from),
              nodir: true,
              dot: true,
              ignore: fileOption.ignore
            }).filter((file) => !filesProcessed.includes(file));
            filesProcessed.push(...files);
            manifest.push(
              ...await Promise.all(
                files.map(async (file) => {
                  const source = path15.resolve(outputPath2, copy.from, file);
                  const content = await fs17.promises.readFile(source);
                  const hash = crypto7.createHash("sha256").update(content).digest("hex");
                  return {
                    source,
                    key: path15.posix.join(copy.to, file),
                    hash,
                    cacheControl: fileOption.cacheControl,
                    contentType: getContentType(file, "UTF-8")
                  };
                })
              )
            );
          }
        }
        return manifest;
      });
    }
    function uploadAssets() {
      return new KvData(
        `${name}AssetFiles`,
        {
          accountId: components_exports.cloudflare.DEFAULT_ACCOUNT_ID,
          namespaceId: storage.id,
          entries: assetManifest.apply(
            (manifest) => manifest.map((m) => ({
              source: m.source,
              key: m.key,
              hash: m.hash,
              cacheControl: m.cacheControl,
              contentType: m.contentType
            }))
          )
        },
        { parent, ignoreChanges: true ? ["*"] : void 0 }
      );
    }
    function getContentType(filename, textEncoding) {
      const ext = filename.endsWith(".well-known/site-association-json") ? ".json" : path15.extname(filename);
      const extensions = {
        [".txt"]: { mime: "text/plain", isText: true },
        [".htm"]: { mime: "text/html", isText: true },
        [".html"]: { mime: "text/html", isText: true },
        [".xhtml"]: { mime: "application/xhtml+xml", isText: true },
        [".css"]: { mime: "text/css", isText: true },
        [".js"]: { mime: "text/javascript", isText: true },
        [".mjs"]: { mime: "text/javascript", isText: true },
        [".apng"]: { mime: "image/apng", isText: false },
        [".avif"]: { mime: "image/avif", isText: false },
        [".gif"]: { mime: "image/gif", isText: false },
        [".jpeg"]: { mime: "image/jpeg", isText: false },
        [".jpg"]: { mime: "image/jpeg", isText: false },
        [".png"]: { mime: "image/png", isText: false },
        [".svg"]: { mime: "image/svg+xml", isText: true },
        [".bmp"]: { mime: "image/bmp", isText: false },
        [".tiff"]: { mime: "image/tiff", isText: false },
        [".webp"]: { mime: "image/webp", isText: false },
        [".ico"]: { mime: "image/vnd.microsoft.icon", isText: false },
        [".eot"]: { mime: "application/vnd.ms-fontobject", isText: false },
        [".ttf"]: { mime: "font/ttf", isText: false },
        [".otf"]: { mime: "font/otf", isText: false },
        [".woff"]: { mime: "font/woff", isText: false },
        [".woff2"]: { mime: "font/woff2", isText: false },
        [".json"]: { mime: "application/json", isText: true },
        [".jsonld"]: { mime: "application/ld+json", isText: true },
        [".xml"]: { mime: "application/xml", isText: true },
        [".pdf"]: { mime: "application/pdf", isText: false },
        [".zip"]: { mime: "application/zip", isText: false },
        [".wasm"]: { mime: "application/wasm", isText: false }
      };
      const extensionData = extensions[ext];
      const mime = extensionData?.mime ?? "application/octet-stream";
      const charset = extensionData?.isText && textEncoding !== "none" ? `;charset=${textEncoding}` : "";
      return `${mime}${charset}`;
    }
    function createServerWorker() {
      return new Worker(
        `${name}Server`,
        {
          ...plan2.server,
          environment: output27(args.environment).apply((environment) => ({
            ...environment,
            ...plan2.server.environment
          })),
          link: output27(args.link).apply((link) => [
            ...plan2.server.link ?? [],
            ...link ?? []
          ]),
          live: false,
          _ignoreCodeChanges: true
        },
        { parent }
      );
    }
    function createRouterWorker() {
      return new Worker(
        `${name}Router`,
        {
          handler: path15.join(
            define_cli_default.paths.platform,
            "functions",
            "cf-ssr-site-router-worker"
          ),
          url: true,
          live: false,
          domain: args.domain,
          build: {
            esbuild: assetManifest.apply((assetManifest2) => ({
              define: {
                SST_ASSET_MANIFEST: JSON.stringify(
                  Object.fromEntries(assetManifest2.map((e) => [e.key, e.hash]))
                ),
                SST_ROUTES: JSON.stringify(plan2.routes)
              }
            }))
          },
          transform: {
            worker: (workerArgs) => {
              workerArgs.kvNamespaceBindings = [
                {
                  name: "ASSETS",
                  namespaceId: storage.id
                }
              ];
              workerArgs.serviceBindings = [
                {
                  name: "SERVER",
                  service: server.nodes.worker.name
                }
              ];
            }
          }
        },
        // create distribution after assets are uploaded
        { dependsOn: kvData, parent }
      );
    }
  });
}
function validatePlan2(input) {
  return input;
}
var init_ssr_site2 = __esm({
  ".sst/platform/src/components/cloudflare/ssr-site.ts"() {
    "use strict";
    init_define_app();
    init_define_cli();
    init_run();
    init_component();
    init_error();
    init_kv();
    init_worker();
    init_kv_data();
  }
});

// .sst/platform/src/components/cloudflare/remix.ts
import fs18 from "fs";
import path16 from "path";
import { all as all22 } from "@pulumi/pulumi";
var Remix2;
var init_remix2 = __esm({
  ".sst/platform/src/components/cloudflare/remix.ts"() {
    "use strict";
    init_define_app();
    init_define_cli();
    init_run();
    init_dist();
    init_ssr_site2();
    init_component();
    init_hint();
    init_base_ssr_site();
    Remix2 = class extends Component {
      assets;
      router;
      server;
      constructor(name, args = {}, opts = {}) {
        super("sst:cloudflare:Remix", name, args, opts);
        const parent = this;
        const { sitePath } = prepare3(args);
        const isUsingVite = checkIsUsingVite();
        const storage = createKvStorage(parent, name, args);
        const outputPath = buildApp2(name, args, sitePath);
        const { buildMeta } = loadBuildOutput();
        const plan = buildPlan();
        const { router, server } = createRouter(
          parent,
          name,
          args,
          outputPath,
          storage,
          plan
        );
        this.assets = storage;
        this.router = router;
        this.server = server;
        if (false) {
          Hint6.register(this.urn, this.url);
        }
        this.registerOutputs({
          _metadata: {
            mode: true ? "placeholder" : "deployed",
            path: sitePath,
            url: this.url
          }
        });
        function checkIsUsingVite() {
          return sitePath.apply(
            (sitePath2) => fs18.existsSync(path16.join(sitePath2, "vite.config.ts")) || fs18.existsSync(path16.join(sitePath2, "vite.config.js"))
          );
        }
        function loadBuildOutput() {
          return {
            buildMeta: true ? loadBuildMetadataPlaceholder() : loadBuildMetadata()
          };
        }
        function loadBuildMetadata() {
          return all22([outputPath, isUsingVite]).apply(
            ([outputPath2, isUsingVite2]) => {
              const assetsPath = isUsingVite2 ? path16.join("build", "client") : "public";
              const assetsVersionedSubDir = isUsingVite2 ? void 0 : "build";
              return {
                assetsPath,
                assetsVersionedSubDir,
                // create 1 behaviour for each top level asset file/folder
                staticRoutes: fs18.readdirSync(path16.join(outputPath2, assetsPath)).map(
                  (item) => fs18.statSync(path16.join(outputPath2, assetsPath, item)).isDirectory() ? `${item}/(.*)` : item
                )
              };
            }
          );
        }
        function loadBuildMetadataPlaceholder() {
          return {
            assetsPath: "placeholder",
            assetsVersionedSubDir: void 0,
            staticRoutes: []
          };
        }
        function buildPlan() {
          return all22([isUsingVite, outputPath, buildMeta]).apply(
            ([isUsingVite2, outputPath2, buildMeta2]) => {
              return validatePlan2({
                server: createServerLambdaBundle(isUsingVite2, outputPath2),
                assets: {
                  copy: [
                    {
                      from: buildMeta2.assetsPath,
                      to: "",
                      cached: true,
                      versionedSubDir: buildMeta2.assetsVersionedSubDir
                    }
                  ]
                },
                routes: [
                  {
                    regex: pathToRegexp(buildMeta2.staticRoutes).source,
                    origin: "assets"
                  },
                  {
                    regex: pathToRegexp("(.*)").source,
                    origin: "server"
                  }
                ]
              });
            }
          );
        }
        function createServerLambdaBundle(isUsingVite2, outputPath2) {
          const buildPath = path16.join(outputPath2, "build");
          fs18.mkdirSync(buildPath, { recursive: true });
          const content = [
            // When using Vite config, the output build will be "server/index.js"
            // and when using Remix config it will be `server.js`.
            //isUsingVite
            //  ? `import * as remixServerBuild from "./server/index.js";`
            //  : `import * as remixServerBuild from "./index.js";`,
            //`import { createRequestHandler } from "@remix-run/cloudflare";`,
            //`import * as remixServerBuild from "./server";`,
            //`import { createRequestHandler } from "@remix-run/cloudflare";`,
            //`export default {`,
            //`  async fetch(request) {`,
            //`    const requestHandler = createRequestHandler(remixServerBuild);`,
            //`    return await requestHandler(request);`,
            //`  },`,
            //`};`,
            `import { createRequestHandler } from "@remix-run/cloudflare";`,
            `import * as build from "./server/index.js";`,
            `export default {`,
            `  async fetch(request) {`,
            `    console.log("fetch");`,
            `    console.log("build", build);`,
            `    console.log("build mode", build.mode);`,
            `    const handleRequest = createRequestHandler(build);`,
            `    console.log("handleRequest", handleRequest);`,
            `    return await handleRequest(request);`,
            `  },`,
            `};`
          ].join("\n");
          fs18.writeFileSync(path16.join(buildPath, "server.ts"), content);
          const nodeBuiltInModulesPlugin = {
            name: "node:built-in:modules",
            setup(build3) {
              build3.onResolve({ filter: /^(util|stream)$/ }, ({ kind, path: path17 }) => {
                return kind === "require-call" ? { path: path17, namespace: "node-built-in-modules" } : void 0;
              });
              build3.onLoad(
                { filter: /.*/, namespace: "node-built-in-modules" },
                ({ path: path17 }) => {
                  return {
                    contents: `export * from 'node:${path17}'`,
                    loader: "js"
                  };
                }
              );
            }
          };
          return {
            handler: path16.join(buildPath, "server.ts"),
            build: {
              esbuild: {
                define: {
                  process: JSON.stringify({
                    env: {
                      //NODE_ENV: "production",
                      NODE_ENV: "development"
                    }
                  })
                },
                plugins: [nodeBuiltInModulesPlugin]
              }
            }
          };
        }
      }
      /**
       * The URL of the Remix app.
       *
       * If the `domain` is set, this is the URL with the custom domain.
       * Otherwise, it's the autogenerated CloudFront URL.
       */
      get url() {
        return this.router.url;
      }
      /**
       * The underlying [resources](/docs/components/#nodes) this component creates.
       */
      get nodes() {
        return {
          /**
           * The AWS Lambda server function that renders the site.
           */
          server: this.server,
          /**
           * The Amazon S3 Bucket that stores the assets.
           */
          assets: this.assets
        };
      }
      /** @internal */
      getSSTLink() {
        return {
          properties: {
            url: this.url
          }
        };
      }
    };
  }
});

// .sst/platform/src/components/cloudflare/account-id.ts
var DEFAULT_ACCOUNT_ID;
var init_account_id = __esm({
  ".sst/platform/src/components/cloudflare/account-id.ts"() {
    "use strict";
    init_define_app();
    init_define_cli();
    init_run();
    DEFAULT_ACCOUNT_ID = process.env.CLOUDFLARE_DEFAULT_ACCOUNT_ID;
  }
});

// .sst/platform/src/components/cloudflare/index.ts
var cloudflare_exports = {};
__export(cloudflare_exports, {
  Bucket: () => Bucket2,
  DEFAULT_ACCOUNT_ID: () => DEFAULT_ACCOUNT_ID,
  Kv: () => Kv,
  Remix: () => Remix2,
  StaticSite: () => StaticSite2,
  Worker: () => Worker
});
var init_cloudflare2 = __esm({
  ".sst/platform/src/components/cloudflare/index.ts"() {
    "use strict";
    init_define_app();
    init_define_cli();
    init_run();
    init_bucket2();
    init_kv();
    init_static_site2();
    init_remix2();
    init_worker();
    init_account_id();
  }
});

// .sst/platform/src/components/secret.ts
import { output as output29, secret as secret2 } from "@pulumi/pulumi";
var SecretMissingError, Secret;
var init_secret = __esm({
  ".sst/platform/src/components/secret.ts"() {
    "use strict";
    init_define_app();
    init_define_cli();
    init_run();
    init_error();
    init_component();
    SecretMissingError = class extends VisibleError {
      constructor(secretName) {
        super(
          `Set a value for ${secretName} with \`sst secret set ${secretName} <value>\``
        );
        this.secretName = secretName;
      }
    };
    Secret = class extends Component {
      _value;
      _name;
      _placeholder;
      /**
         * @param placeholder A placeholder value of the secret. This can be useful for cases where you might not be storing sensitive values.
      
         */
      constructor(name, placeholder) {
        super(
          "sst:sst:Secret",
          name,
          {
            placeholder
          },
          {}
        );
        this._name = name;
        this._placeholder = placeholder;
        const value = process.env["SST_SECRET_" + this._name] ?? this._placeholder;
        if (!value) {
          throw new SecretMissingError(this._name);
        }
        this._value = value;
      }
      /**
       * The name of the secret.
       */
      get name() {
        return output29(this._name);
      }
      /**
       * The value of the secret. It'll be `undefined` if the secret has not been set through the CLI or if the `placeholder` hasn't been set.
       */
      get value() {
        return secret2(this._value);
      }
      /**
       * The placeholder value of the secret.
       */
      get placeholder() {
        return output29(this._placeholder);
      }
      /** @internal */
      getSSTLink() {
        return {
          properties: {
            value: this.value
          }
        };
      }
    };
  }
});

// .sst/platform/src/components/index.ts
var components_exports = {};
__export(components_exports, {
  Link: () => Link,
  Secret: () => Secret,
  SecretMissingError: () => SecretMissingError,
  aws: () => aws_exports,
  cloudflare: () => cloudflare_exports
});
var init_components = __esm({
  ".sst/platform/src/components/index.ts"() {
    "use strict";
    init_define_app();
    init_define_cli();
    init_run();
    init_aws();
    init_cloudflare2();
    init_secret();
    init_link();
  }
});

// .sst/platform/src/config.ts
function $config(input) {
  return input;
}
var init_config = __esm({
  ".sst/platform/src/config.ts"() {
    "use strict";
    init_define_app();
    init_define_cli();
    init_run();
  }
});

// .sst/platform/src/shim/run.js
import * as util from "@pulumi/pulumi";
var $secrets, output, apply, all, interpolate, concat, jsonParse, jsonStringify, makeLinkable;
var init_run = __esm({
  ".sst/platform/src/shim/run.js"() {
    "use strict";
    init_components();
    init_link();
    init_config();
    $secrets = JSON.parse(process.env.SST_SECRETS || "{}");
    ({ output, apply, all, interpolate, concat, jsonParse, jsonStringify } = util);
    makeLinkable = Link.makeLinkable;
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
    init_define_app();
    init_define_cli();
    init_run();
    var fs19 = __require("fs");
    var path17 = __require("path");
    var os = __require("os");
    var crypto8 = __require("crypto");
    var packageJson = require_package();
    var version = packageJson.version;
    var LINE = /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;
    function parse2(src) {
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
      const result2 = DotenvModule.configDotenv({ path: vaultPath });
      if (!result2.parsed) {
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
          const attrs = _instructions(result2, key);
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
    function _instructions(result2, dotenvKey) {
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
      const ciphertext = result2.parsed[environmentKey];
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
            if (fs19.existsSync(filepath)) {
              possibleVaultPath = filepath.endsWith(".vault") ? filepath : `${filepath}.vault`;
            }
          }
        } else {
          possibleVaultPath = options.path.endsWith(".vault") ? options.path : `${options.path}.vault`;
        }
      } else {
        possibleVaultPath = path17.resolve(process.cwd(), ".env.vault");
      }
      if (fs19.existsSync(possibleVaultPath)) {
        return possibleVaultPath;
      }
      return null;
    }
    function _resolveHome(envPath) {
      return envPath[0] === "~" ? path17.join(os.homedir(), envPath.slice(1)) : envPath;
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
      const dotenvPath = path17.resolve(process.cwd(), ".env");
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
      for (const path18 of optionPaths) {
        try {
          const parsed = DotenvModule.parse(fs19.readFileSync(path18, { encoding }));
          DotenvModule.populate(parsedAll, parsed, options);
        } catch (e) {
          if (debug) {
            _debug(`Failed to load ${path18} ${e.message}`);
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
        const aesgcm = crypto8.createDecipheriv("aes-256-gcm", key, nonce);
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
      parse: parse2,
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

// .sst/platform/eval.ts
init_define_app();
init_define_cli();
init_run();

// .sst/platform/src/auto/run.ts
init_define_app();
init_define_cli();
init_run();
init_link();
init_hint();
init_warp();
init_error();
import {
  interpolate as interpolate12,
  mergeOptions,
  runtime as runtime2
} from "@pulumi/pulumi";
import aws18 from "@pulumi/aws";
async function run(program) {
  process.chdir(define_cli_default.paths.root);
  addTransformationToRetainResourcesOnDelete();
  addTransformationToEnsureUniqueComponentNames();
  addTransformationToCheckBucketsHaveMultiplePolicies();
  Link.makeLinkable(aws18.dynamodb.Table, function() {
    return {
      properties: { tableName: this.name }
    };
  });
  Link.AWS.makeLinkable(aws18.dynamodb.Table, function() {
    return [
      {
        actions: ["dynamodb:*"],
        resources: [this.arn, interpolate12`${this.arn}/*`]
      }
    ];
  });
  Hint.reset();
  Link.reset();
  Warp.reset();
  const outputs = await program() || {};
  outputs._links = Link.list();
  outputs._hints = Hint.list();
  outputs._warps = Warp.list();
  outputs._receivers = Link.Receiver.list();
  return outputs;
}
function addTransformationToRetainResourcesOnDelete() {
  runtime2.registerStackTransformation((args) => {
    if (define_app_default.removal === "retain-all" || define_app_default.removal === "retain" && [
      "aws:s3/bucket:Bucket",
      "aws:s3/bucketV2:BucketV2",
      "aws:dynamodb/table:Table"
    ].includes(args.type)) {
      return {
        props: args.props,
        opts: mergeOptions({ retainOnDelete: true }, args.opts)
      };
    }
    return void 0;
  });
}
function addTransformationToEnsureUniqueComponentNames() {
  const componentNames = /* @__PURE__ */ new Set();
  runtime2.registerStackTransformation((args) => {
    if (args.type.startsWith("pulumi")) {
      return;
    }
    if (componentNames.has(args.name)) {
      throw new VisibleError(
        `Invalid component name "${args.name}". Component names must be unique.`
      );
    }
    componentNames.add(args.name);
    if (!args.name.match(/^[A-Z][a-zA-Z0-9]*$/)) {
      throw new VisibleError(
        `Invalid component name "${args.name}". Component names must start with an uppercase letter and contain only alphanumeric characters.`
      );
    }
    return void 0;
  });
}
function addTransformationToCheckBucketsHaveMultiplePolicies() {
  const bucketsWithPolicy = {};
  runtime2.registerStackTransformation((args) => {
    if (args.type !== "aws:s3/bucketPolicy:BucketPolicy")
      return;
    args.props.bucket.apply((bucket) => {
      if (bucketsWithPolicy[bucket])
        throw new VisibleError(
          `Cannot add bucket policy "${args.name}" to the AWS S3 Bucket "${bucket}". The bucket already has a policy attached "${bucketsWithPolicy[bucket]}".`
        );
      bucketsWithPolicy[bucket] = args.name;
    });
    return void 0;
  });
}

// .sst/platform/eval.ts
import * as aws19 from "@pulumi/aws";

// sst.config.ts
init_define_app();
init_define_cli();
init_run();
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
    const KindeAudience = `snapshare-api-${define_app_default.stage}`;
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
    const assetsBucket = new components_exports.aws.Bucket("SnapshareAssets");
    const api = new components_exports.aws.ApiGatewayV2("SnapShareApi");
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
    new components_exports.aws.StaticSite("SnapshareWeb", {
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

// .sst/platform/eval.ts
globalThis.aws = aws19;
var result = await run(sst_config_default.run);
var eval_default = result;
export {
  eval_default as default
};