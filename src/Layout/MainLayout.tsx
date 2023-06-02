import { ReactNode } from 'react'
import Footer from './Footer'
import Header from './Header'

interface MainLayoutProps {
  children: ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className='min-h-[calc(100vh_-_80px)]'>{children}</main>
      <Footer />
    </>
  )
}

export default MainLayout
