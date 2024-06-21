
export abstract class EncryptionStrategy {

    private valueToEncrypt: string;
    private valueToCompare: string;

    constructor(valueToEncrypt: string, valueToCompare: string){
        this.valueToEncrypt = valueToEncrypt;
        this.valueToCompare = valueToCompare;
    }

    abstract encrypt(): string;
    abstract compareValues(): boolean;

    getValueToEncrypt(): string {
        return this.valueToEncrypt;
    }

    getValueToCompare(): string {
        return this.valueToCompare;
    }
    
}