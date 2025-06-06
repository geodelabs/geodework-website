import Image from "next/image"

import Link from "@/components/ui/link"

import { fetchOgData } from "@/lib/fetchOgData"

export const dynamic = "force-static"

const productLinks = [
  {
    url: "https://localethereum.beehiiv.com/",
    fallback: {
      title: "Local Ethereum Newsletter",
      description:
        "Stay updated with local Ethereum news, events, and community highlights. Subscribe for the latest delivered to your inbox.",
      image: "",
    },
  },
  {
    url: "https://www.ethereumjobboard.com/",
    fallback: {
      title: "Ethereum Job Board",
      description:
        "Find your next opportunity in the Ethereum ecosystem. Browse jobs, post openings, and connect with top talent in Web3.",
      image: "",
    },
  },
  {
    url: "https://sayethereum.fun/",
    fallback: {
      title: "Say Ethereum",
      description:
        "Discover how 'Ethereum' is pronounced around the world. Listen to pronunciations in dozens of languages and countries!",
      image: "",
    },
  },
]

async function getProductsWithOg() {
  return await Promise.all(
    productLinks.map(async (product) => {
      try {
        const og = await fetchOgData(product.url)
        return {
          ...product,
          og: {
            title: og.title || product.fallback.title,
            description: og.description || product.fallback.description,
            image: og.image || product.fallback.image,
          },
        }
      } catch {
        return {
          ...product,
          og: product.fallback,
        }
      }
    })
  )
}

export default async function ProductsPage() {
  const products = await getProductsWithOg()
  return (
    <div className="flex flex-col items-center gap-16 py-16">
      <h1 className="mb-8 text-center text-4xl font-bold">
        Geodework Products
      </h1>
      <div className="grid w-full max-w-5xl gap-10 md:grid-cols-3">
        {products.map((product) => (
          <Link
            key={product.url}
            href={product.url}
            className="flex flex-col items-center rounded-xl border border-accent/30 bg-primary-light shadow-lg outline-none transition hover:scale-[1.03] hover:shadow-xl focus:scale-[1.03]"
            target="_blank"
            rel="noopener"
            tabIndex={0}
            aria-label={product.og.title}
            hideArrow={true}
          >
            {product.og.image && (
              <Image
                src={product.og.image}
                alt={product.og.title}
                width={320}
                height={128}
                className="object-fit h-38 mb-4 w-full rounded"
                style={{ background: "#f9f9f9" }}
                unoptimized
                priority={true}
              />
            )}
            <div className="flex flex-col items-center px-8">
              <h2 className="mb-2 text-2xl font-semibold text-accent">
                {product.og.title}
              </h2>
              <p className="mb-4 text-center text-body-secondary">
                {product.og.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
