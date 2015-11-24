var CharlieKey = function (opts) {
    opts = opts || {};
    this._keyCode = undefined;
};

CharlieKey.prototype.registerKeyCode = function (keyCode) {
    if (!isNaN(this._keyCode)) {
        return;
    }
    if (!isNaN(keyCode) && 0 <= keyCode && keyCode <= 9999) {
        this._keyCode = keyCode;
    }
};

CharlieKey.prototype.inputKeyCode = function (keyCode) {
    if (this._keyCode == keyCode) {
        this._keyCode = undefined;
    }
};

CharlieKey.prototype.isOpened = function () {
    return isNaN(this._keyCode);
};

var expect = chai.expect;

describe('CharlieKey', function () {
    it('lock and unlock key.', function () {
        var charlieKey = new CharlieKey();
        expect(charlieKey.isOpened()).to.be.ok;
        charlieKey.registerKeyCode(1000);
        expect(charlieKey.isOpened()).to.not.be.ok;
        charlieKey.inputKeyCode(1000);
        expect(charlieKey.isOpened()).to.be.ok;
    });

    it('lock and fail to unlock.', function () {
        var charlieKey = new CharlieKey();
        expect(charlieKey.isOpened()).to.be.ok;
        charlieKey.registerKeyCode(1000);
        expect(charlieKey.isOpened()).to.not.be.ok;
        charlieKey.inputKeyCode(100);
        expect(charlieKey.isOpened()).to.not.be.ok;
    });

    it('ignore second register.', function () {
        var charlieKey = new CharlieKey();
        expect(charlieKey.isOpened()).to.be.ok;
        charlieKey.registerKeyCode(1000);
        charlieKey.registerKeyCode(2000);
        charlieKey.inputKeyCode(2000);
        expect(charlieKey.isOpened()).to.not.be.ok;
        charlieKey.inputKeyCode(1000);
        expect(charlieKey.isOpened()).to.be.ok;
    });

    it('reject invalid key code', function () {
        var charlieKey = new CharlieKey();
        expect(charlieKey.isOpened()).to.be.ok;
        charlieKey.registerKeyCode('abcd');
        expect(charlieKey.isOpened()).to.be.ok;
        charlieKey.registerKeyCode(99999);
        expect(charlieKey.isOpened()).to.be.ok;
        charlieKey.registerKeyCode(10000);
        expect(charlieKey.isOpened()).to.be.ok;
    });
});
