import classNames from "classnames";
import React from "react";
import styles from "./style.scss";

interface I${COMPONENT_NAME}Props {
    className?: string;
}

export function ${COMPONENT_NAME}({ className }: I${COMPONENT_NAME}Props) {
  return (
    <div className={classNames(className)}></div>
  );
}

