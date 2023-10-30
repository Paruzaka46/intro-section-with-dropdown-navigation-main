import { useState } from 'react'
import {NavbarDesktop, NavbarMobile} from './components/Navbar'
import Content from './components/Content'
import {useMediaQuery} from 'react-responsive'

// const isDesktop = useMediaQuery({query: '(min-width: 1224px)'})

function App() {
  const isDesktop = useMediaQuery({query: '(min-width: 800px)'})
  return (
    <>
    {isDesktop?<NavbarDesktop/>:<NavbarMobile/>}
    <Content/>
    </>
  )
}
export default App
