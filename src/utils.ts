export const isObject = (o: unknown): o is Record<PropertyKey, unknown> =>
  typeof o === 'object' && o !== null;
