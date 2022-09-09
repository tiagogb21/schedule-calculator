import { GenericError, Bcrypt, JWT } from "../utils";
import UsersModel from "../../database/models/user.model";
import { IUser } from "../interfaces/user.interface";
import { ITokenData } from '../interfaces/token.interface';

const incorrectMessage = "Incorrect email or password";

export default class LoginService {
  private model = UsersModel;
  private jwt = new JWT();

  loginSuccess = async (login: IUser) => {
    const { email } = login;

    const userInfo = await this.model.findOne({
      where: { email }
    }) as any;

    if (!userInfo) throw new GenericError(401, incorrectMessage);

    const { name } = userInfo;

    const token = this.jwt.generateToken(userInfo);

    return {
      name,
      token,
    };
  };

  validateToken(token: string) {
    const validToken = this.jwt.validateToken(token);
    const {
      data
    } = validToken as ITokenData;
    const { role } = data;
    return { role };
  }
}
