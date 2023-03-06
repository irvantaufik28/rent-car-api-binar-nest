import { Order } from "./constants/enum";
export declare class PageCarOptionsDto {
    readonly order?: Order;
    readonly page?: number;
    readonly take?: number;
    readonly name?: string;
    readonly category?: string;
    readonly isRented?: string;
    readonly minPrice?: number;
    readonly maxPrice?: number;
    get skip(): number;
}
