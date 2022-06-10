const { Schema, model } = require('mongoose');

const UsersSchema = new Schema({
        username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
        email: {
        type: String,
        unique: true, 
        required: true,
        // match a valid email address
        match: [/.+\@.+\..+/]
    },
        // subdocument for thoughts 
        thoughts: [
        {
            type: Schema.Types.ObjectId,
            // referring to the thought document model 
            ref: 'Thoughts'
        }
        ],
        friends: [
        {
            type: Schema.Types.ObjectId,
            // referring to the user document model 
            ref: 'Users'
        }
        ]
    },
{
    toJSON: {
        virtuals: true
    },
    id: false
});

// virtual to count friends
UsersSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

const Users = model('Users', UsersSchema);

module.exports = Users;