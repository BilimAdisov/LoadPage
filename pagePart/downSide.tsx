import AboutComponent from "@/components/about/aboutC";
import FooterComponent from "@/components/footer/footerC";

export default function DownSide() {
  return (
    <>
      <div className="downside">
        <div className="downside-wrapper">
          <AboutComponent />
          <FooterComponent />
        </div>
      </div>
    </>
  );
}
