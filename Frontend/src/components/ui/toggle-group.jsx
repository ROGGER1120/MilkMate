"use client";

import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { VariantProps } from "class-variance-authority";

import { cn } from "./utils";
import { toggleVariants } from "./toggle";

const ToggleGroupContext = React.createContext({
  size: undefined,
  variant: undefined,
});

/**
 * @param {Object} props
 * @param {string} [props.className]
 * @param {string} [props.variant]
 * @param {string} [props.size]
 */
const ToggleGroup = React.forwardRef(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <ToggleGroupPrimitive.Root
        ref={ref}
        className={cn("flex items-center gap-1", className)}
        {...props}
      />
    );
  }
);
ToggleGroup.displayName = "ToggleGroup";

/**
 * @param {Object} props
 * @param {string} [props.className]
 * @param {string} [props.variant]
 * @param {string} [props.size]
 */
const ToggleGroupItem = React.forwardRef(
  ({ className, variant, size, ...props }, ref) => {
    const context = React.useContext(ToggleGroupContext);

    return (
      <ToggleGroupPrimitive.Item
        ref={ref}
        className={cn(
          toggleVariants({
            variant: variant || context.variant || "default",
            size: size || context.size || "default",
          }),
          className
        )}
        {...props}
      />
    );
  }
);
ToggleGroupItem.displayName = "ToggleGroupItem";

export { ToggleGroup, ToggleGroupItem };
