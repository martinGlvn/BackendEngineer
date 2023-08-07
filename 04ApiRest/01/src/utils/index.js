import { fileURLToPath } from "url";
import { dirname } from "path";

const __filenama = fileURLToPath(import.meta.url);
const __dirname = __dirname(__filenama);

export default __dirname;
