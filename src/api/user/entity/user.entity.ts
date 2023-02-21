import { RefreshTokenEntity } from "src/api/auth/entity/refresh-token.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

@OneToMany(()=> RefreshTokenEntity, (refreshToken) => refreshToken.user, 
{eager: true})
refreshToken: RefreshTokenEntity[]

}