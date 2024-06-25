import ISpecification from './ISpecification';
export declare abstract class CompositeSpecification<T> implements ISpecification<T> {
    abstract isSatisfiedBy(candidate: T): boolean;
    and(other: ISpecification<T>): ISpecification<T>;
    andNot(other: ISpecification<T>): ISpecification<T>;
    or(other: ISpecification<T>): ISpecification<T>;
    orNot(other: ISpecification<T>): ISpecification<T>;
    not(): ISpecification<T>;
}
export declare class AndSpecification<T> extends CompositeSpecification<T> {
    private left;
    private right;
    constructor(left: ISpecification<T>, right: ISpecification<T>);
    isSatisfiedBy(candidate: T): boolean;
    toString(): string;
}
export declare class AndNotSpecification<T> extends AndSpecification<T> {
    isSatisfiedBy(candidate: T): boolean;
    toString(): string;
}
export declare class OrSpecification<T> extends CompositeSpecification<T> {
    private left;
    private right;
    constructor(left: ISpecification<T>, right: ISpecification<T>);
    isSatisfiedBy(candidate: T): boolean;
    toString(): string;
}
export declare class OrNotSpecification<T> extends OrSpecification<T> {
    isSatisfiedBy(candidate: T): boolean;
    toString(): string;
}
export declare class NotSpecification<T> extends CompositeSpecification<T> {
    private other;
    constructor(other: ISpecification<T>);
    isSatisfiedBy(candidate: T): boolean;
    toString(): string;
}
export declare class RangeSpecification<T> extends CompositeSpecification<T> {
    private a;
    private b;
    constructor(a: T, b: T);
    isSatisfiedBy(candidate: T): boolean;
    toString(): string;
}
