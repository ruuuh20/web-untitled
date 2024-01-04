
import Container from '@/components/container'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="py-4 bg-blue-200 mb-4 md:mb-6 xl:mb-8">
      <Container>
        <div className="flex flex-wrap">
          <Link href="/">Home</Link>
         

          <nav className="ml-auto flex space-x-3 w-full text-sm md:text-base md:w-auto">
           

           <Link href="/resources">Resources</Link>
          </nav>
        </div>
      </Container>
    </header>
  )
}