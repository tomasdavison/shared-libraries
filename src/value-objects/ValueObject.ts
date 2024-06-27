abstract class ValueObject<T> {
    protected readonly _value: T;

    constructor(value: T) {
        if (!this.isValid(value)) {
            throw new Error('Provided value is invalid');
        }

        this._value = value;
    }

    equals(other: ValueObject<T>): boolean {
        if (other === null || other === undefined) {
            return false;
        }
        return this._value === other._value;
    }

    value(): T {
        return this._value;
    }

    abstract isValid(value: T): boolean;
}