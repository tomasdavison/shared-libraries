import { ValueObject } from './ValueObject';

export abstract class StringVO extends ValueObject<string> {
    isValid(value: string): boolean {
        return typeof value === 'string';
    }
}