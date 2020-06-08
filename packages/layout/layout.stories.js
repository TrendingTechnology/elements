import React, { Fragment } from "react"
import { Grid, Col, Box, Container, Stack, Card } from "./src"
import { Heading, Text } from "@rent_avail/typography"

export default { title: "Layout" }

export function BoxUsage() {
  return (
    <Fragment>
      <Box
        width={[1, 1 / 2]}
        p="2rem"
        mb="3rem"
        bg="blue_100"
        borderRadius="0.25rem"
      >
        <Text>
          This is a tomato box, with responsive width, some padding, and margin
          bottom
        </Text>
      </Box>
    </Fragment>
  )
}

export function StackUsage() {
  return (
    <Fragment>
      <Stack direction={["column", "row"]} style={{ background: "blue" }}>
        <Box p="2rem" bg="blue_100">
          content
        </Box>
        <Box p="2rem" bg="blue_100">
          content
        </Box>
        <Box p="2rem" bg="blue_100">
          content
        </Box>
        <Box p="2rem" bg="blue_100">
          content
        </Box>
        <Box p="2rem" bg="blue_100">
          content
        </Box>
      </Stack>
      <Stack mt="2rem" style={{ background: "red" }}>
        <Box p="2rem" bg="blue_100" width="100%">
          content
        </Box>
        <Box p="2rem" bg="blue_100">
          content
        </Box>
        <Box p="2rem" bg="blue_100">
          content
        </Box>
        <Box p="2rem" bg="blue_100">
          content
        </Box>
        <Box p="2rem" bg="blue_100">
          content
        </Box>
      </Stack>
    </Fragment>
  )
}

export function GridUsage() {
  const columns = [
    [12, 2],
    [12, 2],
    [12, 2],
    [12, 3],
    [12, 3],
    [12, 4],
    [12, 4],
    [12, 4],
  ]
  const styles = {
    bg: "ui_500",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
  return (
    <Grid height="100vh">
      <Col {...styles} span={[12, 6]} spanRow={["auto", 2]}>
        1
      </Col>
      {columns.map((span, idx) => (
        <Col {...styles} span={span}>
          {idx + 2}
        </Col>
      ))}
    </Grid>
  )
}

export function ContainerUsage() {
  return (
    <Container mt="2rem">
      <h1>Hello Container</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        corporis facere hic enim adipisci soluta iure totam harum, et magni?
        Totam illo accusamus blanditiis in at nihil magni necessitatibus
        voluptates!
      </p>
    </Container>
  )
}

export function CardUsage() {
  return (
    <Card>
      <Heading as="h3" mb="2rem">
        A Card Header
      </Heading>
      <Text>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, harum
        eaque. Illo, voluptas necessitatibus ab aperiam vitae ducimus eligendi,
        sequi dolore consequuntur distinctio numquam voluptate error suscipit
        minus natus praesentium?
      </Text>
    </Card>
  )
}
