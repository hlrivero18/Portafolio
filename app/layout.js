import './globals.css'
export const metadata = {
  title: '___Hector_Luis___',
  description: '',
}
//COMPONENTS
import Name from "@/Components/Name/Name";
import List from "@/Components/List/List";
import Nav from '@/Components/Nav/Nav';
//GOOGLE FONT
import {Bebas_Neue} from "next/font/google"

const bebas = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"]
})




export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${bebas.className} blurIn bg-fixed bg-gradient-to-b from-up from-20% via-c via-60% to-down to-90%`}>
          <Nav/>
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}