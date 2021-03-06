import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

export default function SubTitle({ children }) {
  return <StyledTitle variant="h6"> {children}</StyledTitle>;
}

const StyledTitle = styled(Typography)`
  margin-bottom: 10px !important;
  font-family: 'Roboto', sans-serif;
  word-wrap: break-word;
  text-align: center;
`;
