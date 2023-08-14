import { Schema, model } from 'mongoose';

import {
  IsectorInvolved,
  sectorInvolvedModel,
} from './sectorInvolved.interface';

const sectorSchema = new Schema({
  value: String,
  label: String,
});

const sectorInvolvedSchema = new Schema<IsectorInvolved, sectorInvolvedModel>(
  {
    name: { type: String, required: true },
    sectors: { type: [sectorSchema], required: true },
    agree: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  },
);

const sectorInvolved = model<IsectorInvolved, sectorInvolvedModel>(
  'sectorInvolved',
  sectorInvolvedSchema,
);

export default sectorInvolved;
