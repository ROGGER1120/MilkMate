"use client";

import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";

/**
 * @param {React.ComponentProps<typeof AspectRatioPrimitive.Root>} props
 */
function AspectRatio(props) {
  return <AspectRatioPrimitive.Root data-slot="aspect-ratio" {...props} />;
}

export { AspectRatio };