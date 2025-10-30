import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { ChevronRight, MoreHorizontal } from "lucide-react";

import { cn } from "./utils";

/**
 * @param {React.ComponentProps<"nav">} props
 */
function Breadcrumb(props) {
  return <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />;
}

/**
 * @param {Object} props
 * @param {string} [props.className]
 */
function BreadcrumbList({ className, ...props }) {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={cn(
        "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
        className,
      )}
      {...props}
    />
  );
}

/**
 * @param {Object} props
 * @param {string} [props.className]
 */
function BreadcrumbItem({ className, ...props }) {
  return (
    <li
      data-slot="breadcrumb-item"
      className={cn("inline-flex items-center gap-1.5", className)}
      {...props}
    />
  );
}

/**
 * @param {Object} props
 * @param {string} [props.className]
 * @param {boolean} [props.asChild]
 */
function BreadcrumbLink({ asChild, className, ...props }) {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      data-slot="breadcrumb-link"
      className={cn("hover:text-foreground transition-colors", className)}
      {...props}
    />
  );
}

/**
 * @param {Object} props
 * @param {string} [props.className]
 */
function BreadcrumbSeparator({ className, ...props }) {
  return (
    <li
      data-slot="breadcrumb-separator"
      className={cn("text-muted-foreground", className)}
      {...props}
    >
      <ChevronRight className="h-4 w-4" />
    </li>
  );
}

/**
 * @param {Object} props
 * @param {string} [props.className]
 */
function BreadcrumbEllipsis({ className, ...props }) {
  return (
    <li
      data-slot="breadcrumb-ellipsis"
      className={cn("flex h-9 w-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontal className="h-4 w-4" />
      <span className="sr-only">More pages</span>
    </li>
  );
}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};