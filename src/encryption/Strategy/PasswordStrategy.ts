var bcrypt = require('bcrypt');
import { EncryptionStrategy } from "./EncryptionStrategy";

const SALT_ROUNDS = 10;

export class PasswordEncryptionStrategy extends EncryptionStrategy {

    constructor(valueToEncrypt: string, valueToCompare: string){
        super(valueToEncrypt, valueToCompare);
    }

    encrypt(): string {
        return bcrypt.hash(
            this.getValueToEncrypt(),
            SALT_ROUNDS
        );
    }
  
    compareValues(): boolean {
        return bcrypt.compare(
            this.getValueToCompare(),
            this.getValueToEncrypt()
        );
    }
    
    decrypt(): Error {
        return new Error('Is not possible to decrypt a password.')
    }
}