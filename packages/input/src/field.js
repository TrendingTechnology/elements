import React, { memo, forwardRef, useState } from "react"
import styled from "styled-components"
import { space, layout } from "styled-system"
import { pick, omit } from "@styled-system/props"
import { wrapEvent, noop } from "@rent_avail/utils"
import clsx from "clsx"

const FieldWrapper = styled.label`
  display: block;
  position: relative;
  background: ${({ theme }) => theme.colors.blue_100};
  border-width: 2px;
  border-style: solid;
  border-color: transparent;
  border-radius: 0.25rem;
  transition: border 250ms, background 200ms;
  ${space};
  ${layout};
  input {
    padding: 3rem 2rem 1rem;
    appearance: none;
    background: none;
    border: none;
    overflow: hidden;
    outline: none;
    width: 100%;
    font-size: ${({ theme }) => theme.fontSizes.body};
    font-family: inherit;
  }
  .input__row {
    position: absolute;
    left: 2rem;
    top: 2rem;
    transform-origin: 0%;
    transform: scale(1) translate3d(0, 0, 0);
    transition: transform 150ms;
  }
  &:focus-within {
    background: ${({ theme }) => theme.colors.ui_100};
    border-color: ${({ theme }) => theme.colors.blue_500};
  }
  &:focus-within .input__row,
  &.raised .input__row {
    transform: scale(0.75) translate3d(0, -1.25rem, 0);
  }
  .input__label {
    margin-right: 1rem;
  }
  .input__required {
    display: inline-block;
    border-radius: 50%;
    color: ${({ theme }) => theme.colors.red_500};
    vertical-align: bottom;
  }
`

function Field(
  {
    type = "text",
    label,
    error,
    required,
    className,
    value,
    onChange = noop,
    ...props
  },
  ref
) {
  const [raised, setRaised] = useState(Boolean(value))
  const styleProps = pick(props)
  const componentProps = omit(props)
  const classes = clsx(className, {
    required,
    raised,
    error,
  })
  function handleChange({ target: { value: inputValue } }) {
    setRaised(inputValue.length > 0)
  }
  return (
    <FieldWrapper {...styleProps} className={classes}>
      <input
        {...componentProps}
        ref={ref}
        type={type}
        required={required}
        value={value}
        onChange={wrapEvent(onChange, handleChange)}
      />
      <div className="input__row">
        <span className="input__label">{label}</span>
        {required && <span className="input__required">*</span>}
      </div>
      {error && <span className="input__error">{error}</span>}
    </FieldWrapper>
  )
}

export default memo(forwardRef(Field))
