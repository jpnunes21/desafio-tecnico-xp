import { Router } from 'express';

// import validateToken from './middlewares/validateToken';
import validateOrderBuy from './middlewares/validateOrderBuy';
import validateOrderSell from './middlewares/validateOrderSell';
import validateDeposit from './middlewares/validateDeposit';
import validateWithdraw from './middlewares/validateWithdraw';

import clientsController from './controllers/clients.controller';
import assetsController from './controllers/assets.controller';
import accountController from './controllers/account.controller';
import loginController from './controllers/login.controller';
import investmentController from './controllers/investments.controller';

const router = Router();

router.post('/login', loginController.authLogin);

router.get('/ativos/cliente', clientsController.getClients);

router.get('/ativos', assetsController.getAllAssets);

router.get('/ativos/:id', assetsController.getAssetsById);

router.get('/conta/cliente', accountController.getAccountById);

router.post('/conta/deposito', validateDeposit, accountController.addMoney);

router.post('/conta/saque', validateWithdraw, accountController.subtractMoney);

router.post('/investimentos/comprar', validateOrderBuy, investmentController.buy);

router.post('/investimentos/vender', validateOrderSell, investmentController.sell);

export default router;