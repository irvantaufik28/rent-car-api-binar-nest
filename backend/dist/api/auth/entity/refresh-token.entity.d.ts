import { BaseEntity } from "typeorm";
export declare class RefreshToken extends BaseEntity {
    id: number;
    isRevoked: boolean;
    expriedAt: Date;
}
