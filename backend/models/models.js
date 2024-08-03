import mongoose from 'mongoose';
const Schema_user = mongoose.Schema({
    username: String,
    password: String,
    email: String
});

const Schema_poll = mongoose.Schema({
    question: String,
    options: [String],
    votes: [Number]
});



export const User = mongoose.model('User', Schema_user);
export const Poll = mongoose.model('Poll', Schema_poll);