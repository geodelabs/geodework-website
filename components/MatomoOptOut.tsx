"use client"

import React, { useState, useEffect } from "react"

import * as clipPaths from "@/styles/clipPaths"

const MatomoOptOut = () => {
  const [isOptedOut, setIsOptedOut] = useState(false)

  useEffect(() => {
    const matomoOptOut = localStorage.getItem("matomo-opt-out")
    if (matomoOptOut === "true") {
      setIsOptedOut(true)
    }
  }, [])

  const handleCheckboxChange = () => {
    if (isOptedOut) {
      localStorage.removeItem("matomo-opt-out")
      setIsOptedOut(false)
    } else {
      localStorage.setItem("matomo-opt-out", "true")
      setIsOptedOut(true)
    }
  }

  return (
    <div
      className="my-12 flex flex-col gap-4 bg-primary-dark p-8"
      style={clipPaths.largeUpperRight}
    >
      <p>
        You can opt out of being tracked by Matomo Analytics and prevent the
        website from analysing the actions you take using the website. This will
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
