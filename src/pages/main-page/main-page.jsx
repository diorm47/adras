import React from "react";
import "./main-page.css";
import MainHeaderCarousel from "../../components/main-header-carousel/main-header-carousel";
import ExtendableOffer from "../../components/extendable-offer/extendable-offer";
import { school_data } from "../../components/data";
import CarouselOffer from "../../components/carousel-offer/carousel-offer";
import bannerImg from "../../assets/images/banner.jpg";

function MainPage() {
  return (
    <div className="main_page_wrapper">
      <MainHeaderCarousel />
      <ExtendableOffer title="Maktab uchun" data={school_data} />
      <CarouselOffer title="Uydan chiqmasdan ro'zg'or" data={school_data} />
      <div className="inline_banner">
        <img src={bannerImg} alt="banner" />
      </div>
      <CarouselOffer title="Ortiqcha to'lovlarsiz nasiya" data={school_data} />
      <CarouselOffer title="Kanselyariya mollari" data={school_data} />
      <CarouselOffer title="Maktab formasi" data={school_data} />
      <CarouselOffer title="Smart-avlod" data={school_data} />
      <CarouselOffer title="Foydali kitoblar" data={school_data} />
      <CarouselOffer title="Tamaddi uchun" data={school_data} />
      <CarouselOffer title="Ryukzaklar va aksessuarlar" data={school_data} />
      <CarouselOffer title="Hammasi avto uchun" data={school_data} />
      <CarouselOffer title="Sovutish uskunalari" data={school_data} />
      <CarouselOffer title="Kichik do'stlar uchun" data={school_data} />
      <ExtendableOffer title="Chegirmalar" data={school_data} />
    </div>
  );
}

export default MainPage;
