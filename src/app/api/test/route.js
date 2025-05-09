export async function GET() {
  console.log("✅ /api/test GET hit");
  return new Response("Hello from test route", { status: 200 });
}