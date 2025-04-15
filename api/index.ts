import type { IncomingMessage, ServerResponse } from "http";

const { handler } = require("../../build/server/nodejs_eyJydW50aW1lIjoibm9kZWpzIn0/index.js");

export default async function (req: IncomingMessage, res: ServerResponse) {
  try {
    console.log("SSR handler invoked");
    await handler(req, res);
    console.log("SSR handler completed");
  } catch (error) {
    console.error("SSR handler error:", error);
    res.statusCode = 500;
    res.end("Internal Server Error");
  }
}
