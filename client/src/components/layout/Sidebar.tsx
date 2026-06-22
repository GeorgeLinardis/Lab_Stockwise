import { NavLink } from "react-router-dom";
import { LayoutDashboardIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { routes } from "@/routes";

const NAV_ITEMS = [{ route: routes.home, icon: LayoutDashboardIcon }] as const;

interface SidebarProps {
  collapsed: boolean;
  mobileOpen: boolean;
  onMobileClose: () => void;
}

const Sidebar = ({ collapsed, mobileOpen, onMobileClose }: SidebarProps) => {
  return (
    <>
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 md:hidden" onClick={onMobileClose} />
      )}

      <aside
        className={cn(
          "relative flex h-full shrink-0 flex-col items-center bg-sidebar py-4 transition-all duration-200",
          collapsed ? "md:w-[60px]" : "md:w-[200px]",
          "fixed inset-y-0 left-0 z-50 w-[200px] md:relative md:translate-x-0",
          mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        <nav className="flex w-full flex-1 flex-col gap-1 px-2">
          {NAV_ITEMS.map(({ route, icon: Icon }) => (
            <NavLink key={route.path()} to={route.path()} end onClick={onMobileClose}>
              {({ isActive }) => (
                <div
                  className={cn(
                    "relative flex h-[42px] items-center gap-3 px-3 transition-colors",
                    collapsed ? "md:justify-center md:px-0" : "",
                    isActive ? "text-emerald-400" : "text-slate-500 hover:text-slate-300"
                  )}
                >
                  <Icon size={17} className="shrink-0" />
                  {(!collapsed || mobileOpen) && (
                    <span className="text-sm font-medium">{route.label}</span>
                  )}
                </div>
              )}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
