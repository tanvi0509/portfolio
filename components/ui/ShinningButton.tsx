import { cn } from "@/utils/cn";
import { Button, ButtonProps } from "./Button";

//======================================Shiny Background
export const EyeCatchingButton = ({ ...props }: ButtonProps) => {
  return (
    <Button
      {...props}
      className={cn(
        "animate-bg-shine border-[1px] rounded-lg shadow bg-[length:200%_100%] tracking-wide",
        // Pink shine in both light and dark mode
        "dark:bg-[linear-gradient(110deg,#212121,45%,#EC4899,55%,#212121)] bg-[linear-gradient(110deg,#ffffff,45%,#EC4899,55%,#ffffff)] dark:text-slate-300 text-blackish border-brown",
        props.className,
      )}
    />
  );
};
