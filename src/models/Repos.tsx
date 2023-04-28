import { Schema, model, models } from "mongoose";

const RepoSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    topics: { type: [String], required: false },
    html_url: { type: String, required: false },
    image: { type: String, required: false },
    deployedUrl: { type: String, required: false },
    category:{ type: String, enum: ["personal", "collaboration"], default: "personal"},
    admin: { type: Schema.Types.ObjectId, ref: "Admin" }
  });

RepoSchema.set("toJSON", { getters: true });

const Repo = models.Repo || model("Repo", RepoSchema);

export default Repo;