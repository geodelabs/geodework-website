export const formatDate = (date: Date): string =>
  date.toLocaleDateString(navigator?.language || "en", {
    timeZone: "UTC",
    dateStyle: "long",
  })
