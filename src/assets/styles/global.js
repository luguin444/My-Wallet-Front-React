import { createGlobalStyle } from 'styled-components';
import reset from './reset.js';
import normalize from './normalize.js';
import main from './main.js';

export default createGlobalStyle`
  ${reset}
  ${normalize}
  ${main}
`;
