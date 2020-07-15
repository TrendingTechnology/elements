import React from "react"
import Workflow from "./src"
import { Heading } from "@rent_avail/typography"

export default { title: "Workflow" }

function FirstStep() {
  return <Heading as="h3">First Step</Heading>
}

export function Standard() {
  return <Workflow steps={[{ title: "First Step", component: FirstStep }]} />
}
