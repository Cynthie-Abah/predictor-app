import { cn } from "../lib/utils";

export default function Label({children, className, ...props}) {
  return (
    <label className={cn("text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 py-2 inline-block tracking-wide [font-family:'Inter',Helvetica] font-normal text-black text-[13px]", className)} {...props}>{children}</label>
  )
}
