import { z } from "zod"

import {
  hexColorSchema,
  isoDateStringSchema,
  nonEmptyStringSchema,
} from "@/lib/schemas/shared"

export const productImageSchema = z.object({
  id: z.uuid(),
  url: z.url(),
  width: z.number(),
  height: z.number(),
  transformedUrl: z.url(),
})
export type ProductImageSchema = z.infer<typeof productImageSchema>

export const priceSchema = z.object({
  value: z.number(),
  currency: nonEmptyStringSchema,
})
export type PriceSchema = z.infer<typeof priceSchema>

export const stockSchema = z.object({
  type: nonEmptyStringSchema,
})
export type StockSchema = z.infer<typeof stockSchema>

export const weightSchema = z.object({
  value: z.number(),
  unit: nonEmptyStringSchema,
})
export type WeightSchema = z.infer<typeof weightSchema>

export const dimensionsSchema = z.object({
  length: z.number(),
  width: z.number(),
  height: z.number(),
  unit: nonEmptyStringSchema,
})
export type DimensionsSchema = z.infer<typeof dimensionsSchema>

export const colorSchema = z.object({
  name: nonEmptyStringSchema,
  swatch: hexColorSchema,
})
export type ColorSchema = z.infer<typeof colorSchema>

export const sizeSchema = z.object({
  name: nonEmptyStringSchema,
})
export type SizeSchema = z.infer<typeof sizeSchema>

export const variantAttributesSchema = z.object({
  description: z.string(),
  color: colorSchema,
  size: sizeSchema,
})
export type VariantAttributesSchema = z.infer<typeof variantAttributesSchema>

export const productVariantSchema = z.object({
  id: z.uuid(),
  name: nonEmptyStringSchema,
  sku: nonEmptyStringSchema,
  unitPrice: priceSchema,
  compareAtPrice: priceSchema.nullable(),
  attributes: variantAttributesSchema,
  stock: stockSchema,
  weight: weightSchema,
  dimensions: dimensionsSchema,
  images: z.array(productImageSchema),
})
export type ProductVariantSchema = z.infer<typeof productVariantSchema>

export const productStateSchema = z.object({
  type: nonEmptyStringSchema,
})
export type ProductStateSchema = z.infer<typeof productStateSchema>

export const productAccessSchema = z.object({
  type: nonEmptyStringSchema,
})
export type ProductAccessSchema = z.infer<typeof productAccessSchema>

export const productSchema = z.object({
  id: z.uuid(),
  name: nonEmptyStringSchema,
  slug: nonEmptyStringSchema,
  description: z.string(),
  state: productStateSchema,
  access: productAccessSchema,
  images: z.array(productImageSchema),
  variants: z.array(productVariantSchema),
  createdAt: isoDateStringSchema,
  updatedAt: isoDateStringSchema,
})
export type ProductSchema = z.infer<typeof productSchema>

export const pagingSchema = z.object({
  pageNumber: z.number(),
  pageSize: z.number(),
  elementsSize: z.number(),
  elementsTotal: z.number(),
  totalPages: z.number(),
  hasNextPage: z.boolean(),
})
export type PagingSchema = z.infer<typeof pagingSchema>

export const storefrontProductsResponseSchema = z.object({
  results: z.array(productSchema),
  paging: pagingSchema,
})
export type StorefrontProductsResponseSchema = z.infer<
  typeof storefrontProductsResponseSchema
>
