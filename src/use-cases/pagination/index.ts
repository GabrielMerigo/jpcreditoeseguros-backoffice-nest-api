import { Injectable } from "@nestjs/common";
import {
  DEFAULT_PAGINATION_LIMIT,
  LIMIT_MAX_VALUE,
  PAGINATION_FIRST_PAGE
} from "./constants";
import { ExceptionsAdapter } from "@domain/adapters/exceptions";

export interface PaginationFilter {
  take: number;
  skip: number;
}

export interface PaginationQuery {
  page?: string;
  limit?: string;
}

@Injectable()
export class PaginationUseCase {
  constructor(private readonly exceptionsService: ExceptionsAdapter) {}

  paginate(
    page: number | string = PAGINATION_FIRST_PAGE,
    limit: number | string = DEFAULT_PAGINATION_LIMIT
  ): PaginationFilter {
    const formattedLimit = Number(limit);
    const formattedPage = Number(page);

    const isLimitNotNumber = !formattedLimit;
    const isPageNotNumber = !formattedPage;

    if (isLimitNotNumber || isPageNotNumber) {
      this.exceptionsService.badRequest({
        message: "Limit and page must be a number"
      });

      return;
    }

    if (formattedPage < 1 || formattedLimit < 1) {
      this.exceptionsService.badRequest({
        message: "Page and limit shouldn't be smaller than 1"
      });
      return;
    }

    if (formattedLimit > LIMIT_MAX_VALUE) {
      this.exceptionsService.badRequest({
        message: `Limit shouldn't be bigger than ${LIMIT_MAX_VALUE}`
      });
      return;
    }

    const skip = (formattedPage - 1) * formattedLimit;

    return {
      take: formattedLimit,
      skip
    };
  }
}
