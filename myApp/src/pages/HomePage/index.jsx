import HeroContainer from "../../components/heroContainer";
import PageContainer from "../../components/pageContainer";
import PageHeader from "../../components/pageHeader";
import Products from "../../components/products";

const HomePage = () => {
  return (
    <PageContainer>
      <HeroContainer />
      <Products />
    </PageContainer>
  );
};
export default HomePage;
