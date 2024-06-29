import { EntityId } from "../entities/EntityId";

export interface IWrite<T> {
  create(item: T): Promise<boolean>;
  update(id: EntityId, item: T): Promise<boolean>;
  delete(id: EntityId): Promise<boolean>;
}