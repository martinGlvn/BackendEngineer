"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
// init sv
class ServerBootstrap {
    // init variables
    constructor() {
        this.app = (0, express_1.default)();
        this.port = 8000;
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use((0, cors_1.default)());
        // routes =>
        this.app.get("/api/hola", (req, res) => {
            res.status(400).json({ message: "hello world" });
        });
        this.listen();
    }
    //
    listen() {
        this.app.listen(this.port, () => {
            console.log(`sv listen on port ${this.port}`);
        });
    }
}
new ServerBootstrap();
