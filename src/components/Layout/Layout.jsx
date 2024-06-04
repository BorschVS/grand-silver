import Header from "../Header";
import styles from "./Layout.module.scss";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import Footer from "../Footer";

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <Suspense
        fallback={
          <div className={styles.iconContainer}>
            <ClipLoader color="#212121" size={36} />
          </div>
        }
      >
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
};

export default Layout;
