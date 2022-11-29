import { Schema, model } from 'mongoose';

import { IDynamicModelField } from '../interfaces/model';

const dynamicModelFieldSchema = new Schema<IDynamicModelField>(
  {
    model: {
      type: Schema.Types.ObjectId,
      ref: 'Model',
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    fieldType: {
      type: String,
      required: true,
    },
    defaultValue: {
      type: Schema.Types.Mixed,
    },
    isPrivate: {
      type: Boolean,
    },
    isSortable: {
      type: Boolean,
    },
    isSearchable: {
      type: Boolean,
    },
    isUnique: {
      type: Boolean,
    },
    min: {
      type: Schema.Types.Mixed,
    },
    max: {
      type: Schema.Types.Mixed,
    },
    referencedModel: {
      type: String,
    },
  },
  { timestamps: true }
);

export default model<IDynamicModelField>(
  'DynamicModelField',
  dynamicModelFieldSchema
);
