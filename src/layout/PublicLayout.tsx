import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { useBag } from '../hooks/useBag';
import Footer from '../components/Footer';

const PublicLayout = () => {

    const { bag, increaseQuantity, removeFromBag, isEmpty, bagTotal} = useBag();
    
    return (
        <>
        <Header
            bag={bag}
            increaseQuantity={increaseQuantity}
            removeFromBag={removeFromBag}
            isEmpty={isEmpty}
            bagTotal={bagTotal}
        />
        <Outlet/>
        <Footer/> 
        </>
    )
}

export default PublicLayout