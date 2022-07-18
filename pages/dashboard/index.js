import axios from 'axios';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { NavBar } from '../../components';
import AdsCarousel from './components/ads-carousel';
import CategoryTab from './components/category-tab';
import ProductList from './components/product-list';

const Dashboard = () => {
    const [product, setProduct] = useState([]);

    const getProductData = async () => {
        try {
            const response = await axios.get('https://pa-be-k3.herokuapp.com/api/product/list')
            console.log(response.data.data);
            return setProduct(response.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProductData()
    }, []);

    return (
        <div>
            <Head>
                <title>Dashboard</title>
            </Head>
            <NavBar />
            <AdsCarousel />
            <div className="container my-5">
                <h4>Telusuri Konten</h4>
                <CategoryTab />
                <ProductList product={product} />
            </div>
        </div>
    )
}

export default Dashboard;