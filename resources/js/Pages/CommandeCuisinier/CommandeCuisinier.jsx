import React from 'react'
import Name from './Partials/Name'
import Footer from '@/Components/Footer'

export default function CommandeCuisinier({ficheId}) {
  return (
    <>
    <Name ficheId={ficheId}/>
    <Footer />
    </>
  )
}
