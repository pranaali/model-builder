import { Schema, model } from 'mongoose';

import { IDynamicModel } from '../interfaces/model';

const dynamicModelSchema = new Schema<IDynamicModel>(
  {
    title: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      unique: true,
      required: true,
    },
  },
  { timestamps: true }
);

export default model<IDynamicModel>('DynamicModel', dynamicModelSchema);
