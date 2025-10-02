import * as z from "zod"

export const nonEmptyStringSchema = z.string().min(1)
export const nullableStringSchema = z.nullable(nonEmptyStringSchema)
export const optionalStringSchema = z.optional(nonEmptyStringSchema)
export const nullableNumberSchema = z.nullable(z.number())
export const nullableBooleanSchema = z.nullable(z.boolean())

export const genericResponseSchema = z.object({
  success: z.boolean(),
  message: nonEmptyStringSchema,
})
export type GenericResponseSchema = z.infer<typeof genericResponseSchema>

export const optionalDataResponseSchema = <T>(itemSchema: z.ZodSchema<T>) =>
  z.discriminatedUnion("success", [
    z.object({
      success: z.literal(false),
      message: nonEmptyStringSchema,
    }),
    z.object({
      success: z.literal(true),
      message: nonEmptyStringSchema,
      data: itemSchema,
    }),
  ])
export type OptionalDataResponseSchema<T> = ReturnType<
  typeof optionalDataResponseSchema<T>
>
