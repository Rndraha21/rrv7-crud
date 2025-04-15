import type { IncomingMessage, ServerResponse } from "http";

const { handler } = require("../../build/server/index.js");

export default function (req: IncomingMessage, res: ServerResponse) {
  // Use the handler exported by react-router-serve
  handler(req, res);
}
