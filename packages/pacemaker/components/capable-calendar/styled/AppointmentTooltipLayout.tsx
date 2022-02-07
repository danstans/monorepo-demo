import { AppointmentTooltip } from "@devexpress/dx-react-scheduler-material-ui";
import { styled } from "@mui/material/styles";

const StyledAppointmentTooltipLayout = styled(AppointmentTooltip.Layout)(() => ({}));

export const TooltipLayoutComponent = (props: any) => {
  console.log(props);
  return (
    <StyledAppointmentTooltipLayout
      {...props}
      className="layout-shadow"
    ></StyledAppointmentTooltipLayout>
  );
};
