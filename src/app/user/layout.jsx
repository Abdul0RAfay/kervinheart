import LayoutWrapper from "@/component/organism/LayoutWrapper";
import "../css/globals.css";
import "../css/typography.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CustomProvider } from "@/store/customProvider";

export default function DashboardLayout({ children }) {
  return (
    <CustomProvider>
      <LayoutWrapper>
        <div className="layout">{children}</div>
      </LayoutWrapper>
    </CustomProvider>
  );
}
