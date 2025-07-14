import MainLayout from "../layout/MainLayout";
import HeroSection from "../section/HeroSection";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <MainLayout>
      <HeroSection />
      {/* <CategoryGrid />
      <FeaturedProducts />
      <Testimonials />
      <NewsletterForm />
      <Footer /> */}
    </MainLayout>
  );
};

export default HomePage;
