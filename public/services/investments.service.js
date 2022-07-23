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
const investments_model_1 = __importDefault(require("../models/investments.model"));
const assets_service_1 = __importDefault(require("./assets.service"));
const account_service_1 = __importDefault(require("./account.service"));
const clients_service_1 = __importDefault(require("./clients.service"));
const createOrder = (investmentInfo) => __awaiter(void 0, void 0, void 0, function* () {
    const { codAtivo, codCliente, QtdeOrdem } = investmentInfo;
    const [asset] = yield assets_service_1.default.getAssetsById(codAtivo);
    const total = asset.ValorAtivo * QtdeOrdem;
    const isCreated = yield clients_service_1.default.getClients(codCliente);
    const filteredOrder = isCreated.filter((order) => order.codAtivo === codAtivo);
    if (filteredOrder.length !== 0) {
        const qtde = filteredOrder[0].QtdeAtivo + QtdeOrdem;
        const valorTotal = filteredOrder[0].Valor + total;
        yield investments_model_1.default.updateOrder(qtde, valorTotal, codAtivo, codCliente);
        yield assets_service_1.default.soldAsset(codAtivo, QtdeOrdem);
        yield account_service_1.default.subtractMoney(codCliente, total);
        return { codCliente, codAtivo, qtdeAtivo: QtdeOrdem };
    }
    yield investments_model_1.default.createOrder(codAtivo, codCliente, QtdeOrdem, total);
    yield assets_service_1.default.soldAsset(codAtivo, QtdeOrdem);
    yield account_service_1.default.subtractMoney(codCliente, total);
    return { codCliente, codAtivo, qtdeAtivo: QtdeOrdem };
});
const sell = (investmentInfo) => __awaiter(void 0, void 0, void 0, function* () {
    const { codAtivo, codCliente, QtdeOrdem } = investmentInfo;
    const [asset] = yield assets_service_1.default.getAssetsById(codAtivo);
    const isCreated = yield clients_service_1.default.getClients(codCliente);
    const [filteredOrder] = isCreated.filter((order) => order.codAtivo === codAtivo);
    const total = filteredOrder.Valor - QtdeOrdem * asset.ValorAtivo;
    const newAmount = QtdeOrdem * asset.ValorAtivo;
    const qtde = filteredOrder.QtdeAtivo - QtdeOrdem;
    if (qtde === 0) {
        yield investments_model_1.default.sellAll(codAtivo, codCliente);
        yield assets_service_1.default.increaseAssets(codAtivo, QtdeOrdem);
        yield account_service_1.default.addMoney(codCliente, newAmount);
        return { codCliente, codAtivo, qtdeAtivo: QtdeOrdem };
    }
    yield investments_model_1.default.updateOrder(qtde, total, codAtivo, codCliente);
    yield assets_service_1.default.increaseAssets(codAtivo, QtdeOrdem);
    yield account_service_1.default.addMoney(codCliente, newAmount);
    return { codCliente, codAtivo, qtdeAtivo: QtdeOrdem };
});
exports.default = {
    createOrder,
    sell
};
