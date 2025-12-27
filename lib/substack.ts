/**
 * Redirect user to Substack subscribe page with email pre-filled
 * This allows users to choose their subscription tier (free/paid)
 */
export function redirectToSubstackSubscribe(
  email: string,
  publicationUrl: string
): void {
  // Encode the email for URL
  const encodedEmail = encodeURIComponent(email)

  // Construct the Substack subscribe URL with pre-filled email
  const subscribeUrl = `${publicationUrl}/subscribe?email=${encodedEmail}`

  // Redirect to Substack
  window.location.href = subscribeUrl
}
