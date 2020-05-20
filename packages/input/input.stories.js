import React, { Fragment } from "react"
import Input, { Field } from "./src"
import { Container } from "@rent_avail/layout"
import { Calendar } from "react-feather"

export default { title: "Input" }

export function InputUsage() {
  return (
    <Container>
      <Input label="Full Name" required error="Must Have A Name" mb="3rem" />
      <Input label="Optional Field" mb="3rem" />
      <Input
        icon={Calendar}
        label="Birth Date"
        type="date"
        mb="3rem"
        required
      />
    </Container>
  )
}

export function FieldUsage() {
  return (
    <Container mt="4rem">
      <Field label="Full Name" required />
    </Container>
  )
}
