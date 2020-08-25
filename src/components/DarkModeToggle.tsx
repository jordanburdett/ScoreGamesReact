import React from 'react'
import Switch from "@material-ui/core/Switch";

interface Props {
  setDarkState: Function
  darkState: boolean 
}

const DarkModeToggle = ({ setDarkState, darkState }: Props) => {
  return (
    <Switch checked={ darkState } onChange={() => setDarkState()} />
        
  )
}

export default DarkModeToggle
