/* eslint-disable @next/next/no-head-element */
import React from 'react'
import { typeOfHead } from '../type/type'
import Head from 'next/head'

const headElements = ({title}: typeOfHead) => {
  return (
      <Head>
          <title>{title}</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
  )
}

export default headElements