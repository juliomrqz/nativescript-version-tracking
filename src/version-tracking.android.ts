import * as app from 'tns-core-modules/application';
import { versionTracking, init } from './version-tracking.common';

versionTracking.init = (versionsKey = 'tnsVersion', buildsKey = 'tnsBuild') => {
  if (versionTracking.initialized) {
    throw new Error('Version Tracking already initialized');
  }

  versionTracking.initialized = true;

  // current version and build
  const packageManager = android.content.pm.PackageManager;
  const packageInfo = app.android.context
    .getPackageManager()
    .getPackageInfo(app.android.context.getPackageName(), packageManager.GET_META_DATA);

  versionTracking.currentVersion = String(packageInfo.versionName);
  versionTracking.currentBuild = String(packageInfo.versionCode);

  // initialize
  init(versionTracking, versionsKey, buildsKey);
};

export default versionTracking;
