import Container from '@/components/container'

export default function Footer() {
  return (
    <footer className="mb-4">
      <Container>
        <div className="py-4">
          <div className="flex flex-wrap text-xs">
            <div className="flex space-x-1 mb-1 md:mb-0">
           Built with next.js
            </div>

            <div className="md:ml-auto w-full md:w-auto flex space-x-1">
              <span className="block">Project by <a href="https://piakim.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-500 focus:text-gray-500">PK</a></span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}