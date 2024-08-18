import { MerchandiseService } from "@/services/merchandise";

/**
 *
 * Query Params:
 *  type: Laptop, Mobile, Tablet, SmartWatch
 */
export async function GET(request: Request) {
  const body = await request.json();

  if (!body.type) {
    return Response.json(
      { error: "Please provide 'type'." },
      {
        status: 400,
      }
    );
  }

  const filters = await MerchandiseService.getFilterOptions(body.type);

  return Response.json(filters);
}
