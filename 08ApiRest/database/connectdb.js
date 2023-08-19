import mongoose from "mongoose";

// conexion bd =>
try {
  await mongoose.connect(process.env.URI_MONGO);
  console.log("🔥Connect db OK🔥");
} catch (error) {
  console.log("🧊Fail connext db🧊: " + error);
}
