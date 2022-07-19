import axios from 'axios';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import AdsCarousel from './components/ads-carousel';
import CategoryTab from './components/category-tab';
import NavBar from './components/navbar';
import ProductList from './components/product-list';

const Dashboard = () => {
    const [product, setProduct] = useState([]);
    const [categories, setCategories] = useState([])

    const getProductData = async () => {
        try {
            const response = await axios.get('https://pa-be-k3.herokuapp.com/api/product/list')
            // console.log(response.data.data);
            return setProduct(response.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    const getCategoriesData = async () => {
        try {
            const response = await axios.get('https://pa-be-k3.herokuapp.com/api/category/list')
            // console.log(response.data.data);
            return setCategories(response.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProductData()
        getCategoriesData()
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
                <CategoryTab categories={categories} />
                <ProductList product={product} categories={categories} />
            </div>
        </div>
    )
}

export default Dashboard;