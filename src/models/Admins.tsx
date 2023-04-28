import { Schema, model, models } from "mongoose";

const AdminSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  profilePhoto: { type: String, required: true },
  bio: { type: String, required: true },
  repos: [{ type: Schema.Types.ObjectId, ref: "Repo" }]
});

AdminSchema.set("toJSON", { getters: true });

const Admin = models.Admin || model("Admin", AdminSchema);

export default Admin;