import { PageMetaDto } from "./page-meta.dto";
export declare class PageDto<T> {
    readonly cars: T[];
    readonly meta: PageMetaDto;
    constructor(data: T[], meta: PageMetaDto);
}
