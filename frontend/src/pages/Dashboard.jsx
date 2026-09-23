import Header from "./section/Header";
import Accessories from "./section/Accessories";
import HeroBanner from "./section/HeroBanner";
import Toys from "./section/Toys";
import TrendingProducts from "./section/TrendingProducts";
import EcommerceVideoSection from "./section/EcommerceVideoSection";
import WebsiteFeatures from "./section/WebsiteFeatures";
import NewArrivals from "./section/NewArrivals";
import CustomerReviews from "./section/CustomerReviews";
import FinalSection from "./section/FinalSection";
import Footer from "./section/Footer";

const Dashboard = ({ wishlist, setWishlist, cart, setCart, onBuyNow }) => {

  return (
    <>
      <Header wishlist={wishlist} cart={cart} />

      <HeroBanner />

      <Toys
        wishlist={wishlist}
        setWishlist={setWishlist}
        cart={cart}
        setCart={setCart}
        onBuyNow={onBuyNow}
      />

      <TrendingProducts />

      <Accessories
        wishlist={wishlist}
        setWishlist={setWishlist}
        cart={cart}
        setCart={setCart}
        onBuyNow={onBuyNow}
      />

      <EcommerceVideoSection />
      <WebsiteFeatures />
      <NewArrivals />
      <CustomerReviews />
      <FinalSection />
      <Footer />

    </>
  );
};

export default Dashboard;