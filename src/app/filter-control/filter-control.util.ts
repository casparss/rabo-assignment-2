import { Filter } from 'src/types';

export const filterRows = (activeFilter: Filter) => (row: Record<string, string>): boolean | undefined => {
  const { name, type, value } = activeFilter;

  if (type === 'more' && row[name] >= value) {
    return true;
  }

  if (type === 'less' && row[name] <= value) {
    return true;
  }

  if (type === 'match' && row[name].match(value)) {
    return true;
  }
};
