import { Request, Response } from "express";
import { AppContext } from "../../helpers/AppContext.js";
import { AppDataSource } from "../../database/data-source.js";
import { User } from "../../database/schema/User.js";

export class UserController extends AppContext {
  public static async show(request: Request, response: Response) {
    try {
    } catch (error) {}
  }

  public static async create(request: Request, response: Response) {
    try {
      console.log("CHAMOU", request.body);

      if (!request?.body || !request?.body?.email || !request?.body?.password) {
        return response
          .status(400)
          .send({ message: "Dados inválidos!", data: [] });
      }

      const userRepository = AppDataSource.getRepository(User);

      const newUser = userRepository.create({
        email: request.body.email,
        password: request.body.password,
      });

      const { id, email } = await userRepository.save(newUser);

      return response
        .status(200)
        .send({ message: "Usuário criado com sucesso", data: { email } });
    } catch (error) {
      console.error("Error creating user:", error.code);
      const customError = error.code == 23505 ? "Usuário já existente" : error;

      return response
        .status(500)
        .send({ message: "Erro ao criar usuário", error: customError });
    }
  }
}
