import React, { PureComponent } from 'react'
import { Cart, Products, Layout, HeroBanner, FooterBanner, Navbar, Footer} from '../components';
import {client} from '../lib/client';

const Home = ({bannerData ,products }) => {
  return (
    <>
      {console.log("Hello")}
      {console.log(bannerData[0])}
      <HeroBanner heroBanner = {bannerData.length && bannerData[0]}/>
      
      <div className='products-heading'>
       <h1>Best Selling Products</h1>
       <p>Speaker of many variation</p>
      </div>

      <div className='products-container'>
        {products?.map((product)=>(
          <Products key = {product._id} product = {product}/>
        ))}
      </div>
      <FooterBanner footerBanner = {bannerData && bannerData[0]}/>
    </>
  )
}
export const getServerSideProps = async ()=>{
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  
  return{
    props: { bannerData, products}
  }

}


export default Home