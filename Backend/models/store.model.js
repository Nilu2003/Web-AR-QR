import  mongoose from "mongoose"

const StoreSchema = new mongoose.Schema({
    name: {
        type:String,
    },
    modelUrl:  {
        type:String,
    },
    qrCodeUrl:  {
            type:String,
        }

});

export const Store = mongoose.model("Store", StoreSchema);
