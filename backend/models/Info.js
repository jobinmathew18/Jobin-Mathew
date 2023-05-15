import mongoose from "mongoose";

const InfoSchema = new mongoose.Schema(
    {
        companyId: {
            type: Number,
            required: true,
            unique: true
        },
        primaryText: {
            type: String,
            required: true,
        },
        headline: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
        cta: {
            type: String,
            required: true,
        },
        imageUrl: {
            type: String,
            required: true, 
        },
    }
)

export default mongoose.model("Info", InfoSchema)