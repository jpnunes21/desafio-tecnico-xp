import jwt from 'jsonwebtoken';
import ILogin from '../interfaces/login.interface';

const SECRET = 'fjaiggp30248580fseosefh';

const generateToken = (payload: ILogin) => jwt.sign(payload, SECRET, {
  expiresIn: '15m',
  algorithm: 'HS256',
});

const authToken = async (token: string) => {
  const decoded = jwt.verify(token, SECRET);
  return decoded;
}

export default {
  generateToken,
  authToken
};
