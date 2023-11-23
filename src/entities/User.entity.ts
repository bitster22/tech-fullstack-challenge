import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

import { getRounds, hashSync } from "bcryptjs";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  fullName: string;

  @Column({ unique: true })
  email: string;

  @Column({ default: false })
  admin: boolean;

  @Column({ length: 50 })
  password: string;

  @Column()
  phone: number;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  //Criar o relacionamento

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword(){
    const hasRounds: number = getRounds(this.password)
    if(!hasRounds){
        this.password = hashSync(this.password, 10)
    }
  }
}
