import * as React from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

const buttonVariants = cva(
  "group inline-flex items-center justify-center rounded whitespace-nowrap font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brown focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.99] duration-500 hover:scale-[1.02]",
  {
    variants: {
      variant: {
        default: "bg-brown text-beige hover:bg-hovercolor",
        destructive: "bg-red-500 text-beige hover:bg-red-600",
        outline: "border border-brown bg-beige text-brown hover:bg-hovercolor",
        secondary: "bg-hovercolor text-brown hover:bg-beige",
        ghost: "bg-transparent hover:bg-hovercolor text-brown",
        link: "text-brown underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 px-3",
        lg: "h-12 px-8 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  hideIcon?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      rightIcon,
      leftIcon,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {leftIcon && (
          <span className="w-0 mr-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:mr-1 group-hover:opacity-100">
            {leftIcon}
          </span>
        )}
        <Slottable>{props.children}</Slottable>
        {rightIcon && (
          <span className="w-0 ml-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:ml-2 group-hover:opacity-100">
            {rightIcon}
          </span>
        )}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
