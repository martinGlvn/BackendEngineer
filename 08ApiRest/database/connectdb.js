import mongoose from "mongoose";

// conexion bd =>
try {
  await mongoose.connect(process.env.URI_MONGO);
  console.log("1- 🔥Connect db OK🔥");
} catch (error) {
  console.log("🧊Fail connext db🧊: " + error);
}
