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
const account_model_1 = __importDefault(require("../models/account.model"));
const JWTToken_1 = __importDefault(require("../helpers/JWTToken"));
const authentication = (loginInfo) => __awaiter(void 0, void 0, void 0, function* () {
    const { Email, Senha } = loginInfo;
    const user = yield account_model_1.default.getAccountByEmail(Email, Senha);
    if (user.length === 0)
        return false;
    const token = JWTToken_1.default.generateToken(loginInfo);
    return { token };
});
exports.default = {
    authentication,
};
