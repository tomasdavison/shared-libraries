"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.RangeSpecification = exports.NotSpecification = exports.OrNotSpecification = exports.OrSpecification = exports.AndNotSpecification = exports.AndSpecification = exports.CompositeSpecification = void 0;
var CompositeSpecification = /** @class */ (function () {
    function CompositeSpecification() {
    }
    CompositeSpecification.prototype.and = function (other) {
        return new AndSpecification(this, other);
    };
    CompositeSpecification.prototype.andNot = function (other) {
        return new AndNotSpecification(this, other);
    };
    CompositeSpecification.prototype.or = function (other) {
        return new OrSpecification(this, other);
    };
    CompositeSpecification.prototype.orNot = function (other) {
        return new OrNotSpecification(this, other);
    };
    CompositeSpecification.prototype.not = function () {
        return new NotSpecification(this);
    };
    return CompositeSpecification;
}());
exports.CompositeSpecification = CompositeSpecification;
var AndSpecification = /** @class */ (function (_super) {
    __extends(AndSpecification, _super);
    function AndSpecification(left, right) {
        var _this = _super.call(this) || this;
        _this.left = left;
        _this.right = right;
        return _this;
    }
    AndSpecification.prototype.isSatisfiedBy = function (candidate) {
        return this.left.isSatisfiedBy(candidate) && this.right.isSatisfiedBy(candidate);
    };
    AndSpecification.prototype.toString = function () {
        return '(' + this.left.toString() + ' and ' + this.right.toString() + ')';
    };
    return AndSpecification;
}(CompositeSpecification));
exports.AndSpecification = AndSpecification;
var AndNotSpecification = /** @class */ (function (_super) {
    __extends(AndNotSpecification, _super);
    function AndNotSpecification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AndNotSpecification.prototype.isSatisfiedBy = function (candidate) {
        return _super.prototype.isSatisfiedBy.call(this, candidate) !== true;
    };
    AndNotSpecification.prototype.toString = function () {
        return 'not ' + _super.prototype.toString.call(this);
    };
    return AndNotSpecification;
}(AndSpecification));
exports.AndNotSpecification = AndNotSpecification;
var OrSpecification = /** @class */ (function (_super) {
    __extends(OrSpecification, _super);
    function OrSpecification(left, right) {
        var _this = _super.call(this) || this;
        _this.left = left;
        _this.right = right;
        return _this;
    }
    OrSpecification.prototype.isSatisfiedBy = function (candidate) {
        return this.left.isSatisfiedBy(candidate) || this.right.isSatisfiedBy(candidate);
    };
    OrSpecification.prototype.toString = function () {
        return '(' + this.left.toString() + ' or ' + this.right.toString() + ')';
    };
    return OrSpecification;
}(CompositeSpecification));
exports.OrSpecification = OrSpecification;
var OrNotSpecification = /** @class */ (function (_super) {
    __extends(OrNotSpecification, _super);
    function OrNotSpecification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OrNotSpecification.prototype.isSatisfiedBy = function (candidate) {
        return _super.prototype.isSatisfiedBy.call(this, candidate) !== true;
    };
    OrNotSpecification.prototype.toString = function () {
        return 'not ' + _super.prototype.toString.call(this);
    };
    return OrNotSpecification;
}(OrSpecification));
exports.OrNotSpecification = OrNotSpecification;
var NotSpecification = /** @class */ (function (_super) {
    __extends(NotSpecification, _super);
    function NotSpecification(other) {
        var _this = _super.call(this) || this;
        _this.other = other;
        return _this;
    }
    NotSpecification.prototype.isSatisfiedBy = function (candidate) {
        return !this.other.isSatisfiedBy(candidate);
    };
    NotSpecification.prototype.toString = function () {
        return '(not ' + this.other.toString() + ')';
    };
    return NotSpecification;
}(CompositeSpecification));
exports.NotSpecification = NotSpecification;
var RangeSpecification = /** @class */ (function (_super) {
    __extends(RangeSpecification, _super);
    function RangeSpecification(a, b) {
        var _this = _super.call(this) || this;
        _this.a = a;
        _this.b = b;
        return _this;
    }
    RangeSpecification.prototype.isSatisfiedBy = function (candidate) {
        return candidate >= this.a && candidate <= this.b;
    };
    RangeSpecification.prototype.toString = function () {
        return 'range (' + this.a + ', ' + this.b + ')';
    };
    return RangeSpecification;
}(CompositeSpecification));
exports.RangeSpecification = RangeSpecification;
