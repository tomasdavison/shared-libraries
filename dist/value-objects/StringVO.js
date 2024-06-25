"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringVO = void 0;
class StringVO {
    constructor(value) {
        if (!value) {
            throw new Error('Value is required to initialize VO.');
        }
        if (!this.isValid(value)) {
            throw new Error('Provided value is invalid');
        }
        this._value = value;
    }
    get value() {
        return this._value;
    }
}
exports.StringVO = StringVO;
