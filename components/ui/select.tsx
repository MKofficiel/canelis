import * as React from "react";

import { cn } from "@/lib/utils";

function Select({ className, children, ...props }: React.ComponentProps<"select">) {
  return (
    <div data-slot="select-wrap" className="select-wrap">
      <select
        data-slot="select"
        className={cn("select", className)}
        {...props}
      >
        {children}
      </select>
      <svg
        className="select-chevron"
        aria-hidden
        viewBox="0 0 20 20"
        width="14"
        height="14"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 8l4 4 4-4" />
      </svg>
    </div>
  );
}

export { Select };
