import { MerchandiseService } from "@/services/merchandise";
import { IPagination } from "@/type/pagination";
import { NextRequest } from "next/server";

/**
 *
 * query params:
 *  offset: integer
 *  limit: integer
 *  type: Laptop, Mobile, Tablet, SmartWatch
 *  title: string
 *  price_type: equals, gt, gte, lt, lte
 *  price: integer
 */
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const { offset, limit, ...otherQueryParams } =
    Object.fromEntries(searchParams);

  let pagination: IPagination | undefined = undefined;
  if (!isNaN(+offset) && !isNaN(+limit)) {
    pagination = {
      offset: +offset,
      limit: +limit,
    };
  }

  const merchandiseList = await MerchandiseService.getList(
    Object.keys(otherQueryParams).map((title) => ({
      title: title,
      value: otherQueryParams[title],
    })),
    pagination
  );

  return Response.json(merchandiseList);
}
