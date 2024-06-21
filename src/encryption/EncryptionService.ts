import { iEncryptionStrategy } from "./Strategy/EncryptionStrategy";
import {PasswordEncryptionStrategy} from './Strategy/PasswordStrategy';
import {SensitiveInformationEncryptionStrategy} from './Strategy/SensitiveInformationStrategy';

export class EncryptionService {

    private encryptionStrategy: iEncryptionStrategy;

    constructor(encryptionStrategy: iEncryptionStrategy){
        this.setStrategy(encryptionStrategy);
    }

    static fromPasswordStrategy(
        valueToEncrypt: string,
        valueToCompare: string
    ): EncryptionService {
        return new EncryptionService(
            new PasswordEncryptionStrategy(
                valueToEncrypt,
                valueToCompare
            )
        );
    }

    static fromSensistiveInformationStrategy(
        valueToEncrypt: string,
        valueToCompare: string
    ): EncryptionService {
        return new EncryptionService(
            new SensitiveInformationEncryptionStrategy(
                valueToEncrypt,
                valueToCompare
            )
        );
    }

    encrypt(): string {
        return this.getStrategy().encrypt();
    }
  
    compareValues(): boolean {
        return this.getStrategy().compareValues();
    }

    private getStrategy(): iEncryptionStrategy {
        return this.encryptionStrategy;
    }

    private setStrategy(encryptionStrategy: iEncryptionStrategy): EncryptionService {
        this.encryptionStrategy = encryptionStrategy;
        return this;
    }

}