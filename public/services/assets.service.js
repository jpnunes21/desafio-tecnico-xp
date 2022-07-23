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
const assets_model_1 = __importDefault(require("../models/assets.model"));
const getAssetsById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const asset = yield assets_model_1.default.getAssetsById(id);
    return asset;
});
const getAllAssets = () => __awaiter(void 0, void 0, void 0, function* () {
    const assets = yield assets_model_1.default.getAllAssets();
    const filteredAssets = assets.map((asset) => {
        return {
            codAtivo: asset.codAtivo,
            QtdeAtivo: asset.QtdeAtivo,
            Valor: asset.ValorAtivo
        };
    });
    return filteredAssets;
});
const soldAsset = (codAtivo, QtdeAtivo) => __awaiter(void 0, void 0, void 0, function* () {
    const [asset] = yield getAssetsById(codAtivo);
    const newAssetAmount = asset.QtdeAtivo - QtdeAtivo;
    yield assets_model_1.default.updateAssets(codAtivo, newAssetAmount);
    return QtdeAtivo;
});
const increaseAssets = (codAtivo, QtdeAtivo) => __awaiter(void 0, void 0, void 0, function* () {
    const [asset] = yield getAssetsById(codAtivo);
    const newAssetAmount = asset.QtdeAtivo + QtdeAtivo;
    yield assets_model_1.default.updateAssets(codAtivo, newAssetAmount);
    return QtdeAtivo;
});
exports.default = {
    getAssetsById,
    getAllAssets,
    soldAsset,
    increaseAssets
};
