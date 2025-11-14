"use client"

import { useEffect } from "react"
import { motion, stagger, useAnimate, useInView } from "framer-motion"

import { cn } from "@/lib/utils"

const defaultCursorSizeClasses =
  "h-[1em] w-[0.125em] -translate-x-2 translate-y-0.5"

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName = "hidden",
  delayInSeconds = 0,
}: {
  words: {
    text: string
    className?: string
  }[]
  className?: string
  cursorClassName?: string
  delayInSeconds?: number
}) => {
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    }
  })

  const [scope, animate] = useAnimate()
  const isInView = useInView(scope)
  useEffect(() => {
    if (isInView) {
      const timeoutId = setTimeout(() => {
        animate(
          "span",
          {
            display: "inline-block",
            opacity: 1,
            width: "fit-content",
          },
          {
            duration: 0.3,
            delay: stagger(0.1),
            ease: "easeInOut",
          }
        )
      }, delayInSeconds * 1000) // Convert seconds to milliseconds

      return () => clearTimeout(timeoutId) // Cleanup timeout on unmount or isInView change
    }
  }, [isInView, animate, delayInSeconds])

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="inline space-x-2">
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <motion.span
                  initial={{}}
                  key={`char-${index}`}
                  className={cn(`hidden opacity-0`, word.className)}
                >
                  {char}
                </motion.span>
              ))}
              &nbsp;
            </div>
          )
        })}
      </motion.div>
    )
  }
  return (
    <div className={className}>
      {renderWords()}
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block rounded-sm bg-accent",
          defaultCursorSizeClasses,
          cursorClassName
        )}
      />
    </div>
  )
}

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string
    className?: string
  }[]
  className?: string
  cursorClassName?: string
}) => {
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    }
  })
  const renderWords = () => {
    return (
      <div>
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <span key={`char-${index}`} className={word.className}>
                  {char}
                </span>
              ))}
              &nbsp;
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className={cn("my-6 flex space-x-1", className)}>
      <motion.div
        className="overflow-hidden pb-2"
        initial={{
          width: "0%",
        }}
        whileInView={{
          width: "fit-content",
        }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 1,
        }}
      >
        <div style={{ whiteSpace: "nowrap" }}>{renderWords()} </div>
      </motion.div>{" "}
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,

          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "block rounded-sm bg-accent",
          defaultCursorSizeClasses,
          cursorClassName
        )}
      ></motion.span>
    </div>
  )
}
