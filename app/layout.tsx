import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import BottomNav from '@/components/BottomNav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Civic Eye - Community Monitoring System',
  description: 'Keep our community clean together',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full bg-gray-50`}>
        <div className="flex h-full">
          {/* Sidebar - Desktop only */}
          <div className="hidden md:block">
            <Sidebar />
          </div>
          
          {/* Main Content Area */}
          <div className="flex-1 flex flex-col h-full overflow-hidden">
            {/* Header */}
            <Header />
            
            {/* Main Content with scrolling */}
            <main className="flex-1 overflow-y-auto pb-16 md:pb-0">
              <div className="container mx-auto px-4 py-4 md:px-6 md:py-8">
                {children}
              </div>
            </main>
            
            {/* Bottom Navigation - Mobile only */}
            <BottomNav />
          </div>
        </div>
      </body>
    </html>
  )
}