import { SecurityType } from '../enum/enum';
export declare const ROLES_KEY = "roles";
export declare const Roles: (...roles: SecurityType[]) => import("@nestjs/common").CustomDecorator<string>;
