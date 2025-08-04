import Navbar from '@/src/components/navbar'
import Hero from '@/src/components/hero'
import Feature from '@/src/components/feature'
import Link from '@/src/components/link'
import Event from '@/src/components/eventsection'
import Pricing from '@/src/components/pricing'
import Video from '@/src/components/video'
import FAQ from '@/src/components/faq'
import Download from '@/src/components/download'
import Footer from '@/src/components/footer'


const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Feature />
      <Link />
      <Event />
      <Pricing />
      <Video />
      <FAQ />
      <Download />
      <Footer />
    </div>
  )
}

export default page