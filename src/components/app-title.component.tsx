import { cn } from "@youray-hosiyomi/asterism-ui-react";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

const defaultTitle = process.env.NEXT_PUBLIC_TITLE ?? "YOURAY-HOSIYOMI-APP";

interface AppTitleProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const AppTitle: FC<AppTitleProps> = ({ children, className, title, ...props }) => {
  return (
    <>
      <h1 {...props} className={cn(className, "select-none")} translate="no" title={title ?? defaultTitle}>
        {children ?? title ?? defaultTitle}
      </h1>
    </>
  );
};

export default AppTitle;
