import * as app from 'tns-core-modules/application';
import * as versionTracking from 'nativescript-version-tracking';

app.on('launch', () => {
    versionTracking.init();

    console.log('versionTracking: ', versionTracking);
});


app.start({ moduleName: 'main-page' });
