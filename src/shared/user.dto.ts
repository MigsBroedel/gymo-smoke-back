import { Role } from "./role.enum";
import { Size } from "./size.enum";

export class CreateUserDto {
  readonly name: string;
  readonly email: string;
  readonly role: Role;
  readonly size: Size
}