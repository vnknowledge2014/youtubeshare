import { Content } from "antd/lib/layout/layout";
import React from "react";
import { ErrorBanner, PageSkeleton } from "../../lib/components";

interface Props {
  message: string;
}

export const NotFound = ({message}: Props) => {
  return (
    <Content className="user">
        <ErrorBanner description={message} />
        <PageSkeleton />
      </Content>
  );
};
