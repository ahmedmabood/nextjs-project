'use client'
import React from 'react'
import { ClipLoader } from 'react-spinners'

const Loading = ({Loading}) => {
  const override = {
    display: "block",
    margin: "100px auto",
    borderColor: "red",
  };
  return (
    <ClipLoader color="#000000" size={150}  loading ={Loading} className="m-auto mt-20" cssOverride={override} />
  )
}

export default Loading