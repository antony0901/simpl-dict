import {IsNotEmpty, IsNumber, ValidateIf} from "class-validator";

class SearchTerm {
  @IsNotEmpty()
  term: string;

  @IsNotEmpty()
  onFields: string;
}

enum Direction {
  DESC,
  ASC
}

class OrderDirection {
  @IsNotEmpty()
  field: string;

  @IsNotEmpty()
  direction: Direction;
}

export class PaginationRequest {
  @IsNumber()
  @IsNotEmpty()
  size: number;

  @IsNumber()
  @IsNotEmpty()
  pageNumber: number;

  @ValidateIf((obj, val) => obj !== null)
  search?: SearchTerm;

  @ValidateIf((obj, val) => obj !== null)
  orderDirection?: OrderDirection;
}

export const getOffset = (size: number, pageNumber: number) => {
  if(pageNumber < 0) {
    pageNumber = 0;
  }
  if(size < 0) {
    return size = 10;
  }

  return size * pageNumber;
}

export class PaginationResponse<T> {
  items: T[];
  total: number;
  size: number;
  pageNumber: number;
}

export const buildPaginationResult = (items: any[], total: number, size: number, pageNumber: number) => {
  const rs = new PaginationResponse();
  rs.items = items;
  rs.total = total;
  rs.size = size;
  rs.pageNumber = pageNumber;
  return rs;
}