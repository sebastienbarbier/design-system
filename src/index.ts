// import 'vite/modulepreload-polyfill'

import * as refPalette from "./tokens/ref-palette.module.scss";
import * as sysColor from "./tokens/sys-color.module.scss";
import * as sysTypeface from "./tokens/sys-typeface.module.scss";
import * as compBadge from "./tokens/comp-badge.module.scss";
import * as compTitle from "./tokens/comp-title.module.scss";

import * as packageJSON from "../package.json";

export const json = {
  version: packageJSON.version,
  ref: {
    palette: refPalette.default,
  },
  sys: {
    color: sysColor.default,
    typeface: sysTypeface.default,
  },
  comp: {
    badge: compBadge.default,
    title: compTitle.default,
  },
};

export default json;
