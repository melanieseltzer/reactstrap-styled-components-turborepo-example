import styled from 'styled-components';
import { Container as ReactStrapContainer } from 'reactstrap';

console.log('------- REACTSTRAP: -------');
console.log(ReactStrapContainer);

export const Container = styled(ReactStrapContainer)`
  border: 1px solid red;
`;
