import { Model } from 'mongoose';

type sector = {
  value: string;
  label: string;
};

export type IsectorInvolved = {
  name: string;
  sectors: sector[];
  agree: boolean;
};

export type sectorInvolvedModel = Model<IsectorInvolved>;
