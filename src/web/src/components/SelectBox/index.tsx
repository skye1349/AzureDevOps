import React, { ChangeEvent } from 'react'

interface Option {
  value: number
  label: string
}

interface SelectBoxProps {
  label: string
  options: Option[]
  value: number
  onChange: (event: ChangeEvent<{ value: unknown }>) => void
}

const SelectBox: React.FC<SelectBoxProps> = ({
  label,
  options,
  value,
  onChange,
}) => {
  return (
    <form>
      <label>{label}</label>
      <select value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </form>
  )
}
export default SelectBox
