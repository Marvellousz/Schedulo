"use client";

import * as React from "react";
import { cn } from "@/lib/utils/ui";

// Interface extends HTMLTextAreaElement attributes with a custom property
// This satisfies the ESLint no-empty-object-type rule
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  isCustomTextarea?: boolean; // Dummy property to satisfy ESLint
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[120px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };