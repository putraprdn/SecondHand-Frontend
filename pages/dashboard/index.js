import Link from 'next/link'
import { NavBar } from '../../components';
import AdsCarousel from './components/ads-carousel';
import CategoryTab from './components/category-tab';
import ProductList from './components/product-list';

const Dashboard = () => {
    return (
        <div>
            <NavBar />
            <AdsCarousel />
            <div className="container my-5">
                <h4>Telusuri Konten</h4>
                <CategoryTab />
                <ProductList />
            </div>
        </div>
    )
}

export default Dashboard;