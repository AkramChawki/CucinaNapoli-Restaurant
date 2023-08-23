import React from 'react'
import Table from './Partials/Table'
import Footer from '@/Components/Footer'

export default function Commander({ categories, ficheId, name }) {
  return (
    <>
      <Table categories={categories} ficheId={ficheId} name={name} />
      <Footer />
    </>
  )
}
