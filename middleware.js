import { createBasicAuthHandler } from "basic-auth-for-vercel-middleware";

export default createBasicAuthHandler(
  { name: "test", password: "test" },
  "Restricted Area"
);

