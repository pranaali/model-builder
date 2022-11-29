"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMongoDBFieldTypes = void 0;
const mongoose_1 = require("mongoose");
const getMongoDBFieldTypes = () => {
    const fieldTypes = [
        {
            name: 'text',
            label: 'Text',
            type: String,
        },
        {
            name: 'richText',
            label: 'Rich Text',
            type: String,
        },
        {
            name: 'number',
            label: 'Number',
            type: Number,
        },
        {
            name: 'date',
            label: 'Date & Time',
            type: String,
        },
        {
            name: 'location',
            label: 'Location',
            type: Object,
        },
        {
            name: 'media',
            label: 'Media',
            type: Object,
        },
        {
            name: 'boolean',
            label: 'Boolean',
            type: Boolean,
        },
        {
            name: 'array',
            label: 'Array',
            type: Array,
        },
        {
            name: 'json',
            label: 'JSON Object',
            type: Object,
        },
        {
            name: 'reference',
            label: 'Reference',
            type: mongoose_1.Schema.Types.ObjectId,
        },
    ];
    return fieldTypes;
};
exports.getMongoDBFieldTypes = getMongoDBFieldTypes;
