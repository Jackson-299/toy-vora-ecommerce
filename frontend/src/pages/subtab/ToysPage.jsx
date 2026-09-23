// import { Heart, ShoppingCart, Eye, Zap, Star } from "lucide-react";
// import Header from "../section/Header";
// import Footer from "../section/Footer";

// const ToysPage = ({
//   wishlist,
//   setWishlist,
//   setCart,
//   onBuyNow
// }) => {
//   const products = [
//     {
//       id: 101,
//       image:
//         "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800",
//       name: "Colorful Building Blocks",
//       brand: "FunKids",
//       rating: 4.8,
//       reviews: 124,
//       originalPrice: 999,
//       price: 699,
//       discount: 30,
//     },
//     {
//       id: 102,
//       image:
//         "https://images.unsplash.com/photo-1559454403-b8fb88521f11?q=80&w=800",
//       name: "Cute Teddy Bear",
//       brand: "TeddyLand",
//       rating: 4.7,
//       reviews: 98,
//       originalPrice: 1299,
//       price: 899,
//       discount: 31,
//     },
//     {
//       id: 103,
//       image:
//         "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=800",
//       name: "Kids Toy Car",
//       brand: "SpeedX",
//       rating: 4.6,
//       reviews: 87,
//       originalPrice: 799,
//       price: 549,
//       discount: 31,
//     },
//     {
//       id: 104,
//       image:
//         "https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=800",
//       name: "Wooden Learning Toy",
//       brand: "SmartKids",
//       rating: 4.9,
//       reviews: 156,
//       originalPrice: 1499,
//       price: 999,
//       discount: 33,
//     },
//     {
//       id: 105,
//       image:
//         "https://images.unsplash.com/photo-1599623560574-39d485900c95?q=80&w=800",
//       name: "Soft Plush Toy",
//       brand: "LittleJoy",
//       rating: 4.5,
//       reviews: 72,
//       originalPrice: 899,
//       price: 599,
//       discount: 33,
//     },
//     {
//       id: 106,
//       image:
//         "https://images.unsplash.com/photo-1607453998774-d533f65dac99?q=80&w=800",
//       name: "Toy Kitchen Set",
//       brand: "HappyHome",
//       rating: 4.7,
//       reviews: 112,
//       originalPrice: 1799,
//       price: 1199,
//       discount: 33,
//     },
//     {
//       id: 107,
//       image:
//         "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800",
//       name: "Mini Robot Toy",
//       brand: "TechKids",
//       rating: 4.6,
//       reviews: 65,
//       originalPrice: 1199,
//       price: 799,
//       discount: 33,
//     },
//     {
//       id: 108,
//       image:
//         "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?q=80&w=800",
//       name: "Color Puzzle Game",
//       brand: "BrainFun",
//       rating: 4.8,
//       reviews: 143,
//       originalPrice: 699,
//       price: 449,
//       discount: 36,
//     },
//     {
//       id: 109,
//       image:
//         "https://images.unsplash.com/photo-1598301257982-0cf014dabbcd?q=80&w=800",
//       name: "Kids Musical Toy",
//       brand: "MusicJoy",
//       rating: 4.5,
//       reviews: 81,
//       originalPrice: 1099,
//       price: 749,
//       discount: 32,
//     },
//     {
//       id: 110,
//       image:
//         "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?q=80&w=800",
//       name: "Colorful Toy Train Set",
//       brand: "PlayZone",
//       rating: 4.7,
//       reviews: 98,
//       originalPrice: 1299,
//       price: 899,
//       discount: 31,
//     },
//     {
//       id: 111,
//       image:
//         "https://images.unsplash.com/photo-1560961911-ba7ef651a56c?q=80&w=800",
//       name: "Cute Baby Doll",
//       brand: "KidsJoy",
//       rating: 4.9,
//       reviews: 156,
//       originalPrice: 1499,
//       price: 999,
//       discount: 33,
//     },
//     {
//       id: 112,
//       image:
//         "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?q=80&w=800",
//       name: "Remote Control Car",
//       brand: "SpeedKids",
//       rating: 4.7,
//       reviews: 134,
//       originalPrice: 1999,
//       price: 1299,
//       discount: 35,
//     },
//     {
//       id: 113,
//       image:
//         "https://images.unsplash.com/photo-1599623560574-39d485900c95?q=80&w=800",
//       name: "Rainbow Plush Toy",
//       brand: "ToyWorld",
//       rating: 4.6,
//       reviews: 91,
//       originalPrice: 1199,
//       price: 749,
//       discount: 38,
//     },
//     {
//       id: 114,
//       image:
//         "https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=800",
//       name: "Kids Learning Board",
//       brand: "EduKids",
//       rating: 4.8,
//       reviews: 117,
//       originalPrice: 1399,
//       price: 899,
//       discount: 36,
//     },
//     {
//       id: 115,
//       image:
//         "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?q=80&w=800",
//       name: "Brain Puzzle Cube",
//       brand: "PuzzlePro",
//       rating: 4.7,
//       reviews: 104,
//       originalPrice: 799,
//       price: 499,
//       discount: 38,
//     },
//     {
//       id: 116,
//       image:
//         "https://images.unsplash.com/photo-1607453998774-d533f65dac99?q=80&w=800",
//       name: "Kids Cooking Play Set",
//       brand: "LittleChef",
//       rating: 4.8,
//       reviews: 126,
//       originalPrice: 1899,
//       price: 1249,
//       discount: 34,
//     },
//     {
//       id: 117,
//       image:
//         "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800",
//       name: "Interactive Robot",
//       brand: "RoboKids",
//       rating: 4.6,
//       reviews: 88,
//       originalPrice: 2499,
//       price: 1699,
//       discount: 32,
//     },
//     {
//       id: 118,
//       image:
//         "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800",
//       name: "Creative Building Set",
//       brand: "BuildFun",
//       rating: 4.9,
//       reviews: 174,
//       originalPrice: 1599,
//       price: 1099,
//       discount: 31,
//     },
//     {
//       id: 119,
//       image:
//         "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=800",
//       name: "Racing Toy Car",
//       brand: "SpeedZone",
//       rating: 4.7,
//       reviews: 96,
//       originalPrice: 999,
//       price: 649,
//       discount: 35,
//     },
//     {
//       id: 120,
//       image:
//         "https://images.unsplash.com/photo-1559454403-b8fb88521f11?q=80&w=800",
//       name: "Large Teddy Bear",
//       brand: "CuddleTime",
//       rating: 4.9,
//       reviews: 203,
//       originalPrice: 1999,
//       price: 1299,
//       discount: 35,
//     },
//   ];

