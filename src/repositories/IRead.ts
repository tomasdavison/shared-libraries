import { EntityId } from "../entities/EntityId";

export interface IRead<T> {
  findAll(item: T): Promise<T[]>;
  findOne(id: EntityId): Promise<T>;
}