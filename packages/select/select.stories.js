import React, { useState } from "react"
import { Heading } from "@rent_avail/typography"
import { Container, Grid, Col } from "@rent_avail/layout"
import Input from "@rent_avail/input"
import { Select, SelectInput, SelectList, SelectItem } from "./src"

export default { title: "Select" }

export function BasicUsage() {
  const options = [
    { label: "Alabama", value: "AL" },
    { label: "Alaska", value: "AK" },
    { label: "Arizona", value: "AZ" },
    { label: "Arkansas", value: "AR" },
    { label: "California", value: "CA" },
    { label: "Colorado", value: "CO" },
    { label: "Connecticut", value: "CT" },
  ]
  const [state, setState] = useState("")
  return (
    <Container my="4rem">
      <Grid gridAutoFlow="row dense">
        <Col
          as={Input}
          span={[12, 8, 8]}
          label="Street Address"
          autoComplete="address-line1"
        />
        <Col
          as={Input}
          span={[5, 4, 4]}
          label="Apt."
          autoComplete="address-line2"
        />
        <Col
          as={Input}
          label="City"
          span={[7, 3]}
          autoComplete="address-level2"
        />
        <Col span={[6, 3]}>
          <Select id="select-id" onSelect={(value) => setState(value)}>
            <SelectInput label="State" autoComplete="address-level1" />
            <SelectList>
              {options.map(({ label, value }) => (
                <SelectItem key={value} value={value} label={label}>
                  {label}
                </SelectItem>
              ))}
            </SelectList>
          </Select>
        </Col>
        <Col
          as={Input}
          label="Zip Code"
          span={[6, 3]}
          autoComplete="postal-code"
        />
        <Col
          as={Input}
          label="Country"
          span={[12, 3]}
          autoComplete="country-name"
        />
      </Grid>
    </Container>
  )
}
