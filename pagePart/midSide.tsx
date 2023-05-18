import ExperianceComponent from "@/components/experiance/experianceC";
import LocationComponent from "@/components/location/locationC";
import PortfolioComponent from "@/components/portfolio/portfolioC";
import PromotionComponent from "@/components/promotion/promotionC";

export default function MidSide() {
  return (
    <>
      <div className="mid-side">
        <div className="mid-side-wrapper">
          <ExperianceComponent />
          {/* <PromotionComponent /> */}
          <PortfolioComponent />
          <LocationComponent />
        </div>
      </div>
    </>
  );
}
