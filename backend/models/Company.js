import mongoose from "mongoose";

const CompanySchema = new mongoose.Schema(
    {
        companyId: {
            type: Number,
            required: true,
            unique: true
        },
        company: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true
        }

    }
)

export default mongoose.model("Company", CompanySchema)