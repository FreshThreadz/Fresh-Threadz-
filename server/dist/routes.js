"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
exports.router = (0, express_1.Router)();
const controllers_1 = __importDefault(require("./controllers/"));
exports.router.get('/', controllers_1.default.getProducts);
exports.router.get('/:id', controllers_1.default.getProductInfo);
exports.router.get('/:id/styles', controllers_1.default.getProductStyles);
exports.router.get('/:id/related', controllers_1.default.getProductRelated);
