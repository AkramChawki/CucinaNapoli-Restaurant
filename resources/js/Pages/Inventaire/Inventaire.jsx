import React from 'react'
import Name from './Partials/Name'
import Footer from '@/Components/Footer'

export default function Inventaire({fiches}) {
  return (
    <>
    <Name fiches={fiches}/>
    <Footer />
    </>
  )
}
