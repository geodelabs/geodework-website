"use client"

import { useEffect, useState } from "react"

import { MATOMO_OPT_OUT_LS_KEY } from "@/lib/constants"

import { generateClipPath } from "@/styles/clipPaths"

const MatomoOptOut = () => {
  const [isOptedOut, setIsOptedOut] = useState(false)

  useEffect(() => {
    const matomoOptOut = localStorage.getItem(MATOMO_OPT_OUT_LS_KEY)
    if (matomoOptOut === "true") {
      setIsOptedOut(true)
    }
  }, [])

  const handleCheckboxChange = () => {
    if (isOptedOut) {
      localStorage.removeItem(MATOMO_OPT_OUT_LS_KEY)
      setIsOptedOut(false)
    } else {
      localStorage.setItem(MATOMO_OPT_OUT_LS_KEY, "true")
      setIsOptedOut(true)
    }
  }

  return (
    <div
      className="my-12 flex flex-col gap-4 bg-primary-dark p-8"
      style={generateClipPath("TopRight", "large")}
    >
      <p>
        You can opt out of being tracked by Matomo Analytics and prevent the
        website from analyzing the actions you take using the website. This will
        prevent us from learning from your actions and creating a better website
        experience for you and other users.
      </p>

      <label className="flex gap-2">
        <input
          type="checkbox"
          checked={!isOptedOut}
          onChange={handleCheckboxChange}
        />
        {isOptedOut
          ? "You are opted out. Check this box to opt-in."
          : "You are not opted out. Uncheck this box to opt-out."}
      </label>
    </div>
  )
}

export default MatomoOptOut
