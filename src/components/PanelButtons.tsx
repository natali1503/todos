import { Box } from "@mui/material";
import { CustomButton } from "./elements/CustomButton";

export function PanelButtons() {
  return (
    <Box display={"flex"} flexDirection={"row"} gap={"10px"}>
      <CustomButton text={"All"} cb={() => {}} />
      <CustomButton text={"Active"} cb={() => {}} />
      <CustomButton text={"Completed"} cb={() => {}} />
    </Box>
  );
}
