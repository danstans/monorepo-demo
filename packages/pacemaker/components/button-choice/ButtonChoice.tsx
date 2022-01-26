import { ButtonChoiceProps } from "./ButtonChoice.types";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
import { styled } from "@mui/material/styles";

const TabsStyled = styled(TabsUnstyled)`
  background: #f3f4f5;
  border: 2px solid #d6d7d9;
  border-radius: 50px;
  display: inline-block;
  overflow: hidden;
  height: 34px;
  cursor: pointer;
`;

const TabListStyled = styled(TabsListUnstyled)`
  height: 100%;
`;

const TabStyled = styled(TabUnstyled)`
  height: 100%;
  border-radius: 50px;
  border: 0;
  padding: 8px 16px;
  cursor: pointer;
  font-weight: 700;
  &.${tabUnstyledClasses.selected} {
    background-color: #3c3cc7;
    color: white;
  }
`;

const ButtonChoice = ({ value, handleChange }: ButtonChoiceProps): JSX.Element => {
  return (
    <TabsStyled value={value} onChange={(e, val) => handleChange(val as number)} defaultValue={0}>
      <TabListStyled>
        <TabStyled>One</TabStyled>
        <TabStyled>Two</TabStyled>
      </TabListStyled>
    </TabsStyled>
  );
};

export default ButtonChoice;
