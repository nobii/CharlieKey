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
    if (this._keyCode === keyCode) {
        this._keyCode = undefined;
    }
};

CharlieKey.prototype.isOpened = function () {
    return isNaN(this._keyCode);
};
