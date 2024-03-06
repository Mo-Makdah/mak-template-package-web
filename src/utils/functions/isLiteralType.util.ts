export const isLiteralType = <T extends Array<T[number]>>(
  variable: unknown,
  array: Readonly<T>
): variable is T[number] => array.includes(variable);
