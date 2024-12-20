import { PaginationFilter } from ".";

export const DEFAULT_PAGINATION_LIMIT = 10;
export const PAGINATION_FIRST_PAGE = 1;
export const LIMIT_MAX_VALUE = 40;
export const DEFAULT_PAGINATION_FIRST_PAGE_RETURN: PaginationFilter = {
  take: DEFAULT_PAGINATION_LIMIT,
  skip: 0
};
