export const formatDate = (date: Date | string): string => {
  const d = typeof date === "string" ? new Date(date) : date
  const locale = typeof navigator !== "undefined" ? navigator.language : "en"
  return d.toLocaleDateString(locale, {
    timeZone: "UTC",
    dateStyle: "long",
  })
}
