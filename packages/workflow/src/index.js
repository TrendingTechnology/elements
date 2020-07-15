// https://www.npmjs.com/package/smoothscroll-polyfill
import React, { useState } from "react"
import { Container } from "@rent_avail/layout"
import { motion, AnimatePresence } from "framer-motion"

function getShown(persist, sIdx, cIdx) {
  if (persist) return sIdx <= cIdx
  return sIdx === cIdx
}

function Step({ step: { component: Component }, ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="workflow__step"
    >
      <Component {...props} />
    </motion.div>
  )
}

export default function Workflow({
  steps = [],
  initialIndex = 0,
  persist = false,
  ...props
}) {
  const [currentIdx, setIdx] = useState(initialIndex)
  return (
    <Container className="workflow__container" {...props}>
      <AnimatePresence>
        {steps.map((step, idx) => {
          const display = getShown(persist, idx, currentIdx)
          return (
            display && (
              <Step
                key={step.title}
                changeStep={setIdx}
                currentIdx={currentIdx}
                step={step}
              />
            )
          )
        })}
      </AnimatePresence>
    </Container>
  )
}
