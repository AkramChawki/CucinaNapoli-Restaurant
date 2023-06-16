import React from 'react'
import Table from './Partials/Table'
import Footer from '@/Components/Footer'

export default function Commander({ categories }) {
  return (
    <>
      <Table categories={categories} />
      <Footer />
    </>
  )
}
