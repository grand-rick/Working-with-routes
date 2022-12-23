"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var birds_1 = __importDefault(require("./birds/birds"));
var routes = express_1.default.Router();
routes.get('/', function (req, res) {
    res.send('Connected to main api route');
});
routes.use('/birds', birds_1.default);
exports.default = routes;
