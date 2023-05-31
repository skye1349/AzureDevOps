import React, { ChangeEvent } from 'react'
import Button from '@mui/joy/Button'
import SelectBox from '../../../../SelectBox'

// interface Option {
//   value: number
//   label: string
// }

// interface SelectBoxProps {
//   label: string
//   options: Option[]
//   value: number
//   onChange: (event: ChangeEvent<{ value: unknown }>) => void
// }

// const SelectBox: React.FC<SelectBoxProps> = ({
//   label,
//   options,
//   value,
//   onChange,
// }) => {
//   return (
//     <form>
//       <label>{label}</label>
//       <select value={value} onChange={onChange}>
//         {options.map((option) => (
//           <option key={option.value} value={option.value}>
//             {option.label}
//           </option>
//         ))}
//       </select>
//     </form>
//   )
// }

const HomePage: React.FC = () => {
  const handleChange = (event: ChangeEvent<{ value: unknown }>) => {
    // Handle the change event here
  }

  return (
    <>
      <SelectBox
        label="product"
        options={[
          { value: 1, label: 'optionOne' },
          { value: 2, label: 'optionTwo' },
          { value: 3, label: 'optionThree' },
        ]}
        value={1}
        onChange={handleChange}
      />
      <SelectBox
        label="product"
        options={[
          { value: 4, label: 'optionFour' },
          { value: 5, label: 'optionFive' },
          { value: 6, label: 'optionSix' },
        ]}
        value={4}
        onChange={handleChange}
      />
      <Button>SEARCH</Button>
    </>
  )
}

export default HomePage
