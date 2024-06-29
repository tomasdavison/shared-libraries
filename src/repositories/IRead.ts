import { EntityId } from "../entities/EntityId";

export interface IRead<T> {
  find(item: T): Promise<T[]>;
  findOne(id: EntityId): Promise<T>;
}