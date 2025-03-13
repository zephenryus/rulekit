import { Schema } from "../src/schema/Schema.js";

describe("Schema", () => {
  it("should return a flat list of field names", () => {
    const schema = new Schema([
      { field: "id", type: "string" },
      {
        field: "account",
        type: "object",
        children: [{ field: "balance", type: "number" }],
      },
    ]);

    expect(schema.getFields()).toEqual(["id", "account.balance"]);
  });
});
