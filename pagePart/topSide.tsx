import BookingComponent from "@/components/booking/bookingC";
import DividerComponent from "@/components/divider/dividerC";
import HeaderComponent from "@/components/header/headerC";
import HeaderSlogan from "@/components/header/headerSlogan";
import HeaderTitle from "@/components/header/headerTitle";
import PromotionComponent from "@/components/promotion/promotionC";
import ServiceComponent from "@/components/service/serviceC";

export default function TopSide() {
  return (
    <>
      <div className="topside">
        <div className="topside-wrapper">
          <div className="header-container">
            <HeaderComponent />
            <HeaderTitle />
            <HeaderSlogan />
            {/* <BookingComponent /> */}
            <PromotionComponent />
            <DividerComponent />
            <ServiceComponent />
            <DividerComponent />
          </div>
        </div>
      </div>
    </>
  );
}
