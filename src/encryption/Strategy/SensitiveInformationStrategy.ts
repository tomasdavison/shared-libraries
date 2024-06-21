import { EncryptionStrategy } from './EncryptionStrategy';
import { createHash } from 'crypto';

export class SensitiveInformationEncryptionStrategy extends EncryptionStrategy {

    constructor(valueToEncrypt: string, valueToCompare: string){
        super(valueToEncrypt, valueToCompare);
    }

    encrypt(): string {
        const hash = createHash('sha256');
        hash.update(this.getValueToEncrypt());

        return hash.digest('hex');
    }

    compareValues(): boolean {
        return this.getValueToCompare() === this.getValueToEncrypt();
    }

    decrypt(): String {
        return 'Not implemented yet.'
    }


}