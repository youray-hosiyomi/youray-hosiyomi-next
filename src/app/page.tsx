"use client";

import AppTitle from "@/components/app-title.component";
import { UILayout, UIPage } from "@youray-hosiyomi/asterism-ui-react";
import Link from "next/link";

export default function IndexPage() {
  return (
    <UILayout
      header={{
        leftItems: <AppTitle title="YOURAY-HOSIYOMI" />,
        rightItems: (
          <>
            <Link href={"/ws"}>
              <button className="btn btn-sm btn-outline">ワークスペース</button>
            </Link>
          </>
        ),
      }}
    >
      <UIPage>
        <div></div>
      </UIPage>
    </UILayout>
  );
}
