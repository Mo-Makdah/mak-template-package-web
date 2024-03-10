export type LiteralStringType = string & Record<never, never>;

export type NestedObjectKeys<T> = T extends object
  ? {
      [K in keyof T]: `${Exclude<K, symbol>}${NestedObjectKeys<
        T[K]
      > extends never
        ? ""
        : `.${NestedObjectKeys<T[K]>}`}`;
    }[keyof T]
  : never;
