module.exports = mongoose = require('mongoose');

/**
 * Init MongoDB
 */

// const db_url = "mongodb://mongo:27017/toDoApp" // Docker
const db_url = "mongodb://localhost:27017/toDoApp" // Local
// const db_url = process.env.DB_URL;
// "mongodb://localhost:27017/dev_db"
// "mongodb+srv://...:{{URL}}/..."

mongoose.Promise = global.Promise;
const start_mongoose = () => {
    mongoose
        .connect(db_url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            heartbeatFrequencyMS: 1000,
            serverSelectionTimeoutMS: 1000,
        })
        .then(() => {
            console.log(
                '\x1b[32m%s\x1b[0m',
                'Successful connection to mongodb 👌'
            );
            console.log(
                '\x1b[32m%s\x1b[0m',
                'DB URL :',
                db_url.split(':', 2).join(':')
            );
            // mongoose.set('toObject', { useProjection: true });
            // mongoose.set('toJSON', { useProjection: true });
            mongoose.connection.on('connected', () =>
                console.log({ event: 'mongoose:connected' })
            );
            mongoose.connection.on('disconnected', () =>
                console.log({ event: 'mongoose:disconnected' })
            );
            mongoose.connection.on('reconnected', () =>
                console.log({ event: 'mongoose:reconnected' })
            );
        })
        .catch((err) => {
            console.error(
                '\x1b[31m%s\x1b[0m',
                'Failed to connect mongodb ⚠️ :',
                err
            );
            console.log(
                '\x1b[31m%s\x1b[0m',
                'DB URL :',
                db_url.split(':', 2).join(':')
            );
            setTimeout(() => start_mongoose(), 3000);
            // process.exit(-1);
        });
};
start_mongoose();
