// import 'vite/modulepreload-polyfill'

import * as refPalette from './tokens/ref-palette.module.scss';
import * as sysColor from './tokens/sys-color.module.scss';
import * as sysTypeface from './tokens/sys-typeface.module.scss';

import * as packageJSON from '../package.json';

export default {
    version: packageJSON.version,
    ref: {
        palette: refPalette.default,
    },
    sys: {
        color: sysColor.default,
        typeface: sysTypeface.default,
    },
    comp: {
        // TODO: add components 
    }
}