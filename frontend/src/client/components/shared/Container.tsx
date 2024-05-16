import React, { ReactNode } from "react";

type ContainerTypes = {
  children: ReactNode;
  styles?: string;
};

const Container = ({ children, styles = "" }: ContainerTypes) => {
  return <div className={`Container ${styles}`}>{children}</div>;
};

export default Container;
