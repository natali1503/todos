import Button from '@mui/material/Button';
interface ICustomButtonProps {
  text: string;
  cb: () => void;
  status?: boolean;
}

export const CustomButton: React.FC<ICustomButtonProps> = ({ text, cb, status = false }) => {
  return (
    <Button
      onClick={cb}
      variant={status ? 'outlined' : 'text'}
      sx={{
        textTransform: 'none',
        padding: '5px',
        minWidth: 0,
        minHeight: 0,
        height: '25px',
        color: 'rgba(0, 0, 0, 0.87)',
        fontWeight: 300,
        '&.MuiButton-outlined': { border: '1px solid #c4b6b5' },
      }}
    >
      {text}
    </Button>
  );
};
