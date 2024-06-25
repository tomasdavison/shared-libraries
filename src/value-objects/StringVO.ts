abstract class StringVO {
  private _value: string;

  constructor(value: string) {

    if (!value) {
      throw new Error('Value is required to initialize VO.');
    }

    if (!this.isValid(value)) {
      throw new Error('Provided value is invalid');
    }

    this._value = value;
  }

  get value(): string {
    return this._value;
  }

  abstract isValid(value: string): boolean;
}