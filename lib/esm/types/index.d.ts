/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { SchemaOptions, QueryOptions } from 'mongoose';
import { IDynamicModelField, IModel, IModelField } from './interfaces/model';
export declare const createModel: (model: IModel) => Promise<import("mongoose").Document<unknown, any, import("./interfaces/model").IDynamicModel> & import("./interfaces/model").IDynamicModel & {
    _id: import("mongoose").Types.ObjectId;
}>;
export declare const addField: (modelId: string, field: IModelField) => Promise<import("mongoose").Document<unknown, any, IDynamicModelField> & IDynamicModelField & {
    _id: import("mongoose").Types.ObjectId;
}>;
export declare const updateField: (modelId: string, field: IModelField, options?: QueryOptions) => Promise<(import("mongoose").Document<unknown, any, IDynamicModelField> & IDynamicModelField & {
    _id: import("mongoose").Types.ObjectId;
}) | null>;
export declare const removeFieldById: (fieldId: string) => import("mongoose").Query<(import("mongoose").Document<unknown, any, IDynamicModelField> & IDynamicModelField & {
    _id: import("mongoose").Types.ObjectId;
}) | null, import("mongoose").Document<unknown, any, IDynamicModelField> & IDynamicModelField & {
    _id: import("mongoose").Types.ObjectId;
}, {}, IDynamicModelField>;
export declare const removeField: (modelId: string, name: string) => import("mongoose").Query<(import("mongoose").Document<unknown, any, IDynamicModelField> & IDynamicModelField & {
    _id: import("mongoose").Types.ObjectId;
}) | null, import("mongoose").Document<unknown, any, IDynamicModelField> & IDynamicModelField & {
    _id: import("mongoose").Types.ObjectId;
}, {}, IDynamicModelField>;
export declare const saveFields: (modelId: string, fields: IModelField[]) => Promise<(import("mongoose").Document<unknown, any, IDynamicModelField> & IDynamicModelField & {
    _id: import("mongoose").Types.ObjectId;
})[]>;
export declare const getModelFields: (name: string) => Promise<(import("mongoose").Document<unknown, any, IDynamicModelField> & IDynamicModelField & {
    _id: import("mongoose").Types.ObjectId;
})[]>;
export declare const getDynamicModel: <TModel = any>(name: string, fields?: IDynamicModelField[], options?: SchemaOptions) => Promise<import("mongoose").Model<TModel, {}, {}, {}, any>>;
export declare const connectToMongoDB: (connectionString: string) => Promise<typeof import("mongoose")>;
//# sourceMappingURL=index.d.ts.map