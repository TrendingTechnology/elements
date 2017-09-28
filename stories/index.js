import React, { PureComponent } from "react"
import { injectGlobal } from "styled-components"

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { linkTo } from "@storybook/addon-links"

import { Button, Card, Tooltip } from "../src"

import AvatarStories from "./Avatar"
import ButtonStories from "./Button"
import FullPageModalStories from "./FullPageModal"

injectGlobal`
  *,*:before,*:after {
    box-sizing: border-box;
  }
  :root {
    font-size: 18px;
    line-height: 1.334;
  }
  body {
    font-family: 'Open Sans', sans-serif;
  }
`

storiesOf("Card", module).add("Basic", () => <Card title="hello react card" />)

storiesOf("Tooltip", module).add("Off right", () => (
  <div>
    <Tooltip content={<p>Steve Bruhle</p>}>
      <Button primary />
    </Tooltip>
  </div>
))