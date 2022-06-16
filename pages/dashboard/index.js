import Link from 'next/link'
import AdsCarousel from './components/ads-carousel';
import NavBar from './components/navbar';

const Dashboard = () => {
    return (
        <div>
            <NavBar />
            <AdsCarousel />
        </div>
    )
}

export default Dashboard;