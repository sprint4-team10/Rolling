import ReactQuill from 'react-quill';
import styled from 'styled-components';

export const Quill = styled(ReactQuill)`
  width: 72rem;
  height: 26rem;

  @media screen and (max-width: 1199px) {
    width: 100%;
  }
`;
