import { versionTracking, init } from './version-tracking.common';

versionTracking.init = (versionsKey = 'tnsVersion', buildsKey = 'tnsBuild') => {
  if (versionTracking.initialized) {
    throw new Error('Version Tracking already initialized');
  }

  versionTracking.initialized = true;

  // current version and build
  versionTracking.currentVersion = String(NSBundle.mainBundle.objectForInfoDictionaryKey('CFBundleShortVersionString'));
  versionTracking.currentBuild = String(NSBundle.mainBundle.objectForInfoDictionaryKey('CFBundleVersion'));

  // initialize
  init(versionTracking, versionsKey, buildsKey);
};

export default versionTracking;