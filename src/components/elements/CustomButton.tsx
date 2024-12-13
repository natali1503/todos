import Button from "@mui/material/Button";
interface ICustomButton {
  text: string;
  cb: () => void;
}

export function CustomButton(props: ICustomButton) {
  return <Button onClick={props.cb}>{props.text}</Button>;
}
