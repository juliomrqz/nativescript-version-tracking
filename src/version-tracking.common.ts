import * as appSettings from 'tns-core-modules/application-settings';

interface IVersionTracking {
  initialized: boolean;

  isFirstLaunchEver: boolean;
  isFirstLaunchForVersion: boolean;
  isFirstLaunchForBuild: boolean;

  versionHistory: Array<string>;
  currentVersion: string;
  previousVersion: string;
  firstInstalledVersion: string;

  buildHistory: Array<string>;
  currentBuild: string;
  previousBuild: string;
  firstInstalledBuild: string;

  init(versionsKey?: string, buildsKey?: string): void;
  firstLaunchForVersion(version: string): boolean;
  firstLaunchForBuild(build: string): boolean;
}

export const init = (versionTracking: IVersionTracking, versionsKey: string, buildsKey: string) => {
  // load history
  let versionTrail: { [key: string]: Array<string> } = {};

  const oldVersionList: Array<string> = JSON.parse(appSettings.getString(versionsKey));
  const oldBuildList: Array<string> = JSON.parse(appSettings.getString(buildsKey));

  if (oldVersionList == null || oldBuildList == null) {
    versionTracking.isFirstLaunchEver = true;

    versionTrail[versionsKey] = [];
    buildsKey[buildsKey] = [];
  } else {
    versionTrail[versionsKey] = oldVersionList;
    buildsKey[buildsKey] = oldBuildList;

    versionTracking.isFirstLaunchEver = false;
  }

  // check if this version was previously launched
  if (versionTrail[versionsKey].includes(versionTracking.currentVersion)) {
    versionTracking.isFirstLaunchForVersion = false;
  } else {
    versionTracking.isFirstLaunchForVersion = true;

    versionTrail[versionsKey].push(versionTracking.currentVersion);
  }

  // check if this build was previously launched
  if (versionTrail[buildsKey].includes(versionTracking.currentVersion)) {
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

  // store the new version stuff
  appSettings.getString(versionsKey, JSON.stringify(versionTrail[versionsKey]));
  appSettings.getString(buildsKey, JSON.stringify(versionTrail[buildsKey]));
};

export const versionTracking: IVersionTracking = {
  initialized: false,

  isFirstLaunchEver: null,
  isFirstLaunchForVersion: null,
  isFirstLaunchForBuild: null,

  versionHistory: [],
  currentVersion: null,
  previousVersion: null,
  firstInstalledVersion: null,

  buildHistory: [],
  currentBuild: null,
  previousBuild: null,
  firstInstalledBuild: null,

  init: () => null,

  firstLaunchForVersion: (version: string) => {
    return versionTracking.currentVersion.toLowerCase() === version.toLowerCase() && versionTracking.isFirstLaunchForVersion;
  },

  firstLaunchForBuild: (build: string) => {
    return versionTracking.currentBuild.toLowerCase() === build.toLowerCase() && versionTracking.isFirstLaunchForBuild;
  }
};
