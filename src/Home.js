import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="123"
            title="OnePlus Buds Z (White)"
            price={2990}
            image={"/Images/p2.jpg"}
            rating={5}
          />
          <Product
            id="124"
            title="Asus ROG Strix Scar III (2019) Gaming Laptop "
            price={348718}
            image={"/Images/p3.jpg"}
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="125"
            title="Nike Unisex's Superfly 6 Pro Fg Football Boots "
            price={8657}
            image={"/Images/p4.jpg"}
            rating={4}
          />
          <Product
            id="126"
            title="
            LG Ultragear 24 inch (60.96 cm) 144Hz, Native 1ms Full HD Gaming Monitor with Radeon Freesync "
            price={14836}
            image={"/Images/p5.jpg"}
            rating={4}
          />
          <Product
            id="127"
            title="TP-Link Archer AX11000 Next-Gen Tri-Band Gaming Router Wi-Fi 6 UltraFast Speed 10 Gbps Smart with 1.8GHz 64bit Quad-Core CPU "
            price={26999}
            image={"/Images/p6.jpg"}
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="128"
            title="D ETERNAL QiYi MoFangGe The Valk 3 Power 3x3x3 Stickerless Magic Cube 3X3 Professional Speed Cube "
            price={1599}
            image={"/Images/p7.jpg"}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
