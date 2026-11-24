"use client";
import Header from "@/component/molecule/Header";
import Sidebar from "@/component/molecule/Sidebar/page";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LuX } from "react-icons/lu";
import classes from "./LayoutWrapper.module.css";

const LayoutWrapper = ({ children }) => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // close the mobile drawer whenever the route changes
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <div className={classes.shell}>
      <aside className={`${classes.sidebar} ${mobileOpen ? classes.sidebarOpen : ""}`}>
        <div className={classes.brandRow}>
          <Link href="/" className={classes.brand}>
            <span className={classes.logo}>
              <Image fill sizes="36px" src="/images/app-images/Logo.png" alt="" />
            </span>
            <span className={classes.brandName}>Kervin Heart</span>
          </Link>
          <button
            type="button"
            className={classes.closeBtn}
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <LuX />
          </button>
        </div>
        <Sidebar onNavigate={() => setMobileOpen(false)} />
      </aside>

      {mobileOpen && (
        <div className={classes.backdrop} onClick={() => setMobileOpen(false)} aria-hidden="true" />
      )}

      <div className={classes.main}>
        <Header onMenuClick={() => setMobileOpen(true)} />
        <main className={classes.contentBody}>{children}</main>
      </div>
    </div>
  );
};

export default LayoutWrapper;
