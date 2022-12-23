"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var birds = express_1.default.Router();
birds.get('/', function (req, res) {
    res.send('Birds Homepage');
});
birds.get('/about', function (req, res) {
    res.send('Welcome to the birds\' homepage');
});
exports.default = birds;
