import * as app from "tns-core-modules/application";
import versionTracking from 'nativescript-version-tracking';

app.on('launch', () => {
  versionTracking.init();

  console.log('versionTracking: ', versionTracking);
});

app.run({ moduleName: "app-root" });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
