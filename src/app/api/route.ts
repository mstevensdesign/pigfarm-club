export async function GET() {
  const data = { message: "hello world" };
  return Response.json(data);
}
