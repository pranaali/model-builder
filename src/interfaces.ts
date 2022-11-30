export type IModel = {
  title: string;
};

export type IDynamicModel = {
  name: string;
  title: string;
};

export type DynamicModelFieldType =
  | 'text'
  | 'richText'
  | 'number'
  | 'date'
  | 'location'
  | 'media'
  | 'boolean'
  | 'array'
  | 'json'
  | 'reference';

export type IModelField = {
  title: string;
  description?: string;
  fieldType: DynamicModelFieldType;
  defaultValue: any;
  isPrivate: boolean;
  isRequired: boolean;
  isUnique: boolean;
  isSortable: boolean;
  isSearchable: boolean;
  min: number | string;
  max: number | string;
  referencedModel?: string;
};

export type IDynamicModelField = {
  model: any;
  title: string;
  name: string;
  description?: string;
  fieldType: DynamicModelFieldType;
  defaultValue: any;
  isPrivate: boolean;
  isRequired: boolean;
  isUnique: boolean;
  isSortable: boolean;
  isSearchable: boolean;
  min: number | string;
  max: number | string;
  referencedModel?: string;
};
