export type SchemaType = "string"
  | "number"
  | "boolean"
  | "date"
  | "array"
  | "object"
  | "mixed"
  | "any";

export interface SchemaField {
  field: string; // The field name (e.g., "account.balance")
  type: SchemaType; // The field type
  label?: string; // Optional display label
  description?: string; // Optional description
  children?: SchemaField[]; // Nested fields (for objects/arrays)
}

export class Schema {
  constructor(public fields: SchemaField[]) {}

  getFields(): string[] {
    return this.flattenFields(this.fields).map((f) => f.field);
  }

  private flattenFields(fields: SchemaField[], prefix = ""): SchemaField[] {
    return fields.flatMap((field) => {
      const fieldName = prefix ? `${prefix}.${field.field}` : field.field;

      if (field.children) {
        return this.flattenFields(field.children, fieldName);
      }

      return [{ ...field, field: fieldName }];
    });
  }
}
