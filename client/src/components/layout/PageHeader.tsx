import { PanelLeftIcon } from "lucide-react";

interface PageHeaderProps {
  title: string;
  onToggleSidebar: () => void;
}

const PageHeader = ({ title, onToggleSidebar }: PageHeaderProps) => {
  return (
    <div className="flex h-[74px] shrink-0 items-center gap-3 px-4">
      <button
        onClick={onToggleSidebar}
        className="flex size-7 cursor-pointer items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground"
      >
        <PanelLeftIcon size={16} />
      </button>
      <div className="h-4 w-px bg-border" />
      <span className="text-[18px] font-bold tracking-tight text-foreground">{title}</span>
    </div>
  );
};

export default PageHeader;
