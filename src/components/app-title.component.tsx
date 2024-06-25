import { cn } from "@youray-hosiyomi/asterism-ui-react";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

interface AppTitleProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const AppTitle: FC<AppTitleProps> = ({
  children = process.env.NEXT_PUBLIC_TITLE ?? "YOURAY-HOSIYOMI-APP",
  className,
  ...props
}) => {
  return (
    <>
      <h1 {...props} className={cn(className, "select-none")} translate="no">
        {children}
      </h1>
    </>
  );
};

export default AppTitle;
