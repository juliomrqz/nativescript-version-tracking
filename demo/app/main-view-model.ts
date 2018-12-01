import { Observable } from 'tns-core-modules/data/observable';
import { VersionTracking } from 'nativescript-version-tracking';

export class HelloWorldModel extends Observable {
  public message: string;
  private versionTracking: VersionTracking;

  constructor() {
    super();

    this.versionTracking = new VersionTracking();
    this.message = this.versionTracking.message;
  }
}
