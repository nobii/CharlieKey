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
