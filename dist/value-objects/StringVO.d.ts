export declare abstract class StringVO {
    private _value;
    constructor(value: string);
    get value(): string;
    abstract isValid(value: string): boolean;
}
