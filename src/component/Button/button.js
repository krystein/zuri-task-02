import React from 'react';
import { Button } from './style';

const ButtonKey = ({children, to, primary}) => {
  return (
    <Button to={to} primary={primary}>
        {children}
    </Button>
  )
}

export default ButtonKey