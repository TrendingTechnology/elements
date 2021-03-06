import React, { useState } from "react"
import { Heading } from "@rent_avail/typography"
import { Container } from "@rent_avail/layout"
import { Select, SelectInput, SelectList, SelectItem } from "./src"

export default { title: "Select" }

function SelectExample() {
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
    <Container mt="4rem">
      <Heading mb="2rem">{state || "Select a value"}</Heading>
      <Select id="select-id" onSelect={(value) => setState(value)}>
        <SelectInput label="Choose a state" />
        <SelectList>
          {options.map(({ label, value }) => (
            <SelectItem key={value} value={value} label={label}>
              {label}
            </SelectItem>
          ))}
        </SelectList>
      </Select>
    </Container>
  )
}

export function Basic() {
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eos
        aliquam porro enim dicta! Impedit minus velit dicta praesentium
        dignissimos rem error rerum cumque repellat nulla veritatis, labore,
        ipsum facere?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eos
        aliquam porro enim dicta! Impedit minus velit dicta praesentium
        dignissimos rem error rerum cumque repellat nulla veritatis, labore,
        ipsum facere?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eos
        aliquam porro enim dicta! Impedit minus velit dicta praesentium
        dignissimos rem error rerum cumque repellat nulla veritatis, labore,
        ipsum facere?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eos
        aliquam porro enim dicta! Impedit minus velit dicta praesentium
        dignissimos rem error rerum cumque repellat nulla veritatis, labore,
        ipsum facere?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eos
        aliquam porro enim dicta! Impedit minus velit dicta praesentium
        dignissimos rem error rerum cumque repellat nulla veritatis, labore,
        ipsum facere?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eos
        aliquam porro enim dicta! Impedit minus velit dicta praesentium
        dignissimos rem error rerum cumque repellat nulla veritatis, labore,
        ipsum facere?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eos
        aliquam porro enim dicta! Impedit minus velit dicta praesentium
        dignissimos rem error rerum cumque repellat nulla veritatis, labore,
        ipsum facere?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eos
        aliquam porro enim dicta! Impedit minus velit dicta praesentium
        dignissimos rem error rerum cumque repellat nulla veritatis, labore,
        ipsum facere?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eos
        aliquam porro enim dicta! Impedit minus velit dicta praesentium
        dignissimos rem error rerum cumque repellat nulla veritatis, labore,
        ipsum facere?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eos
        aliquam porro enim dicta! Impedit minus velit dicta praesentium
        dignissimos rem error rerum cumque repellat nulla veritatis, labore,
        ipsum facere?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eos
        aliquam porro enim dicta! Impedit minus velit dicta praesentium
        dignissimos rem error rerum cumque repellat nulla veritatis, labore,
        ipsum facere?
      </p>
      <SelectExample />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eos
        aliquam porro enim dicta! Impedit minus velit dicta praesentium
        dignissimos rem error rerum cumque repellat nulla veritatis, labore,
        ipsum facere?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eos
        aliquam porro enim dicta! Impedit minus velit dicta praesentium
        dignissimos rem error rerum cumque repellat nulla veritatis, labore,
        ipsum facere?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eos
        aliquam porro enim dicta! Impedit minus velit dicta praesentium
        dignissimos rem error rerum cumque repellat nulla veritatis, labore,
        ipsum facere?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eos
        aliquam porro enim dicta! Impedit minus velit dicta praesentium
        dignissimos rem error rerum cumque repellat nulla veritatis, labore,
        ipsum facere?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eos
        aliquam porro enim dicta! Impedit minus velit dicta praesentium
        dignissimos rem error rerum cumque repellat nulla veritatis, labore,
        ipsum facere?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eos
        aliquam porro enim dicta! Impedit minus velit dicta praesentium
        dignissimos rem error rerum cumque repellat nulla veritatis, labore,
        ipsum facere?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eos
        aliquam porro enim dicta! Impedit minus velit dicta praesentium
        dignissimos rem error rerum cumque repellat nulla veritatis, labore,
        ipsum facere?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eos
        aliquam porro enim dicta! Impedit minus velit dicta praesentium
        dignissimos rem error rerum cumque repellat nulla veritatis, labore,
        ipsum facere?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eos
        aliquam porro enim dicta! Impedit minus velit dicta praesentium
        dignissimos rem error rerum cumque repellat nulla veritatis, labore,
        ipsum facere?
      </p>
    </div>
  )
}
