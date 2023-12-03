import Client from "@/app/lib/client";

export async function GET() {
    const client = new Client();

    return Response.json(client.getData("/coins/list"));
}