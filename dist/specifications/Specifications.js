"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RangeSpecification = exports.NotSpecification = exports.OrNotSpecification = exports.OrSpecification = exports.AndNotSpecification = exports.AndSpecification = exports.CompositeSpecification = void 0;
class CompositeSpecification {
    and(other) {
        return new AndSpecification(this, other);
    }
    andNot(other) {
        return new AndNotSpecification(this, other);
    }
    or(other) {
        return new OrSpecification(this, other);
    }
    orNot(other) {
        return new OrNotSpecification(this, other);
    }
    not() {
        return new NotSpecification(this);
    }
}
exports.CompositeSpecification = CompositeSpecification;
class AndSpecification extends CompositeSpecification {
    constructor(left, right) {
        super();
        this.left = left;
        this.right = right;
    }
    isSatisfiedBy(candidate) {
        return this.left.isSatisfiedBy(candidate) && this.right.isSatisfiedBy(candidate);
    }
    toString() {
        return '(' + this.left.toString() + ' and ' + this.right.toString() + ')';
    }
}
exports.AndSpecification = AndSpecification;
class AndNotSpecification extends AndSpecification {
    isSatisfiedBy(candidate) {
        return super.isSatisfiedBy(candidate) !== true;
    }
    toString() {
        return 'not ' + super.toString();
    }
}
exports.AndNotSpecification = AndNotSpecification;
class OrSpecification extends CompositeSpecification {
    constructor(left, right) {
        super();
        this.left = left;
        this.right = right;
    }
    isSatisfiedBy(candidate) {
        return this.left.isSatisfiedBy(candidate) || this.right.isSatisfiedBy(candidate);
    }
    toString() {
        return '(' + this.left.toString() + ' or ' + this.right.toString() + ')';
    }
}
exports.OrSpecification = OrSpecification;
class OrNotSpecification extends OrSpecification {
    isSatisfiedBy(candidate) {
        return super.isSatisfiedBy(candidate) !== true;
    }
    toString() {
        return 'not ' + super.toString();
    }
}
exports.OrNotSpecification = OrNotSpecification;
class NotSpecification extends CompositeSpecification {
    constructor(other) {
        super();
        this.other = other;
    }
    isSatisfiedBy(candidate) {
        return !this.other.isSatisfiedBy(candidate);
    }
    toString() {
        return '(not ' + this.other.toString() + ')';
    }
}
exports.NotSpecification = NotSpecification;
class RangeSpecification extends CompositeSpecification {
    constructor(a, b) {
        super();
        this.a = a;
        this.b = b;
    }
    isSatisfiedBy(candidate) {
        return candidate >= this.a && candidate <= this.b;
    }
    toString() {
        return 'range (' + this.a + ', ' + this.b + ')';
    }
}
exports.RangeSpecification = RangeSpecification;
