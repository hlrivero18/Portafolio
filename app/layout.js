import './globals.css'
export const metadata = {
  title: '___Hector_Luis___',
  description: '',
}
//COMPONENTS
import Name from "@/Components/Name/Name";
import List from "@/Components/List/List";
import Nav from '@/Components/Nav/Nav';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Rubik+Iso&family=Oswald&display=swap" rel="stylesheet" />
      </head>
      <body className='blurIn bg-fixed bg-gradient-to-b from-up from-20% via-c via-60% to-down to-90%'>
          <Nav/>
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}

// bg-fixed bg-gradient-to-b from-up from-20% via-c via-60% to-down to-90%