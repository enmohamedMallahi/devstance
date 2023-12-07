import BlogsList from '@/components/BlogsList'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import Pricing from '@/components/Pricing'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main>
      <Services />
      {/* <BlogsList /> */}
      <Portfolio />
      <Pricing />
      <Contact />
    </main>
  )
}
