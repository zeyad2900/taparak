import mongoose from 'mongoose';

const propertySchema = new mongoose.Schema({
    title: String,
    description: String,
    img: String,
});

const Property = mongoose.model('Property', propertySchema);

export default Property;