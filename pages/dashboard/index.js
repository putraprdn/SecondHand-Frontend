import Link from 'next/link'
import AdsCarousel from './components/ads-carousel';
import CategoryTab from './components/category-tab';
import NavBar from './components/navbar';

const Dashboard = () => {
    return (
        <div>
            <NavBar />
            <AdsCarousel />
            <div className="container mt-5">
                <h4>Telusuri Konten</h4>
                <CategoryTab />
            </div>
        </div>
    )
}

export default Dashboard;