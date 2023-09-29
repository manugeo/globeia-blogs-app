import { cn } from "@/lib/utils";

const Separator = ({ className = "" }) => {
  return (
    <div className={cn("border-t-[1px] border-slate-300", className)}></div>
  );
};

export default Separator;