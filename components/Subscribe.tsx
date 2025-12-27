"use client"

import { useState } from "react"

import { LOCAL_ETHEREUM_BLOG_URL } from "@/lib/constants"

import { redirectToSubstackSubscribe } from "@/lib/substack"
import { subscribeIFrame } from "@/styles/clipPaths"

const Subscribe = () => {
  const [email, setEmail] = useState("")

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (email && email.trim()) {
      // Redirect to Substack with pre-filled email
      redirectToSubstackSubscribe(email, LOCAL_ETHEREUM_BLOG_URL)
    }
  }

  return (
    <div className="flex max-w-[30rem] flex-col items-start gap-4 tracking-widest">
      <div className="text-center font-mono">
        <strong>subscribe</strong> to our newsletter
      </div>

      <div style={subscribeIFrame} className="overflow-hidden">
        <form onSubmit={handleSubscribe} className="flex h-[52px] w-full">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 bg-white px-4 text-gray-700 placeholder-gray-400 outline-none"
            style={{
              margin: 0,
              border: "none",
            }}
          />
          <button
            type="submit"
            className="bg-accent px-4 text-sm font-semibold text-primary-dark transition-colors hover:bg-accent-light"
            style={{
              margin: 0,
              border: "none",
            }}
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  )
}

export default Subscribe
