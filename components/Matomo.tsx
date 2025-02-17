"use client"

import { useEffect, useState } from "react"
import { push } from "@socialgouv/matomo-next"

import { MATOMO_OPT_OUT_LS_KEY } from "@/lib/constants"

const Matomo = () => {
  useEffect(() => {
    const optedOut = localStorage.getItem(MATOMO_OPT_OUT_LS_KEY) === "true"
    if (optedOut) return

    /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
    push(["trackPageView"])
    push(["enableLinkTracking"])
    ;(() => {
      const u = "https://geodework.matomo.cloud/"
      push(["setTrackerUrl", `${u}matomo.php`])
      push(["setSiteId", "1"])

      const d = document
      const g = d.createElement("script")
      const s = d.getElementsByTagName("script")[0]
      g.async = true
      g.src = "https://cdn.matomo.cloud/geodework.matomo.cloud/matomo.js"

      if (s && s.parentNode) {
        s.parentNode.insertBefore(g, s)
      } else {
        d.head.appendChild(g)
      }
    })()
  }, [])

  return <></>
}

export default Matomo
