import { Schema } from 'mongoose';
export declare const getMongoDBFieldTypes: () => ({
    name: string;
    label: string;
    type: StringConstructor;
} | {
    name: string;
    label: string;
    type: NumberConstructor;
} | {
    name: string;
    label: string;
    type: ObjectConstructor;
} | {
    name: string;
    label: string;
    type: BooleanConstructor;
} | {
    name: string;
    label: string;
    type: ArrayConstructor;
} | {
    name: string;
    label: string;
    type: typeof Schema.Types.ObjectId;
})[];
//# sourceMappingURL=types.d.ts.map