import React from "react";

import { client } from "../lib/client";
import { Product, HeroBanner } from "../components";

const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h2>Our Products</h2>
        <p className="padding-container">
          Chocolate &amp; Peanut Butter Fudge sold by the pound
        </p>
        <p className="padding-container">
          NOTE: They both have peanut butter in them so if you have peanut
          butter allergies you would <strong>NOT</strong> want to consume either
          one!
        </p>
      </div>
      <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
