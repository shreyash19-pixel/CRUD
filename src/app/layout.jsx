import { Inter } from 'next/font/google'
import './globals.css'
import StyledJsxRegistry from './registry'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CRUD',
  description: 'Perform CRUD Operations',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StyledJsxRegistry>
      <body className={inter.className}>{children}</body>
      </StyledJsxRegistry>
    </html>
  )
}
