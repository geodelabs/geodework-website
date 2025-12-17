/**
 * Subscribe to Substack newsletter using client-side form submission
 * This bypasses Cloudflare protection issues with server-side requests
 */
export async function subscribeToSubstack(email: string): Promise<boolean> {
  try {
    // Create a hidden iframe to submit the form
    const iframe = document.createElement("iframe")
    iframe.style.display = "none"
    iframe.name = "substack-subscribe-frame"
    document.body.appendChild(iframe)

    // Create a hidden form
    const form = document.createElement("form")
    form.method = "POST"
    form.action = "https://localethereum.substack.com/api/v1/free"
    form.target = "substack-subscribe-frame"
    form.style.display = "none"

    // Add email field
    const emailInput = document.createElement("input")
    emailInput.type = "email"
    emailInput.name = "email"
    emailInput.value = email
    form.appendChild(emailInput)

    // Add first_url field (optional but recommended)
    const urlInput = document.createElement("input")
    urlInput.type = "hidden"
    urlInput.name = "first_url"
    urlInput.value = window.location.href
    form.appendChild(urlInput)

    // Add form to document and submit
    document.body.appendChild(form)
    form.submit()

    // Clean up after a short delay
    setTimeout(() => {
      document.body.removeChild(form)
      document.body.removeChild(iframe)
    }, 2000)

    return true
  } catch (error) {
    console.error("Substack subscription error:", error)
    return false
  }
}
