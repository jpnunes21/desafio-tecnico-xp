import accountModel from '../models/account.model';
import jwtInfo from '../helpers/JWTToken';

import ILogin from '../interfaces/login.interface';

const authentication = async (loginInfo: ILogin) => {
  const { Email, Senha } = loginInfo;

  const user = await accountModel.getAccountByEmail(Email, Senha);
  
  if (user.length === 0) return false;

  const token = jwtInfo.generateToken(loginInfo);

  return { token };
};

export default {
  authentication,
};
