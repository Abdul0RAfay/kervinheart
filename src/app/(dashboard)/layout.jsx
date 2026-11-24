import LayoutWrapper from "@/component/organism/LayoutWrapper";

export default function DashboardLayout({ children }) {
  return (
    <LayoutWrapper>
      <div className="layout">{children}</div>
    </LayoutWrapper>
  );
}
