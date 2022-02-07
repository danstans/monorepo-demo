import { ViewSwitcher } from "@devexpress/dx-react-scheduler-material-ui";
import { styled } from "@mui/material/styles";

const StyledViewSwitcherComponent = styled(ViewSwitcher.Switcher)(() => ({
  [`&.capable-viewSwitcher`]: {
    textTransform: "capitalize",
  },
}));

export const ViewSwitcherComponent = (props: any) => {
  return <StyledViewSwitcherComponent {...props} className={"capable-viewSwitcher"} />;
};
