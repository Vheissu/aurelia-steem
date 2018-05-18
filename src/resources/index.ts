import {FrameworkConfiguration, PLATFORM} from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {
    config.globalResources([
        PLATFORM.moduleName('./elements/avatar'),
        PLATFORM.moduleName('./elements/follow-button'),
        PLATFORM.moduleName('./elements/user-card.html')
        //PLATFORM.moduleName('./value-converters/reputation')
    ]);
}
