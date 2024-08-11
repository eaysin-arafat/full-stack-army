export const isObjEmpty = (object) => Object.keys(object).length === 0;

export const deepClone = (object) => JSON.parse(JSON.stringify(object));
