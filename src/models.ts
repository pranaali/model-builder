import { Schema, model } from 'mongoose';

import { IDynamicModelField, IDynamicModel } from './interfaces';

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
    hasManyTypeRef: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

export const DynamicModelField = model<IDynamicModelField>(
  'DynamicModelField',
  dynamicModelFieldSchema
);

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

export const DynamicModel = model<IDynamicModel>(
  'DynamicModel',
  dynamicModelSchema
);
