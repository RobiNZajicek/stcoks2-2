
import Footer from '../components/Footer/Footer'
import { HeaderMegaMenu } from '../components/HeaderMegaMenu/HeaderMegaMenu'

import { Outlet } from 'react-router-dom'
const SharedLayout = () => {
  return <section>
    <div >
    <HeaderMegaMenu/>
    <Outlet/>
    </div>
    <Footer/>
  </section>
}

export default SharedLayout