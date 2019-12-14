import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const недооценивать: PerfectVerb = {
  name: Word('недооценивать', 6),
  singular1stPerson: Word('недооцениваю', 6),
  singular2ndPerson: Word('недооцениваешь', 6),
  singular3rdPerson: Word('недооценивает', 6),
  plural1stPerson: Word('недооцениваем', 6),
  plural2ndPerson: Word('недооцениваете', 6),
  plural3rdPerson: Word('недооценивают', 6),
  masculinePast: Word('недооценивал', 6),
  femininePast: Word('недооценивала', 6),
  neuterPast: Word('недооценивало', 6),
  pluralPast: Word('недооценивали', 6),
  imperativeInformal: Word('недооценивай', 6),
  imperativeFormal: Word('недооценивайте', 6),
  imperfect: [],
};

perfectVerbs.set(недооценивать.name.text, недооценивать);

export { недооценивать };