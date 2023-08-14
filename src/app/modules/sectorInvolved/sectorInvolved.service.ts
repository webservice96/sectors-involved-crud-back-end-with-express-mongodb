import { IsectorInvolved } from './sectorInvolved.interface';
import sectorInvolved from './sectorInvolved.model';

/**
 * post a sector involved
 * @param payload
 * @returns
 */
const createSectorInvolved = async (
  payload: IsectorInvolved,
): Promise<IsectorInvolved> => {
  const result = await sectorInvolved.create(payload);
  return result;
};

/**
 * get single sector involved
 * @param id
 * @returns
 */
const getSingleSectorInvolved = async (
  id: string,
): Promise<IsectorInvolved | null> => {
  const result = await sectorInvolved.findById(id);
  return result;
};

/**
 * update sector involved
 * @param id
 * @param payload
 * @returns
 */
const updateSectorInvolved = async (
  id: string,
  payload: Partial<IsectorInvolved>,
): Promise<IsectorInvolved | null> => {
  const result = await sectorInvolved.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

/**
 * delete sector involved
 * @param id
 * @returns
 */
const deleteSectorInvolved = async (
  id: string,
): Promise<IsectorInvolved | null> => {
  const result = await sectorInvolved.findByIdAndDelete({ _id: id });
  return result;
};

export const sectorInvolvedService = {
  createSectorInvolved,
  getSingleSectorInvolved,
  updateSectorInvolved,
  deleteSectorInvolved,
};
