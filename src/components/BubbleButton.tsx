import { ComponentProps, ReactNode } from "react";

export interface BubbleButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
}

export function BubbleButton(props: BubbleButtonProps) {
  return (
    <button
      className="p-2 text-zinc-900 text-sm flex items-center gap-1.5 font-medium leading-none hover:bg-zinc-100 data-[active=true]:text-violet-600"
      {...props}
    />
  );
}
