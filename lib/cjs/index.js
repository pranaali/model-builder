"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToMongoDB = exports.getDynamicModel = exports.getModelFields = exports.saveFields = exports.removeField = exports.removeFieldById = exports.updateField = exports.addField = exports.createModel = void 0;
const lodash_1 = __importDefault(require("lodash"));
const mongoose_1 = require("mongoose");
const dynamic_model_model_1 = __importDefault(require("./models/dynamic-model.model"));
const dynamic_model_field_model_1 = __importDefault(require("./models/dynamic-model-field.model"));
const types_1 = require("./lib/mongo/types");
const fieldTypes = (0, types_1.getMongoDBFieldTypes)();
const fieldTypesByTypeName = {};
for (const fieldType of fieldTypes) {
    fieldTypesByTypeName[fieldType.name] = fieldType;
}
const getFieldDefinitions = (field) => {
    const defs = {
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
    return defs;
};
const createModel = (model) => __awaiter(void 0, void 0, void 0, function* () {
    const modelName = lodash_1.default.camelCase(model.title);
    const modelDefs = {
        title: model.title,
        name: modelName,
    };
    const newModel = new dynamic_model_model_1.default(modelDefs);
    return newModel.save();
});
exports.createModel = createModel;
const addField = (modelId, field) => {
    const formatField = Object.assign(Object.assign({}, field), { name: lodash_1.default.camelCase(field.title), model: modelId });
    const savedField = new dynamic_model_field_model_1.default(formatField);
    return savedField.save();
};
exports.addField = addField;
const updateField = (modelId, field, options) => {
    const formatField = Object.assign(Object.assign({}, field), { name: lodash_1.default.camelCase(field.title), model: modelId });
    return dynamic_model_field_model_1.default.findOneAndUpdate(formatField, options).exec();
};
exports.updateField = updateField;
const removeFieldById = (fieldId) => {
    return dynamic_model_field_model_1.default.findByIdAndRemove(fieldId);
};
exports.removeFieldById = removeFieldById;
const removeField = (modelId, name) => {
    return dynamic_model_field_model_1.default.findOneAndRemove({ model: modelId, name });
};
exports.removeField = removeField;
const saveFields = (modelId, fields) => {
    const formattedFields = [];
    for (const field of fields) {
        const name = lodash_1.default.camelCase(field.title);
        formattedFields.push(Object.assign(Object.assign({}, field), { name, model: modelId }));
    }
    return dynamic_model_field_model_1.default.create(formattedFields);
};
exports.saveFields = saveFields;
const getModel = (name) => {
    return dynamic_model_model_1.default.findOne({ name }).exec();
};
const getModelFields = (name) => __awaiter(void 0, void 0, void 0, function* () {
    const model = yield getModel(name);
    if (!model)
        throw new Error(`Model ${name} was not found.`);
    const modelId = model.id;
    return dynamic_model_field_model_1.default.find({ model: modelId }).exec();
});
exports.getModelFields = getModelFields;
const getDynamicModel = (name, fields, options) => __awaiter(void 0, void 0, void 0, function* () {
    const dynamicFields = fields || (yield (0, exports.getModelFields)(name));
    const fieldSchemaFormatted = {};
    for (const field of dynamicFields) {
        fieldSchemaFormatted[field.name] = getFieldDefinitions(field);
    }
    console.log(`fieldSchemaFormatted->`, fieldSchemaFormatted);
    return (0, mongoose_1.model)(lodash_1.default.capitalize(name), new mongoose_1.Schema(fieldSchemaFormatted, Object.assign({ timestamps: true }, options)));
});
exports.getDynamicModel = getDynamicModel;
const connectToMongoDB = (connectionString) => {
    return (0, mongoose_1.connect)(connectionString);
};
exports.connectToMongoDB = connectToMongoDB;
