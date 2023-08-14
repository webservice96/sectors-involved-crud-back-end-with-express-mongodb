import { Model } from 'mongoose';

type Subcategory = {
  value: string;
  label: string;
  subcategories?: Subcategory[];
};

export type Isector = {
  value: string;
  label: string;
  subcategories?: Subcategory[];
};

export type sectorModel = Model<Isector>;
