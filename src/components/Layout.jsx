import Sidebar from "./Sidebar";
import Header from "./Header";
import SearchInput from './SearchInput'
function Layout({ children }) {
  return (
    <div className="layout relative flex items-center">
      <Header title="Jaegar Resto" date="Tuesday, 2 Feb 2021">
        <SearchInput placeholder={"Search for food, coffe, etc.."} />
      </Header>
      <Sidebar />
      <div className="w-full h-[100vh] bg-[#252836] p-[1.2rem_2.5rem_1.2rem_6.5rem]">
        {children}
      </div>
    </div>
  );
}

export default Layout;
