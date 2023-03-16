import React from "react";

import * as S from "./style";

type TabNavigationProps = {
  title: string;
  onClick?: any;
  isActive?:boolean ;
};

export const TabNavigation = ({
  title,
  onClick,
  isActive,
}: TabNavigationProps) => {
  return (
    <S.TabWrapper>
      <S.Tab onClick={onClick} isActive={isActive}>
        {title}
      </S.Tab>
    </S.TabWrapper>
  );
};
