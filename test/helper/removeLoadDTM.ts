export const deleteProperty = <Object, Prop extends keyof Object>(
  object: Object,
  prop: Prop
): Omit<Object, Prop> => {
  const { [prop]: toDelete, ...newObject } = object;
  return newObject;
};

export const removeLoadDTM = <NeisRow extends { LOAD_DTM: string }>(rows: NeisRow | NeisRow[]) => {
  if (Array.isArray(rows)) return rows.map((row) => deleteProperty(row, 'LOAD_DTM'));
  return deleteProperty(rows, 'LOAD_DTM');
};
