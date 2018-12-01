var VersionTracking = require("nativescript-version-tracking").VersionTracking;
var versionTracking = new VersionTracking();

describe("greet function", function() {
    it("exists", function() {
        expect(versionTracking.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(versionTracking.greet()).toEqual("Hello, NS");
    });
});