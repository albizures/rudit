import * as pronouns from './pronouns';
import keys from './keys';
import { Pronoun } from '../utils/Pronoun';

const array: Pronoun[] = keys.map((name) => {
  return pronouns[name];
});

export default array;
