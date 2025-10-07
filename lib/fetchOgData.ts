import ogs from "open-graph-scraper"

export async function fetchOgData(url: string) {
  const { result } = await ogs({ url })
  console.log(result)
  let image = ""
  if (Array.isArray(result.ogImage) && result.ogImage.length > 0) {
    image = result.ogImage[0].url
  }
  return {
    title: result.ogSiteName || "",
    description: result.ogDescription || "",
    image,
  }
}
