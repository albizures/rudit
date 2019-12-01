import * as verbs from './verbs';
import keys from './keys';
import { Verb } from '../utils/Verb';

const array: Verb[] = keys.map((name) => {
  return verbs[name];
});

export default array;
