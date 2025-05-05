export function shortenAddress(address: string): string {
  if (address.startsWith("0x")) {
    return `${address.slice(0, 6)}...${address.slice(-6)}`
  }
  return `${address.slice(0, 8)}...${address.slice(-8)}`
}
