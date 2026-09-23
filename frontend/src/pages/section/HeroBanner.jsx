import Carousel from "../../ui/Carousel";

const HeroBanner = () => {

  const banners = [
    {
      image:
        "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=1400",
      title: "Summer Sale",
      description: "Up to 50% Off on Toys",
      buttonText: "Shop Now",
    },
    {
      image:
        "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=1400",
      title: "Fun & Play",
      description: "Discover Amazing Toys",
      buttonText: "Shop Now",
    },
    {
      image:
        "https://images.unsplash.com/photo-1601524909162-ae8725290836?q=80&w=1400&auto=format&fit=crop",
      title: "Kids Accessories",
      description: "New Collection Available",
      buttonText: "Explore Now",
    },
    {
      image:
        "https://images.unsplash.com/photo-1601972602237-8c79241e468b?q=80&w=1400&auto=format&fit=crop",
      title: "Special Offers",
      description: "Best Products at Best Prices",
      buttonText: "Shop Now",
    },
  ];

  return (
    <section className="container-fluid p-0">
      <Carousel items={banners} />
    </section>
  );
};

export default HeroBanner;