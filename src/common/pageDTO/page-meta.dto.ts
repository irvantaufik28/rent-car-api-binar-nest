import { ApiProperty } from '@nestjs/swagger';
import { PageMetaDtoParameters } from './interface/page-meta-dto-parameter.interface';

export class PageMetaDto {
  @ApiProperty()
  readonly page: number;
  @ApiProperty()
  readonly take: number;
  @ApiProperty()
  readonly itemCount: number;
  @ApiProperty()
  readonly pageCount: number;
  @ApiProperty()
  readonly nextPage: any;
  @ApiProperty()
  readonly previousPage: any;
  @ApiProperty()
  readonly hasPreviousPage: boolean;
  @ApiProperty()
  readonly hasNextPage: boolean;

  constructor({ pageOptionsDto, itemCount }: PageMetaDtoParameters) {
    this.page = pageOptionsDto.page;
    this.take = pageOptionsDto.take;
    this.itemCount = itemCount;
    this.pageCount = Math.ceil(this.itemCount / this.take);
    this.nextPage = this.page + 1;
    this.previousPage = this.page - 1;
    this.hasNextPage = this.page > 1;
    this.hasPreviousPage = this.page < this.pageCount;
  }
}
