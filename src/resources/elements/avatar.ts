import './avatar.scss';

import { bindable, containerless } from 'aurelia-framework';

export const getAvatarURL = (username, size = 100) => size > 64 ? `https://steemitimages.com/u/${username}/avatar` : `https://steemitimages.com/u/${username}/avatar/small`;

@containerless()
export class Avatar {
    @bindable username;
    @bindable size = 100;

    public style: any = {};

    attached() {
        this.style = {
            minWidth: `${this.size}px`,
            width: `${this.size}px`,
            height: `${this.size}px`
        };

        const url = getAvatarURL(this.username, this.size);

        if (this.username) {
            this.style = {
                ...this.style,
                backgroundImage: `url(${url})`
            };
        }
    }
}
