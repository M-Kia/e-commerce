import { MerchandiseService } from "@/services/merchandise";

interface IContext {
  id: number;
}

export async function GET(request: Request, context: { params: IContext }) {
  const {
    params: { id },
  } = context;

  const merchandise = await MerchandiseService.getById(id);

  if (!merchandise) {
    return Response.json(
      { id: id, error: "No Merchandise with the provided id!" },
      {
        status: 404,
      }
    );
  }

  return Response.json({ merchandise: merchandise });
}
