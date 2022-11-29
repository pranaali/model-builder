export interface IModel {
    title: string;
}
export interface IDynamicModel {
    name: string;
    title: string;
}
export type DynamicModelFieldType = 'text' | 'richText' | 'number' | 'date' | 'location' | 'media' | 'boolean' | 'array' | 'json' | 'reference';
export interface IModelField {
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
}
export interface IDynamicModelField {
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
}
//# sourceMappingURL=model.d.ts.map