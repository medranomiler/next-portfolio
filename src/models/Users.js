import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: false },
  message: { type: String, required: false }
});

UserSchema.set("toJSON", { getters: true });

UserSchema.options.toJSON.transform = (doc, ret) => {
  delete ret._id;
  delete ret.__v;
  return ret;
};

const User = models.User || model("User", UserSchema);

export default User;