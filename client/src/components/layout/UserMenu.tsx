import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function UserMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex size-8 cursor-pointer items-center justify-center rounded-full bg-slate-700 text-[11px] font-bold text-slate-400">
        GL
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem variant="destructive">Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserMenu;
