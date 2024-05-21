export function GET() {
  for (let i = 0; i < 10; i++) {
    console.log(`Hello, world! ${i}`);
  }

  return new Response("Hello, world!", { status: 200 });
}
