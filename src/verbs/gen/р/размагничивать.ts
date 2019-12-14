import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const размагничивать: PerfectVerb = {
  name: Word('размагничивать', 7),
  singular1stPerson: Word('размагничиваю', 7),
  singular2ndPerson: Word('размагничиваешь', 7),
  singular3rdPerson: Word('размагничивает', 7),
  plural1stPerson: Word('размагничиваем', 7),
  plural2ndPerson: Word('размагничиваете', 7),
  plural3rdPerson: Word('размагничивают', 7),
  masculinePast: Word('размагничивал', 7),
  femininePast: Word('размагничивала', 7),
  neuterPast: Word('размагничивало', 7),
  pluralPast: Word('размагничивали', 7),
  imperativeInformal: Word('размагничивай', 7),
  imperativeFormal: Word('размагничивайте', 7),
  imperfect: [],
};

perfectVerbs.set(размагничивать.name.text, размагничивать);

export { размагничивать };