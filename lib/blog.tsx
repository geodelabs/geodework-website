export const expectedFilenamePattern =
  /^(2\d{3}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12]\d|3[01]))(?:-[\w\d]+)*\.md$/i


export const matchFilename = (file: string) => file.match(expectedFilenamePattern)

export const dateToUTCNoonDate = (date: string) => new Date(date + "T12:00:00.000Z")
