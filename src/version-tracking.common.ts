import * as appSettings from 'tns-core-modules/application-settings';

export interface IVersionTracking {
  initialized: boolean;

  /**
   * Check if this is the first time ever that the app is launched.
   */
  isFirstLaunchEver: boolean;

  /**
   * Check if this is the first time the current version is being launched.
   */
  isFirstLaunchForVersion: boolean;

  /**
   * Check if this is the first time the current build is being launched.
   */
  isFirstLaunchForBuild: boolean;


  /**
   * Returns the current version of the app.
   */
  currentVersion: string;

  /**
   * Returns the previous version of the app.
   */
  previousVersion: string;

  /**
   * Returns the version which the user first installed the app.
   */
  firstInstalledVersion: string;

  /**
   * Returns a list of versions which the user has had installed, e.g. ['2.1', '3.5', '4.0', '4.1']. The List is ordered from the first version installed to (including) the current version
   */
  versionHistory: Array<string>;


  /**
   * Returns the current build of the app.
   */
  currentBuild: string;

  /**
   * Returns the previous build of the app.
   */
  previousBuild: string;

  /**
   * Returns the build which the user first installed the app.
   */
  firstInstalledBuild: string;

  /**
   * Returns a list of builds which the user has had installed, e.g. ['2100', '3500', '4000', '4100']. The List is ordered from the first build installed to (including) the current build.
   */
  buildHistory: Array<string>;


  /**
   * Initializes the plugin. Calling this method is required. A good place to call it is at the application onLaunch() method.
   * @param versionsKey The versions key to be used in the Application Settings
   * @param buildsKey The builds version  to be used in the Application Settings
   */
  init(versionsKey?: string, buildsKey?: string): void;

  /**
   * Check if this is the first launch for a particular version number. Useful if you want to execute some code for the first time launches of a particular version.
   * @param version The particular version number
   * @return {boolean}
   */
  firstLaunchForVersion(version: string): boolean;

  /**
   * Check if this is the first launch for a particular build number. Useful if you want to execute some code for the first time launches of a particular build.
   * @param build This particular build number
   * @return {boolean}
   */
  firstLaunchForBuild(build: string): boolean;
}

export const init = (versionTracking: IVersionTracking, versionsKey: string, buildsKey: string) => {
  // load history
  let versionTrail: { [key: string]: Array<string> } = {};

  const oldVersionList: Array<string> = JSON.parse(appSettings.getString(versionsKey, null));
  const oldBuildList: Array<string> = JSON.parse(appSettings.getString(buildsKey, null));

  if (oldVersionList == null || oldBuildList == null) {
    versionTracking.isFirstLaunchEver = true;

    versionTrail[versionsKey] = [];
    versionTrail[buildsKey] = [];
  } else {
    versionTrail[versionsKey] = oldVersionList;
    versionTrail[buildsKey] = oldBuildList;

    versionTracking.isFirstLaunchEver = false;
  }

  // check if this version was previously launched
  if (versionTrail[versionsKey].indexOf(versionTracking.currentVersion) !== -1) {
    versionTracking.isFirstLaunchForVersion = false;
  } else {
    versionTracking.isFirstLaunchForVersion = true;

    versionTrail[versionsKey].push(versionTracking.currentVersion);
  }

  // check if this build was previously launched
  if (versionTrail[buildsKey].indexOf(versionTracking.currentBuild) !== -1) {
    versionTracking.isFirstLaunchForBuild = false;
  } else {
    versionTracking.isFirstLaunchForBuild = true;

    versionTrail[buildsKey].push(versionTracking.currentBuild);
  }

  // Previous Version
  const totalVersions = versionTrail[versionsKey].length;
  versionTracking.previousVersion =
    totalVersions >= 2 ? versionTrail[versionsKey][totalVersions - 2] : null;

  // First Installed Version
  versionTracking.firstInstalledVersion = versionTrail[versionsKey][0] || null;

  // Previous Build
  const totalBuilds = versionTrail[buildsKey].length;
  versionTracking.previousBuild =
    totalBuilds >= 2 ? versionTrail[buildsKey][totalBuilds - 2] : null;

  // first Installed Build
  versionTracking.firstInstalledBuild = versionTrail[buildsKey][0] || null;

  // histories
  versionTracking.versionHistory = versionTrail[versionsKey];
  versionTracking.buildHistory = versionTrail[buildsKey];

  // store the new version stuff
  appSettings.setString(versionsKey, JSON.stringify(versionTrail[versionsKey]));
  appSettings.setString(buildsKey, JSON.stringify(versionTrail[buildsKey]));
};

/**
 * Track which versions of your NativeScript App, a user has previously installed.
 * @module "nativescript-version-tracking"
 */ /** */
export const versionTracking: IVersionTracking = {
  initialized: false,

  isFirstLaunchEver: null,
  isFirstLaunchForVersion: null,
  isFirstLaunchForBuild: null,

  currentVersion: null,
  previousVersion: null,
  firstInstalledVersion: null,
  versionHistory: [],

  currentBuild: null,
  previousBuild: null,
  firstInstalledBuild: null,
  buildHistory: [],

  init: () => null,

  firstLaunchForVersion: (version: string): boolean => {
    if (versionTracking.currentVersion) {
      return versionTracking.currentVersion.toLowerCase() === version.toLowerCase() && versionTracking.isFirstLaunchForVersion;
    } else {
      return false;
    }
  },

  firstLaunchForBuild: (build: string): boolean => {
    if (versionTracking.currentBuild) {
      return versionTracking.currentBuild.toLowerCase() === build.toLowerCase() && versionTracking.isFirstLaunchForBuild;
    } else {
      return false;
    }
  }
};
