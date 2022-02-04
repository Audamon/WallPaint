import TextField from '@material-ui/core/TextField';
import InputMask from 'react-input-mask';

export default function Input({
  mask = '',
  value = '',
  onChange = () => 0,
  ...props
}) {
  return (
    <InputMask mask={mask} value={value} onChange={onChange}>
      {() => <TextField {...props} onChange={onChange} value={value} />}
    </InputMask>
  );
}
