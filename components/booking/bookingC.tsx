import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function BookingComponent() {
  const router = useRouter();

  const handleNavigate = (path: string) => {
    router.push(path);
  };
  return (
    <div className="booking">
      <div className="booking-wrapper">
        <h1 className="booking-h1">Записаться онлайн</h1>
        <div className="bnavigate">
          <div className="right">
            <div
              className={
                router.asPath === "/rent"
                  ? "rent-contain active"
                  : "rent-contain"
              }
            >
              <img
                src="https://next-page-transitions-framer-motion.sethcorker.com/assets/task.png"
                alt="Picture of the author"
                className="rent-img"
              />
            </div>
            <Link href="/rent" passHref>
              <motion.h2 onClick={() => handleNavigate("/rent")}>
                Забронировать
              </motion.h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
