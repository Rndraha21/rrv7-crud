import type { IncomingMessage, ServerResponse } from "http";

const { handler } = require("../../build/server/nodejs_eyJydW50aW1lIjoibm9kZWpzIn0/index.js");

export default function (req: IncomingMessage, res: ServerResponse) {
  // Use the handler exported by react-router-serve
  handler(req, res);
}
