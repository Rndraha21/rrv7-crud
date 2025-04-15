import type { IncomingMessage, ServerResponse } from "http";

export default function (req: IncomingMessage, res: ServerResponse) {
  res.statusCode = 200;
  res.end("Hello from test serverless function");
}