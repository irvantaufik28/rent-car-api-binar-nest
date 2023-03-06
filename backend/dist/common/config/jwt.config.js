"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtConfig = void 0;
const dotenv = require("dotenv");
dotenv.config();
exports.jwtConfig = {
    secret: process.env.SECRET_KEY,
    signOptions: {
        expiresIn: 3600,
    },
};
//# sourceMappingURL=jwt.config.js.map