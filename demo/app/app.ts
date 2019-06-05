/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/

import * as app from 'tns-core-modules/application';
import * as versionTracking from 'nativescript-version-tracking';

app.on('launch', () => {
    versionTracking.init();

    console.log('versionTracking: ', versionTracking);
});

app.start({ moduleName: 'main-page' });
