import * as steem from '@steemit/steem-js';
import MarkdownIt from 'markdown-it';
import mili from 'markdown-it-linkify-images';
import plusImageSyntax from 'markdown-it-plus-image';

export class Content {
    post: any = {};

    async activate(params) {
        const author = params.author.replace('@', '');
        const permlink = params.permlink;

        const md = new MarkdownIt();

        md.use(mili);
        md.use(plusImageSyntax);

        steem.api.getContentAsync(author, permlink)
            .then(postObject => this.post = postObject)
            .then(postObject => this.post.body = md.render(this.post.body))
            .catch(error => console.log(error));
    }
}
