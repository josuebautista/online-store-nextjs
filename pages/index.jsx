import React from 'react';
import { Product, FooterBanner, HeroBanner } from '../components';
import { client } from '../lib/client';

function Home({products, bannerData}) {
  return (
    <>
      {console.log(bannerData)}
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}></HeroBanner>
      <div className='products-heading'>
        <h2>Best Selling products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className='products-container'>
        {
          products?.map((product) => {
            return (
              <Product key={product._id} product={product}></Product>
            )
          })
        }
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]}></FooterBanner>
    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);
  return {
    props: {products, bannerData}
  }
}


export default Home;
