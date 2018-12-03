var versionTracking = require('nativescript-version-tracking');

try {
    versionTracking.init()
} catch (error) {
    console.log('init error ->', error)
}

describe('histories', function() {
    it('versionHistory exists', function() {
        expect(versionTracking.versionHistory).toBeDefined();
    });

    it('versionHistory includes current version', function() {
        expect(versionTracking.versionHistory.includes(versionTracking.currentVersion)).toEqual(true);
    });

    it('buildHistory exists', function() {
        expect(versionTracking.buildHistory).toBeDefined();
    });

    it('buildHistory includes current build', function() {
        expect(versionTracking.buildHistory.includes(versionTracking.currentBuild)).toEqual(true);
    });
});

describe('version', function() {
    it('equals to 1.0', function() {
        expect(versionTracking.currentVersion).toEqual('1.0');
    });

    it('firstInstalledVersion equals to 1.0', function() {
        expect(versionTracking.firstInstalledVersion).toEqual('1.0');
    });

    it('previousVersion returns null', function() {
        expect(versionTracking.previousVersion).toEqual(null);
    });
});


describe('build', function() {
    it('equals to 10', function() {
        expect(versionTracking.currentBuild).toEqual('10');
    });

    it('firstInstalledBuild equals to 10', function() {
        expect(versionTracking.firstInstalledBuild).toEqual('10');
    });

    it('previousBuild returns null', function() {
        expect(versionTracking.previousBuild).toEqual(null);
    });
});


describe('methods', function() {
    it('firstLaunchForVersion returns false', function() {
        expect(versionTracking.firstLaunchForVersion('2349495586')).toEqual(false);
    });
    it('firstLaunchForBuild returns false', function() {
        expect(versionTracking.firstLaunchForBuild('2349495586')).toEqual(false);
    });
});