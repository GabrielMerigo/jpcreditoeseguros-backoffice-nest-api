import { ExceptionsAdapter } from "@domain/adapters/exceptions";
import { PaginationUseCase } from ".";
import {
  DEFAULT_PAGINATION_FIRST_PAGE_RETURN,
  DEFAULT_PAGINATION_LIMIT,
  LIMIT_MAX_VALUE,
  PAGINATION_FIRST_PAGE
} from "./constants";
import { ExceptionsServiceStub } from "@test/stubs/adapters/exceptions";

describe("Pagination Use Case", () => {
  let sut: PaginationUseCase;
  let exceptionsService: ExceptionsAdapter;

  beforeEach(() => {
    exceptionsService = new ExceptionsServiceStub();
    sut = new PaginationUseCase(exceptionsService);
  });

  it("should paginate based on limit and page", () => {
    const expected = {
      skip: 30,
      take: 10
    };

    const result = sut.paginate(4, 10);

    expect(result).toStrictEqual(expected);
  });

  it("should throw an error when receives a page that is not a number", () => {
    jest.spyOn(exceptionsService, "badRequest");

    sut.paginate("NOT_NUMBER");

    expect(exceptionsService.badRequest).toHaveBeenCalled();
  });

  it("should throw an error when receives a limit that is not a number", () => {
    jest.spyOn(exceptionsService, "badRequest");

    sut.paginate(1, "WRONG_LIMIT");

    expect(exceptionsService.badRequest).toHaveBeenCalled();
  });

  it("should throw an error when receives a page lower than 1", () => {
    jest.spyOn(exceptionsService, "badRequest");

    sut.paginate(0);

    expect(exceptionsService.badRequest).toHaveBeenCalled();
  });

  it(`should throw an error when receives a limit bigger than ${LIMIT_MAX_VALUE}`, () => {
    jest.spyOn(exceptionsService, "badRequest");

    sut.paginate(0, LIMIT_MAX_VALUE + 1);

    expect(exceptionsService.badRequest).toHaveBeenCalled();
  });

  it("should call bad request when receive a page or limit that is a negative number", () => {
    jest.spyOn(exceptionsService, "badRequest");

    sut.paginate(1, -10);
    sut.paginate(-1, 10);

    expect(exceptionsService.badRequest).toHaveBeenCalledTimes(2);
  });

  it(`should use ${PAGINATION_FIRST_PAGE} when receives undefined as page`, () => {
    const expected = {
      skip: 0,
      take: 10
    };

    const result = sut.paginate(undefined, 10);

    expect(result).toStrictEqual(expected);
  });

  it(`given receives undefined as limit should use ${DEFAULT_PAGINATION_LIMIT}`, () => {
    const result = sut.paginate();

    expect(result).toStrictEqual(DEFAULT_PAGINATION_FIRST_PAGE_RETURN);
  });
});
