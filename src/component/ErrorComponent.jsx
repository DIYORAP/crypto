import { Alert, AlertIcon } from '@chakra-ui/react'
import React from 'react'

const ErrorComponent = ({message}) => {
  return <Alert status="error" postion={"fixed"} bottom={"4"} left={"50%"} transform={"translateX(-50%)"} w={"Container.lg"}>

    <AlertIcon/>
    {message}

    </Alert>
}

export default ErrorComponent;