//   const toggleWishlist = (product) => {
//     setWishlist((prev) =>
//       prev.some((item) => item.id === product.id)
//         ? prev.filter((item) => item.id !== product.id)
//         : [...prev, product]
//     );
//   };

//   const addToCart = (product) => {
//     setCart((prev) => [...prev, product]);
//   };

//   const quickView = (product) => {
//     alert(`Quick View: ${product.name}`);
//   };

//   return (
//     <>
//     <Header />
//     <section className="container py-5">

//       <div className="mb-5">
//         <h2 className="fw-bold mb-2">Toys</h2>

//         <p className="text-muted mb-0">
//           Discover fun, creative and exciting toys for kids
//         </p>
//       </div>

//       <div className="row g-4">

//         {products.map((product) => (
//           <div
//             className="col-12 col-sm-6 col-md-4 col-lg-3"
//             key={product.id}
//           >
//             <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">

//               <div className="position-relative bg-light">

//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="w-100"
//                   style={{
//                     height: "240px",
//                     objectFit: "cover",
//                   }}
//                 />

//                 <span className="position-absolute top-0 start-0 m-3 badge bg-danger rounded-pill px-3 py-2">
//                   {product.discount}% OFF
//                 </span>

//                 <button
//                   onClick={() => toggleWishlist(product)}
//                   className={`position-absolute top-0 end-0 m-3 btn rounded-circle shadow-sm ${
//                     wishlist.some((item) => item.id === product.id)
//                       ? "btn-danger text-white"
//                       : "btn-light"
//                   }`}
//                   style={{
//                     width: "40px",
//                     height: "40px",
//                   }}
//                 >
//                   <Heart
//                     size={18}
//                     fill={
//                       wishlist.some((item) => item.id === product.id)
//                         ? "currentColor"
//                         : "none"
//                     }
//                   />
//                 </button>
//               </div>

//               <div className="card-body p-4 d-flex flex-column">

//                 <small className="text-primary fw-semibold">
//                   {product.brand}
//                 </small>

//                 <h5 className="fw-semibold mt-1 mb-2">
//                   {product.name}
//                 </h5>

//                 <div className="d-flex align-items-center gap-2 mb-3">

//                   <span className="badge bg-warning text-dark">
//                     <Star size={13} fill="currentColor" />{" "}
//                     {product.rating}
//                   </span>

//                   <small className="text-muted">
//                     ({product.reviews} reviews)
//                   </small>

//                 </div>

//                 <div className="mb-3">

//                   <span className="fs-5 fw-bold text-dark">
//                     ₹{product.price}
//                   </span>

//                   <span className="text-muted text-decoration-line-through ms-2">
//                     ₹{product.originalPrice}
//                   </span>

//                 </div>

//                 <div className="mt-auto">

//                   <div className="d-flex gap-2 mb-2">

//                     <button
//                       onClick={() => addToCart(product)}
//                       className="btn btn-primary flex-grow-1 rounded-pill"
//                     >
//                       <ShoppingCart size={16} className="me-1" />
//                       Add to Cart
//                     </button>

