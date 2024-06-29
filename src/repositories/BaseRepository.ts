import { IWrite } from './IWrite';
import { IRead } from './IRead';
import { EntityId } from '../entities/EntityId';

export abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {
    create(item: T): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    update(id: EntityId, item: T): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    delete(id: EntityId): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    find(item: T): Promise<T[]> {
        throw new Error("Method not implemented.");
    }
    findOne(id: EntityId): Promise<T> {
        throw new Error("Method not implemented.");
    }
}