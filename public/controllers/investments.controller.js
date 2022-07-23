"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const investments_service_1 = __importDefault(require("../services/investments.service"));
const buy = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newAsset = yield investments_service_1.default.createOrder(req.body);
    return res.status(201).json(newAsset);
});
const sell = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const soldAsset = yield investments_service_1.default.sell(req.body);
    return res.status(201).json(soldAsset);
});
exports.default = {
    buy,
    sell,
};
