import React from 'react'
import Navbar from '@/src/components/navbar'
import Footer from '../../src/components/footer'
import UpcomingEvents from '@/src/components/upcomingevents'

const privacy = () => {
  return (
    <div>
        <Navbar />
        <UpcomingEvents />
        <Footer />
    </div>
  )
}

export default privacy