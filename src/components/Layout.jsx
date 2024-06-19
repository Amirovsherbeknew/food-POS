import Sidebar from "./Sidebar";
import LayoutContent from "./LayoutContent";

function Layout({ children }) {
  return (
    <div className="layout relative flex items-center">
      <Sidebar />
      <LayoutContent>{children}</LayoutContent>
    </div>
  );
}

export default Layout;
