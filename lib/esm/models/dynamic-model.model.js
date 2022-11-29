import { Schema, model } from 'mongoose';
const dynamicModelSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        unique: true,
        required: true,
    },
}, { timestamps: true });
export default model('DynamicModel', dynamicModelSchema);
