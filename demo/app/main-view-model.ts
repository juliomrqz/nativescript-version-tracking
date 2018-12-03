import { Observable } from 'tns-core-modules/data/observable';
import * as versionTracking from 'nativescript-version-tracking';

export class HelloWorldModel extends Observable {
  isFirstLaunchEver: boolean;
  isFirstLaunchForVersion: boolean;
  isFirstLaunchForBuild: boolean;

  currentVersion: string;
  previousVersion: string;
  firstInstalledVersion: string;
  versionHistory: string;

  currentBuild: string;
  previousBuild: string;
  firstInstalledBuild: string;
  buildHistory: string;

  firstLaunchForVersion: boolean;
  firstLaunchForBuild: boolean;

  constructor() {
    super();

    this.isFirstLaunchEver = versionTracking.isFirstLaunchEver;
    this.isFirstLaunchForVersion = versionTracking.isFirstLaunchForVersion;
    this.isFirstLaunchForBuild = versionTracking.isFirstLaunchForBuild;

    this.currentVersion = versionTracking.currentVersion;
    this.previousVersion = versionTracking.previousVersion;
    this.firstInstalledVersion = versionTracking.firstInstalledVersion;
    this.versionHistory = JSON.stringify(versionTracking.versionHistory);

    this.currentBuild = versionTracking.currentBuild;
    this.previousBuild = versionTracking.previousBuild;
    this.firstInstalledBuild = versionTracking.firstInstalledBuild;
    this.buildHistory = JSON.stringify(versionTracking.buildHistory);

    this.firstLaunchForVersion = versionTracking.firstLaunchForVersion('2.0.0');
    this.firstLaunchForBuild = versionTracking.firstLaunchForBuild('200');
  }
}
