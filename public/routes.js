"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// import validateToken from './middlewares/validateToken';
const validateOrderBuy_1 = __importDefault(require("./middlewares/validateOrderBuy"));
const validateOrderSell_1 = __importDefault(require("./middlewares/validateOrderSell"));
const validateDeposit_1 = __importDefault(require("./middlewares/validateDeposit"));
const validateWithdraw_1 = __importDefault(require("./middlewares/validateWithdraw"));
const clients_controller_1 = __importDefault(require("./controllers/clients.controller"));
const assets_controller_1 = __importDefault(require("./controllers/assets.controller"));
const account_controller_1 = __importDefault(require("./controllers/account.controller"));
const login_controller_1 = __importDefault(require("./controllers/login.controller"));
const investments_controller_1 = __importDefault(require("./controllers/investments.controller"));
const router = (0, express_1.Router)();
router.post('/login', login_controller_1.default.authLogin);
router.get('/ativos/cliente', clients_controller_1.default.getClients);
router.get('/ativos', assets_controller_1.default.getAllAssets);
router.get('/ativos/:id', assets_controller_1.default.getAssetsById);
router.get('/conta/cliente', account_controller_1.default.getAccountById);
router.post('/conta/deposito', validateDeposit_1.default, account_controller_1.default.addMoney);
router.post('/conta/saque', validateWithdraw_1.default, account_controller_1.default.subtractMoney);
router.post('/investimentos/comprar', validateOrderBuy_1.default, investments_controller_1.default.buy);
router.post('/investimentos/vender', validateOrderSell_1.default, investments_controller_1.default.sell);
exports.default = router;