//                     <button
//                       onClick={() => quickView(product)}
//                       className="btn btn-outline-secondary rounded-circle"
//                       style={{
//                         width: "42px",
//                         height: "42px",
//                       }}
//                       title="Quick View"
//                     >
//                       <Eye size={17} />
//                     </button>

//                   </div>

//                              <button
//    onClick={() => onBuyNow(product)}
//   className="btn btn-dark w-100 rounded-pill"
// >
//   <Zap size={16} className="me-1" />
//   Buy Now
// </button>

//                 </div>

//               </div>
//             </div>
//           </div>
//         ))}

//       </div>

//     </section>

//     <Footer />
//     </>
//   );
// };

// export default ToysPage;








import { useSelector } from "react-redux";
import { Heart, ShoppingCart, Eye, Zap, Star } from "lucide-react";

import Header from "../section/Header";
import Footer from "../section/Footer";

const ToysPage = ({
  wishlist,
  setWishlist,
  setCart,
  onBuyNow
}) => {
  const products = useSelector((state) => state.products.products);

  const toggleWishlist = (product) => {
    setWishlist((prev) =>
      prev.some((item) => item.id === product.id)
        ? prev.filter((item) => item.id !== product.id)
        : [...prev, product]
    );
  };

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const quickView = (product) => {
    alert(`Quick View: ${product.name}`);
  };

  const toyProducts = products.filter(
    (product) => product.category === "Toys"
  );

  return (
    <>
      <Header />

      <section className="container py-5">

        {/* Page Heading */}
        <div className="mb-5">
          <h2 className="fw-bold mb-2">Toys</h2>

          <p className="text-muted mb-0">
            Discover fun, creative and exciting toys for kids
          </p>
        </div>

        {/* Product Cards */}
        <div className="row g-4">

          {toyProducts.map((product) => (
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3"
              key={product.id}
            >
              <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">

                {/* Product Image */}
                <div className="position-relative bg-light">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-100"
                    style={{
                      height: "240px",
                      objectFit: "cover",
                    }}
                  />

                  {/* Discount */}
                  <span className="position-absolute top-0 start-0 m-3 badge bg-danger rounded-pill px-3 py-2">
                    {product.discount}% OFF
                  </span>

                  {/* Wishlist */}
                  <button
                    onClick={() => toggleWishlist(product)}
                    className={`position-absolute top-0 end-0 m-3 btn rounded-circle shadow-sm ${
                      wishlist.some((item) => item.id === product.id)
                        ? "btn-danger text-white"
                        : "btn-light"
                    }`}
                    style={{
                      width: "40px",
                      height: "40px",
                    }}
                  >
                    <Heart
                      size={18}
                      fill={
                        wishlist.some((item) => item.id === product.id)
                          ? "currentColor"
                          : "none"
                      }
                    />
                  </button>
                </div>

                {/* Product Details */}
                <div className="card-body p-4 d-flex flex-column">

                  {/* Brand */}
                  <small className="text-primary fw-semibold">
                    {product.brand}
                  </small>

                  {/* Name */}
                  <h5 className="fw-semibold mt-1 mb-2">
                    {product.name}
                  </h5>

                  {/* Rating */}
                  <div className="d-flex align-items-center gap-2 mb-3">

                    <span className="badge bg-warning text-dark">
                      <Star size={13} fill="currentColor" />{" "}
                      {product.rating}
                    </span>

                    <small className="text-muted">
                      ({product.reviews} reviews)
                    </small>

                  </div>

                  {/* Price */}
                  <div className="mb-3">

                    <span className="fs-5 fw-bold text-dark">
                      ₹{product.price}
                    </span>

                    <span className="text-muted text-decoration-line-through ms-2">
                      ₹{product.originalPrice}
                    </span>

                  </div>

                  {/* Buttons */}
                  <div className="mt-auto">

                    <div className="d-flex gap-2 mb-2">

                      {/* Add to Cart */}
                      <button
                        onClick={() => addToCart(product)}
                        className="btn btn-primary flex-grow-1 rounded-pill"
                      >
                        <ShoppingCart size={16} className="me-1" />
                        Add to Cart
                      </button>

                      {/* Quick View */}
                      <button
                        onClick={() => quickView(product)}
                        className="btn btn-outline-secondary rounded-circle"
                        style={{
                          width: "42px",
                          height: "42px",
                        }}
                        title="Quick View"
                      >
                        <Eye size={17} />
                      </button>

                    </div>

                    {/* Buy Now */}
                    <button
                      onClick={() => onBuyNow(product)}
                      className="btn btn-dark w-100 rounded-pill"
                    >
                      <Zap size={16} className="me-1" />
                      Buy Now
                    </button>

                  </div>

                </div>
              </div>
            </div>
          ))}

        </div>

      </section>

      <Footer />
    </>
  );
};

export default ToysPage;