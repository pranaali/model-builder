import _ from 'lodash';
import {
  Schema,
  connect,
  model,
  SchemaOptions,
  FilterQuery,
  UpdateQuery,
  QueryOptions,
} from 'mongoose';

import { IDynamicModelField, IModel, IModelField } from './interfaces';
import { DynamicModel, DynamicModelField } from './models';
import { getMongoDBFieldTypes } from './types';

const fieldTypes = getMongoDBFieldTypes();

const fieldTypesByTypeName: { [key: string]: any } = {};

for (const fieldType of fieldTypes) {
  fieldTypesByTypeName[fieldType.name] = fieldType;
}

const getFieldDefinitions = (field: IDynamicModelField) => {
  const defs: { [key: string]: any } = {
    type: fieldTypesByTypeName[field.fieldType].type,
    required: Boolean(field.isRequired),
    unique: Boolean(field.isUnique),
  };

  if (typeof field.defaultValue !== 'undefined') {
    defs.defaultValue = field.defaultValue;
  }

  if (field.fieldType === 'reference' && field.referencedModel) {
    defs.ref = field.referencedModel;
  }

  return field.multiple ? [defs] : defs;
};

export const createModel = async (model: IModel) => {
  const modelName = _.camelCase(model.title);

  const modelDefs = {
    title: model.title,
    name: modelName,
  };

  const newModel = new DynamicModel(modelDefs);
  return newModel.save();
};

export const addField = (modelId: string, field: IModelField) => {
  const formatField: IDynamicModelField = {
    ...field,
    name: _.camelCase(field.title),
    model: modelId,
  };
  const savedField = new DynamicModelField(formatField);
  return savedField.save();
};

export const updateField = (
  filter: FilterQuery<IDynamicModelField>,
  update: UpdateQuery<IDynamicModelField>,
  options?: QueryOptions<IDynamicModelField>
) => {
  return DynamicModelField.findOneAndUpdate(filter, update, options).exec();
};

export const updateFieldByFieldId = (
  id: any,
  update: UpdateQuery<IDynamicModelField>,
  options?: QueryOptions<IDynamicModelField>
) => {
  return DynamicModelField.findByIdAndUpdate(id, update, options).exec();
};

export const removeFieldById = (fieldId: string) => {
  return DynamicModelField.findByIdAndRemove(fieldId);
};

export const removeField = (modelId: string, name: string) => {
  return DynamicModelField.findOneAndRemove({ model: modelId, name });
};

export const saveFields = (modelId: string, fields: IModelField[]) => {
  const formattedFields = [];
  for (const field of fields) {
    const name = _.camelCase(field.title);
    formattedFields.push({ ...field, name, model: modelId });
  }

  return DynamicModelField.create(formattedFields);
};

export const getModel = (name: string | object) => {
  let params: { [key: string]: any } = {};
  if (typeof name === 'string') {
    params = { name };
  } else {
    params = name;
  }
  return DynamicModel.findOne(params).exec();
};

export const getModelFields = async (model: string | object) => {
  let params: { [key: string]: any } = {};
  if (typeof model === 'string') {
    params = { model };
  } else {
    params = model;
  }
  return DynamicModelField.find(params).exec();
};

export const getDynamicModel = async <TModel = any>(
  name: string,
  fields: IDynamicModelField[],
  options?: SchemaOptions
) => {
  const fieldSchemaFormatted: { [key: string]: any } = {};

  for (const field of fields) {
    fieldSchemaFormatted[field.name] = getFieldDefinitions(field);
  }

  const modelName = `Dynamic_${_.capitalize(name)}`;

  return model<TModel>(
    modelName,
    new Schema<TModel>(fieldSchemaFormatted, { timestamps: true, ...options })
  );
};

export const connectToMongoDB = (connectionString: string) => {
  return connect(connectionString);
};
