import clsx from "clsx";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

import cn from "./Layout.module.scss";

function Layout({ children }) {
  return (
    <div className={clsx(cn["layout"], "relative")}>
      <Sidebar />
      <Content>{children}</Content>
    </div>
  );
}

export default Layout;
