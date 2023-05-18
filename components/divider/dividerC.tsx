import { useInView } from "react-intersection-observer";

export default function DividerComponent() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return (
    <div className={!inView ? "divider" : "divider active"} ref={ref}>
      <div className="d-left"></div>
      <div className="d-mid"></div>
      <div className="d-right"></div>
    </div>
  );
}
