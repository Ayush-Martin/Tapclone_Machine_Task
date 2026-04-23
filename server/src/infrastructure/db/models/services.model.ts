import { Schema, Document, model } from "mongoose";

export interface IServiceDocument extends Document {
  name: string;
  description: string;
}

const ServiceSchema = new Schema<IServiceDocument>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);


export default model<IServiceDocument>("Service", ServiceSchema);