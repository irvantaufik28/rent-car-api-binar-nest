import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class UserEntity {

@PrimaryGeneratedColumn('increment')
id: number;

@Column({nullable: false, unique:true})
email: string

@Column({nullable: false})
password: string

@Column('boolean', {default: false})
is_admin = false

}