import { versionTracking, keys, init } from './version-tracking.common';


versionTracking.init = (versionsKey = keys.versions, buildsKey = keys.builds) => {
  if (versionTracking.initialized) {
    throw new Error('Version Tracking already initialized');
  }

  versionTracking.initialized = true;

  // current version and build
  versionTracking.currentVersion = NSBundle.mainBundle.objectForInfoDictionaryKey('CFBundleShortVersionString');
  versionTracking.currentBuild = NSBundle.mainBundle.objectForInfoDictionaryKey('CFBundleVersion');

  // initialize
  init(versionTracking, versionsKey, buildsKey);
};

module.exports = versionTracking;