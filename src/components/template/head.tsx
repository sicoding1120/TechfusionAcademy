import React from 'react'
import HeadElements from '../elements/headElements'
import { typeOfHead } from '../type/type'

const Head = ({title}: typeOfHead) => {
    return (
        <HeadElements title={title} />
  )
}

export default Head