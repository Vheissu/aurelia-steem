import * as steem from '@steemit/steem-js';

import path from 'path';
import fs from 'fs';
import Koa from 'koa';
import mount from 'koa-mount';
import helmet from 'koa-helmet';
import koa_logger from 'koa-logger';
import favicon from 'koa-favicon';
import staticCache from 'koa-static-cache';
import session from '@steem/crypto-session';
import isBot from 'koa-isbot';
import csrf from 'koa-csrf';
import koaLocale from 'koa-locale';

const app = new Koa();
app.name = 'Aurelia Steem';

const env = process.env.NODE_ENV || 'development';
const cacheOpts = { maxAge: 86400000, gzip: true };

app.use(
    favicon(path.join(__dirname, '../favicon.ico'))
);

app.use(
    mount(
        '/images',
        staticCache(path.join(__dirname, '../src/assets/images'), cacheOpts)
    )
);

app.use(
    mount(
        '/assets',
        staticCache(path.join(__dirname, '../dist'), cacheOpts)
    )
);

app.use(isBot());
