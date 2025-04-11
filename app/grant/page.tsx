"use client"
import Link from "@/components/ui/link"
import HeroBackground from "@/components/HeroBackground"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { grantsData, IGrant } from "@/data/grants"
import React from "react"

const countriesByAlphet = [
  ...new Set(
    grantsData
      .toSorted((a, b) => a.country.localeCompare(b.country))
      .map((grant) => grant.country)
  ),
]

const generateInlineLink = (links: IGrant["links"], prefix: string = "") => {
  return links.map((link, index) => {
    return link.url ? (
      <Link
        href={link.url}
        hideArrow={true}
        key={`${prefix}-${link.title}-${index}`}
      >
        {link.title}
        {link.hasComma ? ", " : " "}
      </Link>
    ) : (
      <React.Fragment key={`${prefix}-${link.title}-${index}`}>
        {link.title}
        {link.hasComma ? ", " : " "}
      </React.Fragment>
    )
  })
}

export default function Grant() {
  const [selectedCountry, setSelectedCountry] = useState("All")

  // Filter projects based on selected country
  const filteredProjects =
    selectedCountry === "All"
      ? grantsData
      : grantsData.filter((grant) => grant.country === selectedCountry)

  const columnClasses = "p-4"

  return (
    <>
      <HeroBackground />
      <div className="flex flex-col items-center gap-16">
        <article className="mt-12 sm:mt-16 md:max-w-5xl">
          <h1 className="mb-8 text-center font-mono text-6xl font-light">
            Grants
          </h1>
          <div className="mb-12 flex flex-col items-center gap-4 text-center">
            <p className="text-lg">
              We facilitate grants-giving to better support Ethereum projects
              that are building the future of decentralized technology.
            </p>
          </div>

          <section className="flex flex-col gap-8">
            <div className="rounded-lg bg-primary-dark p-8 text-white">
              <h2 className="mb-6 text-center font-mono text-2xl">
                Projects We Support
              </h2>
              {/* Country Filter */}
              <div className="mb-4 flex flex-col items-center justify-between sm:flex-row md:mb-6">
                <div className="flex w-1/2 flex-col">
                  <label
                    htmlFor="country-filter"
                    className="mb-2 block text-sm font-medium"
                  >
                    Filter by Country:
                  </label>
                  <select
                    id="country-filter"
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    className="w-full max-w-xs rounded border border-white/20 bg-primary-light px-3 py-2 text-white"
                  >
                    <option value="All">All Countries</option>
                    {countriesByAlphet.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="sm:text-md mr-3 mt-4 text-sm md:mt-auto">
                  <p>Last updated: 2025-04-11</p>
                </div>
              </div>

              {/* Projects Table */}
              <div className="max-w-[75vw] overflow-x-scroll md:max-w-full">
                <table className="w-full divide-y divide-gray-200 md:table-fixed">
                  <thead>
                    <tr className="text-left">
                      <th className={cn(columnClasses, "sm:w-1/4")}>Project</th>
                      <th className={cn(columnClasses, "sm:w-1/4")}>
                        Recipient
                      </th>
                      <th className={cn(columnClasses, "sm:w-1/2")}>
                        Description
                      </th>
                      <th className={cn(columnClasses, "sm:w-1/4")}>Country</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredProjects.map((project, index) => (
                      <tr
                        key={project.project.title}
                        className={cn(
                          index % 2 === 0 ? "bg-primary" : "bg-primary-light"
                        )}
                      >
                        <td className={cn(columnClasses, "font-medium")}>
                          {generateInlineLink([project.project], "project")}
                        </td>
                        <td className={columnClasses}>
                          {generateInlineLink(project.links, "links")}
                        </td>
                        <td className={columnClasses}>{project.description}</td>
                        <td className={columnClasses}>{project.country}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </article>
      </div>
    </>
  )
}
