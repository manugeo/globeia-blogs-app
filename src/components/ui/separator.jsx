import { cn } from "@/lib/utils";

const Separator = ({ className = "" }) => {
  return (
    <div className={cn("mt-6 border-t-[1px] border-slate-300", className)}></div>
  );
};

export default Separator;