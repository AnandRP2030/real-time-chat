import mongoose from 'mongoose';
export const isValidMongooseId = (id) => {
    
    return mongoose.Types.ObjectId.isValid(id);
}