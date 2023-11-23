import mongoose from 'mongoose';

let isConnected = false; // variable to check if mongoose is connnected

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(!process.env.MONGODB_URL) return console.log('MONGODB_URL not found');
    if(isConnected) return console.log('Already connected to MongoDB');

    try {
        await mongoose.connection(process.env.MONGODB_URL);

        isConnected = true;

        console.log('Connectedt to MongoDB');
    } catch (error) {
        console.log(error);
    }
}