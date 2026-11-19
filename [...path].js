import { handleApi } from "../server/api.mjs";

export default async function handler(req, res) {
  try {
    const handled = await handleApi(req, res);
    if (!handled) {
      res.statusCode = 404;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.end(JSON.stringify({ error: "Not found" }));
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : "Server error";
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.end(JSON.stringify({ error: message }));
  }
}
