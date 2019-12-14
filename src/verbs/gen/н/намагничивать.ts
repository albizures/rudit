import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const намагничивать: PerfectVerb = {
  name: Word('намагничивать', 6),
  singular1stPerson: Word('намагничиваю', 6),
  singular2ndPerson: Word('намагничиваешь', 6),
  singular3rdPerson: Word('намагничивает', 6),
  plural1stPerson: Word('намагничиваем', 6),
  plural2ndPerson: Word('намагничиваете', 6),
  plural3rdPerson: Word('намагничивают', 6),
  masculinePast: Word('намагничивал', 6),
  femininePast: Word('намагничивала', 6),
  neuterPast: Word('намагничивало', 6),
  pluralPast: Word('намагничивали', 6),
  imperativeInformal: Word('намагничивай', 6),
  imperativeFormal: Word('намагничивайте', 6),
  imperfect: [],
};

perfectVerbs.set(намагничивать.name.text, намагничивать);

export { намагничивать };