"use client"

import { useState } from "react"

import { subscribeToSubstack } from "@/lib/substack"
import { subscribeIFrame } from "@/styles/clipPaths"

const Subscribe = () => {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{
    type: "success" | "error"
    text: string
  } | null>(null)

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setIsSubmitting(true)
    setMessage(null)

    try {
      const success = await subscribeToSubstack(email)

      if (success) {
        setMessage({
          type: "success",
          text: "Successfully subscribed!\n Check your email to confirm.",
        })
        setEmail("")
      } else {
        setMessage({
          type: "error",
          text: "Failed to subscribe. Please try again.",
        })
      }
    } catch (error) {
      console.error("Subscription error:", error)
      setMessage({
        type: "error",
        text: "An error occurred. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex max-w-[30rem] flex-col items-start gap-4 tracking-widest">
      <div className="text-center font-mono">
        <strong>subscribe</strong> to our newsletter
      </div>

      {message?.type === "success" ? (
        <div
          style={subscribeIFrame}
          className="flex h-[52px] w-full items-center justify-center overflow-hidden bg-accent px-4"
        >
          <p className="text-center text-sm font-semibold text-primary-dark">
            {message.text}
          </p>
        </div>
      ) : (
        <>
          <div style={subscribeIFrame} className="overflow-hidden">
            <form onSubmit={handleSubscribe} className="flex h-[52px] w-full">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSubmitting}
                className="flex-1 bg-white px-4 text-gray-700 placeholder-gray-400 outline-none"
                style={{
                  margin: 0,
                  border: "none",
                }}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-accent px-4 text-sm font-semibold text-primary-dark transition-colors hover:bg-accent-light disabled:opacity-50"
                style={{
                  margin: 0,
                  border: "none",
                }}
              >
                {isSubmitting ? "..." : "Subscribe"}
              </button>
            </form>
          </div>

          {message?.type === "error" && (
            <p className="text-center text-sm text-red-400">{message.text}</p>
          )}
        </>
      )}
    </div>
  )
}

export default Subscribe
