import { cn } from "@/utils/cn";
import { Button, ButtonProps } from "./Button";

//======================================Shiny Background
export const EyeCatchingButton = ({ ...props }: ButtonProps) => {
  return (
    <Button
      {...props}
      className={cn(
        "animate-bg-shine border-[1px] rounded-lg shadow bg-[length:200%_100%] tracking-wide",
        // stronger mid-stop in light mode so the bg-shine animation is visible
        // stronger mid-stop in light mode so the bg-shine animation is visible
        "dark:bg-[linear-gradient(110deg,#212121,45%,#ffffff,55%,#212121)] bg-[linear-gradient(110deg,#ffffff,45%,#000000,55%,#ffffff)] dark:text-slate-300 text-blackish border-brown",
        props.className,
      )}
    />
  );
};
