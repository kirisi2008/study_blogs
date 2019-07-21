Source from [Microsoft](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html)

## table of contents
---
- [## table of contents](#table-of-contents)
- [Don’t ever use the types `Number`, `String`, `Boolean`, `Symbol`, or `Object`](#Dont-ever-use-the-types-Number-String-Boolean-Symbol-or-Object)
- [Don’t use the return type any for callbacks whose value will be ignored](#Dont-use-the-return-type-any-for-callbacks-whose-value-will-be-ignored)
- [Don’t use optional parameters in callbacks unless you really mean it](#Dont-use-optional-parameters-in-callbacks-unless-you-really-mean-it)
- [Don’t write separate overloads that differ only on callback arity](#Dont-write-separate-overloads-that-differ-only-on-callback-arity)
- [Don’t put more general overloads before more specific overloads](#Dont-put-more-general-overloads-before-more-specific-overloads)
- [Don’t write several overloads that differ only in trailing parameters](#Dont-write-several-overloads-that-differ-only-in-trailing-parameters)
- [Don’t write overloads that differ by type in only one argument position](#Dont-write-overloads-that-differ-by-type-in-only-one-argument-position)

---
## Don’t ever use the types `Number`, `String`, `Boolean`, `Symbol`, or `Object`

```typescript
/* WRONG */
function reverse(s: String): String;

/* OK */
function reverse(s: string): string;
```
## Don’t use the return type any for callbacks whose value will be ignored


```typescript
/* WRONG */
function fn(x: () => any) {
    x();
}

/* OK */
function fn(x: () => void) {
    x();
}
```

## Don’t use optional parameters in callbacks unless you really mean it



```typescript
/* WRONG */
interface Fetcher {
    getObject(done: (data: any, elapsedTime?: number) => void): void;
}

/* OK */
interface Fetcher {
    getObject(done: (data: any, elapsedTime: number) => void): void;
}
```

## Don’t write separate overloads that differ only on callback arity

```typescript
/* WRONG */
declare function beforeAll(action: () => void, timeout?: number): void;
declare function beforeAll(action: (done: DoneFn) => void, timeout?: number): void;

/* OK */
declare function beforeAll(action: (done: DoneFn) => void, timeout?: number): void;
```

## Don’t put more general overloads before more specific overloads

TypeScript chooses the first matching overload when resolving function calls. 

```typescript
/* WRONG */
declare function fn(x: any): any;
declare function fn(x: HTMLElement): number;
declare function fn(x: HTMLDivElement): string;

var myElem: HTMLDivElement;
var x = fn(myElem); // x: any, wat?

/* OK */
declare function fn(x: HTMLDivElement): string;
declare function fn(x: HTMLElement): number;
declare function fn(x: any): any;

var myElem: HTMLDivElement;
var x = fn(myElem); // x: string, :)
```

## Don’t write several overloads that differ only in trailing parameters

```typescript
/* WRONG */
interface Example {
    diff(one: string): number;
    diff(one: string, two: string): number;
    diff(one: string, two: string, three: boolean): number;
}

// Do use optional parameters whenever possible

/* OK */
interface Example {
    diff(one: string, two?: string, three?: boolean): number;
}
```

## Don’t write overloads that differ by type in only one argument position

```typescript
/* WRONG */
interface Moment {
    utcOffset(): number;
    utcOffset(b: number): Moment;
    utcOffset(b: string): Moment;
}

/* OK */
interface Moment {
    utcOffset(): number;
    utcOffset(b: number|string): Moment;
}
```