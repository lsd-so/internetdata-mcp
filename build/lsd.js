"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runLSD = void 0;
const internetdata_1 = __importDefault(require("internetdata"));
const runLSD = async (code) => {
    const trip = await internetdata_1.default.tab();
    const results = await trip.execute(code);
    return results;
};
exports.runLSD = runLSD;
//# sourceMappingURL=lsd.js.map