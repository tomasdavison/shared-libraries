export abstract class IntegerVO extends ValueObject<number> {
    isValid(value: number): boolean {
        return Number.isInteger(value);
    }
}