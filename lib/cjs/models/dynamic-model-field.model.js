"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const dynamicModelFieldSchema = new mongoose_1.Schema({
    model: {
        type: mongoose_1.Schema.Types.ObjectId,
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
        type: mongoose_1.Schema.Types.Mixed,
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
        type: mongoose_1.Schema.Types.Mixed,
    },
    max: {
        type: mongoose_1.Schema.Types.Mixed,
    },
    referencedModel: {
        type: String,
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)('DynamicModelField', dynamicModelFieldSchema);
