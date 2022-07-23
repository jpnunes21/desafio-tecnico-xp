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
const assets_service_1 = __importDefault(require("../services/assets.service"));
const getAssetsById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const asset = yield assets_service_1.default.getAssetsById(Number(id));
    return res.status(200).json(asset);
});
const getAllAssets = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const assets = yield assets_service_1.default.getAllAssets();
    return res.status(200).json(assets);
});
exports.default = {
    getAssetsById,
    getAllAssets
};
