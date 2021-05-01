import { FC } from "react";
import Header from "../Header";

const Layout: FC = ({ children }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
      <Header></Header>
      
      {children}
    </div>
  )
}

export default Layout