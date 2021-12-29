const mongoose = require("mongoose");
const dbURI = "mongodb+srv://hasnain:Mal.008.@learningnode.qlyc9.mongodb.net/expensetracker?retryWrites=true&w=majority"

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(dbURI,
            { useNewUrlParser: true,
             useUnifiedTopology: true,
            });
            console.log("MongoDB is connected")
        }
        catch(err)  {
            console.log(`Error: ${err.message}`);
            process.exit(1);
        }
}

module.exports= connectDB;