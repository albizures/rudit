type GetType = (name: string) => string;
const escapeParam = (getType: GetType) => (name: string): string =>
  getType(encodeURIComponent(name));

export { escapeParam };
