// Define the User entity
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true, type: "text" })
  email: string;

  @Column({ type: "text" })
  password: string;
}
