[![Bazzite Project](https://img.shields.io/badge/Bazzite-project-blue.svg)](https://www.bazzite.com/docs/nativescript-version-tracking?utm_source=github&utm_medium=readme&utm_campaign=nativescript-version-tracking)
[![Travis](https://img.shields.io/travis/bazzite/nativescript-version-tracking/master.svg)](https://travis-ci.org/bazzite/nativescript-version-tracking)
[![version](https://img.shields.io/npm/v/nativescript-version-tracking.svg)](https://www.npmjs.com/package/nativescript-version-tracking)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://www.bazzite.com/docs/nativescript-version-tracking/license?utm_source=github&utm_medium=readme&utm_campaign=nativescript-version-tracking)
[![Greenkeeper badge](https://badges.greenkeeper.io/bazzite/nativescript-version-tracking.svg)](https://greenkeeper.io/)

# NativeScript Version Tracking ![apple](https://cdn3.iconfinder.com/data/icons/picons-social/57/16-apple-32.png) ![android](https://cdn4.iconfinder.com/data/icons/logos-3/228/android-32.png) 

Track which versions of your NativeScript App, a user has previously installed.

## Installation

Run the following command from the root of your project:

```bash
$ tns plugin add nativescript-version-tracking
```

## Usage 

The best way to explore the usage of the plugin is to inspect the demo app in the plugin's root folder.

### Initialize the plugin

This plugin needs to be initialized when your app starts.

*TypeScript*

```typescript
import * as app from 'tns-core-modules/application';
import * as versionTracking from 'nativescript-version-tracking';

app.on('launch', () => {
    versionTracking.init();
});
```

*Javascript*

```javascript
var app = require('tns-core-modules/application');
var versionTracking = require('nativescript-version-tracking');

app.on('launch', function () {
    versionTracking.init();
});	
```

### Use the API

You can make use of the plugin whenever you want. For example, a user has launched several previous versions, and this is the first time he's launched the new version 2.0.1:

```javascript
versionTracking.isFirstLaunchEver;        // false
versionTracking.isFirstLaunchForVersion;  // true
versionTracking.isFirstLaunchForBuild;    // true

versionTracking.currentVersion;           // 2.0.1
versionTracking.previousVersion;          // 2.0.0
versionTracking.firstInstalledVersion;    // 1.0.0
versionTracking.versionHistory;           // [1.0.0, 1.0.1, 1.0.2, 2.0.0, 2.0.1]

versionTracking.currentBuild;             // 18
versionTracking.previousBuild;            // 15
versionTracking.firstInstalledBuild;      // 1
versionTracking.buildHistory;             // [1, 2, 3, 4, 5, 8, 9, 10, 11, 13, 15, 18]

versionTracking.firstLaunchForVersion('3.0.0')     // false
versionTracking.firstLaunchForBuild('20')          // false
```

## API


### Properties

| Property                | Default | Description                                                                                                                                                                             |
|-------------------------|:-------:|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| isFirstLaunchEver       |    -    | Check if this is the first time ever that the app is launched.                                                                                                                          |
| isFirstLaunchForVersion |    -    | Check if this is the first time the current version is being launched.                                                                                                                  |
| isFirstLaunchForBuild   |    -    | Check if this is the first time the current build is being launched.                                                                                                                    |
| currentVersion          |    -    | Returns the current version of the app.                                                                                                                                                 |
| previousVersion         |    -    | Returns the previous version of the app.                                                                                                                                                |
| firstInstalledVersion   |    -    | Returns the version which the user first installed the app.                                                                                                                             |
| versionHistory          |    []   | Returns a list of versions which the user has had installed, e.g. ['2.1', '3.5', '4.0', '4.1']. The List is ordered from the first version installed to (including) the current version |
| currentBuild            |    -    | Returns the current build of the app.                                                                                                                                                   |
| previousBuild           |    -    | Returns the previous build of the app.                                                                                                                                                  |
| firstInstalledBuild     |    -    | Returns the build which the user first installed the app.                                                                                                                               |
| buildHistory            |    []   | Returns a list of builds which the user has had installed, e.g. ['2100', '3500', '4000', '4100']. The List is ordered from the first build installed to (including) the current build.  |
### Methods

| Method                                         | Returns | Description                                                                                                                                                     |
|------------------------------------------------|:-------:|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| init(versionsKey?: string, buildsKey?: string) |   void  | Initializes the plugin. Calling this method is required. A good place to call it is at the application onLaunch() method.                                       |
| firstLaunchForVersion(version: string)         | boolean | Check if this is the first launch for a particular version number. Useful if you want to execute some code for the first time launches of a particular version. |
| firstLaunchForBuild(build: string)             | boolean | Check if this is the first launch for a particular build number. Useful if you want to execute some code for the first time launches of a particular build.     |

## Support

For questions and support, use the [Issues section][issues].

You may also want to [follow the company supporting this project on Twitter][twitter].

### Professional Support

This project is sponsored by [Bazzite][bazzite-website]. If you require assistance on your project(s), please contact us at [https://www.bazzite.com/contact][contact-page].

## Contributing

Please make sure to read the [Contributing Guide][contributing] before making a pull request.

## Code of Conduct

Everyone participating in this project is expected to agree to abide by the [Code of Conduct][code-of-conduct].

## License

Code released under the [MIT License][license-page].

---

Originally inspired by [VersionTrackingPlugin](https://github.com/colbylwilliams/VersionTrackingPlugin).


![](https://ga-beacon.appspot.com/UA-130293414-1/bazzite/nativescript-version-tracking?pixel)


[contributing]: https://www.bazzite.com/docs/nativescript-version-tracking/contributing?utm_source=github&utm_medium=readme&utm_campaign=nativescript-version-tracking
[code-of-conduct]: https://www.bazzite.com/open-source/code-of-conduct?utm_source=github&utm_medium=readme&utm_campaign=nativescript-version-tracking
[issues]: https://github.com/bazzite/nativescript-version-tracking/issues
[twitter]: https://twitter.com/BazziteTech
[bazzite-website]: https://www.bazzite.com?utm_source=github&utm_medium=readme&utm_campaign=nativescript-version-tracking
[contact-page]: https://www.bazzite.com/contact?utm_source=github&utm_medium=readme&utm_campaign=nativescript-version-tracking
[license-page]: https://www.bazzite.com/docs/nativescript-version-tracking/license?utm_source=github&utm_medium=readme&utm_campaign=nativescript-version-tracking
