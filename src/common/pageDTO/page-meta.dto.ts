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
  readonly PageCount: number;
  @ApiProperty()
  readonly hasPreviousPage: boolean;
  @ApiProperty()
  readonly hasNextPage: boolean;

  constructor({ pageOptionsDto, itemCount }: PageMetaDtoParameters) {
    this.page = pageOptionsDto.page;
    this.take = pageOptionsDto.take;
    this.itemCount = itemCount;
    this.PageCount = Math.ceil(this.itemCount / this.take);
    this.hasPreviousPage = this.page > 1;
    this.hasPreviousPage = this.page < this.PageCount;
  }
}
