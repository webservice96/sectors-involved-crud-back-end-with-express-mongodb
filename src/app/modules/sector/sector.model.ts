import { Schema, model } from 'mongoose';

import { Isector, sectorModel } from './sector.interface';

const SubcategorySchema = new Schema({
  value: String,
  label: String,
  subcategories: {
    type: [this],
    required: false,
  }, // This refers to the same schema for recursive subcategories
});

const sectorSchema = new Schema<Isector, sectorModel>(
  {
    value: String,
    label: String,
    subcategories: {
      type: [SubcategorySchema],
      required: false,
    },
  },
  {
    timestamps: true,
  },
);

const sector = model<Isector, sectorModel>('sectors', sectorSchema);

export default sector;
