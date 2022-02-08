import { HeaderTop } from '../components/HeaderTop'
import { Nav } from '../components/Nav'
export const Layout = ({ children }) => {
    return (
        <>
            <HeaderTop />
            <Nav />
            { children }
         
        </>
  )
};
