const mongooes = require("mongooes")

const userSchema = new mongooes.Schema({
    username: {
        type: String,
        required: [true, "username must be provided "],
        lowercase: true
    },
    email: {
        type: String,
        required: [true, "email must be provided "],
        lowercase: true,
        unique: true,

    }
    ,
    password: {
        type: String,
        required: [true, " password must be provided "]
    }
}, {
    timestamps: true
})

export const User = mongoose.model("User", userSchema)