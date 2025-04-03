import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { app } from "./app.js";


dotenv.config({
    path: "./.env"
})

connectDB()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`⚙️ server is running on port ${process.env.PORT}`);
        }
        )
    }
    )
    .catch((error) => {
        console.log("mongoDB connection failed", error);
    }

    )


//  run code -> create .env file



// inside .env file
// MONGODB_URI=mongodb+srv://niluprusty98:Nilu2003@cluster0.ax7pl.mongodb.net //your database
// PORT=8000
// CORS_ORIGIN=http://localhost:5173
