import { bindable } from 'aurelia-framework';

export const getAvatarURL = (username, size = 100) => size > 64 ? `https://steemitimages.com/u/${username}/avatar` : `https://steemitimages.com/u/${username}/avatar/small`;

export class Avatar {
    @bindable username;
    @bindable size = 100;

    attached() {
        let style: any = {
            minWidth: `${this.size}px`,
            width: `${this.size}px`,
            height: `${this.size}px`
        };

        const url = getAvatarURL(this.username, this.size);

        if (this.username) {
            style = {
                ...style,
                backgroundImage: `url(${url})`
            };
        }
    }
}
