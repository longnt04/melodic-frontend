import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Cuộn về đầu trang
  }, [pathname]); // Chạy lại mỗi khi đường dẫn thay đổi

  return null;
};

export default ScrollToTop;
