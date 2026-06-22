import { Link } from "react-router-dom";

import LogoIcon from "@/components/common/LogoIcon";
import { routes } from "@/routes";
import UserMenu from "@/components/layout/UserMenu";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-10 flex h-[52px] w-full items-center gap-3 border-b border-border bg-card px-6">
      <Link to={routes.home.path()} className="flex items-center gap-3">
        <div className="flex size-7 items-center justify-center rounded-md bg-primary">
          <LogoIcon />
        </div>
        <span className="text-[15px] font-bold tracking-tight text-foreground">StockWise</span>
      </Link>

      <div className="flex-1" />

      <UserMenu />
    </nav>
  );
};

export default Navbar;
