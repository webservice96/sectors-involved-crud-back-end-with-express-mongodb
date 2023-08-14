import { Isector } from './sector.interface';
import sector from './sector.model';

/**
 * get single sector involved
 * @param id
 * @returns
 */
const getSectors = async (): Promise<Isector[]> => {
  const result = await sector.find({});
  return result;
};

export const sectorService = {
  getSectors,
};
